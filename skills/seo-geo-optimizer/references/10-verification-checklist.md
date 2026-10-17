<!-- Part 10 of the seo-geo-optimizer skill. Generated from skill/SEO_GEO_SKILL.md by scripts/sync-skill.js. Edit that file, then run npm run sync:skill. -->

## PART 10 — VERIFICATION CHECKLIST

Run every item after each execution phase. Report Pass ✅ or Fail ❌ with evidence for each.

### Verification Tools

| Tool                        | URL                                                 | What It Validates                                   |
| --------------------------- | --------------------------------------------------- | --------------------------------------------------- |
| Google Rich Results Test    | https://search.google.com/test/rich-results         | Google-supported rich result types only — 0 errors  |
| Schema Markup Validator     | https://validator.schema.org                        | Any schema.org type (WebPage, Person, FAQPage, ...) |
| Google PageSpeed Insights   | https://pagespeed.web.dev/                          | LCP, INP, CLS (field and lab data)                  |
| Lighthouse                  | https://developer.chrome.com/docs/lighthouse/overview/ | Mobile usability, performance, accessibility     |
| Google Search Console       | https://search.google.com/search-console/about      | Indexing, URL Inspection, CWV, manual actions, Generative AI report |
| Bing Webmaster Tools        | https://www.bing.com/webmasters/                    | Bing crawl, indexing, URL Inspection, AI Performance |
| Bing URL Inspection (help)  | https://www.bing.com/webmasters/help/url-inspection-55a30305 | Specific URL index status in Bing (tool needs sign-in) |
| Meta Tags Preview           | https://metatags.io                                 | Approximate SERP and share preview (third-party)    |
| Facebook OG Debugger        | https://developers.facebook.com/tools/debug/        | og: tags and share previews                         |

### Final Sign-Off Checklist

- [ ] All pages: unique, descriptive `<title>` (primary topic near the start)
- [ ] All pages: unique, accurate `<meta description>`
- [ ] All pages: self-referencing `<link rel="canonical">`
- [ ] No accidental `noindex` / `nosnippet` on pages meant to rank (robots meta only where a non-default rule is needed)
- [ ] All pages: `<meta name="viewport" content="width=device-width, initial-scale=1">`
- [ ] Open Graph tags validated via Facebook Debugger — no errors; `og:image` at least 1200px wide
- [ ] X Card tags present (optional)
- [ ] `Organization` + `WebSite` schema: **0 errors** (Rich Results Test for Organization, Schema Markup Validator for WebSite)
- [ ] `WebPage` schema (if used): valid in Schema Markup Validator
- [ ] `BreadcrumbList` schema on all multi-level pages: **0 errors** in Rich Results Test
- [ ] `Article`/`BlogPosting` schema on all content pages: **0 errors** in Rich Results Test
- [ ] FAQPage markup (if used) only on visible Q&A
- [ ] CWV: LCP **≤ 2.5 s** ✅
- [ ] CWV: INP **≤ 200 ms** ✅
- [ ] CWV: CLS **≤ 0.1** ✅
- [ ] HTTPS on all pages — zero mixed content warnings
- [ ] Mobile: Lighthouse mobile audit and Search Console URL Inspection render key templates correctly
- [ ] `robots.txt` valid — no important pages, CSS, or JS blocked; AI crawler rules match the agreed policy (T4-4)
- [ ] XML sitemap with accurate `<lastmod>` submitted to **Google Search Console**
- [ ] XML sitemap submitted to (or imported into) **Bing Webmaster Tools**; IndexNow enabled
- [ ] Critical content visible in raw HTML source (not JS-only rendered)
- [ ] All images have descriptive, concise alt text
- [ ] Zero internal 404 broken links
- [ ] Zero orphan pages — important pages reachable through crawlable links (within ~3 clicks is a heuristic)
- [ ] URL structure: readable, lowercase, hyphens, no unnecessary parameters
- [ ] Author/Person information accurate and visible on all content pages
- [ ] Search Console "Search generative AI" setting matches the user's choice (T4-1)
- [ ] Baselines recorded: Search Console Generative AI report and Bing AI Performance (T4-9)
- [ ] `hreflang` annotations if multi-language site

### Phase 14 — Final Audit Report

After Phase 13, deliver this report and stop.

```
FINAL AUDIT REPORT — {{PRODUCT_NAME}} — {{DATE}}

1. Scope: phases completed, pages and templates covered, EPR approval date.
2. Changes made:
   | ID (T1-1 …) | Change | Files / URLs | Verified with (tool + result) | Official source |
3. Checklist result: Part 10 pass / fail counts; every fail with its reason and owner.
4. Baseline vs. now: Search Console clicks and impressions, indexed pages, CWV (p75),
   Generative AI impressions (Search Console), AI citations (Bing Webmaster Tools).
   Rankings and AI citations take weeks to move and are never guaranteed — say so.
5. Open items: every [TEMPORARY FIX], declined changes, blockers.
6. Next 90 days: maintenance tasks from Part 12 and who owns each one.
```

---
