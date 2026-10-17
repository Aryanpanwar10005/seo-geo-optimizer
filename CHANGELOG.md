# Changelog

## 2.1.0

The skill now installs as an Agent Skill, the format most AI coding tools load on demand.

- **Installer rewritten.** `npx seo-geo-optimizer` copies `skills/seo-geo-optimizer/` into `.agents/skills/` (Codex, Cursor, GitHub Copilot, Antigravity, Gemini CLI, Windsurf / Devin, Zed, Junie, Replit), plus `.claude/skills/`, `.cline/skills/`, `.kiro/skills/` or `.trae/skills/` when those tools are detected or chosen. `--global` installs for your user account.
- **Shared files are never touched.** Earlier versions overwrote `CLAUDE.md`, `.github/copilot-instructions.md`, `.bolt/prompt` and `~/.gemini/GEMINI.md`. The installer now warns about those leftovers and only removes files it created itself (`--remove-legacy`).
- **New options:** `--uninstall`, `--remove-legacy`, `--version`, combinable tool flags, `--lovable` / `--bolt` instructions.
- **Agent Skills edition.** `skills/seo-geo-optimizer/SKILL.md` (frontmatter plus the core workflow) and `references/` (one file per part, loaded when its phase starts), generated from `skill/SEO_GEO_SKILL.md` by `npm run sync:skill`. `npx skills add Aryanpanwar10005/seo-geo-optimizer` also works.
- **Checks:** `npm run validate` (skill sections, frontmatter, generated files in sync, versions) and a real installer test suite, run in CI on Linux and Windows.

## 2.0.0

Tagged on GitHub in May 2026 but never published to npm (the publish step failed). Its changes ship in 2.1.0.

## 1.2.0

Last version published to npm before 2.1.0.
