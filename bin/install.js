#!/usr/bin/env node

/**
 * SEO & GEO Optimizer — skill installer
 * Author: Aryan Panwar — https://aryanpanwar.in
 *
 * Copies the Agent Skills folder (skills/seo-geo-optimizer/) into the skills
 * directories your AI coding tools read. It never edits shared instruction
 * files such as CLAUDE.md, AGENTS.md, .github/copilot-instructions.md or GEMINI.md.
 *
 * Usage:
 *   npx seo-geo-optimizer               install into this project (auto-detects tools)
 *   npx seo-geo-optimizer --claude      also install for Claude Code
 *   npx seo-geo-optimizer --all         install for every supported tool
 *   npx seo-geo-optimizer --global      install for your user account instead of the project
 *   npx seo-geo-optimizer --uninstall   remove the skill again
 *   npx seo-geo-optimizer --help        all options
 */

const fs   = require('fs');
const path = require('path');
const os   = require('os');

const VERSION    = require('../package.json').version;
const SKILL_NAME = 'seo-geo-optimizer';
const SKILL_SRC  = path.join(__dirname, '..', 'skills', SKILL_NAME);
const RAW_SKILL  = 'https://raw.githubusercontent.com/Aryanpanwar10005/seo-geo-optimizer/main/skill/SEO_GEO_SKILL.md';

// Where each tool loads Agent Skills from. `project` is relative to the project
// root, `global` to the home directory. Most tools read the shared .agents/skills
// folder, so they map to the same place.
const TOOLS = {
  agents:      { name: 'Shared .agents/skills', project: '.agents/skills', global: '.agents/skills',
                 covers: 'Codex, Cursor, GitHub Copilot, Antigravity, Gemini CLI, Windsurf / Devin, Zed, Junie, Replit' },
  claude:      { name: 'Claude Code', project: '.claude/skills', global: '.claude/skills', detect: ['.claude', 'CLAUDE.md'] },
  cline:       { name: 'Cline', project: '.cline/skills', global: '.cline/skills', detect: ['.cline', '.clinerules'] },
  kiro:        { name: 'Kiro', project: '.kiro/skills', global: '.kiro/skills', detect: ['.kiro'] },
  trae:        { name: 'Trae', project: '.trae/skills', global: '.trae/skills', detect: ['.trae'] },
  codex:       { name: 'Codex', project: '.agents/skills', global: '.agents/skills' },
  cursor:      { name: 'Cursor', project: '.agents/skills', global: '.cursor/skills' },
  copilot:     { name: 'GitHub Copilot', project: '.agents/skills', global: '.copilot/skills' },
  windsurf:    { name: 'Windsurf / Devin', project: '.agents/skills', global: '.codeium/windsurf/skills' },
  antigravity: { name: 'Antigravity', project: '.agents/skills', global: '.gemini/config/skills' },
  gemini:      { name: 'Gemini CLI', project: '.agents/skills', global: '.agents/skills' },
  junie:       { name: 'JetBrains Junie', project: '.agents/skills', global: '.agents/skills' },
  zed:         { name: 'Zed', project: '.agents/skills', global: '.agents/skills' },
  replit:      { name: 'Replit Agent', project: '.agents/skills', global: null },
};
const ALL_PROJECT_TOOLS = ['agents', 'claude', 'cline', 'kiro', 'trae'];

// Tools that load skills through their web app, not from files.
const MANUAL = {
  lovable: ['Lovable', 'Workspace settings → Skills → Import from GitHub, and point it at the',
            '`skills/seo-geo-optimizer` folder of github.com/Aryanpanwar10005/seo-geo-optimizer.'],
  bolt:    ['Bolt', 'Project settings → Skills → add from GitHub URL',
            'https://github.com/Aryanpanwar10005/seo-geo-optimizer/tree/main/skills/seo-geo-optimizer'],
};

// Files that version 1.x wrote the whole skill into.
const LEGACY_OWN    = ['.cursor/rules/seo-geo-optimizer.mdc', '.windsurf/rules/seo-geo-optimizer.mdc',
                       '.ai/seo-geo-optimizer.md', 'seo-geo-optimizer.md'];
const LEGACY_SHARED = ['CLAUDE.md', '.github/copilot-instructions.md', '.gemini/GEMINI.md', '.trae/rules.md',
                       '.bolt/prompt', '.cursorrules', '.windsurfrules'];
const SKILL_SIGNATURE = 'SEO & GEO OPTIMIZER — Universal AI Skill';

const c = {
  reset: '\x1b[0m', bold: '\x1b[1m', green: '\x1b[32m', blue: '\x1b[34m',
  yellow: '\x1b[33m', cyan: '\x1b[36m', red: '\x1b[31m', gray: '\x1b[90m', white: '\x1b[97m',
};

