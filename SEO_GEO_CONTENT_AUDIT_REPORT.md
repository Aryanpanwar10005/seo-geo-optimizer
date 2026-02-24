# SEO & GEO Skill — Content SEO Audit Report
## Missing Sections Analysis & Recommended Additions

**Prepared for:** SEO_GEO_SKILL.md (seo-geo-optimizer)
**Research sources:** Google Search Central, Bing Webmaster Guidelines, Schema.org, Google Quality Rater Guidelines (January 2025), Google December 2025 Core Update analysis, Google June 2025 Core Update, John Mueller / Gary Illyes official statements
**Date:** February 2026

---

> ⚠️ **INTEGRITY NOTE — APPLIES TO ALL RECOMMENDATIONS IN THIS REPORT**
>
> Every recommendation below is based strictly on what Google Search Central, Bing Webmaster Guidelines, Schema.org, and documented algorithm behavior currently state. No inflated claims, no fake comparisons, no promises of guaranteed rankings. SEO involves many variables outside your control. These are documented best practices — not guarantees.
>
> The skill file must never instruct an AI to:
> - Make false ranking promises ("this will get you to #1")
> - Suggest fake reviews, fake social signals, or manufactured engagement
> - Claim to be "the world's best" or any superlative without evidence
> - Misrepresent schema markup (marking up content that doesn't exist on the page)
> - Change publication dates without making meaningful content updates
> - Use any tactic that violates Google's spam policies or Bing's webmaster guidelines

---

## AUDIT SUMMARY

| Gap Area | Severity | Status in Current Skill |
|----------|----------|------------------------|
| H1 / H2 / H3 heading rules | 🔴 Critical | Surface mention only |
| Blog post structure & writing guidelines | 🔴 Critical | Missing entirely |
| Article / BlogPosting schema | 🔴 Critical | Missing entirely |
| Content cluster & pillar page framework | 🔴 Critical | Mentioned, no framework |
| Keyword research for content creation | 🔴 Critical | Missing entirely |
| Blog post title formulas | 🟡 High | Missing entirely |
| Internal linking strategy for content | 🟡 High | Not covered |
| Long-form content structure | 🟡 High | Missing entirely |
| Featured snippet writing patterns | 🟡 High | Missing entirely |
| Author E-E-A-T signals | 🟡 High | Mentioned, no implementation |
| Content freshness & update strategy | 🟡 High | Missing entirely |
| RSS feed optimization | 🟠 Medium | Missing entirely |
| Content calendar & publishing cadence | 🟠 Medium | Missing entirely |

---

## GAP 1 — H1 / H2 / H3 HEADING RULES
**Severity: Critical**

### What the current skill covers
The skill mentions H1/H2 structure in Tier 2 execution as a one-line checklist item. No rules, no formulas, no depth.

### What is missing

**H1 rules (based on Google Search Central + Google developer style guide):**

Google's Gary Illyes confirmed in July 2024 SEO Office Hours that strict heading hierarchy does not significantly impact ranking algorithms — headings primarily serve readability and accessibility. John Mueller has confirmed multiple H1 tags do not harm SEO. Despite this, best practice for content quality remains: one clear, descriptive H1 per page that describes the page's primary purpose.

- H1 must describe the page's main topic in plain language
- H1 and `<title>` tag should be different — the title is for SERPs, H1 is for the page
- H1 should contain the primary keyword naturally — not stuffed
- H1 length: no official limit, but 20–70 characters is the readable range
- H1 for homepage ≠ H1 for blog post ≠ H1 for product page (different formulas for each)
- Do not use H1 for styling — use CSS. Never use a heading level that doesn't fit the content hierarchy

**H2 rules:**

- H2 marks the major sections of a page — treat each H2 as a standalone topic block
- Each H2 should be able to stand alone as a self-contained answer — this is critical for Google AI Overviews and featured snippets, which extract by content block, not by full page
- H2s should target secondary and semantic keywords naturally
- Question-format H2s ("What is X?", "How does X work?") directly match voice search and People Also Ask queries — use them for informational content
- Statement H2s ("The 5 types of X", "Why X matters for Y") work better for listicles and how-to content
- One heading every 200–300 words is the observable pattern in top-ranking pages (source: Search Engine Land content chunking analysis, November 2025)
- H2 anchor text (the heading itself) should preview what the section answers — not be vague ("Introduction", "Overview")

**H3 rules:**

- H3 is a subsection of H2 — never place H3 without a parent H2
- Do not skip from H2 directly to H4 — breaks logical flow and accessibility
- H3 is ideal for: breaking a list into subgroups, drilling into a specific sub-angle, adding a definition or example under a broader concept
- H3s should use related and long-tail keyword variants naturally

**What to never do (common errors):**

- Using heading tags purely for visual styling (use CSS instead)
- Keyword-stuffing headings — Google detects this and it degrades user experience
- Empty headings with no content beneath them
- Skipping levels (H1 → H3 without H2)

**Official sources:**
- https://developers.google.com/style/headings
- https://developers.google.com/search/docs/appearance/featured-snippets
- Gary Illyes, SEO Office Hours, July 2024

---

## GAP 2 — BLOG POST STRUCTURE & SEO WRITING GUIDELINES
**Severity: Critical**

### What is missing

Google's December 2025 Core Update and June 2025 Core Update both reinforced one direction: content must be genuinely helpful, written from first-hand experience, and structured to answer user intent — not engineered purely for rankings.

**Required blog post structure framework (based on Google's Helpful Content system):**

A compliant blog post structure:

```
1. Title (H1) — primary keyword, describes the page's exact topic
2. Introduction — answers the main question in 2–3 sentences FIRST (inverted pyramid)
   — state the answer, then support it — do not bury the answer
3. Key Takeaways / TL;DR (optional but recommended for AI citation)
4. H2 Section 1 — major subtopic, self-contained answer block
   → H3 subpoints if needed
5. H2 Section 2 — next major subtopic
   → H3 subpoints
6. H2 FAQ Section — question-format H2s for People Also Ask optimization
7. Conclusion — brief summary + clear next step or CTA
8. Author bio — visible, linked to author page
```

**What Google rewards in 2025–2026 (based on Quality Rater Guidelines January 2025 + December 2025 Core Update):**

- First-hand, lived experience with the topic — not paraphrased generic knowledge
- Specific details, examples, data, and original observations
- Content that fully satisfies the user's query without requiring them to go elsewhere
- Clear author attribution with visible credentials
- Content that shows depth — not breadth without substance

**What Google penalizes (documented in December 2025 Core Update analysis):**

- Mass-produced AI content without expert oversight (87% negative impact reported across 150+ affected sites)
- Thin affiliate content lacking original testing or analysis
- Generic "SEO content" optimized for keywords but not for users
- Outdated content without recent updates or accuracy verification
- Changing publication dates without making meaningful content updates (fake freshness — now explicitly penalized)

**Content length guidelines:**
- No official word count from Google — length should match what is required to fully answer the query
- Pillar pages / comprehensive guides: typically 2,000+ words when covering a broad topic
- Cluster / supporting articles: 800–1,500 words for focused subtopic coverage
- Do not pad content — Google's systems detect thin content dressed up with filler

**Official sources:**
- https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- https://developers.google.com/search/docs/essentials
- https://static.googleusercontent.com/media/guidelines.raterhub.com/en//searchqualityevaluatorguidelines.pdf

---

## GAP 3 — ARTICLE / BLOGPOSTING SCHEMA
**Severity: Critical**

### What is missing

The current skill lists `Article` in the schema types but provides no template, no implementation rules, and no guidance on which type to use when.

**The three Article schema types (Google Search Central, December 2025):**

| Type | Use when |
|------|----------|
| `Article` | General articles, evergreen guides, opinion pieces |
| `NewsArticle` | Time-sensitive news reporting — do NOT use for evergreen blog content |
| `BlogPosting` | Blog posts — most specific type for standard blog content |

**Minimum required fields for Google rich results eligibility:**

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Article title — max 110 characters",
  "image": [
    "https://example.com/image-1x1.jpg",
    "https://example.com/image-4x3.jpg",
    "https://example.com/image-16x9.jpg"
  ],
  "datePublished": "2025-01-15T08:00:00+00:00",
  "dateModified": "2025-01-20T12:30:00+00:00",
  "author": {
    "@type": "Person",
    "name": "Author Full Name",
    "url": "https://example.com/about/author-name"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Site Name",
    "logo": {
      "@type": "ImageObject",
      "url": "https://example.com/logo.png"
    }
  },
  "description": "Meta description of the article",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://example.com/full-article-url"
  }
}
```

**Critical rules:**

- `headline` max 110 characters — truncated in rich results beyond this
- Images must be provided in all three aspect ratios (1:1, 4:3, 16:9) for full rich result eligibility
- `dateModified` must reflect actual content changes — not cosmetic edits (fake freshness is now penalized)
- `author.url` should link to a real author page with credentials — not just a homepage
- Schema markup must reflect visible content on the page — never mark up content that users cannot see

**When to combine with other schema:**

- Add `FAQPage` schema to the same page when a FAQ section is present
- Add `BreadcrumbList` to establish navigation hierarchy
- Add `Person` schema on the author page to reinforce E-E-A-T

**Official sources:**
- https://developers.google.com/search/docs/appearance/structured-data/article
- https://schema.org/BlogPosting
- https://schema.org/Article

---

## GAP 4 — CONTENT CLUSTER & PILLAR PAGE FRAMEWORK
**Severity: Critical**

### What is missing

The skill mentions "topic cluster planning" in Phase 7 but provides no framework whatsoever. Google's June 2025 Core Update explicitly rewarded topical authority — sites that cover subjects thoroughly and with connected content.

**The pillar-cluster model (based on current best practice documentation):**

```
PILLAR PAGE
├── Broad topic, 2,000+ words
├── Targets competitive head keyword
├── Links out to all cluster pages
│
├── CLUSTER PAGE 1 — specific subtopic
│   └── Links back to pillar
├── CLUSTER PAGE 2 — specific subtopic
│   └── Links back to pillar
├── CLUSTER PAGE 3 — specific subtopic
│   └── Links back to pillar
...
└── 8–12 cluster pages per pillar (minimum)
```

**Rules for pillar pages:**

- One pillar per broad topic — covers the subject comprehensively
- Should be the most authoritative, comprehensive page on that topic on the site
- Links out to every cluster page in the topic
- Updated regularly as the topic evolves
- Priority in XML sitemap

**Rules for cluster pages:**

- Each cluster page covers one specific subtopic only — never bleed into another cluster page's territory
- Each cluster page links back to the pillar using descriptive anchor text
- Keep anchor text descriptive and keyword-relevant — never use "click here" or "read more"
- Each cluster page links to 2–3 other related cluster pages (horizontal linking within the cluster)

**Internal linking rules (based on Google's crawlability guidelines):**

- Keep click depth to 3 or fewer from homepage to any important page
- Limit internal links per page to under 100 (Google's documented recommendation)
- Use contextual anchor text — the linked phrase should describe the target page's topic
- Never link for the sake of linking — every link must serve user navigation or semantic relevance
- Identify and fix orphan pages (pages with zero inbound internal links) — they cannot rank effectively

**Official sources:**
- https://developers.google.com/search/docs/crawling-indexing/links-crawlable
- https://developers.google.com/search/docs/essentials

---

## GAP 5 — KEYWORD RESEARCH FOR CONTENT CREATION
**Severity: Critical**

### What is missing

The skill collects keyword phrases from the user in the intake questionnaire (B3) but provides zero framework for expanding, validating, or structuring keyword research for content creation.

**The three keyword types for content strategy:**

| Type | Characteristics | Use for |
|------|----------------|---------|
| Head keywords | 1–2 words, high volume, high competition | Pillar pages |
| Body keywords | 2–3 words, moderate volume | Main cluster pages |
| Long-tail keywords | 4+ words, lower volume, high intent | Supporting cluster pages, FAQ sections |

**Keyword intent mapping (required before creating any content):**

| Intent | What the user wants | Content type to create |
|--------|--------------------|-----------------------|
| Informational | Learn about a topic | Blog post, guide, explainer |
| Navigational | Find a specific site or page | Homepage, brand page |
| Commercial | Research before buying | Comparison, review, best-of list |
| Transactional | Ready to buy or act | Product page, landing page |

**Free research tools (no paid subscription required):**

- Google Search → "People Also Ask" boxes and "Related Searches" at the bottom
- Google Search Console → Queries report (what you already rank for that needs content support)
- Bing Webmaster Tools → Keyword Research tool (completely separate data from Google)
- Google Trends → search volume trends over time, seasonal patterns
- Answer the Public → question-based keyword variations (free tier available)

**Semantic keyword strategy:**

Google's language matching systems are sophisticated — they understand synonyms and related concepts. This means content should cover the topic completely using natural language, not repeat the exact keyword phrase. Use related terms, synonyms, and entity names naturally throughout the content.

**Official sources:**
- https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- https://developers.google.com/search/docs/fundamentals/creating-helpful-content

---

## GAP 6 — BLOG POST TITLE FORMULAS
**Severity: High**

### What is missing

No title writing guidance exists in the skill. Title tags and H1s are different — the title tag is what shows in SERPs and is limited to 50–60 characters; H1 is what appears on the page and has more flexibility.

**Title tag rules (from Google's title link guide):**

- 50–60 characters — beyond 60 gets truncated in most SERP displays
- Primary keyword toward the front when natural
- Title tag and H1 should be related but not identical — Google rewrites title tags when the tag doesn't match page content, so make it accurate
- Never keyword-stuff — Google's systems detect and rewrite manipulative title tags
- Make it specific to what the page actually covers

**H1 title formulas for blog posts (based on featured snippet and SERP pattern analysis):**

For informational content:
- "How to [Do X]: [Specific Benefit or Context]"
- "What Is [X]? [One-Line Answer or Context]"
- "The [Number] [Topic] That [Specific Outcome]"
- "[Specific Keyword]: A Complete Guide for [Audience]"

For commercial/comparison content:
- "[Product A] vs [Product B]: Which Is Right for [Use Case]?"
- "Best [Category] for [Specific Need] in [Year]"

What to avoid:
- Clickbait titles that don't match page content (Google adjusts these and it erodes trust)
- Vague titles ("My Thoughts on SEO")
- Keyword-stuffed titles ("Best SEO Tips SEO Guide SEO Strategy 2025")
- Superlative claims you cannot substantiate ("The World's Best Guide to X")

**Official sources:**
- https://developers.google.com/search/docs/appearance/title-link
- https://developers.google.com/search/docs/appearance/snippet

---

## GAP 7 — FEATURED SNIPPET WRITING PATTERNS
**Severity: High**

### What is missing

The skill mentions featured snippet optimization as a goal but provides zero writing patterns for achieving it.

**How featured snippets work (Google Search Central):**

Featured snippets are selected automatically from pages that already rank in the top 10. Google extracts a block of content it determines best answers the query. You cannot "apply" for featured snippets — you write content that makes it easy for Google to extract.

**The three snippet types and how to write for each:**

**Paragraph snippets** (most common — answers "what is" and "why" questions):
- Place a question-format H2 above the answer
- Write a 2–3 sentence direct answer immediately below the H2
- Start the answer with a clear definition: "X is Y." format
- Keep the answer between 40–60 words
- Example H2: "What is Core Web Vitals?"
- Example answer: "Core Web Vitals are a set of three specific metrics Google uses to measure page experience: LCP (loading), INP (interactivity), and CLS (visual stability). Google uses them as ranking signals for all pages."

**List snippets** (answers "how to" and "best of" questions):
- Use a question H2 above the list
- Use a proper `<ol>` (ordered) or `<ul>` (unordered) HTML list — not just dashes or asterisks in text
- Keep list items concise — one idea per item
- 5–8 items is the observable sweet spot

**Table snippets** (answers comparison and "what are the types of" questions):
- Use proper HTML `<table>` markup — not a text-based table
- Add a descriptive H2 above the table
- Keep tables under 5 columns for mobile readability

**Rules that apply to all snippet types:**

- The page must already be indexable and ranking — snippet optimization is about extractability, not initial ranking
- Content under each H2 must be self-contained — it must answer the H2's question completely without the reader needing any other section
- Never write clickbait questions as H2s if you don't fully answer them immediately below

**Official sources:**
- https://developers.google.com/search/docs/appearance/featured-snippets

---

## GAP 8 — AUTHOR E-E-A-T SIGNALS FOR BLOG POSTS
**Severity: High**

### What is missing

The skill mentions E-E-A-T as a concept and lists it as a Google-specific optimization goal, but provides no implementation guidance for blog content specifically.

**What Google's Quality Rater Guidelines say about authors (January 2025 update):**

Google evaluates content at three levels: content level, author level, and site level. For blog content, author-level signals matter especially for YMYL topics (health, finance, legal, safety) but are increasingly reviewed for all topics after the December 2025 Core Update.

**Required author page elements:**

- Full name — not "Admin" or "Editor"
- Professional credentials relevant to the topics they write about
- Years of experience in the subject area
- Links to external profiles that corroborate expertise (LinkedIn, professional associations, published work)
- Link to or from their published articles on the site (bidirectional)
- Photo (increases trust signals for human readers and indirectly for Google's quality assessment)

**Author bio minimum requirements per article page:**

- Visible byline with the author's name — linked to their author page
- 1–2 sentence bio excerpt at the bottom of the article
- The full author page linked from that bio excerpt
- Do NOT use generic bylines like "SEO Team" or "Staff Writer" for YMYL topics

**Person schema for authors:**

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Author Full Name",
  "url": "https://example.com/author/name",
  "image": "https://example.com/author-photo.jpg",
  "jobTitle": "Their actual job title",
  "sameAs": [
    "https://www.linkedin.com/in/authorprofile",
    "https://twitter.com/authorhandle"
  ],
  "knowsAbout": ["topic 1", "topic 2"]
}
```

