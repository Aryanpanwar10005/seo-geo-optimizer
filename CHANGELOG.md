# Changelog

## 2.1.0

The skill now installs as an Agent Skill, the format most AI coding tools load on demand.

- **Installer rewritten.** `npx seo-geo-optimizer` copies `skills/seo-geo-optimizer/` into `.agents/skills/` (Codex, Cursor, GitHub Copilot, Antigravity, Gemini CLI, Windsurf / Devin, Zed, Junie, Replit), plus `.claude/skills/`, `.cline/skills/`, `.kiro/skills/` or `.trae/skills/` when those tools are detected or chosen. `--global` installs for your user account.
- **Shared files are never touched.** Earlier versions overwrote `CLAUDE.md`, `.github/copilot-instructions.md`, `.bolt/prompt` and `~/.gemini/GEMINI.md`. The installer now warns about those leftovers and only removes files it created itself (`--remove-legacy`).
- **New options:** `--uninstall`, `--remove-legacy`, `--version`, combinable tool flags, `--lovable` / `--bolt` instructions.
- **Agent Skills edition.** `skills/seo-geo-optimizer/SKILL.md` (frontmatter plus the core workflow) and `references/` (one file per part, loaded when its phase starts), generated from `skill/SEO_GEO_SKILL.md` by `npm run sync:skill`. `npx skills add Aryanpanwar10005/seo-geo-optimizer` also works.
- **Skill re-verified against official documentation (October 2026).** FAQ markup is now optional (Google removed the FAQ rich result in May 2026). The GEO tier follows Google's guide to generative AI features and Bing's 2026 guidelines, with an AI-crawler policy split into search, training and user-triggered bots. Myths and unsourced statistics are gone, and a sourced "Myths this skill refuses" table is new. Retired tools and broken links are replaced, and the intake now states the 32 questions it actually asks.
- **Activation:** `/seo-geo-optimizer`, `$seo-geo-optimizer`, `@seo-geo-optimizer`, `/seo` or "run seo-geo-optimizer". Plain SEO questions get a direct answer.
- **Publishing:** npm releases now carry provenance, and the workflow supports npm trusted publishing.
- **Checks:** `npm run validate` (skill sections, frontmatter, generated files in sync, versions) and a real installer test suite, run in CI on Linux and Windows.

## 2.0.0

Tagged on GitHub in May 2026 but never published to npm (the publish step failed). Its changes ship in 2.1.0.

## 1.2.0

Last version published to npm before 2.1.0.