const log = {
  info:    (msg) => console.log(`${c.blue}ℹ${c.reset}  ${msg}`),
  success: (msg) => console.log(`${c.green}✔${c.reset}  ${msg}`),
  warn:    (msg) => console.log(`${c.yellow}⚠${c.reset}  ${msg}`),
  error:   (msg) => console.log(`${c.red}✖${c.reset}  ${msg}`),
  title:   (msg) => console.log(`\n${c.bold}${c.white}${msg}${c.reset}`),
  divider: ()    => console.log(`${c.gray}${'─'.repeat(58)}${c.reset}`),
  blank:   ()    => console.log(''),
};

function showBanner() {
  console.log(`
${c.bold}${c.cyan}  SEO & GEO OPTIMIZER  v${VERSION}${c.reset}
${c.gray}  Agent skill for SEO and AI-search visibility · github.com/Aryanpanwar10005/seo-geo-optimizer${c.reset}
`);
}

function showHelp() {
  showBanner();
  console.log(`${c.bold}USAGE${c.reset}
  npx seo-geo-optimizer [options]

${c.bold}WHERE IT INSTALLS${c.reset}
  Always            .agents/skills/seo-geo-optimizer/  (Codex, Cursor, Copilot, Antigravity,
                    Gemini CLI, Windsurf / Devin, Zed, Junie, Replit)
  If detected       .claude/skills/ (Claude Code), .cline/skills/, .kiro/skills/, .trae/skills/
  It never edits CLAUDE.md, AGENTS.md, copilot-instructions.md, GEMINI.md or other shared files.

${c.bold}OPTIONS${c.reset}
  ${c.cyan}--claude${c.reset}  ${c.cyan}--cline${c.reset}  ${c.cyan}--kiro${c.reset}  ${c.cyan}--trae${c.reset}
                    Install for that tool too (combine as many as you like)
  ${c.cyan}--cursor${c.reset}  ${c.cyan}--copilot${c.reset}  ${c.cyan}--codex${c.reset}  ${c.cyan}--windsurf${c.reset}  ${c.cyan}--antigravity${c.reset}  ${c.cyan}--gemini${c.reset}
  ${c.cyan}--junie${c.reset}  ${c.cyan}--zed${c.reset}  ${c.cyan}--replit${c.reset}
                    These read .agents/skills in a project; with --global each uses its own folder
  ${c.cyan}--lovable${c.reset}  ${c.cyan}--bolt${c.reset}  Print the steps to add the skill in their web app
  ${c.cyan}--all${c.reset}             Every project folder above
  ${c.cyan}--global${c.reset}          Install for your user account (all projects) instead of this project
  ${c.cyan}--uninstall${c.reset}       Remove the skill from the folders above
  ${c.cyan}--remove-legacy${c.reset}   Delete files a 1.x install created (only files it owns)
  ${c.cyan}--force${c.reset}           Replace a different skill that uses the same folder name
  ${c.cyan}--dry-run${c.reset}         Show what would happen without writing anything
  ${c.cyan}--version${c.reset}         Print the version
  ${c.cyan}--help${c.reset}            Show this help

${c.bold}EXAMPLES${c.reset}
  npx seo-geo-optimizer                 # this project, tools auto-detected
  npx seo-geo-optimizer --claude        # make sure Claude Code gets it
  npx seo-geo-optimizer --global        # every project on this machine
  npx skills add Aryanpanwar10005/seo-geo-optimizer   # same skill via the skills CLI

${c.bold}NO SKILLS SUPPORT?${c.reset}
  Paste the single-file version into your tool's instructions:
  ${c.gray}${RAW_SKILL}${c.reset}
`);
}

const FLAGS = ['--all', '--global', '--uninstall', '--remove-legacy', '--force', '--dry-run', '--help', '-h', '--version', '-v'];

function parseArgs(argv) {
  const has = (f) => argv.includes(f);
  const known = [...Object.keys(TOOLS).map((t) => `--${t}`), ...Object.keys(MANUAL).map((t) => `--${t}`), ...FLAGS];
  return {
    tools: Object.keys(TOOLS).filter((t) => has(`--${t}`)),
    manual: Object.keys(MANUAL).filter((t) => has(`--${t}`)),
    all: has('--all'),
    global: has('--global'),
    uninstall: has('--uninstall'),
    removeLegacy: has('--remove-legacy'),
    force: has('--force'),
    dryRun: has('--dry-run'),
    help: has('--help') || has('-h'),
    version: has('--version') || has('-v'),
    unknown: argv.filter((a) => !known.includes(a)),
  };
}

