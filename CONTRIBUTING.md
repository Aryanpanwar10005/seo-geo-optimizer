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

**Installer improvements** (`bin/install.js`)
- A new AI IDE emerged that has a known rules file path
- An existing IDE changed where it reads its rules file
- A bug in the auto-detection logic

**README improvements**
- A manual install step for an IDE changed
- Clarity improvements on existing instructions

---

## What we do not accept

- Generic SEO advice without an official source URL
- Recommendations based on personal experience only — all claims must cite Google Search Central, Bing Webmaster Guidelines, or schema.org
- Changes that remove official citation links from the skill file
- New IDE targets added without a verified install path (test it yourself first)

---

## How to contribute

1. Fork this repository
2. Create a branch: `git checkout -b fix/bing-guidelines-update`
3. Make your change
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
**Title tag optimal length:** 50–60 characters
Source: https://developers.google.com/search/docs/appearance/title-link
```

---

## Questions?

Open an issue. Label it `question` and describe what you're unsure about.

---

Built by [Aryan Panwar](https://github.com/Aryanpanwar10005)
