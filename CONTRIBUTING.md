# Contributing to SEO & GEO Optimizer

Thank you for helping keep this skill accurate and up to date. This is an open resource — contributions are genuinely valuable.

---

## What we accept

The most useful contributions are:

**Skill file updates** (`skill/SEO_GEO_SKILL.md`)
- A Google or Bing ranking factor changed and the skill needs to reflect it
- A schema type changed on schema.org
- A Core Web Vital threshold was updated by Google
- A reference URL broke or redirected — update it with the current URL
- A new schema type is now supported in Google Rich Results

After editing `skill/SEO_GEO_SKILL.md`, run `npm run sync:skill`. It regenerates the Agent Skills edition in `skills/seo-geo-optimizer/` (SKILL.md plus one reference file per part). Never edit those generated files by hand; CI fails if they are out of date.

**Installer improvements** (`bin/install.js`)
- A tool added Agent Skills support, or changed the folder it loads skills from (link its official docs)
- A bug in detection, install, update or uninstall
- The installer must only write skill folders. Changes that write to shared files (CLAUDE.md, AGENTS.md, copilot-instructions.md, GEMINI.md and similar) will not be accepted.

**README improvements**
- A manual install step for an IDE changed
- Clarity improvements on existing instructions

---

## What we do not accept

- Generic SEO advice without an official source URL
- Recommendations based on personal experience only — all claims must cite Google Search Central, Bing Webmaster Guidelines, or schema.org
- Changes that remove official citation links from the skill file
- New tool targets added without a documented skills folder (link the docs and test it yourself first)

---

## How to contribute

1. Fork this repository
2. Create a branch: `git checkout -b fix/bing-guidelines-update`
3. Make your change, then run `npm run sync:skill` (if you touched the skill), `npm run validate` and `npm test`
4. In your PR description, include:
   - What changed and why
   - The official source URL confirming the change (required for skill file updates)
5. Submit the pull request

---

## Naming conventions for branches

| Type | Format | Example |
|------|--------|---------|
| Skill update | `fix/what-changed` | `fix/inp-threshold-update` |
| New IDE support | `feat/ide-name` | `feat/zed-editor-support` |
| Bug fix | `fix/what-broke` | `fix/copilot-detection` |
| Documentation | `docs/what-updated` | `docs/replit-instructions` |

---

## The one rule for skill file changes

**Every SEO or GEO claim must include the official source URL.**

If you add a recommendation without a citation link, it will not be merged. This is the core quality bar that separates this skill from generic SEO advice.

Good example:
```
**Title links:** Google sets no character limit for title elements; long titles may be truncated in results. Write descriptive, concise titles that are unique to each page.
Source: https://developers.google.com/search/docs/appearance/title-link
```

Fixed character counts, keyword densities or word-count minimums presented as Google rules will not be merged, because Google does not publish such rules.

---

## Questions?

Open an issue. Label it `question` and describe what you're unsure about.

---

Built by [Aryan Panwar](https://aryanpanwar.in)
