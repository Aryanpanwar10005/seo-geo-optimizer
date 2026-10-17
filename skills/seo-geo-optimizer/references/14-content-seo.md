<!-- Part 14 of the seo-geo-optimizer skill. Generated from skill/SEO_GEO_SKILL.md by scripts/sync-skill.js. Edit that file, then run npm run sync:skill. -->

## PART 14 — CONTENT SEO & BLOG OPTIMIZATION

This section covers everything the AI needs to optimize blog posts, articles, and content-driven pages. Apply this section whenever the user's site includes a blog, news section, or any content beyond static landing pages.

---

### ⚠️ INTEGRITY RULES FOR THIS ENTIRE SECTION

Before using any guidance in this section, the AI must internalize these non-negotiable rules:

**NEVER instruct the user to:**

- Make false ranking promises — SEO involves variables outside anyone's control
- Write fake reviews, fake testimonials, or manufactured social engagement of any kind
- Use paid or incentivized reviews without clear disclosure — violates Google's review snippet guidelines and consumer protection laws in most jurisdictions
- Claim credentials, expertise, or experience the author does not actually have, or create fake author profiles (made-up names, AI-generated headshots) — Google calls this deception
- Mark up content in schema that does not visibly exist on the page — Google requires schema to reflect visible page content
- Change publication dates without making meaningful content updates — Google's helpful-content guidance flags "changing the date of pages to make them seem fresh" as a warning sign
- Generate pages at scale (with AI or otherwise) mainly to manipulate rankings or AI answers — scaled content abuse
- Make superlative claims ("best in the world", "#1 guide") without verifiable evidence
- Copy or reuse competitors' content

**Source:** Google Search Essentials — https://developers.google.com/search/docs/essentials
**Source:** Google Spam Policies — https://developers.google.com/search/docs/essentials/spam-policies
**Source:** Helpful content — https://developers.google.com/search/docs/fundamentals/creating-helpful-content
**Source:** Review snippet guidelines — https://developers.google.com/search/docs/appearance/structured-data/review-snippet

---

### 14.1 — H1 / H2 / H3 HEADING RULES

