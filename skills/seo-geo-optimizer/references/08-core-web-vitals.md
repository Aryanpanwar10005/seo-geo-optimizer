<!-- Part 8 of the seo-geo-optimizer skill. Generated from skill/SEO_GEO_SKILL.md by scripts/sync-skill.js. Edit that file, then run npm run sync:skill. -->

## PART 8 — CORE WEB VITALS REFERENCE

**Official spec:** https://web.dev/articles/vitals — Check this URL for any threshold updates.

> ⚠️ **INP replaced FID in March 2024.** Ignore any guide, recommendation, or tool that still treats FID as a Core Web Vital.

| Metric                              | Good ✅   | Needs Work ⚠️    | Poor ❌  | What It Measures                                      |
| ----------------------------------- | -------- | --------------- | ------- | ----------------------------------------------------- |
| **LCP** — Largest Contentful Paint  | ≤ 2.5 s  | > 2.5 s – 4.0 s | > 4.0 s | How fast the main content (hero image, heading) loads |
| **INP** — Interaction to Next Paint | ≤ 200 ms | > 200 – 500 ms  | > 500 ms | How fast the page responds when user clicks or taps  |
| **CLS** — Cumulative Layout Shift   | ≤ 0.1    | > 0.1 – 0.25    | > 0.25  | How much content visually jumps around while loading  |

Measured at the **75th percentile of real-user page loads**, mobile and desktop separately (not just a lab test).

**Testing tool:** https://pagespeed.web.dev/ — Run on both mobile AND desktop.

**How much it matters:** Google says Core Web Vitals are used by its ranking systems, but good scores don't guarantee top rankings, and chasing a perfect score only for SEO may not be the best use of time. **Source:** https://developers.google.com/search/docs/appearance/page-experience

---
