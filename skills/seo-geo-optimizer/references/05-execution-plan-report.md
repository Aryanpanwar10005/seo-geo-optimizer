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
AI Crawler Policy (agreed with user — see T4-4):
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
- Why it matters for visibility
- What it likely costs (use the user's own data; never invent numbers)
- Official reference link

### Prioritized Action Plan

---

#### TIER 1 — Critical Foundation _(Day 1)_

| ID   | Action | Why | Official Reference |
| ---- | ------ | --- | ------------------ |
| T1-1 | Generate all HTML meta tags: unique `<title>` (describes the page, primary topic near the start; no Google length limit, ~50–60 characters often displays in full — heuristic), unique `<meta name="description">` (accurate summary; no length limit), `<meta name="robots">` only where a non-default rule is needed, `<link rel="canonical">`, `<meta name="viewport">`, `<meta charset>` | Clear indexing signals; titles and descriptions shape how the result looks (Google may rewrite both) | [Title Links](https://developers.google.com/search/docs/appearance/title-link) · [Snippets](https://developers.google.com/search/docs/appearance/snippet) |
| T1-2 | Add `Organization` JSON-LD on the homepage: name, url, logo (min 112×112px), sameAs (official profiles only), contactPoint. Only facts that are true and visible on the site. | Helps Google pick your logo and understand who you are. No properties are required. | [Google: Organization](https://developers.google.com/search/docs/appearance/structured-data/organization) |
| T1-3 | Add `WebSite` JSON-LD on the homepage: name, url, optional alternateName. Do not add SearchAction (the sitelinks search box was retired in Nov 2024; existing markup is harmless). | Tells Google your preferred site name | [Google: Site names](https://developers.google.com/search/docs/appearance/site-names) |
| T1-4 | Create an XML sitemap with accurate `<lastmod>` (skip `<priority>` and `<changefreq>`, which are ignored). Reference it in robots.txt and submit it in Google Search Console. | Helps discovery and recrawl of new and changed URLs, especially on large or new sites | [Google: Build a sitemap](https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap) |
| T1-5 | Add the site to Bing Webmaster Tools. Fastest route: import from Google Search Console, which also imports submitted sitemaps. Confirm the sitemap is processed. | Bing's index powers Bing and Microsoft Copilot, and ChatGPT search may query Bing for web results | [Bing Webmaster Tools](https://www.bing.com/webmasters/) · [OpenAI: ChatGPT search and Bing](https://help.openai.com/en/articles/10093903-chatgpt-search-for-enterprise-and-edu) |
| T1-6 | Audit `robots.txt`: correct format, no key pages blocked, CSS/JS files not blocked | Blocked CSS/JS can stop Google rendering and understanding the page | [Google: robots.txt](https://developers.google.com/search/docs/crawling-indexing/robots/intro) |
| T1-7 | Verify HTTPS on all pages. No mixed content warnings anywhere. | Part of Google's page experience guidance; a baseline for user trust and security | [Google: Page experience](https://developers.google.com/search/docs/appearance/page-experience) |
| T1-8 | **Rendering check:** if the site is client-side rendered (React/Vue/Angular CSR), confirm critical content, links, titles and canonicals appear in the raw HTML source. If not, plan SSR, static generation or pre-rendering. | Google renders JavaScript, but JS sites are harder to get right; Bing has advised pre-rendering for JS-heavy sites. Server HTML is the most robust option for every crawler. | [Google: JavaScript SEO](https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics) · [Bing: JavaScript and dynamic rendering](https://blogs.bing.com/webmaster/2018/10/bingbot-Series-JavaScript%2C-Dynamic-Rendering%2C-and-Cloaking-Oh-My/) |

---

#### TIER 2 — Performance & On-Page _(Week 1)_

| ID    | Action | Why | Official Reference |
| ----- | ------ | --- | ------------------ |
| T2-1  | Fix **LCP** (Largest Contentful Paint): compress and resize the hero image, serve WebP/AVIF, add `fetchpriority="high"` to the LCP image and never lazy-load it, preload it if it's discovered late. Target: **≤ 2.5 s** at the 75th percentile. | Core Web Vitals are used by Google's ranking systems; good scores don't guarantee rankings | [web.dev/lcp](https://web.dev/articles/lcp) · [Google: Core Web Vitals](https://developers.google.com/search/docs/appearance/core-web-vitals) |
| T2-2  | Fix **INP** (Interaction to Next Paint): break up long tasks and yield to the main thread, defer non-critical scripts, trim third-party JavaScript. Target: **≤ 200 ms**. ⚠️ INP replaced FID in March 2024. | Responsiveness is one of the three Core Web Vitals | [web.dev/inp](https://web.dev/articles/inp) |
| T2-3  | Fix **CLS** (Cumulative Layout Shift): explicit `width`+`height` (or `aspect-ratio`) on images, videos and embeds, reserve space for ads, use `font-display: optional` or metric-matched fallback fonts (`size-adjust`). Target: **≤ 0.1**. | Stable layout is part of good page experience | [web.dev/cls](https://web.dev/articles/cls) · [web.dev: Optimize CLS](https://web.dev/articles/optimize-cls) |
| T2-4  | Structure heading tags: one clear `<h1>` describing the page topic (closely related to the title), descriptive `<h2>` for main sections, `<h3>` for sub-sections, in logical order. | Helps people and screen readers scan the page. Google says heading order doesn't matter for ranking, so do this for users. | [Google: Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) |
| T2-5  | Add full Open Graph tags: `og:title`, `og:description`, `og:image` (at least 1200px wide, not a logo or text-heavy image), `og:url`, `og:type`, `og:site_name` | Controls share previews. Google also uses `og:image` (with schema.org image) to choose thumbnails in Search and Discover. | [Open Graph Protocol](https://ogp.me/) · [Google: Preferred image](https://developers.google.com/search/docs/appearance/google-images#specify-preferred-image) |
| T2-6  | Optional: X (Twitter) Card tags: `twitter:card` = `summary_large_image`, plus `twitter:title`, `twitter:description`, `twitter:image` where they differ from the og: tags | Share previews on X. X no longer hosts its Cards docs at a stable URL; the tags still work. | [Open Graph Protocol](https://ogp.me/) |
| T2-7  | Optional: `WebPage` JSON-LD on individual pages: name, description, url, dateModified, inLanguage. Keep dates accurate. | No Google rich result; helps describe the page to other consumers | [schema.org/WebPage](https://schema.org/WebPage) · [Google: Structured data intro](https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data) |
| T2-8  | Add `BreadcrumbList` JSON-LD schema on all multi-level pages | Breadcrumbs in Google desktop results (mobile results show the domain only since Jan 2025) | [Google: Breadcrumbs](https://developers.google.com/search/docs/appearance/structured-data/breadcrumb) |
| T2-9  | Mobile check: run a Lighthouse mobile audit and Search Console URL Inspection ("Test live URL") on key templates | Google indexes the mobile version of pages (mobile-first indexing) | [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview/) · [Google: Mobile-first indexing](https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing) |
| T2-10 | **BING:** Use the words your audience actually searches (B3) naturally in the title, H1, intro and URL slug. No exact-match stuffing. | Bing's guidelines treat keyword stuffing and "artificially engineered language" as abuse | [Bing Webmaster Guidelines](https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a) |
| T2-11 | **LOCAL:** Claim Bing Places for Business and Google Business Profile (if any local/regional relevance). Keep details identical to the site. | Local results in Bing Maps, Copilot and Google; Google's AI responses can include Business Profile data | [Bing Places for Business](https://www.bing.com/forbusiness/) · [Google: AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) |
| T2-12 | All image alt text: descriptive, concise, natural, no stuffing | Image search visibility + accessibility | [Google: Images](https://developers.google.com/search/docs/appearance/google-images) |

---

#### TIER 3 — Content & Authority _(Week 2–3)_

| ID   | Action | Why | Official Reference |
| ---- | ------ | --- | ------------------ |
| T3-1 | **FAQ content (optional):** keep visible FAQ sections where they genuinely help users. FAQPage markup no longer produces a Google rich result (removed May 2026) and isn't needed for AI Overviews or AI Mode. Add it only if the user wants it, and only for visible Q&A. | Avoids work with no Google benefit; visible answers still help readers | [Google: FAQ rich result removal](https://developers.google.com/search/updates#faq-deprecation) · [Google: AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) |
| T3-2 | **Numbered steps as real HTML lists:** for tutorials and guides, use `<ol>`/`<li>` steps under clear headings, with images where useful. Don't add HowTo markup for Google. | HowTo rich results were removed in 2023. Real list markup helps readers and featured snippet extraction. | [Google: HowTo and FAQ changes](https://developers.google.com/search/blog/2023/08/howto-faq-changes) · [Google: Featured snippets](https://developers.google.com/search/docs/appearance/featured-snippets) |
| T3-3 | Authorship: visible bylines linking to author pages; `Person` JSON-LD (name, url, jobTitle, sameAs) with true, visible details only | Google strongly encourages accurate authorship information. E-E-A-T itself isn't a ranking factor. | [Google: Helpful content (Who)](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) · [schema.org/Person](https://schema.org/Person) |
| T3-4 | Add `Article` or `BlogPosting` JSON-LD to all content pages: headline, author (name + url), datePublished, dateModified, image (several high-res images in 16:9, 4:3 and 1:1 recommended). Full spec in 14.3. | Helps Google show better title, image and date information | [Google: Article](https://developers.google.com/search/docs/appearance/structured-data/article) |
| T3-5 | Topic clarity audit: confirm the page's main topic, in the words users search, is clear in title, H1, opening paragraph, meta description and URL slug. Natural usage only — no stuffing. | Helps users and search engines see what the page is about | [Google: Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) |
| T3-6 | Plan topic clusters: one hub page per core topic plus supporting pages (heuristic: as many as the topic genuinely needs, typically 5–12). Supporting pages link to the hub and to each other. Details in 14.4. | Clear structure and internal links help users and crawlers find related content | [Google: Crawlable links](https://developers.google.com/search/docs/crawling-indexing/links-crawlable) |
| T3-7 | Content freshness strategy: review top pages on a schedule (heuristic: quarterly). Update `dateModified` and the visible "Last updated" date only for substantive changes. | Accurate dates; Google warns against changing dates to make pages seem fresh | [Google: Byline dates](https://developers.google.com/search/docs/appearance/publication-dates) · [Google: Helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) |
| T3-8 | Internal link audit: every important page reachable through crawlable `<a href>` links with descriptive anchor text (never "click here"). No orphan pages. 2–3 contextual links per page is a heuristic. | Link discovery and context for both engines | [Google: Crawlable links](https://developers.google.com/search/docs/crawling-indexing/links-crawlable) |
| T3-9 | **Distribution:** share key pages where the audience already is (LinkedIn, X, communities, newsletters) on a regular schedule | Discovery, links and genuine mentions. Not a ranking factor, and inauthentic "mentions" don't help. | [Google: AI optimization guide (mythbusting)](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) |

---

#### TIER 4 — GEO & AI Visibility _(Week 3–4)_

**Official basis:** Google says its generative AI features (AI Overviews, AI Mode) are rooted in core Search ranking and quality systems, so SEO best practices are GEO for Google. Bing's guidelines apply the same eligibility rules to Bing search, Copilot and grounding results. Everything in this tier rests on those documents. No chunking, no "write for AI" rules, no special markup.

| ID   | Action | Why | Official Reference |
| ---- | ------ | --- | ------------------ |
| T4-1 | **Indexability for AI answers:** confirm key pages are indexed, not blocked, and snippet-eligible (no stray `noindex` or `nosnippet`). In Search Console, confirm the "Search generative AI" setting is on Include (the default) unless the user chooses to opt out. | A page must be indexed and eligible for a snippet to appear in AI Overviews or AI Mode; the Search Console setting can exclude a whole site | [Google: AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) · [Search Console: generative AI control](https://support.google.com/webmasters/answer/16908024) |
| T4-2 | **Non-commodity content:** audit key pages for original value — first-hand experience, original data, expert takes, useful images or video. Rewrite or consolidate pages that only restate common knowledge. Never mass-produce pages for every query variant. | Google says unique, non-commodity content is likely to influence AI search presence more than anything else; scaled pages violate the scaled content abuse policy | [Google: AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) · [Google: Spam policies](https://developers.google.com/search/docs/essentials/spam-policies) |
| T4-3 | **llms.txt (optional, low priority):** add one only if the user wants it for tools that read it. Google Search ignores it, and OpenAI, Anthropic, Perplexity and Microsoft don't document using it for search. Never treat it as an indexing or access control. | Neither helps nor harms Google visibility | [Google: AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) · [llms.txt proposal](https://llmstxt.org) |
| T4-4 | **AI crawler policy:** agree a robots.txt policy with the user, split by purpose (table below). If the user wants AI-search visibility, allow the search crawlers; allowing training crawlers is the user's separate choice. | Each vendor documents separate tokens for search, training and user-triggered fetches. Blocking a training bot doesn't remove a site from that vendor's search. | [OpenAI bots](https://developers.openai.com/api/docs/bots) · [Anthropic bots](https://support.claude.com/en/articles/8896518) · [Perplexity bots](https://docs.perplexity.ai/docs/resources/perplexity-crawlers) · [Google crawlers](https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers) |
| T4-5 | **Preview controls:** use `nosnippet`, `data-nosnippet`, `max-snippet` or `noindex` (and Bing's `NOARCHIVE` / `NOCACHE`) only where the user wants to limit what's shown. Check none is applied to key content by accident. | These are the documented controls for what appears in Google, including AI features; Bing documents how they affect Copilot citations | [Google: AI features](https://developers.google.com/search/docs/appearance/ai-features) · [Google: Robots meta tag](https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag) · [Bing Webmaster Guidelines](https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a) |
| T4-6 | **Entity clarity:** one consistent name for the brand, products and authors across the site. `Organization`/`Person` markup with sameAs to official profiles, and to Wikidata/Wikipedia only if an entry already exists (never create one for SEO). Keep Merchant Center and Business Profile data current where relevant. | Bing's guidelines ask for clear, consistent entity names; Google uses Organization markup, Merchant Center and Business Profile data | [Bing Webmaster Guidelines](https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a) · [Google: Organization](https://developers.google.com/search/docs/appearance/structured-data/organization) · [Google: AI optimization guide](https://developers.google.com/search/docs/fundamentals/ai-optimization-guide) |
| T4-7 | Add `SoftwareApplication` JSON-LD for SaaS/app products: name, offers.price (0 if free), applicationCategory, operatingSystem, and aggregateRating or review only if real ratings are shown on the page | Required properties for Google's software app rich result; fake or undisclosed incentivized reviews are not allowed | [Google: Software app](https://developers.google.com/search/docs/appearance/structured-data/software-app) · [Google: Review snippet](https://developers.google.com/search/docs/appearance/structured-data/review-snippet) |
| T4-8 | **Bing Webmaster Tools + IndexNow:** confirm Bing Webmaster Tools (T1-5), enable IndexNow (CMS plugin or API) for added, updated and deleted URLs, and keep sitemap `<lastmod>` accurate | Bing's index grounds Copilot answers, and ChatGPT search may query Bing; Bing recommends IndexNow plus accurate lastmod to keep AI answers current | [Bing: Sitemaps in AI-powered search](https://blogs.bing.com/webmaster/2025/7/Keeping-Content-Discoverable-with-Sitemaps-in-AI-Powered-Search/) · [IndexNow](https://www.indexnow.org) |
| T4-9 | **Measurement:** record baselines in the Search Console Generative AI performance report (AI Overviews and AI Mode impressions) and Bing Webmaster Tools AI Performance (Copilot and Bing AI citations, grounding queries). Review monthly alongside clicks. | The only first-party data on AI visibility; Google warns that third-party tools have no access to its internal data | [Search Console: Generative AI report](https://support.google.com/webmasters/answer/16984139) · [Bing: AI Performance](https://blogs.bing.com/webmaster/2026/2/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview/) |

**AI crawler policy (T4-4)** — confirm each line with the user before editing robots.txt:

| Purpose | robots.txt tokens | Effect of blocking |
| ------- | ----------------- | ------------------ |
| Search and AI answers | `Googlebot`, `Bingbot`, `OAI-SearchBot`, `Claude-SearchBot`, `PerplexityBot` | Removes or reduces visibility in that engine's search and AI answers (Googlebot covers Google Search including AI Overviews and AI Mode; Bingbot covers Bing and Copilot) |
| Model training | `GPTBot`, `ClaudeBot`, `Google-Extended`, `Applebot-Extended`, `CCBot`, `meta-externalagent` | Opts out of training. No effect on search inclusion; Google-Extended does not affect Google Search or AI Overviews. |
| User-triggered fetches | `ChatGPT-User`, `Claude-User`, `Perplexity-User`, `Meta-ExternalFetcher` | Fetches made when a user asks. OpenAI, Perplexity and Meta say robots.txt may not apply to these. |

To keep a site out of Google's AI Overviews and AI Mode, use the Search Console "Search generative AI" setting or `nosnippet` / `noindex`. Google-Extended does not do this. Sources: [OpenAI](https://developers.openai.com/api/docs/bots) · [Anthropic](https://support.claude.com/en/articles/8896518) · [Perplexity](https://docs.perplexity.ai/docs/resources/perplexity-crawlers) · [Google](https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers) · [Apple](https://support.apple.com/en-us/119829) · [Meta](https://developers.facebook.com/docs/sharing/webmasters/web-crawlers/) · [Common Crawl](https://commoncrawl.org/ccbot) · [Search Console control](https://support.google.com/webmasters/answer/16908024)

---

#### TIER 5 — Content SEO & Blog Optimization (Week 4–5)

| ID   | Action | Why | Official Reference |
| ---- | ------ | --- | ------------------ |
| T5-1 | Heading audit on blog posts: one clear H1, descriptive H2/H3 in logical order (see T2-4 and 14.1) | Readability and accessibility | [Google: Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) |
| T5-2 | Answer-first introductions: state the main answer in the first paragraph, then support it (editorial heuristic) | Readers get what they came for; Google's helpful-content questions ask whether readers would need to search again | [Google: Helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) |
| T5-3 | `Article`/`BlogPosting` on every post — see T3-4 and 14.3 | Same as T3-4 | [Google: Article](https://developers.google.com/search/docs/appearance/structured-data/article) |
| T5-4 | Pillar-cluster structure for the blog — see T3-6 and 14.4 | Same as T3-6 | [Google: Crawlable links](https://developers.google.com/search/docs/crawling-indexing/links-crawlable) |
| T5-5 | Author audit on posts: visible byline, short bio, link to the author page with accurate `Person` markup — see T3-3 and 14.8 | Google strongly encourages accurate authorship information | [Google: Helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) |
| T5-6 | Content freshness sync: update `dateModified` only when substantive content changes occur | Google lists changing dates to make pages seem fresh as a warning sign | [Google: Helpful content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) · [Google: Byline dates](https://developers.google.com/search/docs/appearance/publication-dates) |
| T5-7 | RSS/Atom feed + IndexNow: submit the feed as a sitemap in Search Console and Bing Webmaster Tools; send IndexNow pings on publish | Feeds tell Google about recent changes; IndexNow speeds up Bing and other IndexNow engines (Google doesn't use IndexNow) | [Google: Sitemaps and RSS/Atom](https://developers.google.com/search/blog/2014/10/best-practices-for-xml-sitemaps-rssatom) · [IndexNow](https://www.indexnow.org) |

---