**Official basis:** Google SEO Starter Guide (headings and their order), Google title link documentation, Google Developer Style Guide (https://developers.google.com/style/headings — writing style, not ranking guidance)

Google says heading order doesn't matter for ranking and there's no ideal number of headings. The rules below are for readers and accessibility.

#### H1 Rules

| Rule                                         | Explanation |
| -------------------------------------------- | ----------- |
| One primary H1 per page                      | A clarity convention. Google says multiple headings don't hurt Search, but one clear H1 tells readers the page's primary topic |
| H1 and title describe the same topic         | They can match or differ. Google may use the H1 for the title link if the `<title>` is unhelpful |
| Contains the primary keyword naturally       | Do not force it — if the keyword fits naturally, use it; if it creates awkward phrasing, prioritize readability |
| Describes the page's exact purpose           | Per Google's developer style guide: "Write document titles based on the primary purpose of the document" |
| 20–70 characters is a readable range         | Heuristic only — no official character limit |
| Never use H1 for styling                     | Use CSS for visual formatting. Reserve heading tags for content structure |
| Homepage H1 ≠ Blog post H1 ≠ Product page H1 | Each page type has a different primary purpose — the H1 formula changes accordingly |

**Homepage H1 formula:** `[Brand Name] — [What You Do] for [Who You Serve]`
**Blog post H1 formula:** `[Primary Keyword Naturally Phrased as the Article's Exact Topic]`
**Product/service page H1 formula:** `[Product/Service Name] — [Primary Benefit or Use Case]`

#### H2 Rules

H2 tags mark the major sections of a page. Each H2 covers one clear subtopic so readers can scan and jump in from search. Google says there's no need to break content into small chunks for AI features; write sections for readers.

| Rule                                                  | Explanation |
| ----------------------------------------------------- | ----------- |
| Each H2 section makes sense on its own                | Readers often land mid-page; the content below each H2 should cover that subtopic without relying on other sections |
| Question-format H2s for informational content         | "What is X?", "How does X work?", "Why does X matter?" — these mirror People Also Ask questions |
| Statement-format H2s for listicles and how-to content | "The 5 types of X", "How to do X in 3 steps" — clearer for structured content |
| Contains semantic keyword variants naturally          | Use related terms and synonyms — do not repeat the exact H1 keyword |
| Add headings where the topic changes                  | No ideal number or frequency (Google); if it feels like too many, it probably is |
| Descriptive — never vague                             | "Introduction" and "Overview" are weak H2s. "What Core Web Vitals Are and Why They Affect Rankings" is strong |
| H2 text previews the section                          | The reader should know what they will find in the section just from reading the H2 |

#### H3 Rules

H3 is a subsection within an H2. It is never placed without a parent H2.

| Rule                                          | Explanation |
| --------------------------------------------- | ----------- |
| Never place H3 without a parent H2            | Do not skip heading levels — breaks logical structure and accessibility |
| Use for sub-angles within an H2 section       | Drilling into a specific example, a definition, a step within a process |
| Long-tail keyword variants fit naturally here | H3s often match the most specific, long-tail search queries |
| Do not use H3 for styling                     | Same rule as H1 — heading tags are for structure, not visual design |

**What to never do with any heading tag:**

- Skip levels (H1 → H3 without H2) — breaks accessibility and logical flow (Google says order doesn't affect ranking)
- Use empty headings with no content beneath them
- Stuff keywords into headings
- Use identical headings on different pages of the same site

**Source:** https://developers.google.com/search/docs/fundamentals/seo-starter-guide
**Source:** https://developers.google.com/search/docs/appearance/title-link
**Source:** https://developers.google.com/style/headings

---

### 14.2 — BLOG POST STRUCTURE FRAMEWORK

**Official basis:** Google's helpful-content guidance (https://developers.google.com/search/docs/fundamentals/creating-helpful-content), Google Quality Rater Guidelines (September 2025 version; raters don't directly affect rankings)

Google's guidance on helpful, people-first content asks for first-hand experience, content that fully serves the reader, and a structure that makes the answer easy to find.

#### Compliant Blog Post Structure

```
1. H1 Title — primary keyword, describes the article's exact topic
   (Note: H1 and <title> describe the same topic; they may match or differ)

2. Introduction — 2–3 sentences
   → Answer the main question FIRST (inverted pyramid — give the answer, then support it)
   → State who this article is for and what they will learn
   → Do NOT bury the answer below 3 paragraphs of preamble

3. Key Takeaways (optional but recommended)
   → 3–5 bullet points summarizing the main answers
   → Helps readers who scan before reading

4. H2 Section 1 — major subtopic
   → Covers one subtopic completely
   → H3 subpoints if the H2 topic has distinct sub-angles
   → Enough substance to cover the subtopic (no Google word count)

5. H2 Section 2 — next major subtopic
   → Same rules apply

6. [Repeat H2 sections as needed to fully cover the topic]

7. H2 — FAQ Section (optional)
   → Question-format headings for real questions readers ask (People Also Ask)
   → Each question answered directly below in 2–4 sentences
   → FAQPage markup is optional and gives no Google rich result (see Part 6)

8. Conclusion — 2–4 sentences
   → Brief summary of what was covered
   → Clear next step or call to action
   → Do NOT introduce new information in the conclusion

9. Author Bio
   → Visible byline with the author's full name
   → 1–2 sentence bio excerpt with relevant credentials
   → Link to the full author page
```

#### What Google's Guidance Rewards (Helpful-Content Guidance + Quality Rater Guidelines)

- First-hand, lived experience with the topic — specific details, original observations, not paraphrased generic knowledge
- Content that fully satisfies the user's query without requiring them to go elsewhere
- Clear author attribution with visible, verifiable credentials
- Depth appropriate to the topic — not padding, not artificial length
- Original data, examples, screenshots, or case studies where possible

#### What Google's Policies and Systems Work Against

- Pages generated at scale (with AI or otherwise) mainly to manipulate rankings — scaled content abuse
- Generic "SEO content" written for search engines rather than readers
- Content that is inaccurate or out of date for what the reader needs
- Thin affiliate content that lacks original analysis or testing
- Changing dates to make pages seem fresh without substantial changes (a warning sign in Google's helpful-content guidance)

#### Content Length Guidelines

Google has no word count requirement: "There's no magical word count target, minimum or maximum." Length must match what is required to fully answer the query. The ranges below are **heuristics**, not Google rules:

| Content type                      | Typical range   | Rationale                           |
| --------------------------------- | --------------- | ----------------------------------- |
| Pillar page / comprehensive guide | 2,000+ words    | Must cover a broad topic with depth |
| Cluster / supporting article      | 800–1,500 words | Focused on one specific subtopic    |
| FAQ article                       | 600–1,200 words | Answers multiple specific questions |
| News / update post                | 300–600 words   | Timeliness matters more than length |

Do not pad content. Filler paragraphs make the article worse for readers.

**Source:** https://developers.google.com/search/docs/fundamentals/creating-helpful-content
**Source:** https://developers.google.com/search/docs/fundamentals/seo-starter-guide
**Source:** https://static.googleusercontent.com/media/guidelines.raterhub.com/en//searchqualityevaluatorguidelines.pdf

---

### 14.3 — ARTICLE AND BLOGPOSTING SCHEMA

**Official basis:** https://developers.google.com/search/docs/appearance/structured-data/article (last updated 8 Sep 2026)

Article structured data can help Google understand the page and show better title text, images and date information in Google Search and other Google products. There are no required properties; add the ones that apply.

#### Which Schema Type to Use

| Schema type   | Use when                                                              |
| ------------- | --------------------------------------------------------------------- |
| `BlogPosting` | Standard blog posts — most specific type, preferred for blogs         |
| `Article`     | General articles, evergreen guides, opinion pieces                    |
| `NewsArticle` | Time-sensitive news reporting ONLY — do NOT use for evergreen content |

#### Complete BlogPosting Schema Template

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Concise article title",
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
  "description": "Accurate summary of the article",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://example.com/full-article-url"
  }
}
```

#### Critical Schema Rules

| Rule                                                 | Why it matters |
| ---------------------------------------------------- | -------------- |
| Concise `headline`                                   | No fixed limit; Google notes long titles may be truncated on some devices |
| Several high-res images in 16:9, 4:3 and 1:1         | Google recommends it "for best results" (each at least 50K pixels); not required |
| `dateModified` reflects actual content changes only  | Google warns against changing dates to make pages seem fresh |
| `author.url` links to a real author page             | Google recommends author.url or sameAs; the author page should describe the author |
| Schema must reflect visible page content             | Never mark up content users cannot see — Google requires markup to match on-page content |
| Validate with Rich Results Test after implementation | https://search.google.com/test/rich-results |

#### Schema Combinations for Blog Pages

On a blog post page, these schema types can be used together:

- `BlogPosting` — the article itself
- `BreadcrumbList` — for navigation hierarchy
- `Person` — for the author (can be placed on the author page)
- `FAQPage` — optional, only if a visible FAQ section exists (no Google rich result)

**Source:** https://developers.google.com/search/docs/appearance/structured-data/article
**Source:** https://schema.org/BlogPosting

---

### 14.4 — CONTENT CLUSTER AND PILLAR PAGE FRAMEWORK

**Official basis:** Google's crawlable links and SEO Starter Guide documentation on site structure and internal linking. The pillar-cluster model itself is an industry practice, not a Google rule.

#### The Pillar-Cluster Model

```
PILLAR PAGE (1 per broad topic)
├── Targets the broad, competitive head keyword
├── Covers the topic comprehensively (no word count rule)
├── Links out to every cluster page in the topic group
├── Updated as the topic evolves
│
├── CLUSTER PAGE 1 — specific subtopic A
│   ├── Focuses on ONE specific angle only
│   ├── Links back to the pillar page
│   └── Links to 2–3 related cluster pages (horizontal)
│
├── CLUSTER PAGE 2 — specific subtopic B
│   └── Same structure
│
└── MORE CLUSTER PAGES — as many as the topic genuinely needs (heuristic: 5–12)
```

#### Pillar Page Rules

- One pillar per broad topic on the site — the most comprehensive, authoritative page on that subject
- Must link out to every cluster page in its topic group using descriptive anchor text
- Should cover the topic at a level that makes it a useful starting point for any subtopic the user might want to explore
- Link to it prominently from navigation and from its cluster pages (sitemap `<priority>` is ignored by Google and Bing)
- Update when new cluster pages are added or when the topic evolves

#### Cluster Page Rules

- Cover exactly ONE specific subtopic — do not bleed into another cluster page's territory
- Every cluster page must link back to its pillar page using relevant, descriptive anchor text
- Anchor text must describe the target page — never use "click here", "read more", or "this article"
- Each cluster page links to 2–3 related cluster pages within the same topic group (horizontal linking — heuristic)
- Keyword cannibalization check: if two cluster pages target the same primary keyword with the same intent, consolidate them into one

#### Internal Linking Rules

| Rule | Source |
| ---- | ------ |
| Every important page is reachable through crawlable `<a href>` links | Google: crawlable links |
| No fixed link count: "There's no magical ideal number of links a given page should contain" | Google: crawlable links |
| Important pages within ~3 clicks of the homepage | Heuristic (no Google rule) |
| Descriptive anchor text that tells readers what the target page is about | Google: crawlable links |
| Fix orphan pages (zero inbound internal links) — search engines and readers struggle to find them | Google: crawlable links |
| No linking schemes — every link must serve user navigation | Google spam policies (link spam) |

**Source:** https://developers.google.com/search/docs/crawling-indexing/links-crawlable
**Source:** https://developers.google.com/search/docs/fundamentals/seo-starter-guide
**Source:** https://developers.google.com/search/docs/essentials/spam-policies

---

### 14.5 — KEYWORD RESEARCH FOR CONTENT CREATION

**Official basis:** Google SEO Starter Guide, Google's helpful-content guidance, Google's AI optimization guide

#### The Three Keyword Types

| Type               | Characteristics                               | Content to create                      |
| ------------------ | --------------------------------------------- | -------------------------------------- |
| Head keywords      | 1–2 words, high volume, high competition      | Pillar pages                           |
| Body keywords      | 2–3 words, moderate competition               | Main cluster pages                     |
| Long-tail keywords | 4+ words, specific, lower volume, high intent | Supporting cluster pages, FAQ sections |

#### Keyword Intent Mapping

Before creating any content, identify the search intent — what the user actually wants to accomplish:

| Intent        | What the user wants      | Create                             |
| ------------- | ------------------------ | ---------------------------------- |
| Informational | Learn about a topic      | Blog post, guide, explainer        |
| Navigational  | Find a specific site     | Homepage, brand page               |
| Commercial    | Research before deciding | Comparison, review, best-of list   |
| Transactional | Ready to act or buy      | Product/service page, landing page |

Creating informational content for a transactional keyword (or vice versa) is unlikely to rank — the content type must match the intent.

#### Free Research Tools

| Tool                                              | Use for                                                           |
| ------------------------------------------------- | ----------------------------------------------------------------- |
| Google Search → People Also Ask boxes             | Question-format H2 ideas, FAQ content                             |
| Google Search → Related Searches (bottom of page) | Long-tail keyword variants                                        |
| Google Search Console → Queries report            | Keywords you already rank for — expand coverage                   |
| Bing Webmaster Tools → Keyword Research           | Bing-specific keyword data — completely separate from Google data |
| Google Trends                                     | Seasonal patterns, trending topics in your niche                  |

#### Semantic Keyword Strategy

Google's language matching systems understand synonyms, related concepts, and entity relationships. This means:

- Do not repeat the exact keyword phrase unnaturally — use the full range of related language
- Cover the topic completely using natural language — related terms, synonyms, entity names
- You don't need a page or phrase for every long-tail variation; Google's AI systems connect people with content even without an exact match
- Write for readers first — Google's systems are designed to evaluate whether content genuinely serves users

**Source:** https://developers.google.com/search/docs/fundamentals/seo-starter-guide
**Source:** https://developers.google.com/search/docs/fundamentals/creating-helpful-content
**Source:** https://developers.google.com/search/docs/fundamentals/ai-optimization-guide

---

### 14.6 — BLOG TITLE AND H1 FORMULAS

**Official basis:** https://developers.google.com/search/docs/appearance/title-link

#### Title Tag Rules (for SERPs)

| Rule                                   | Specification |
| -------------------------------------- | ------------- |
| Length                                 | No limit; Google truncates to the device width (heuristic: ~50–60 characters often fits) |
| Primary keyword position               | Toward the front when natural — do not force it |
| Must be accurate                       | Google rewrites title links that don't match page content |
| Title tag and H1                       | Describe the same topic; they may match or differ |
| No keyword stuffing                    | Google may rewrite stuffed title tags, and stuffing violates spam policies |
| No superlative claims without evidence | "Best", "World's #1" — only use if you can substantiate the claim |

#### H1 Formulas by Content Type

**Informational / how-to:**

- `How to [Do Specific Task]: [Benefit or Context]`
- `What Is [Topic]? [One-Line Clarification]`
- `[Topic]: A Complete Guide for [Specific Audience]`
- `[Number] [Things/Ways/Types] to [Achieve Specific Outcome]`

**Comparison / commercial:**

- `[Option A] vs [Option B]: Which Is Better for [Specific Use Case]?`
- `Best [Category] for [Specific Need] ([Current Year])`

**FAQ / informational:**

- `[Topic] FAQ: [Number] Questions Answered`
- `Everything You Need to Know About [Topic]`

**What to avoid:**

- Clickbait titles that do not match page content — damages trust and Google adjusts them
- Vague titles ("My Thoughts on X", "A Quick Note About Y")
- Keyword-stuffed titles ("Best SEO Tips SEO Guide Top SEO Strategies 2025")
- Unsubstantiated superlatives ("The World's Best Guide to X")

**Source:** https://developers.google.com/search/docs/appearance/title-link
**Source:** https://developers.google.com/search/docs/appearance/snippet

---

### 14.7 — FEATURED SNIPPET WRITING PATTERNS

**Official basis:** https://developers.google.com/search/docs/appearance/featured-snippets

Google selects featured snippets automatically from indexed pages. There is no markup and no way to apply — you can only make the answer easy to find. To keep text out of snippets, use `nosnippet`, `data-nosnippet` or `max-snippet`.

#### Snippet Type 1 — Paragraph Snippets

Best for: "What is X?", "Why does X happen?", "What causes X?"

**Writing pattern:**

```
H2: What Is [Topic]?