**What NOT to do:**

- Do not fabricate credentials — Google's systems and human quality raters verify claims
- Do not write fake testimonials or fabricated endorsements
- Do not claim expertise the author does not have — this is both an SEO risk and an ethical violation
- Do not use paid review schemes or review manipulation — violates Google's spam policies and potentially consumer protection laws

**Official sources:**
- https://static.googleusercontent.com/media/guidelines.raterhub.com/en//searchqualityevaluatorguidelines.pdf
- https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- https://schema.org/Person

---

## GAP 9 — CONTENT FRESHNESS & UPDATE STRATEGY
**Severity: High**

### What is missing

The skill mentions "content freshness plan" in the beginner timeline but provides zero framework for executing it.

**How Google's freshness algorithm works (based on December 2025 Core Update documentation):**

Google categorizes queries into four freshness types:

| Query type | Examples | Freshness importance |
|-----------|----------|---------------------|
| Breaking | News, viral events | Critical — hours matter |
| Recent | Product launches, reviews | High — weeks matter |
| Ongoing | Industry topics, tutorials | Medium — months matter |
| Evergreen | Definitions, how-tos | Low — accurate > recent |

**CRITICAL — December 2025 Core Update explicitly penalizes:**
Changing publication dates without making meaningful content updates. This is now treated as a deceptive practice and results in trustworthiness signal reduction. Only update `dateModified` in schema and on the page when substantive changes are made.

