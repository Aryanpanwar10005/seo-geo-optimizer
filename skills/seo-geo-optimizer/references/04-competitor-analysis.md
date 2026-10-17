<!-- Part 4 of the seo-geo-optimizer skill. Generated from skill/SEO_GEO_SKILL.md by scripts/sync-skill.js. Edit that file, then run npm run sync:skill. -->

## PART 4 — COMPETITOR ANALYSIS FRAMEWORK

### Step 1 — Find Real SEO Competitors

> ⚠️ Business competitors and SEO competitors are often different. Always run this process rather than using the business rivals the user listed.

1. Take the 5–10 keyword phrases from intake answer **B3**.
2. Search each phrase in Google (signed out, private window). Record top 5 organic results.
3. Search the same phrases in Bing. Record top 5 results.
4. Identify domains appearing **3 or more times** across all searches. These are real SEO competitors.
5. Remove unreachable benchmarks: Wikipedia, Amazon, Forbes, Reddit, major news sites — unless the user is enterprise-level.
6. Filter to **3–5 competitors** of similar authority. Third-party metrics such as Ahrefs Domain Rating or Moz Domain Authority are rough estimates, not Google data (heuristic: within ±20 of the user's site).
7. Present the shortlist to the user and ask: _"Are these the right competitors to analyze? Any to add or remove?"_

**Heuristic:** 40%+ keyword overlap = strong SEO competitor. 20–40% = secondary competitor. Under 20% = not worth deep analysis.

### Step 2 — Analyze All 13 Dimensions For Each Competitor

| #   | Analysis Area                    | What to Find                                                         | Free Tool                                                                                  |
| --- | -------------------------------- | -------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| 1   | Title tag strategy               | Topic and brand placement, how titles display, power words           | View page source                                                                           |
| 2   | Meta description style           | Format (benefit/question/CTA), keyword, how Google shows it          | metatags.io                                                                                |
| 3   | H1/H2 keyword usage              | Exact vs. semantic match, heading hierarchy depth                    | View page source                                                                           |
| 4   | Content depth                    | Shallow or comprehensive? Original data or first-hand experience?    | Manual review                                                                              |
| 5   | Schema markup present            | Which schema types? Any errors?                                      | [Rich Results Test](https://search.google.com/test/rich-results) · [Schema Markup Validator](https://validator.schema.org) |
| 6   | Core Web Vitals scores           | LCP, INP, CLS — note where they fail                                 | [PageSpeed Insights](https://pagespeed.web.dev/)                                           |
| 7   | Backlink profile                 | Referring domains, quality and relevance of linking sites            | Ahrefs Free / Moz                                                                          |
| 8   | Social & community presence      | Active on LinkedIn, X, YouTube, forums? (discovery, not a ranking factor) | Manual check                                                                          |
| 9   | Answer-first, original content   | Do pages answer the core question early, with unique data or experience? | Manual review                                                                         |
| 10  | Content freshness                | Visible "Last updated" dates, sitemap `<lastmod>`, page history      | Page source · sitemap · [Wayback Machine](https://web.archive.org/)                        |
| 11  | Keyword gap                      | Keywords they rank for that user doesn't                             | SEMrush Keyword Gap (free trial)                                                           |
| 12  | Featured snippets / AI answers   | Do they appear in featured snippets, AI Overviews or AI Mode citations? | Manual search (signed out)                                                              |
| 13  | Mobile experience                | Does the mobile version work cleanly?                                | [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) (mobile)              |

### Step 3 — Competitor Analysis Table (Fill For Each Competitor)

```
Competitor URL:
Domain Age (approx.):
Estimated Monthly Traffic (third-party estimate):
Top 3 Ranking Keywords:
Schema Types Detected:
CWV — LCP / INP / CLS:
Content Depth & Originality:
Answer-First / First-Hand Content?:
Social & Community Presence:
Referring Domains Count:
Key Strengths vs. Our Product:
Key Weaknesses / Our Opportunity:
Keyword Gap Opportunities:
```

### Step 4 — Keyword & Opportunity Gap Assessment (Phase 3)

Use the intake answers (B3, C6, D1), the competitor tables, and Search Console / Bing Webmaster Tools data if the user has connected them.

1. **Build the keyword list:** B3 phrases + Search Console Queries report + Bing Webmaster Tools Keyword Research + the competitor keyword gap.
2. **Classify intent** for each keyword (informational / navigational / commercial / transactional — see 14.5) and map it to one existing or planned page. One primary keyword per page; flag any cannibalization.
3. **Name the gap type:** missing page · weak page (exists but doesn't satisfy the intent) · technical block (not indexed, blocked, slow, JS-only) · SERP feature gap (a competitor holds the featured snippet, rich result or AI answer citation).
4. **Prioritize** with a simple heuristic: business value (A5, D1) × intent match × realistic difficulty. Third-party difficulty scores are estimates; say so.

**Output format (present it, then stop for confirmation):**

```
| Keyword | Intent | Target page (existing / new) | Gap type | Top competitor | Priority (H/M/L) | Notes |
| ------- | ------ | ---------------------------- | -------- | -------------- | ---------------- | ----- |
```

Then ask: _"Does this gap assessment match your priorities? Anything to add, drop or re-rank before I write the Execution Plan Report?"_

---