[A short, direct definition first — heuristic: 40–60 words]
[Topic] is [definition]. [One supporting sentence explaining why this matters or how it works].

[Additional context in the paragraphs that follow]
```

Key rule: The answer immediately below the H2 should make sense on its own, so a reader landing on that section gets the answer.

#### Snippet Type 2 — List Snippets

Best for: "How to do X", "Types of X", "Best X for Y"

**Writing pattern:**

```
H2: How to [Do Specific Task]

[Brief 1-sentence intro]

<ol>
  <li>[Step 1 — specific and actionable]</li>
  <li>[Step 2]</li>
  <li>[Step 3]</li>
  ...
</ol>
```

Key rule: Use proper HTML `<ol>` or `<ul>` list markup — not plain text dashes or asterisks. 5–8 items is an observed pattern for list snippets (heuristic).

#### Snippet Type 3 — Table Snippets

Best for: "Types of X", "X vs Y comparison", "What are the [categories/options/prices] of X?"

**Writing pattern:**

```
H2: [Comparison or Category Topic]

<table>
  <tr><th>Column 1</th><th>Column 2</th><th>Column 3</th></tr>
  <tr><td>...</td><td>...</td><td>...</td></tr>
</table>
```

Key rule: Use proper HTML `<table>` markup. Keep tables under 5 columns for mobile readability.

#### Rules That Apply to All Snippet Types

- The page must be indexed and eligible for a snippet — snippet optimization is about clarity, not initial ranking
- Never write clickbait questions as H2s without immediately answering them
- A clear question heading with a direct answer below it is a common pattern for paragraph snippets (heuristic)

**Source:** https://developers.google.com/search/docs/appearance/featured-snippets
**Source:** https://developers.google.com/search/docs/appearance/snippet

---

### 14.8 — AUTHOR E-E-A-T SIGNALS FOR BLOG CONTENT

**Official basis:** Google's helpful-content guidance (https://developers.google.com/search/docs/fundamentals/creating-helpful-content), Google Quality Rater Guidelines, September 2025 version (https://static.googleusercontent.com/media/guidelines.raterhub.com/en//searchqualityevaluatorguidelines.pdf)

Google's guidance asks "Who created the content?": bylines where readers expect them, leading to information about the author. E-E-A-T itself isn't a ranking factor, but Google's systems give more weight to content with signs of strong E-E-A-T on topics that could significantly affect health, finances, safety or well-being (YMYL).

#### Recommended Author Page Elements

| Element                   | Guidance |
| ------------------------- | -------- |
| Full name                 | Not "Admin", "Editor", or "SEO Team" |
| Professional credentials  | Relevant to the topics the author writes about, and true |
| Experience                | Specific to the subject area |
| External profile links    | LinkedIn, professional associations, published work elsewhere |
| Photo                     | A real photo — never an AI-generated headshot for an invented person |
| Link to authored articles | Bidirectional — author page links to articles, articles link to author page |

#### Recommended Per-Article Author Elements

- Visible byline with the author's full name — linked to the author page
- 1–2 sentence bio excerpt at the bottom of the article
- The full author page linked from the bio excerpt
- Avoid generic bylines — especially for health, finance, legal, or safety content

#### Person Schema for Authors

Place this on the author's dedicated page:

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Author Full Name",
  "url": "https://example.com/author/name",
  "image": "https://example.com/author-photo.jpg",
  "jobTitle": "Actual job title",
  "sameAs": [
    "https://www.linkedin.com/in/authorprofile",
    "https://twitter.com/authorhandle"
  ],
  "knowsAbout": ["topic area 1", "topic area 2"]
}
```