**What counts as a meaningful content update:**

- Adding new data, statistics, or research that was not previously in the article
- Updating factual information that has changed (e.g., a software version number, a law that changed)
- Adding a new section that addresses a topic the original article missed
- Removing information that is now incorrect or outdated
- Revising recommendations based on new official guidance

**What does NOT count (and should not trigger a date update):**

- Fixing a typo
- Changing image alt text
- Minor CSS adjustments
- Adding an internal link without changing body content

**Content audit schedule:**

- Monthly: Check GSC for pages losing impressions — these are candidates for update
- Quarterly: Refresh top-performing articles with new data and updated sections
- Annually: Full content audit — identify pages to update, consolidate, or remove
- On algorithm update announcement: Re-evaluate pages that lost traffic against the update's stated focus

**Official sources:**
- https://developers.google.com/search/docs/appearance/title-link (date signals)
- Google December 2025 Core Update official announcement
- https://developers.google.com/search/blog

---

## GAP 10 — RSS FEED OPTIMIZATION
**Severity: Medium**

### What is missing

The skill covers XML sitemaps but completely omits RSS/Atom feeds, which Google explicitly recommends alongside XML sitemaps.

**What Google says about RSS feeds (Google Search Central Blog, official documentation):**

Google officially recommends using BOTH XML sitemaps AND RSS/Atom feeds together:
- XML sitemaps: tell Google about all pages on the site
- RSS/Atom feeds: tell Google about recent updates — crawled more frequently than sitemaps

