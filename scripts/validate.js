#!/usr/bin/env node
/**
 * Repository health checks. Run locally with `npm run validate`; CI runs the same.
 *
 * - skill/SEO_GEO_SKILL.md exists, is substantial and has every required section
 * - skills/seo-geo-optimizer/SKILL.md follows the Agent Skills spec
 *   (https://agentskills.io/specification) and matches the source skill
 * - package.json, seo-geo-prompt.json and the examples are valid JSON with
 *   consistent versions
 */
const fs = require('fs');
const path = require('path');
const { execFileSync } = require('child_process');

const ROOT = path.join(__dirname, '..');
const read = (rel) => fs.readFileSync(path.join(ROOT, rel), 'utf8');
const failures = [];
const pass = (msg) => console.log(`  ok    ${msg}`);
const fail = (msg) => { failures.push(msg); console.log(`  FAIL  ${msg}`); };
const check = (cond, okMsg, failMsg) => (cond ? pass(okMsg) : fail(failMsg || okMsg));

const REQUIRED_SECTIONS = [
  'IRON LAWS', 'INTAKE QUESTIONNAIRE', 'COMPETITOR ANALYSIS', 'EXECUTION PLAN',
  'OFFICIAL REFERENCES', 'CONTENT SEO', 'HEADING RULES', 'BLOGPOSTING',
  'FEATURED SNIPPET', 'CONTENT CLUSTER', 'RSS FEED', 'AUTHOR E-E-A-T', 'INTEGRITY RULES',
];

console.log('\nSource skill (skill/SEO_GEO_SKILL.md)');
const SOURCE = 'skill/SEO_GEO_SKILL.md';
if (!fs.existsSync(path.join(ROOT, SOURCE))) {
  fail(`${SOURCE} is missing`);
} else {
  const skill = read(SOURCE);
  check(Buffer.byteLength(skill) >= 10000, `size ${Buffer.byteLength(skill)} bytes`, `${SOURCE} is under 10 KB`);
  const lines = skill.split('\n').length;
  check(lines >= 100, `${lines} lines`, `${SOURCE} has fewer than 100 lines`);
  const missing = REQUIRED_SECTIONS.filter((s) => !skill.toUpperCase().includes(s));
  check(missing.length === 0, `all ${REQUIRED_SECTIONS.length} required sections present`, `missing sections: ${missing.join(', ')}`);
  check(!/^---\r?\n/.test(skill), 'no frontmatter (rules-file installers paste it verbatim)',
    `${SOURCE} must not start with frontmatter; add it in scripts/sync-skill.js instead`);
}

console.log('\nAgent Skills copy (skills/seo-geo-optimizer/SKILL.md)');
const SKILL_DIR = 'skills/seo-geo-optimizer';
const SKILL_MD = `${SKILL_DIR}/SKILL.md`;
if (!fs.existsSync(path.join(ROOT, SKILL_MD))) {
  fail(`${SKILL_MD} is missing (run npm run sync:skill)`);
} else {
  const text = read(SKILL_MD).replace(/\r\n/g, '\n');
  const m = text.match(/^---\n([\s\S]*?)\n---\n/);
  if (!m) {
    fail('SKILL.md has no YAML frontmatter');
  } else {
    const fm = parseFrontmatter(m[1]);
    const name = fm.name || '';
    check(/^[a-z0-9]+(-[a-z0-9]+)*$/.test(name) && name.length <= 64,
      `name "${name}" follows the spec`, `name "${name}" breaks the spec (lowercase, digits, single hyphens, max 64)`);
    check(name === path.basename(SKILL_DIR), 'name matches its folder', `name "${name}" must match folder "${path.basename(SKILL_DIR)}"`);
    const desc = fm.description || '';
    check(desc.length >= 1 && desc.length <= 1024, `description is ${desc.length} characters`, `description must be 1-1024 characters (is ${desc.length})`);
    if (fm.compatibility !== undefined) {
      check(fm.compatibility.length >= 1 && fm.compatibility.length <= 500, 'compatibility length ok', 'compatibility must be 1-500 characters');
    }
    if (fm.metadata !== undefined) {
      check(typeof fm.metadata === 'object' && Object.values(fm.metadata).every((v) => typeof v === 'string'),
        'metadata is a string map', 'metadata must map strings to strings');
    }
    const known = ['name', 'description', 'license', 'compatibility', 'metadata', 'allowed-tools'];
    const unknown = Object.keys(fm).filter((k) => !known.includes(k));
    check(unknown.length === 0, 'only spec fields in frontmatter', `unknown frontmatter fields: ${unknown.join(', ')}`);
  }
  try {
    execFileSync(process.execPath, [path.join(__dirname, 'sync-skill.js'), '--check'], { stdio: 'pipe' });
    pass('in sync with skill/SEO_GEO_SKILL.md');
  } catch {
    fail('out of sync with skill/SEO_GEO_SKILL.md (run npm run sync:skill)');
  }
}

console.log('\nPackage and JSON files');
const json = {};
for (const rel of ['package.json', 'seo-geo-prompt.json', 'examples/intake_data.json']) {
  try {
    json[rel] = JSON.parse(read(rel));
    pass(`${rel} is valid JSON`);
  } catch (e) {
    fail(`${rel}: ${e.message}`);
  }
}
const pkg = json['package.json'];
if (pkg) {
  check(pkg.name && pkg.version && pkg.bin, 'package.json has name, version and bin', 'package.json is missing name, version or bin');
  check((pkg.files || []).includes('skill/'), 'npm package ships skill/', 'package.json "files" must include skill/');
  check((pkg.files || []).includes('skills/'), 'npm package ships skills/', 'package.json "files" must include skills/');
  const prompt = json['seo-geo-prompt.json'];
  if (prompt) check(prompt.version === pkg.version, `seo-geo-prompt.json version ${prompt.version}`, `seo-geo-prompt.json version ${prompt.version} != package.json ${pkg.version}`);
}
try {
  execFileSync(process.execPath, ['--check', path.join(ROOT, 'bin', 'install.js')], { stdio: 'pipe' });
  pass('bin/install.js parses');
} catch (e) {
  fail(`bin/install.js has a syntax error: ${String(e.stderr || e.message).split('\n')[0]}`);
}

console.log(failures.length ? `\n${failures.length} check(s) failed.\n` : '\nAll checks passed.\n');
process.exit(failures.length ? 1 : 0);

/** Minimal parser for the simple frontmatter we write (scalars, quoted strings, one-level maps). */
function parseFrontmatter(src) {
  const out = {};
  let currentMap = null;
  for (const raw of src.split('\n')) {
    if (!raw.trim()) continue;
    const nested = raw.match(/^\s{2,}([A-Za-z0-9_-]+):\s*(.*)$/);
    if (nested && currentMap) {
      out[currentMap][nested[1]] = unquote(nested[2]);
      continue;
    }
    const top = raw.match(/^([A-Za-z0-9_-]+):\s*(.*)$/);
    if (!top) continue;
    if (top[2] === '') {
      out[top[1]] = {};
      currentMap = top[1];
    } else {
      out[top[1]] = unquote(top[2]);
      currentMap = null;
    }
  }
  return out;
}

function unquote(v) {
  const s = v.trim();
  if ((s.startsWith('"') && s.endsWith('"')) || (s.startsWith("'") && s.endsWith("'"))) return s.slice(1, -1);
  return s;
}