#### What NOT to Do (Ethical and Legal Boundaries)

- Do NOT fabricate credentials or author profiles — Google calls fake creator profiles deception, and it can be illegal misrepresentation
- Do NOT write fake testimonials or fabricated endorsements — violates FTC guidelines and Google's policies
- Do NOT use paid or incentivized reviews without clear disclosure — violates Google's review snippet guidelines and consumer protection laws in most jurisdictions
- Do NOT claim expertise the author does not have
- Do NOT use ghost authorship for YMYL content without disclosing the actual expert reviewer

**Source:** https://developers.google.com/search/docs/fundamentals/creating-helpful-content
**Source:** https://static.googleusercontent.com/media/guidelines.raterhub.com/en//searchqualityevaluatorguidelines.pdf
**Source:** https://schema.org/Person

---

### 14.9 — CONTENT FRESHNESS AND UPDATE STRATEGY

**Official basis:** Google's helpful-content guidance, ranking systems guide (freshness systems), and byline date documentation

Google runs "query deserves freshness" systems that show fresher content where people expect it (a movie that just came out, breaking news). For evergreen topics, accuracy matters more than recency.

#### Planning Heuristic by Query Type (not a Google taxonomy)

| Query type | Examples                            | Update priority                    |
| ---------- | ----------------------------------- | ---------------------------------- |
| Breaking   | News, viral events                  | Hours matter                       |
| Recent     | Product launches, software versions | Weeks matter                       |
| Ongoing    | Industry tutorials, best practices  | Months matter                      |
| Evergreen  | Definitions, fundamentals           | Accuracy matters more than recency |

