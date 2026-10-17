# Working on this repository

This repo holds the seo-geo-optimizer skill and its installer.

- Edit the skill only in `skill/SEO_GEO_SKILL.md`. Then run `npm run sync:skill`, which regenerates the Agent Skills edition in `skills/seo-geo-optimizer/` (SKILL.md plus one reference file per part). Never edit the generated files.
- `skill/SEO_GEO_SKILL.md` must stay at that path and must not start with frontmatter: older installers download it from GitHub, and people paste it whole into tools without skills support.
- The installer (`bin/install.js`) copies `skills/seo-geo-optimizer/` into skills folders only. It must never write to shared instruction files (CLAUDE.md, AGENTS.md, .github/copilot-instructions.md, GEMINI.md, .cursorrules and similar).
- Before opening a pull request, run `npm run validate` and `npm test`.
- Every SEO or GEO claim in the skill needs an official source (Google Search Central, Bing Webmaster, web.dev, or the AI crawler operator's own docs). No myths, no invented statistics.