Source: https://developers.google.com/search/blog/2014/10/best-practices-for-xml-sitemaps-rssatom

**RSS feed SEO best practices (based on Google Search Central official blog):**

- Include only canonical URLs in the feed — never duplicate URLs
- Set `pubDate` accurately — only update timestamps when content changes meaningfully
- Do not artificially modify timestamps — Google uses these to track content lifecycle and detects manipulation
- Submit the RSS feed URL in Google Search Console (Sitemaps section) in addition to the XML sitemap
- Submit the RSS feed URL in Bing Webmaster Tools separately
- Keep the feed to recent updates — last 20–50 items is the practical standard
- Ensure all URLs in the feed return 200 status codes — broken links in RSS confuse crawlers

**WebSub / PubSubHubbub:**

John Mueller (Google) has recommended using RSS with PubSubHubbub (now called WebSub) as the fastest way to get new content indexed. This is a ping protocol that notifies search engines and feed aggregators the moment new content is published. Most WordPress installs support this natively; for custom sites it requires implementation.

**Bing-specific note:**

Bing supports IndexNow, a separate URL submission protocol that is more direct for Bing indexing than relying on RSS alone. Use both in parallel:
- RSS/Atom feed submitted to Bing Webmaster Tools
- IndexNow API for immediate URL submission on publish