#### CRITICAL — What Counts as a Meaningful Content Update

Only update `dateModified` in schema AND on the page when these happen:

✅ Adding new data, statistics, or research not previously in the article
✅ Updating factual information that has changed (software versions, laws, guidelines)
✅ Adding a new section covering a topic the original article missed
✅ Removing information that is now incorrect or outdated
✅ Revising recommendations based on new official guidance

❌ Do NOT update dateModified for:

- Fixing a typo
- Changing image alt text
- Minor CSS or layout changes
- Adding an internal link without changing body content
- Changing the date to look fresh without changing the content

**Google's helpful-content guidance asks whether you are "changing the date of pages to make them seem fresh when the content has not substantially changed." Treat that as a deceptive practice. Adding or removing lots of content just to seem "fresh" doesn't help either ("No, it won't").**

#### Content Audit Schedule

| Frequency           | Actions                                                               |
| ------------------- | --------------------------------------------------------------------- |
| Monthly             | Check GSC for pages losing impressions — candidates for update        |
| Quarterly           | Refresh top-performing articles with new data and updated sections    |
| Annually            | Full content audit — identify pages to update, consolidate, or remove |
| On algorithm update | Re-evaluate pages that lost traffic against Google's core update guidance |

**Source:** https://developers.google.com/search/docs/fundamentals/creating-helpful-content
**Source:** https://developers.google.com/search/docs/appearance/ranking-systems-guide
**Source:** https://developers.google.com/search/docs/appearance/publication-dates

