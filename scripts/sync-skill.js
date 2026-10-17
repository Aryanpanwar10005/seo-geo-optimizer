#!/usr/bin/env node
/**
 * Builds the Agent Skills edition of the skill (https://agentskills.io/specification)
 * from skill/SEO_GEO_SKILL.md:
 *
 *   skills/seo-geo-optimizer/SKILL.md          frontmatter + header + Parts 1-2 + reference index
 *   skills/seo-geo-optimizer/references/*.md   Parts 3-14, one file each, loaded on demand
 *
 * skill/SEO_GEO_SKILL.md stays the single source of truth: older installers
 * download it from that exact path, and rules-file users paste it whole.
 * Never edit the generated files by hand.
 *
 *   npm run sync:skill             write the files
 *   npm run sync:skill -- --check  exit 1 if anything is out of date (CI)
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SOURCE = path.join(ROOT, 'skill', 'SEO_GEO_SKILL.md');
const SKILL_DIR = path.join(ROOT, 'skills', 'seo-geo-optimizer');
const REF_DIR = path.join(SKILL_DIR, 'references');

const DESCRIPTION =
  'Full SEO and GEO (generative engine optimization) workflow for a website or web app: technical SEO, ' +
  'meta tags, JSON-LD structured data, Core Web Vitals, sitemaps, robots.txt and AI crawler access, ' +
  'content and blog SEO, and visibility in Google, Bing, AI Overviews, Copilot, ChatGPT and Perplexity. ' +
  'Use when the user asks for an SEO or GEO audit, wants better search rankings or more AI-search ' +
  'citations, or invokes seo-geo-optimizer. Answer one-off SEO questions directly; start the guided ' +
  'workflow (intake questions, competitor analysis, an approval gate, then tiered execution) only when ' +
  'the user asks to run seo-geo-optimizer.';

const FRONTMATTER = [
  '---',
  'name: seo-geo-optimizer',
  `description: "${DESCRIPTION}"`,
  'license: MIT',
  'metadata:',
  '  author: Aryan Panwar',
  '  homepage: https://aryanpanwar.in/case-studies/seo-geo-optimizer',
  '  repository: https://github.com/Aryanpanwar10005/seo-geo-optimizer',
  '---',
  '',
].join('\n');

// Stable file names, and when each part is needed, keyed by part number.
const REFERENCES = {
  3: { slug: 'intake-questionnaire', when: 'Phase 1' },
  4: { slug: 'competitor-analysis', when: 'Phases 2-3' },
  5: { slug: 'execution-plan-report', when: 'Phase 4, and the tier task lists for Phases 5-9' },
  6: { slug: 'schema-templates', when: 'Any phase that adds or fixes structured data' },
  7: { slug: 'meta-tag-rules', when: 'Phases 5-6' },
  8: { slug: 'core-web-vitals', when: 'Phase 6' },
  9: { slug: 'google-vs-bing', when: 'Phases 5-8' },
  10: { slug: 'verification-checklist', when: 'Phase 10' },
  11: { slug: 'algorithm-update-monitoring', when: 'Phase 11' },
  12: { slug: 'execution-timeline', when: 'Phase 12' },
  13: { slug: 'official-references', when: 'Every recommendation (LAW 6), and Phase 13' },
  14: { slug: 'content-seo', when: 'Phase 9 (Tier 5), and any content or blog work' },
};

const GENERATED_NOTE = (what) =>
  `<!-- ${what} Generated from skill/SEO_GEO_SKILL.md by scripts/sync-skill.js. Edit that file, then run npm run sync:skill. -->`;

const PREAMBLE = `> **Agent Skills edition.** This skill is split into this file and the reference files listed under
> "Reference files" at the end. Wherever the text below says "this skill file", "the entire skill file",
> "Part N" or "the Official References Index", it means this file plus the matching reference file.
> Read this file in full when the skill activates, then read each reference file in full before the
> phase that uses it. That is how LAW 1 applies to this edition. Skip the install notes in
> "HOW TO USE THIS SKILL": the skill is already installed.`;

function build() {
  const source = fs.readFileSync(SOURCE, 'utf8').replace(/\r\n/g, '\n');
  const partRe = /^## PART (\d+) — (.+)$/gm;
  const marks = [...source.matchAll(partRe)].map((m) => ({ n: Number(m[1]), title: m[2].trim(), at: m.index }));
  if (!marks.length || marks[0].n !== 1) throw new Error('Could not find "## PART 1 — ..." in the source skill');

  const header = source.slice(0, marks[0].at).trimEnd();
  const parts = marks.map((m, i) => ({ ...m, body: source.slice(m.at, i + 1 < marks.length ? marks[i + 1].at : source.length).trimEnd() }));
  const core = parts.filter((p) => p.n <= 2);
  const refs = parts.filter((p) => p.n > 2);

  const files = {};
  const index = ['## Reference files', '', '| Part | File | Read it before |', '|---|---|---|'];
  for (const p of refs) {
    const meta = REFERENCES[p.n];
    if (!meta) throw new Error(`Part ${p.n} (${p.title}) has no entry in REFERENCES in scripts/sync-skill.js`);
    const file = `references/${String(p.n).padStart(2, '0')}-${meta.slug}.md`;
    index.push(`| ${p.n}. ${titleCase(p.title)} | [${file}](${file}) | ${meta.when} |`);
    files[file] = `${GENERATED_NOTE(`Part ${p.n} of the seo-geo-optimizer skill.`)}\n\n${p.body}\n`;
  }
  const missing = Object.keys(REFERENCES).map(Number).filter((n) => !refs.some((p) => p.n === n));
  if (missing.length) throw new Error(`REFERENCES lists parts the source no longer has: ${missing.join(', ')}`);

  files['SKILL.md'] = [
    FRONTMATTER + GENERATED_NOTE('Agent Skills edition.'),
    '',
    PREAMBLE,
    '',
    header,
    '',
    ...core.map((p) => p.body + '\n'),
    index.join('\n'),
    '',
  ].join('\n');
  return files;
}

function titleCase(s) {
  return s.toLowerCase().replace(/(^|[\s(/-])([a-z])/g, (m, pre, ch) => pre + ch.toUpperCase())
    .replace(/\b(Seo|Geo|Epr|Json-Ld|Vs\.?|Ai)\b/g, (w) => ({ Seo: 'SEO', Geo: 'GEO', Epr: 'EPR', 'Json-Ld': 'JSON-LD', Ai: 'AI' }[w] || w.toLowerCase()));
}

function listExisting() {
  const out = [];
  if (fs.existsSync(path.join(SKILL_DIR, 'SKILL.md'))) out.push('SKILL.md');
  if (fs.existsSync(REF_DIR)) for (const f of fs.readdirSync(REF_DIR)) out.push(`references/${f}`);
  return out;
}

const files = build();
const norm = (t) => t.replace(/\r\n/g, '\n');

if (process.argv.includes('--check')) {
  const problems = [];
  for (const [rel, content] of Object.entries(files)) {
    const p = path.join(SKILL_DIR, rel);
    if (!fs.existsSync(p)) problems.push(`missing ${rel}`);
    else if (norm(fs.readFileSync(p, 'utf8')) !== content) problems.push(`out of date: ${rel}`);
  }
  for (const rel of listExisting()) if (!(rel in files)) problems.push(`stale file: ${rel}`);
  if (problems.length) {
    console.error(`skills/seo-geo-optimizer is out of date (${problems.join('; ')}). Run: npm run sync:skill`);
    process.exit(1);
  }
  console.log(`skills/seo-geo-optimizer is in sync with skill/SEO_GEO_SKILL.md (${Object.keys(files).length} files)`);
} else {
  fs.mkdirSync(REF_DIR, { recursive: true });
  for (const rel of listExisting()) if (!(rel in files)) fs.unlinkSync(path.join(SKILL_DIR, rel));
  for (const [rel, content] of Object.entries(files)) fs.writeFileSync(path.join(SKILL_DIR, rel), content);
  const lines = files['SKILL.md'].split('\n').length;
  console.log(`Wrote skills/seo-geo-optimizer: SKILL.md (${lines} lines) + ${Object.keys(files).length - 1} reference files`);
}
