#!/usr/bin/env node
/**
 * Builds skills/seo-geo-optimizer/SKILL.md, the Agent Skills copy of the skill
 * (https://agentskills.io/specification), from skill/SEO_GEO_SKILL.md.
 *
 * skill/SEO_GEO_SKILL.md stays the source of truth: published installers
 * download it from that exact path, so it must not move or change format.
 * The Agent Skills copy adds the name/description frontmatter that skill
 * directories and `npx skills add` need.
 *
 *   npm run sync:skill            write the copy
 *   npm run sync:skill -- --check exit 1 if the copy is out of date (CI)
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.join(__dirname, '..');
const SOURCE = path.join(ROOT, 'skill', 'SEO_GEO_SKILL.md');
const TARGET = path.join(ROOT, 'skills', 'seo-geo-optimizer', 'SKILL.md');

const FRONTMATTER = [
  '---',
  'name: seo-geo-optimizer',
  'description: "Full SEO and GEO (generative engine optimization) workflow for a website or web app. Covers technical SEO, meta tags, JSON-LD structured data, Core Web Vitals, sitemaps, robots.txt, llms.txt, content and blog SEO, and visibility in Google, Bing, AI Overviews, Copilot, ChatGPT and Perplexity. Use when the user wants better search rankings or more AI-search citations for a site. Passive by default - it answers SEO questions normally and starts the guided workflow (40-question intake, competitor analysis, an approval gate, then tiered execution) only when the user types /seo or run seo-geo-optimizer."',
  'license: MIT',
  'metadata:',
  '  author: Aryan Panwar',
  '  homepage: https://aryanpanwar.in/case-studies/seo-geo-optimizer',
  '  repository: https://github.com/Aryanpanwar10005/seo-geo-optimizer',
  '---',
  '',
].join('\n');

const normalise = (text) => text.replace(/\r\n/g, '\n');
const expected = FRONTMATTER + normalise(fs.readFileSync(SOURCE, 'utf8'));

if (process.argv.includes('--check')) {
  const current = fs.existsSync(TARGET) ? normalise(fs.readFileSync(TARGET, 'utf8')) : '';
  if (current !== expected) {
    console.error('skills/seo-geo-optimizer/SKILL.md is out of date. Run: npm run sync:skill');
    process.exit(1);
  }
  console.log('skills/seo-geo-optimizer/SKILL.md is in sync with skill/SEO_GEO_SKILL.md');
} else {
  fs.mkdirSync(path.dirname(TARGET), { recursive: true });
  fs.writeFileSync(TARGET, expected);
  console.log('Wrote skills/seo-geo-optimizer/SKILL.md');
}
