const { spawnSync } = require('child_process');
const fs = require('fs');
const os = require('os');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const BIN = path.join(ROOT, 'bin', 'install.js');
const SKILL_SRC = path.join(ROOT, 'skills', 'seo-geo-optimizer');
const PKG = require('../package.json');

const temps = [];
const tmp = (prefix = 'sgo-') => {
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), prefix));
  temps.push(dir);
  return dir;
};
afterAll(() => temps.forEach((d) => fs.rmSync(d, { recursive: true, force: true })));

/** Run the CLI in `cwd` with a throwaway home directory. */
function run(args, cwd, home = tmp('sgo-home-')) {
  const res = spawnSync(process.execPath, [BIN, ...args], {
    cwd,
    encoding: 'utf8',
    env: { ...process.env, HOME: home, USERPROFILE: home, NO_COLOR: '1' },
  });
  return { code: res.status, out: res.stdout + res.stderr, home };
}

const listFiles = (dir) => (fs.existsSync(dir)
  ? fs.readdirSync(dir, { withFileTypes: true }).flatMap((e) => (e.isDirectory()
    ? listFiles(path.join(dir, e.name)).map((f) => `${e.name}/${f}`)
    : [e.name])).sort()
  : []);
const write = (file, text) => { fs.mkdirSync(path.dirname(file), { recursive: true }); fs.writeFileSync(file, text); };
const skillAt = (root, base) => path.join(root, base, 'seo-geo-optimizer');
const expectFullCopy = (dir) => expect(listFiles(dir)).toEqual(listFiles(SKILL_SRC));

describe('CLI basics', () => {
  test('--help lists the options and the no-shared-files promise', () => {
    const { code, out } = run(['--help'], tmp());
    expect(code).toBe(0);
    for (const s of ['USAGE', '--claude', '--global', '--uninstall', '--dry-run', 'never edits CLAUDE.md']) expect(out).toContain(s);
  });

  test('--version prints the package version', () => {
    const { code, out } = run(['--version'], tmp());
    expect(code).toBe(0);
    expect(out.trim()).toBe(PKG.version);
  });

  test('unknown options fail clearly', () => {
    const { code, out } = run(['--cursr'], tmp());
    expect(code).toBe(1);
    expect(out).toContain('Unknown option');
  });
});

describe('project install', () => {
  test('default install writes only .agents/skills/seo-geo-optimizer', () => {
    const cwd = tmp();
    const { code, out } = run([], cwd);
    expect(code).toBe(0);
    expectFullCopy(skillAt(cwd, '.agents/skills'));
    expect(fs.readdirSync(cwd)).toEqual(['.agents']);
    expect(out).toContain('Add --claude');
    expect(out).toContain('run seo-geo-optimizer');
  });

  test('installed files are byte-identical to the packaged skill', () => {
    const cwd = tmp();
    run([], cwd);
    for (const f of listFiles(SKILL_SRC)) {
      expect(fs.readFileSync(path.join(skillAt(cwd, '.agents/skills'), f))).toEqual(fs.readFileSync(path.join(SKILL_SRC, f)));
    }
  });

  test('detects Claude Code from CLAUDE.md and leaves CLAUDE.md untouched', () => {
    const cwd = tmp();
    write(path.join(cwd, 'CLAUDE.md'), '# my project rules\n');
    const { code, out } = run([], cwd);
    expect(code).toBe(0);
    expect(out).toContain('Detected: Claude Code');
    expectFullCopy(skillAt(cwd, '.claude/skills'));
    expectFullCopy(skillAt(cwd, '.agents/skills'));
    expect(fs.readFileSync(path.join(cwd, 'CLAUDE.md'), 'utf8')).toBe('# my project rules\n');
  });

  test('--all never modifies shared instruction files', () => {
    const cwd = tmp();
    const shared = ['CLAUDE.md', 'AGENTS.md', 'GEMINI.md', '.github/copilot-instructions.md', '.cursorrules', '.windsurfrules', 'replit.md'];
    shared.forEach((f) => write(path.join(cwd, f), `original ${f}\n`));
    const { code } = run(['--all'], cwd);
    expect(code).toBe(0);
    shared.forEach((f) => expect(fs.readFileSync(path.join(cwd, f), 'utf8')).toBe(`original ${f}\n`));
    for (const base of ['.agents/skills', '.claude/skills', '.cline/skills', '.kiro/skills', '.trae/skills']) {
      expectFullCopy(skillAt(cwd, base));
    }
  });

  test('tool flags map to the right folders', () => {
    const cwd = tmp();
    run(['--cursor', '--kiro'], cwd);
    expectFullCopy(skillAt(cwd, '.agents/skills'));
    expectFullCopy(skillAt(cwd, '.kiro/skills'));
    expect(fs.existsSync(path.join(cwd, '.cursor'))).toBe(false);
    expect(fs.existsSync(path.join(cwd, '.claude'))).toBe(false);
  });

  test('--dry-run writes nothing', () => {
    const cwd = tmp();
    write(path.join(cwd, 'CLAUDE.md'), 'x');
    const { code, out } = run(['--all', '--dry-run'], cwd);
    expect(code).toBe(0);
    expect(out).toContain('Would install');
    expect(fs.readdirSync(cwd)).toEqual(['CLAUDE.md']);
  });

  test('re-running updates in place without duplicates or backups', () => {
    const cwd = tmp();
    run([], cwd);
    write(path.join(skillAt(cwd, '.agents/skills'), 'references', 'stale-extra.md'), 'old');
    const { code, out } = run([], cwd);
    expect(code).toBe(0);
    expect(out).toContain('Updated');
    expect(fs.readdirSync(path.join(cwd, '.agents/skills'))).toEqual(['seo-geo-optimizer']);
    expectFullCopy(skillAt(cwd, '.agents/skills'));
  });

  test('refuses to overwrite a different skill with the same folder name unless --force', () => {
    const cwd = tmp();
    const foreign = path.join(skillAt(cwd, '.agents/skills'), 'SKILL.md');
    write(foreign, '---\nname: someone-elses-skill\ndescription: x\n---\nbody\n');
    let res = run([], cwd);
    expect(res.out).toContain('already holds a different skill');
    expect(fs.readFileSync(foreign, 'utf8')).toContain('someone-elses-skill');
    res = run(['--force'], cwd);
    expect(res.code).toBe(0);
    expectFullCopy(skillAt(cwd, '.agents/skills'));
  });
});

