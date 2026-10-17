<!-- Part 10 of the seo-geo-optimizer skill. Generated from skill/SEO_GEO_SKILL.md by scripts/sync-skill.js. Edit that file, then run npm run sync:skill. -->

## PART 10 — VERIFICATION CHECKLIST

Run every item after each execution phase. Report Pass ✅ or Fail ❌ with evidence for each.

### Verification Tools

| Tool                        | URL                                            | What It Validates                          |
| --------------------------- | ---------------------------------------------- | ------------------------------------------ |
| Google Rich Results Test    | https://search.google.com/test/rich-results    | All schema — must show 0 errors            |
| Google PageSpeed Insights   | https://pagespeed.web.dev/                     | LCP, INP, CLS scores                       |
| Google Mobile-Friendly Test | https://search.google.com/test/mobile-friendly | Mobile responsiveness                      |
| Google Search Console       | https://search.google.com/search-console/      | Indexing, coverage, CWV, manual actions    |
| Bing Webmaster Tools        | https://www.bing.com/webmasters/               | Bing crawl, indexing, SEO analyzer         |
| Bing URL Inspection         | https://www.bing.com/webmasters/url-inspection | Specific URL index status in Bing          |
| Schema.org Validator        | https://validator.schema.org                   | Schema vocabulary correctness              |
| Meta Tags Preview           | https://metatags.io                            | SERP visual preview of title + description |
| Facebook OG Debugger        | https://developers.facebook.com/tools/debug/   | og: tags + Bing social signal verification |

### Final Sign-Off Checklist

- [ ] All pages: unique `<title>` (50–60 chars, keyword near start)
- [ ] All pages: unique `<meta description>` (150–160 chars)
- [ ] All pages: self-referencing `<link rel="canonical">`
- [ ] All pages: `<meta name="robots" content="index, follow">` (or noindex where appropriate)
- [ ] All pages: `<meta name="viewport" content="width=device-width, initial-scale=1">`
- [ ] Open Graph tags validated via Facebook Debugger — no errors
- [ ] Twitter Card tags present on all pages
- [ ] `Organization` + `WebSite` schema: **0 errors** in Google Rich Results Test
- [ ] `WebPage` schema on all pages: **0 errors**
- [ ] `BreadcrumbList` schema on all multi-level pages: **0 errors**
- [ ] `FAQPage` schema on all key pages: **0 errors**
- [ ] `Article`/`BlogPosting` schema on all content pages: **0 errors**
- [ ] CWV: LCP **< 2.5s** ✅
- [ ] CWV: INP **< 200ms** ✅
- [ ] CWV: CLS **< 0.1** ✅
- [ ] HTTPS on all pages — zero mixed content warnings
- [ ] Google Mobile-Friendly Test: **passed**
- [ ] `robots.txt` valid — no important pages, CSS, or JS blocked
- [ ] XML sitemap submitted to **Google Search Console**
- [ ] XML sitemap submitted to **Bing Webmaster Tools**
- [ ] Bing: critical content visible in raw HTML source (not JS-only rendered)
- [ ] All images have descriptive alt text (under 125 chars)
- [ ] Zero internal 404 broken links
- [ ] Zero orphan pages — all pages reachable within 3 clicks from homepage
- [ ] URL structure: lowercase, hyphens, keyword in slug, no unnecessary parameters
- [ ] Author/Person schema present on all content pages (E-E-A-T signal)
- [ ] FAQ sections with `FAQPage` schema on all key pages
- [ ] Content uses self-contained H2 blocks (GEO optimization)
- [ ] `hreflang` tags if multi-language site

---
