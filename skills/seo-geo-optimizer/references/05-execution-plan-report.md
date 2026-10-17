<!-- Part 5 of the seo-geo-optimizer skill. Generated from skill/SEO_GEO_SKILL.md by scripts/sync-skill.js. Edit that file, then run npm run sync:skill. -->

## PART 5 — EXECUTION PLAN REPORT (EPR) TEMPLATE

Generate a complete, filled EPR before executing anything. Present to user. Require written approval before any action.

### EPR Header

```
Product Name:
Product URL:
Date of Analysis:
Primary Search Engines: Google · Bing · Both
GEO/AI Visibility Goal:
Top 5 Priority Keywords:
Primary Competitor:
Tech Stack & Rendering Method:
SEO Maturity Level: Beginner / Intermediate / Advanced

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
APPROVED BY (User must complete):  _______________________
Approval Date:  _______________________
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

### Situation Assessment

Write 4–6 sentences. Cover: current ranking position, biggest barriers to ranking, what competitor analysis revealed, fastest ROI path. No filler. Specific, factual, cited.

### Critical Findings

List the top 3–5 most urgent issues found. Each finding must state:

- What it is
- Why it matters for ranking
- What it costs in lost visibility
- Official reference link

### Prioritized Action Plan

---

#### TIER 1 — Critical Foundation _(Day 1)_

| ID   | Action                                                                                                                                                                                                               | Why                                                                                          | Official Reference                                                                                                                                        |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| T1-1 | Generate all HTML meta tags: `<title>` (50–60 chars, keyword near start), `<meta description>` (150–160 chars), `<meta robots>`, `<link rel="canonical">`, `<meta viewport>`, `<meta charset>`                       | Zero ranking without correct indexing signals                                                | [Title Links](https://developers.google.com/search/docs/appearance/title-link) · [Snippets](https://developers.google.com/search/docs/appearance/snippet) |
| T1-2 | Add `Organization` JSON-LD schema: name, url, logo (min 112×112px), sameAs all social profiles, contactPoint                                                                                                         | Brand identity signal. Required for AI engines to understand who you are.                    | [schema.org/Organization](https://schema.org/Organization)                                                                                                |
| T1-3 | Add `WebSite` JSON-LD schema: name, url, SearchAction potentialAction                                                                                                                                                | Enables sitelinks search box in Google. Declares canonical site identity.                    | [schema.org/WebSite](https://schema.org/WebSite)                                                                                                          |
| T1-4 | Create XML sitemap. Submit to Google Search Console.                                                                                                                                                                 | Pages not in sitemap may never be indexed.                                                   | [Google: Sitemaps](https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview)                                                         |
| T1-5 | Submit XML sitemap to Bing Webmaster Tools _(separate — Bing does not sync with GSC)_                                                                                                                                | Bing requires its own sitemap submission. Without it, Bing won't index you.                  | [Bing Webmaster Tools](https://www.bing.com/webmasters/)                                                                                                  |
| T1-6 | Audit `robots.txt`: correct format, no key pages blocked, CSS/JS files not blocked                                                                                                                                   | Blocked CSS/JS = search engine cannot render page = severe ranking drop                      | [Google: robots.txt](https://developers.google.com/search/docs/crawling-indexing/robots/intro)                                                            |
| T1-7 | Verify HTTPS on all pages. No mixed content warnings anywhere.                                                                                                                                                       | Confirmed ranking signal for Google. Trust signal for Bing.                                  | [Google: HTTPS](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)                                                                 |
| T1-8 | **BING CRITICAL:** If site uses React/Vue/Angular CSR — check that critical content appears in raw HTML source without JavaScript execution. If not visible in source: SSR or pre-rendering is required immediately. | Bing cannot render JavaScript well. Client-side-only apps are effectively invisible to Bing. | [Bing Webmaster Guidelines](https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a)                                                           |

---

#### TIER 2 — Performance & On-Page _(Week 1)_

| ID    | Action                                                                                                                                                                                      | Why                                                                                         | Official Reference                                                                                     |
| ----- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ |
| T2-1  | Fix **LCP** (Largest Contentful Paint): compress hero images, convert to WebP, add `width`+`height` attributes, `<link rel="preload">` the LCP image. Target: **under 2.5 seconds**.        | 54% of sites fail CWV — huge competitive gap for those who pass.                            | [web.dev/lcp](https://web.dev/articles/lcp)                                                            |
| T2-2  | Fix **INP** (Interaction to Next Paint): break up long JavaScript tasks, defer non-critical scripts, use `requestIdleCallback`. Target: **under 200ms**. ⚠️ INP replaced FID in March 2024. | Page responsiveness is a direct ranking signal.                                             | [web.dev/inp](https://web.dev/articles/inp)                                                            |
| T2-3  | Fix **CLS** (Cumulative Layout Shift): add explicit `width`+`height` to all images/videos/ads, reserve space for embeds, use `font-display: swap`. Target: **under 0.1**.                   | Unstable layout = poor UX = ranking penalty.                                                | [web.dev/cls](https://web.dev/articles/cls)                                                            |
| T2-4  | Structure heading tags: one `<h1>` per page (matches title), keyword-rich `<h2>` for main sections, `<h3>` for sub-sections. Never skip heading levels.                                     | Heading structure is a primary on-page relevance signal for both Google and Bing.           | [Google: Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)      |
| T2-5  | Add full Open Graph tags: `og:title`, `og:description`, `og:image` (min 1200×630px), `og:url`, `og:type`, `og:site_name`                                                                    | **Direct Bing ranking input via social sharing.** Also controls how pages look when shared. | [Open Graph Protocol](https://ogp.me/)                                                                 |
| T2-6  | Add Twitter Card tags: `twitter:card` (use `summary_large_image`), `twitter:title`, `twitter:description`, `twitter:image`                                                                  | Social visibility + Bing social ranking signal                                              | [Twitter Cards](https://developer.twitter.com/en/docs/twitter-for-websites/cards/)                     |
| T2-7  | Add `WebPage` JSON-LD schema to every page: name, description, url, datePublished, dateModified, inLanguage                                                                                 | Communicates exact page type and freshness to crawlers                                      | [schema.org/WebPage](https://schema.org/WebPage)                                                       |
| T2-8  | Add `BreadcrumbList` JSON-LD schema on all multi-level pages                                                                                                                                | Navigation signals + cleaner breadcrumb display in SERPs                                    | [Google: Breadcrumbs](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb) |
| T2-9  | Verify Google Mobile-Friendly Test passes                                                                                                                                                   | Google indexes mobile version first (mobile-first indexing)                                 | [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly)                                 |
| T2-10 | **BING SPECIFIC:** Verify exact-match keyword phrase appears verbatim in title, H1, first paragraph, URL slug, and meta description                                                         | Bing weights exact-match keywords far more heavily than Google                              | [Bing Webmaster Guidelines](https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a)        |
| T2-11 | **BING SPECIFIC:** Create or claim Bing Places listing (if any local/regional relevance)                                                                                                    | Bing Maps + Copilot local visibility                                                        | [Bing Places](https://www.bingplaces.com/)                                                             |
| T2-12 | All image alt text: descriptive, natural keyword use, under 125 chars, no stuffing                                                                                                          | Image search visibility + accessibility + crawl signal                                      | [Google: Images](https://developers.google.com/search/docs/appearance/google-images)                   |

---

#### TIER 3 — Content & Authority _(Week 2–3)_

| ID   | Action                                                                                                                                                  | Why                                                                                                      | Official Reference                                                                                                                          |
| ---- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| T3-1 | Add `FAQPage` JSON-LD schema on all key pages with real user questions                                                                                  | **Pages with FAQPage schema are 3.2× more likely to appear in Google AI Overviews**                      | [Google: FAQPage](https://developers.google.com/search/docs/appearance/structured-data/faqpage)                                             |
| T3-2 | Add `HowTo` JSON-LD schema on all instructional/tutorial/guide content: steps, tools, totalTime                                                         | AI step extraction + voice search compatibility                                                          | [Google: HowTo](https://developers.google.com/search/docs/appearance/structured-data/how-to)                                                |
| T3-3 | Add `Person`/`Author` JSON-LD schema on content pages: name, credentials, bio URL, sameAs LinkedIn                                                      | **E-E-A-T (Experience, Expertise, Authoritativeness, Trustworthiness) signal.** AI citation credibility. | [schema.org/Person](https://schema.org/Person) · [E-E-A-T](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) |
| T3-4 | Add `Article` or `BlogPosting` JSON-LD schema to all content pages: headline, author, datePublished, publisher, image                                   | Author authority + content freshness signal                                                              | [schema.org/Article](https://schema.org/Article)                                                                                            |
| T3-5 | Keyword placement audit: confirm target keyword is in title, H1, first 100 words of body, meta description, URL slug. Natural usage only — no stuffing. | Core on-page signal for both Google and Bing                                                             | [Google: Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)                                           |
| T3-6 | Build topic cluster: identify hub (main) page + 5–10 supporting pages around the same core topic. Internal link all supporting pages back to hub.       | Google favors niche expertise. Topic clusters drive sustained long-term ranking.                         | [Google: Helpful Content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)                                  |
| T3-7 | Content freshness strategy: update `dateModified` in schema on every content update. Plan quarterly refresh cycle for top pages.                        | Pages updated within 12 months rank avg. 4.6 positions higher.                                           | [Google: Freshness](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)                                               |
| T3-8 | Internal link audit: every page links to 2–3 related pages. No orphan pages. All anchor text descriptive — never "click here".                          | PageRank distribution + crawl discovery for both engines                                                 | [Google: Links](https://developers.google.com/search/docs/fundamentals/seo-starter-guide)                                                   |
| T3-9 | **BING SPECIFIC:** Social sharing strategy — publish key pages on Facebook and LinkedIn on a regular schedule                                           | Explicit Bing ranking factor. Social engagement directly boosts Bing ranking.                            | [Bing Webmaster Guidelines](https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a)                                             |

---

#### TIER 4 — GEO & AI Visibility _(Week 3–4)_

| ID   | Action | Why | Official Reference |
| ---- | ------ | --- | ------------------ |
| T4-1 | Restructure intro paragraphs: lead with the direct answer (inverted pyramid) in the first 40–60 words | Increases featured snippet eligibility + AI extraction reliability | [Google: Snippets](https://developers.google.com/search/docs/appearance/featured-snippets) |
| T4-2 | Optimize content density: ensure at least one cited statistic per 200 words | Essential authority and EEAT signal for Perplexity and Gemini engines | [E-E-A-T Guidelines](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) |
| T4-3 | Configure `llms.txt` at site root pointing to key markdown briefs | Declare clean indexing entrypoints optimized directly for LLMs | [LLMs.txt Spec](https://llmstxt.org) |
| T4-4 | Allow PerplexityBot, GPTBot, and ClaudeBot in `robots.txt` | Ensure AI crawlers have full indexing permissions | [AI Bot Directives](https://platform.openai.com/docs/gptbot) |
| T4-5 | Format headings as direct questions or statements (>4 words) | Direct alignment with exact queries typed into Generative Engines | [Google: Helpful Content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) |
| T4-6 | Implement sameAs entity linking to Wikidata / Wikipedia profiles | Explicit identity linking for Knowledge Graph ingestion | [schema.org/sameAs](https://schema.org/sameAs) |
| T4-7 | Add `SoftwareApplication` JSON-LD schema for SaaS/app products: applicationCategory, operatingSystem, offers (pricing) | App-specific rich results + AI product citation | [schema.org/SoftwareApplication](https://schema.org/SoftwareApplication) |

---

#### TIER 5 — Content SEO & Blog Optimization (Week 4–5)

| ID   | Action                                                                                                                                       | Why                                                                     | Official Reference                                                                                         |
| ---- | -------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| T5-1 | Audit H1/H2/H3 structure: ensure one H1 per page, standalone H2 answer blocks, and correct heading hierarchy                                 | Blocks are the extraction unit for AI Overviews and Copilot             | [Google: Snippets](https://developers.google.com/search/docs/appearance/featured-snippets)                 |
| T5-2 | Restructure intro paragraphs: lead with the direct answer (inverted pyramid) in the first 40–60 words                                        | Increases featured snippet eligibility + AI extraction reliability      | [Google: Snippets](https://developers.google.com/search/docs/appearance/featured-snippets)                 |
| T5-3 | Add `BlogPosting` or `Article` schema to all content pages: headline, images (Image aspect ratios 1:1/4:3/16:9), datePublished, dateModified | Required for Google Discover + Big Rich Results eligibility             | [Google: Article](https://developers.google.com/search/docs/appearance/structured-data/article)            |
| T5-4 | Implement Pillar-Cluster model (Semantic keyword clusters): one pillar page per topic linking to 8–12 cluster pages                          | Establishes topical authority — critical for the Helpful Content System | [Google: Helpful Content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) |
| T5-5 | Author E-E-A-T audit: visible byline, custom author bio, and link to credentialed author page with `Person` schema                           | Core trust signal for both Google (E-E-A-T) and users                   | [Google: E-E-A-T](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)         |
| T5-6 | Content freshness sync: update `dateModified` only when substantive content changes occur                                                    | Fake freshness (date changes without content updates) is penalized      | [Google: Blog](https://developers.google.com/search/blog)                                                  |
| T5-7 | RSS Feed + WebSub/IndexNow setup: submit RSS to GSC/Bing WT and enable immediate pinging on publish                                          | Fastest route to indexing new content in Google AND Bing                | [Google: RSS](https://developers.google.com/search/blog/2014/10/best-practices-for-xml-sitemaps-rssatom)   |

---