describe('uninstall and legacy clean-up', () => {
  test('--uninstall removes only this skill', () => {
    const cwd = tmp();
    run(['--all'], cwd);
    const foreign = path.join(cwd, '.agents/skills/other-skill/SKILL.md');
    write(foreign, '---\nname: other-skill\ndescription: x\n---\n');
    const { code, out } = run(['--uninstall'], cwd);
    expect(code).toBe(0);
    expect(out).toContain('Removed');
    for (const base of ['.agents/skills', '.claude/skills', '.cline/skills', '.kiro/skills', '.trae/skills']) {
      expect(fs.existsSync(skillAt(cwd, base))).toBe(false);
    }
    expect(fs.existsSync(foreign)).toBe(true);
  });

  test('warns about 1.x leftovers and removes only files it owns', () => {
    const cwd = tmp();
    const legacyBody = '# SEO & GEO OPTIMIZER — Universal AI Skill\n...';
    write(path.join(cwd, '.cursor/rules/seo-geo-optimizer.mdc'), legacyBody);
    write(path.join(cwd, 'CLAUDE.md'), legacyBody);
    write(path.join(cwd, 'CLAUDE.md.backup'), '# my rules\n');
    let res = run([], cwd);
    expect(res.out).toContain('Older 1.x install found');
    expect(res.out).toContain('CLAUDE.md.backup');
    res = run(['--remove-legacy'], cwd);
    expect(res.code).toBe(0);
    expect(fs.existsSync(path.join(cwd, '.cursor/rules/seo-geo-optimizer.mdc'))).toBe(false);
    expect(fs.readFileSync(path.join(cwd, 'CLAUDE.md'), 'utf8')).toBe(legacyBody);
  });
});

describe('global install', () => {
  test('--global installs into the home folder, not the project', () => {
    const cwd = tmp();
    const { code, home } = run(['--global'], cwd);
    expect(code).toBe(0);
    expectFullCopy(skillAt(home, '.agents/skills'));
    expectFullCopy(skillAt(home, '.claude/skills'));
    expect(fs.readdirSync(cwd)).toEqual([]);
  });

  test('--global --cursor --antigravity use their own user folders', () => {
    const cwd = tmp();
    const { home } = run(['--global', '--cursor', '--antigravity'], cwd);
    expectFullCopy(skillAt(home, '.cursor/skills'));
    expectFullCopy(skillAt(home, '.gemini/config/skills'));
    expectFullCopy(skillAt(home, '.agents/skills'));
  });

  test('--lovable prints web-app steps and writes nothing', () => {
    const cwd = tmp();
    const { code, out } = run(['--lovable'], cwd);
    expect(code).toBe(0);
    expect(out).toContain('Import from GitHub');
    expect(fs.readdirSync(cwd)).toEqual([]);
  });
});

describe('packaged skill', () => {
  const skillMd = fs.readFileSync(path.join(SKILL_SRC, 'SKILL.md'), 'utf8').replace(/\r\n/g, '\n');

  test('SKILL.md stays small enough for every tool (under 500 lines)', () => {
    expect(skillMd.split('\n').length).toBeLessThan(500);
  });

  test('every reference file linked from SKILL.md exists, and none are orphaned', () => {
    const linked = [...skillMd.matchAll(/\]\((references\/[^)]+)\)/g)].map((m) => m[1]);
    expect(linked.length).toBeGreaterThan(0);
    linked.forEach((rel) => expect(fs.existsSync(path.join(SKILL_SRC, rel))).toBe(true));
    const files = fs.readdirSync(path.join(SKILL_SRC, 'references')).map((f) => `references/${f}`);
    expect(files.sort()).toEqual([...new Set(linked)].sort());
  });

  test('generated files match the source and pass repository validation', () => {
    for (const script of ['scripts/sync-skill.js', 'scripts/validate.js']) {
      const args = script.endsWith('sync-skill.js') ? [path.join(ROOT, script), '--check'] : [path.join(ROOT, script)];
      const res = spawnSync(process.execPath, args, { cwd: ROOT, encoding: 'utf8' });
      expect({ script, code: res.status, out: res.stdout + res.stderr }).toMatchObject({ code: 0 });
    }
  });
});
