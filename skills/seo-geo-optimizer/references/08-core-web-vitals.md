<!-- Part 8 of the seo-geo-optimizer skill. Generated from skill/SEO_GEO_SKILL.md by scripts/sync-skill.js. Edit that file, then run npm run sync:skill. -->

## PART 8 — CORE WEB VITALS REFERENCE

**Official spec:** https://web.dev/articles/vitals — Check this URL for any threshold updates.

> ⚠️ **INP replaced FID in March 2024.** Any guide, recommendation, or tool still mentioning FID as a ranking metric is outdated and must not be followed.

| Metric                              | Good ✅ | Needs Work ⚠️ | Poor ❌ | What It Measures                                      |
| ----------------------------------- | ------- | ------------- | ------- | ----------------------------------------------------- |
| **LCP** — Largest Contentful Paint  | < 2.5s  | 2.5–4.0s      | > 4.0s  | How fast the main content (hero image, heading) loads |
| **INP** — Interaction to Next Paint | < 200ms | 200–500ms     | > 500ms | How fast the page responds when user clicks or taps   |
| **CLS** — Cumulative Layout Shift   | < 0.1   | 0.1–0.25      | > 0.25  | How much content visually jumps around while loading  |

Must pass for **75% of real-user page loads** (not just lab test).

**Testing tool:** https://pagespeed.web.dev/ — Run on both mobile AND desktop.

**54.2% of websites currently fail at least one CWV metric** — passing all three is a significant competitive advantage.

---