/** Tools whose project folders exist in cwd (besides the shared .agents folder). */
function detectTools(cwd) {
  return Object.entries(TOOLS)
    .filter(([, t]) => t.detect && t.detect.some((s) => fs.existsSync(path.join(cwd, s))))
    .map(([key]) => key);
}

/** Resolve the selected tools to unique skill directories. */
function resolveTargets(toolKeys, { global, cwd, home }) {
  const byDir = new Map();
  for (const key of toolKeys) {
    const t = TOOLS[key];
    const base = global ? t.global : t.project;
    if (!base) continue;
    const dir = path.join(global ? home : cwd, base, SKILL_NAME);
    if (!byDir.has(dir)) byDir.set(dir, []);
    byDir.get(dir).push(key === 'agents' ? t.covers : t.name);
  }
  return [...byDir.entries()].map(([dir, names]) => ({ dir, label: [...new Set(names)].join(', ') }));
}

/** The skill name in a folder's SKILL.md frontmatter, or null. */
function skillNameAt(dir) {
  const file = path.join(dir, 'SKILL.md');
  if (!fs.existsSync(file)) return null;
  const m = fs.readFileSync(file, 'utf8').match(/^---\r?\n[\s\S]*?^name:\s*['"]?([^'"\r\n]+)['"]?\s*$/m);
  return m ? m[1].trim() : null;
}

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  let count = 0;
  for (const entry of fs.readdirSync(src, { withFileTypes: true })) {
    const from = path.join(src, entry.name);
    const to = path.join(dest, entry.name);
    if (entry.isDirectory()) count += copyDir(from, to);
    else { fs.copyFileSync(from, to); count += 1; }
  }
  return count;
}

const countFiles = (dir) => fs.readdirSync(dir, { withFileTypes: true })
  .reduce((n, e) => n + (e.isDirectory() ? countFiles(path.join(dir, e.name)) : 1), 0);

/** Install (or update) the skill in one directory. Returns 'installed' | 'updated' | 'skipped' | 'dry-run'. */
function installSkill(dir, options) {
  const exists = fs.existsSync(dir);
  const owner = exists ? skillNameAt(dir) : null;
  if (exists && owner !== SKILL_NAME && !options.force) {
    log.warn(`${dir} already holds a different skill${owner ? ` ("${owner}")` : ''}. Skipped; use --force to replace it.`);
    return 'skipped';
  }
  if (options.dryRun) return 'dry-run';
  if (exists) fs.rmSync(dir, { recursive: true, force: true });
  const copied = copyDir(SKILL_SRC, dir);
  if (copied !== countFiles(SKILL_SRC) || skillNameAt(dir) !== SKILL_NAME) {
    throw new Error(`copy to ${dir} is incomplete`);
  }
  return exists ? 'updated' : 'installed';
}

/** Remove the skill from one directory, only if it is ours. */
function uninstallSkill(dir, options) {
  if (!fs.existsSync(dir)) return 'absent';
  if (skillNameAt(dir) !== SKILL_NAME && !options.force) {
    log.warn(`${dir} holds a different skill. Left alone.`);
    return 'skipped';
  }
  if (options.dryRun) return 'dry-run';
  fs.rmSync(dir, { recursive: true, force: true });
  return 'removed';
}

/** Files that a 1.x install filled with the whole skill. */
function findLegacy(cwd) {
  const looksLikeSkill = (p) => {
    try { return fs.readFileSync(p, 'utf8').includes(SKILL_SIGNATURE); } catch { return false; }
  };
  return {
    own: LEGACY_OWN.map((rel) => path.join(cwd, rel)).filter(looksLikeSkill),
    shared: LEGACY_SHARED.map((rel) => path.join(cwd, rel)).filter(looksLikeSkill),
  };
}

function reportLegacy(cwd, options) {
  const { own, shared } = findLegacy(cwd);
  if (!own.length && !shared.length) return;
  log.divider();
  log.title('Older 1.x install found');
  for (const p of own) {
    const rel = path.relative(cwd, p);
    if (options.removeLegacy && !options.dryRun) {
      fs.unlinkSync(p);
      log.success(`Removed ${rel}`);
    } else if (options.removeLegacy) {
      log.info(`Would remove ${rel}`);
    } else {
      log.warn(`${rel} holds the old always-on copy of the skill. Delete it, or rerun with --remove-legacy.`);
    }
  }
  for (const p of shared) {
    const rel = path.relative(cwd, p);
    const backup = fs.existsSync(`${p}.backup`) ? ` Your previous version is in ${rel}.backup.` : '';
    log.warn(`${rel} was overwritten with the skill by a 1.x install. It is a shared file, so this installer will not touch it.${backup}`);
  }
}