**Official sources:**
- https://developers.google.com/search/blog/2014/10/best-practices-for-xml-sitemaps-rssatom
- https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a
- https://www.indexnow.org

---

## GAP 11 — CONTENT CALENDAR & PUBLISHING CADENCE
**Severity: Medium**

### What is missing

No guidance exists in the skill for content planning or publishing frequency.

**What the data shows about publishing cadence:**

Sites maintaining 9 or more new blog posts per month showed 20.1% higher organic traffic growth — 3.6× stronger than sites publishing fewer posts (Stratabeat 2025 B2B SaaS SEO Performance Report). However, this is a correlation finding, not a causal guarantee. Quality always supersedes quantity — one excellent article outranks ten thin ones.

**Practical content calendar framework:**

```
MONTHLY MINIMUM (for sites building authority):
→ 2 cluster articles supporting active pillar pages
→ 1 content refresh of an existing page losing impressions
→ 1 FAQ-rich article targeting People Also Ask terms in your niche

QUARTERLY:
→ 1 pillar page or major guide
→ Content audit review (GSC impressions vs. previous quarter)
→ Update dateModified on top 3 refreshed pages (only if meaningfully updated)

ON ALGORITHM UPDATE:
→ Review affected pages within 2 weeks of rollout completion
→ Compare pre/post impression data in GSC
→ Update content based on stated focus of the update
```