---

### 14.10 — RSS FEED SETUP AND OPTIMIZATION

**Official basis:** Google Search Central Blog — Best practices for XML sitemaps and RSS/Atom feeds (https://developers.google.com/search/blog/2014/10/best-practices-for-xml-sitemaps-rssatom)

Google recommends using BOTH XML sitemaps AND RSS/Atom feeds together:

- XML sitemaps: describe all the URLs on the site
- RSS/Atom feeds: describe recent changes; they're usually small and updated frequently

#### RSS Feed Best Practices

| Rule                                                        | Why |
| ----------------------------------------------------------- | --- |
| Include only canonical URLs                                 | Never include duplicate URLs — increases server load without improving indexing |
| Set `pubDate` / last modification time accurately           | Only update timestamps when content changes meaningfully — Google uses these to track content lifecycle |
| Do NOT artificially modify timestamps                       | Google uses `<lastmod>` only if it's consistently and verifiably accurate |
| Submit RSS feed to Google Search Console (Sitemaps section) | Alongside the XML sitemap — not instead of it |
| Submit RSS feed to Bing Webmaster Tools separately          | Completely separate from Google submission |
| Keep feed to the last 20–50 items                           | Practical heuristic — the feed should hold all updates since Google last fetched it |
| All URLs in the feed must return 200 status codes           | Broken links in RSS confuse crawlers |

#### WebSub / PubSubHubbub

Google's feed guidance recommends WebSub (formerly PubSubHubbub) so the feed always contains every update since Google last downloaded it. A WebSub hub pushes new feed content to subscribers (search engines, feed readers) as soon as you publish.

- WordPress: supported natively by Jetpack and many SEO plugins
- Custom sites: requires developer implementation
- Protocol: https://www.w3.org/TR/websub/

#### Bing and Others: IndexNow

IndexNow lets a site notify Bing (and Yandex, Seznam, Naver and Yep) the moment a URL is added, updated or deleted. Google doesn't use IndexNow. Bing recommends using it together with an accurate sitemap:

- RSS/Atom feed or sitemap submitted to Bing Webmaster Tools
- IndexNow API for immediate URL submission on publish
- IndexNow documentation: https://www.indexnow.org

**Source:** https://developers.google.com/search/blog/2014/10/best-practices-for-xml-sitemaps-rssatom
**Source:** https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
**Source:** https://blogs.bing.com/webmaster/2025/7/Keeping-Content-Discoverable-with-Sitemaps-in-AI-Powered-Search/
**Source:** https://www.indexnow.org

---

### 14.11 — CONTENT CALENDAR AND PUBLISHING CADENCE

**Official basis:** Google's helpful-content guidance (https://developers.google.com/search/docs/fundamentals/creating-helpful-content)

Quality always supersedes quantity. One excellent, comprehensive article outranks ten thin ones. Publishing cadence matters only when quality is maintained.

#### Recommended Content Calendar Framework (heuristic)

**Monthly minimum (for sites building authority):**

- 2 cluster articles supporting active pillar pages
- 1 content refresh of an existing page losing impressions in GSC
- 1 article answering real questions people ask in the niche (People Also Ask)

**Quarterly:**

- 1 pillar page or major comprehensive guide
- Content audit review (GSC impressions vs. previous quarter)
- Update `dateModified` on refreshed pages — only if meaningfully updated

**On algorithm update announcement:**

- Wait for the rollout to finish (recent core updates took about 2–3 weeks; check the Search Status Dashboard) before making major decisions
- Compare pre/post impression data in GSC
- Improve content against Google's core update guidance; don't chase rumored causes
- Monitor: https://developers.google.com/search/blog and https://status.search.google.com/products/rGHU1u87FJnkP6W2GwMi/history

#### Keyword Cannibalization Prevention

Before creating any new article, check whether an existing page on the site already targets the same primary keyword with the same search intent. If yes:

- Do NOT create a second article — the two pages will compete against each other
- Instead, strengthen the existing article with the new content you planned to write
- If the existing article is very thin, replace it rather than creating a parallel article

#### Publishing Rules

- Publish one complete, fully useful article before publishing two partial ones
- Every published article must fully cover its topic — splitting one topic across multiple thin articles creates cannibalization and dilutes authority
- Do not publish dummy or "coming soon" pages — unpublished drafts should remain private until complete

**Source:** https://developers.google.com/search/docs/fundamentals/creating-helpful-content
**Source:** https://developers.google.com/search/docs/appearance/core-updates

---