function printNextSteps(toolKeys) {
  log.blank();
  console.log(`${c.bold}Next:${c.reset} start a new chat in your tool so it picks up the skill, then ask:`);
  console.log(`  ${c.yellow}"run seo-geo-optimizer"${c.reset}  — starts the guided audit (intake questions first)`);
  if (toolKeys.includes('claude')) console.log(`  ${c.gray}Claude Code also lists it as the /seo-geo-optimizer command.${c.reset}`);
  console.log(`  ${c.gray}Codex: $seo-geo-optimizer · Windsurf and Zed: @seo-geo-optimizer${c.reset}`);
  console.log(`  ${c.gray}Plain SEO questions are answered directly; the full workflow only runs when you ask for it.${c.reset}`);
}

function main(argv = process.argv.slice(2), cwd = process.cwd()) {
  const opts = parseArgs(argv);
  if (opts.help) { showHelp(); return 0; }
  if (opts.version) { console.log(VERSION); return 0; }

  showBanner();
  if (opts.unknown.length) {
    log.error(`Unknown option${opts.unknown.length > 1 ? 's' : ''}: ${opts.unknown.join(' ')}. Run with --help for the list.`);
    return 1;
  }
  if (!fs.existsSync(path.join(SKILL_SRC, 'SKILL.md'))) {
    log.error(`The packaged skill is missing (${SKILL_SRC}). Reinstall the package.`);
    return 1;
  }

  const home = os.homedir();
  const where = opts.global ? `your user folder (${home})` : 'this project';

  if (opts.uninstall) {
    log.divider();
    log.title(`Removing the skill from ${where}${opts.dryRun ? ' (dry run)' : ''}`);
    const keys = opts.all || !opts.tools.length ? Object.keys(TOOLS) : ['agents', ...opts.tools];
    let removed = 0;
    for (const t of resolveTargets(keys, { global: opts.global, cwd, home })) {
      const result = uninstallSkill(t.dir, opts);
      if (result === 'removed' || result === 'dry-run') {
        removed += 1;
        log.success(`${result === 'dry-run' ? 'Would remove' : 'Removed'} ${t.dir}`);
      }
    }
    if (!removed) log.info('Nothing to remove.');
    log.blank();
    return 0;
  }

  let toolKeys;
  if (opts.all) {
    toolKeys = [...ALL_PROJECT_TOOLS];
  } else if (opts.tools.length) {
    toolKeys = ['agents', ...opts.tools];
  } else if (opts.manual.length) {
    toolKeys = [];
  } else if (opts.global) {
    toolKeys = ['agents', 'claude'];
  } else {
    const detected = detectTools(cwd);
    toolKeys = ['agents', ...detected];
    log.info(detected.length
      ? `Detected: ${detected.map((k) => TOOLS[k].name).join(', ')}`
      : 'No tool-specific folders detected; using the shared .agents/skills folder.');
    if (!detected.includes('claude')) log.info(`${c.gray}Using Claude Code? Add --claude (it reads .claude/skills, not .agents/skills).${c.reset}`);
  }
  const targets = resolveTargets([...new Set(toolKeys)], { global: opts.global, cwd, home });

  let failed = 0;
  let done = 0;
  if (targets.length) {
    log.divider();
    log.title(`Installing into ${where}${opts.dryRun ? ' (dry run, nothing is written)' : ''}`);
  }
  for (const t of targets) {
    try {
      const result = installSkill(t.dir, opts);
      if (result === 'skipped') continue;
      done += 1;
      const verb = { installed: 'Installed', updated: 'Updated', 'dry-run': 'Would install' }[result];
      log.success(`${verb} ${c.green}${opts.global ? t.dir : path.relative(cwd, t.dir)}${c.reset}`);
      log.info(`${c.gray}for ${t.label}${c.reset}`);
    } catch (err) {
      failed += 1;
      log.error(`Could not install into ${t.dir}: ${err.message}`);
    }
  }

  for (const key of opts.manual) {
    const [name, ...steps] = MANUAL[key];
    log.title(`${name}: add it in the web app`);
    for (const s of steps) console.log(`  ${s}`);
  }

  if (!opts.global) reportLegacy(cwd, opts);
  if (done && !opts.dryRun) printNextSteps(toolKeys);
  log.blank();
  return failed ? 1 : 0;
}

if (require.main === module) {
  try {
    process.exitCode = main();
  } catch (err) {
    log.error(`Unexpected error: ${err.message}`);
    process.exitCode = 1;
  }
}

module.exports = { TOOLS, ALL_PROJECT_TOOLS, LEGACY_OWN, LEGACY_SHARED, detectTools, resolveTargets, installSkill, uninstallSkill, findLegacy, skillNameAt, main };