**Publishing rules:**

- Publish one complete, high-quality article before publishing two thin ones
- Every published article should fully cover its topic — do not split one topic across multiple thin articles (this creates cannibalization)
- Keyword cannibalization: if two articles on your site target the same primary keyword with the same intent, they compete against each other — consolidate them

**Official sources:**
- https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- https://developers.google.com/search/blog

---

## RECOMMENDED NEW SKILL SECTION STRUCTURE

Based on this audit, add the following as **PART 14 — CONTENT SEO & BLOG OPTIMIZATION** to the existing skill file.

The section should cover, in order:
1. H1 / H2 / H3 complete rules
2. Blog post structure framework
3. Article / BlogPosting schema templates
4. Content cluster and pillar page framework
5. Keyword research framework for content
6. Blog title rules
7. Featured snippet writing patterns
8. Author E-E-A-T implementation
9. Content freshness rules
10. RSS feed setup and optimization
11. Content calendar framework

The accompanying file `SEO_GEO_SKILL_PART14_ADDITION.md` contains the complete ready-to-add section for the skill file.

---

## OFFICIAL REFERENCES ADDITIONS

These references should be added to the existing PART 13 Official References Index:

**New Google references:**
- **Article Structured Data:** https://developers.google.com/search/docs/appearance/structured-data/article
- **Featured Snippets Guide:** https://developers.google.com/search/docs/appearance/featured-snippets (already listed — confirm it covers current guidance)
- **RSS/Atom Best Practices:** https://developers.google.com/search/blog/2014/10/best-practices-for-xml-sitemaps-rssatom
- **Google Developer Style Guide — Headings:** https://developers.google.com/style/headings
- **Quality Rater Guidelines (January 2025):** https://static.googleusercontent.com/media/guidelines.raterhub.com/en//searchqualityevaluatorguidelines.pdf

**New Schema.org references:**
- **BlogPosting:** https://schema.org/BlogPosting
- **NewsArticle:** https://schema.org/NewsArticle

**New Bing references:**
- **IndexNow:** https://www.indexnow.org

---

*End of Audit Report*
