---

## PART 14 — CONTENT SEO & BLOG OPTIMIZATION

This section covers everything the AI needs to optimize blog posts, articles, and content-driven pages. Apply this section whenever the user's site includes a blog, news section, or any content beyond static landing pages.

---

### ⚠️ INTEGRITY RULES FOR THIS ENTIRE SECTION

Before using any guidance in this section, the AI must internalize these non-negotiable rules:

**NEVER instruct the user to:**
- Make false ranking promises — SEO involves variables outside anyone's control
- Write fake reviews, fake testimonials, or manufactured social engagement of any kind
- Use paid review schemes — violates Google's spam policies and consumer protection laws in most jurisdictions
- Claim credentials, expertise, or experience the author does not actually have
- Mark up content in schema that does not visibly exist on the page — Google requires schema to reflect visible page content
- Change publication dates without making meaningful content updates — Google's December 2025 Core Update explicitly penalizes this as deceptive
- Make superlative claims ("best in the world", "#1 guide") without verifiable evidence
- Copy or reuse competitors' content

**Source:** Google Search Essentials — https://developers.google.com/search/docs/essentials
**Source:** Google Spam Policies — https://developers.google.com/search/docs/essentials/spam-policies

---

### 14.1 — H1 / H2 / H3 HEADING RULES

**Official basis:** Google Developer Style Guide (https://developers.google.com/style/headings), Gary Illyes SEO Office Hours July 2024, John Mueller statements on heading structure

#### H1 Rules

| Rule | Explanation |
|------|-------------|
| One primary H1 per page | Best practice for clarity — Google's John Mueller has confirmed multiple H1s do not technically harm SEO, but one clear H1 signals the page's primary topic |
| H1 ≠ title tag | The `<title>` tag is for SERPs; the H1 is for the page. They should be related but different. Google rewrites title tags when they don't match page content |
| Contains the primary keyword naturally | Do not force it — if the keyword fits naturally, use it; if it creates awkward phrasing, prioritize readability |
| Describes the page's exact purpose | Per Google's developer style guide: "Write document titles based on the primary purpose of the document" |
| 20–70 characters is the readable range | No official character limit — but longer H1s reduce scannability |
| Never use H1 for styling | Use CSS for visual formatting. Reserve heading tags for content structure |
| Homepage H1 ≠ Blog post H1 ≠ Product page H1 | Each page type has a different primary purpose — the H1 formula changes accordingly |

**Homepage H1 formula:** `[Brand Name] — [What You Do] for [Who You Serve]`
**Blog post H1 formula:** `[Primary Keyword Naturally Phrased as the Article's Exact Topic]`
**Product/service page H1 formula:** `[Product/Service Name] — [Primary Benefit or Use Case]`

#### H2 Rules

H2 tags mark the major sections of a page. Each H2 is a self-contained topic block.

**Critical for AI search visibility:** Google AI Overviews and featured snippets extract content by block — by H2 section — not by full page. A self-contained H2 block that fully answers its implied question is the primary format that gets extracted and cited.

| Rule | Explanation |
|------|-------------|
| Each H2 is a standalone answer block | The content immediately below each H2 must answer that H2's question completely, without relying on other sections |
| Question-format H2s for informational content | "What is X?", "How does X work?", "Why does X matter?" — these match voice search and People Also Ask queries |
| Statement-format H2s for listicles and how-to content | "The 5 types of X", "How to do X in 3 steps" — clearer for structured content |
| Contains semantic keyword variants naturally | Use related terms and synonyms — do not repeat the exact H1 keyword |
| One heading every 200–300 words | Observable pattern across top-ranking pages for scannability and crawl structure |
| Descriptive — never vague | "Introduction" and "Overview" are weak H2s. "What Core Web Vitals Are and Why They Affect Rankings" is strong |
| H2 anchor text previews the section | The reader should know what they will find in the section just from reading the H2 |

#### H3 Rules

H3 is a subsection within an H2. It is never placed without a parent H2.

| Rule | Explanation |
|------|-------------|
| Never place H3 without a parent H2 | Do not skip heading levels — breaks logical structure and accessibility |
| Use for sub-angles within an H2 section | Drilling into a specific example, a definition, a step within a process |
| Long-tail keyword variants fit naturally here | H3s often match the most specific, long-tail search queries |
| Do not use H3 for styling | Same rule as H1 — heading tags are for structure, not visual design |

**What to never do with any heading tag:**
- Skip levels (H1 → H3 without H2) — breaks both accessibility and logical flow
- Use empty headings with no content beneath them
- Stuff keywords into headings
- Use identical headings on different pages of the same site

**Source:** https://developers.google.com/style/headings
**Source:** https://developers.google.com/search/docs/appearance/featured-snippets

---

### 14.2 — BLOG POST STRUCTURE FRAMEWORK

**Official basis:** Google Helpful Content System (https://developers.google.com/search/docs/fundamentals/creating-helpful-content), Google Quality Rater Guidelines January 2025

Google's December 2025 Core Update reinforced that content must demonstrate first-hand experience, serve user needs completely, and be structured to answer the query directly.

#### Compliant Blog Post Structure

```
1. H1 Title — primary keyword, describes the article's exact topic
   (Note: H1 and <title> tag should be related but not identical)

2. Introduction — 2–3 sentences
   → Answer the main question FIRST (inverted pyramid — give the answer, then support it)
   → State who this article is for and what they will learn
   → Do NOT bury the answer below 3 paragraphs of preamble

3. Key Takeaways (optional but recommended)
   → 3–5 bullet points summarizing the main answers
   → Helps AI search engines extract citation-worthy content
   → Reduces bounce rate for users who scan before reading

4. H2 Section 1 — major subtopic
   → Self-contained answer block
   → H3 subpoints if the H2 topic has distinct sub-angles
   → Minimum 150 words of substantive content below this H2

5. H2 Section 2 — next major subtopic
   → Same rules apply

6. [Repeat H2 sections as needed to fully cover the topic]

7. H2 — FAQ Section
   → Question-format H2s targeting People Also Ask and voice search queries
   → Each question answered directly below in 2–4 sentences (paragraph snippet format)
   → Add FAQPage schema to these questions (see Part 5 of this skill)

8. Conclusion — 2–4 sentences
   → Brief summary of what was covered
   → Clear next step or call to action
   → Do NOT introduce new information in the conclusion

9. Author Bio
   → Visible byline with the author's full name
   → 1–2 sentence bio excerpt with relevant credentials
   → Link to the full author page
```

#### What Google Rewards (December 2025 Core Update + Quality Rater Guidelines)

- First-hand, lived experience with the topic — specific details, original observations, not paraphrased generic knowledge
- Content that fully satisfies the user's query without requiring them to go elsewhere
- Clear author attribution with visible, verifiable credentials
- Depth appropriate to the topic — not padding, not artificial length
- Original data, examples, screenshots, or case studies where possible

#### What Google Penalizes

- Mass-produced AI content without expert human oversight and editing
- Generic "SEO content" optimized for keywords but not for actual user value
- Outdated content without recent updates or accuracy verification
- Thin affiliate content that lacks original analysis or testing
- Changing publication dates without making meaningful content changes (explicitly penalized in December 2025 Core Update)

#### Content Length Guidelines

Google does not have an official word count requirement. Length must match what is required to fully answer the query:

| Content type | Typical range | Rationale |
|-------------|--------------|-----------|
| Pillar page / comprehensive guide | 2,000+ words | Must cover a broad topic with depth |
| Cluster / supporting article | 800–1,500 words | Focused on one specific subtopic |
| FAQ article | 600–1,200 words | Answers multiple specific questions |
| News / update post | 300–600 words | Timeliness matters more than length |

Do not pad content. Filler paragraphs dilute the article's quality signal.

**Source:** https://developers.google.com/search/docs/fundamentals/creating-helpful-content
**Source:** https://static.googleusercontent.com/media/guidelines.raterhub.com/en//searchqualityevaluatorguidelines.pdf

---

### 14.3 — ARTICLE AND BLOGPOSTING SCHEMA

**Official basis:** https://developers.google.com/search/docs/appearance/structured-data/article (updated December 2025)

Article schema helps Google understand blog and news content and enables rich results including larger images, author information, and publication dates in search results and Google Discover.

#### Which Schema Type to Use

| Schema type | Use when |
|-------------|----------|
| `BlogPosting` | Standard blog posts — most specific type, preferred for blogs |
| `Article` | General articles, evergreen guides, opinion pieces |
| `NewsArticle` | Time-sensitive news reporting ONLY — do NOT use for evergreen content |

#### Complete BlogPosting Schema Template

```json
{
  "@context": "https://schema.org",
  "@type": "BlogPosting",
  "headline": "Article title — maximum 110 characters",
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
  "description": "Meta description of the article — 120–160 characters",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://example.com/full-article-url"
  }
}
```

#### Critical Schema Rules

| Rule | Why it matters |
|------|---------------|
| `headline` max 110 characters | Truncated in rich results beyond this |
| Images in all three aspect ratios | Required for full rich result eligibility — 1:1, 4:3, and 16:9 |
| `dateModified` reflects actual content changes only | Google penalizes fake freshness — only update when substantive changes are made |
| `author.url` links to a real author page | Author page must have credentials — not a generic homepage |
| Schema must reflect visible page content | Never mark up content users cannot see — Google requires markup to match on-page content |
| Validate with Rich Results Test after implementation | https://search.google.com/test/rich-results |

#### Schema Combinations for Blog Pages

On a blog post page, these schema types can be used together:
- `BlogPosting` — the article itself
- `FAQPage` — if a FAQ section is present on the page
- `BreadcrumbList` — for navigation hierarchy
- `Person` — for the author (can be placed on the author page)

**Source:** https://developers.google.com/search/docs/appearance/structured-data/article
**Source:** https://schema.org/BlogPosting

---

### 14.4 — CONTENT CLUSTER AND PILLAR PAGE FRAMEWORK

**Official basis:** Google's topical authority signals, Google June 2025 Core Update (topical authority rewarded), internal linking best practices from Google Search Central

#### The Pillar-Cluster Model

```
PILLAR PAGE (1 per broad topic)
├── Targets the broad, competitive head keyword
├── 2,000+ words covering the topic comprehensively
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
└── CLUSTER PAGE 3–12 — (8–12 cluster pages per pillar minimum)
```

#### Pillar Page Rules

- One pillar per broad topic on the site — the most comprehensive, authoritative page on that subject
- Must link out to every cluster page in its topic group using descriptive anchor text
- Should cover the topic at a level that makes it a useful starting point for any subtopic the user might want to explore
- Prioritize in XML sitemap (higher priority value)
- Update when new cluster pages are added or when the topic evolves

#### Cluster Page Rules

- Cover exactly ONE specific subtopic — do not bleed into another cluster page's territory
- Every cluster page must link back to its pillar page using relevant, descriptive anchor text
- Anchor text must describe the target page — never use "click here", "read more", or "this article"
- Each cluster page links to 2–3 related cluster pages within the same topic group (horizontal linking)
- Keyword cannibalization check: if two cluster pages target the same primary keyword with the same intent, consolidate them into one

#### Internal Linking Rules

| Rule | Source |
|------|--------|
| Click depth ≤ 3 from homepage to any important page | Google's crawlability guidelines |
| Under 100 internal links per page | Google's documented recommendation |
| Contextual anchor text only — describes the target page topic | Google Search Central |
| Fix orphan pages (zero inbound internal links) — they cannot rank effectively | Screaming Frog / GSC coverage report |
| No linking purely for link equity — every link must serve user navigation | Google spam policies |

**Source:** https://developers.google.com/search/docs/crawling-indexing/links-crawlable
**Source:** https://developers.google.com/search/docs/essentials

---

### 14.5 — KEYWORD RESEARCH FOR CONTENT CREATION

**Official basis:** Google Search Essentials, Google Helpful Content System

#### The Three Keyword Types

| Type | Characteristics | Content to create |
|------|----------------|-------------------|
| Head keywords | 1–2 words, high volume, high competition | Pillar pages |
| Body keywords | 2–3 words, moderate competition | Main cluster pages |
| Long-tail keywords | 4+ words, specific, lower volume, high intent | Supporting cluster pages, FAQ sections |

#### Keyword Intent Mapping

Before creating any content, identify the search intent — what the user actually wants to accomplish:

| Intent | What the user wants | Create |
|--------|--------------------|----|
| Informational | Learn about a topic | Blog post, guide, explainer |
| Navigational | Find a specific site | Homepage, brand page |
| Commercial | Research before deciding | Comparison, review, best-of list |
| Transactional | Ready to act or buy | Product/service page, landing page |

Creating informational content for a transactional keyword (or vice versa) will not rank — the content type must match the intent.

#### Free Research Tools

| Tool | Use for |
|------|---------|
| Google Search → People Also Ask boxes | Question-format H2 ideas, FAQ content |
| Google Search → Related Searches (bottom of page) | Long-tail keyword variants |
| Google Search Console → Queries report | Keywords you already rank for — expand coverage |
| Bing Webmaster Tools → Keyword Research | Bing-specific keyword data — completely separate from Google data |
| Google Trends | Seasonal patterns, trending topics in your niche |

#### Semantic Keyword Strategy

Google's language matching systems understand synonyms, related concepts, and entity relationships. This means:
- Do not repeat the exact keyword phrase unnaturally — use the full range of related language
- Cover the topic completely using natural language — related terms, synonyms, entity names
- Write for readers first — Google's systems are designed to evaluate whether content genuinely serves users

**Source:** https://developers.google.com/search/docs/fundamentals/seo-starter-guide
**Source:** https://developers.google.com/search/docs/fundamentals/creating-helpful-content

---

### 14.6 — BLOG TITLE AND H1 FORMULAS

**Official basis:** https://developers.google.com/search/docs/appearance/title-link

#### Title Tag Rules (for SERPs)

| Rule | Specification |
|------|--------------|
| Character length | 50–60 characters — beyond 60 is typically truncated in SERPs |
| Primary keyword position | Toward the front when natural — do not force it |
| Must be accurate | Google rewrites title tags that don't match page content |
| Title tag ≠ H1 | They should be related but different — title is for SERPs, H1 is for the page |
| No keyword stuffing | Google detects and rewrites manipulative title tags |
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

Featured snippets are automatically selected from pages already ranking in the top 10. You cannot apply — you structure content to make extraction easy.

#### Snippet Type 1 — Paragraph Snippets

Best for: "What is X?", "Why does X happen?", "What causes X?"

**Writing pattern:**
```
H2: What Is [Topic]?

[Answer in 40–60 words starting with a direct definition]
[Topic] is [definition]. [One supporting sentence explaining why this matters or how it works].

[Additional context in the paragraphs that follow]
```

Key rule: The answer block immediately below the H2 must stand alone — it must fully answer the H2's question without the reader needing any other section.

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

Key rule: Use proper HTML `<ol>` or `<ul>` list markup — not plain text dashes or asterisks. 5–8 items is the observable sweet spot for list snippets.

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

- The page must already be indexed and ranking to be eligible — snippet optimization is about extractability, not initial ranking
- Never write clickbait questions as H2s without immediately answering them
- The FAQ section (H2 question + direct answer) is the most reliable pattern for paragraph snippet eligibility

**Source:** https://developers.google.com/search/docs/appearance/featured-snippets

---

### 14.8 — AUTHOR E-E-A-T SIGNALS FOR BLOG CONTENT

**Official basis:** Google Quality Rater Guidelines January 2025 (https://static.googleusercontent.com/media/guidelines.raterhub.com/en//searchqualityevaluatorguidelines.pdf), Google Helpful Content System

Google evaluates content at three levels: content level, author level, and site level. After the December 2025 Core Update, author-level signals are reviewed for all content types, not just YMYL (Your Money, Your Life) topics.

#### Required Author Page Elements

| Element | Requirement |
|---------|------------|
| Full name | Not "Admin", "Editor", or "SEO Team" |
| Professional credentials | Relevant to the topics the author writes about |
| Years of experience | Specific to the subject area |
| External profile links | LinkedIn, professional associations, published work elsewhere |
| Photo | Increases human trust signals |
| Link to authored articles | Bidirectional — author page links to articles, articles link to author page |

#### Required Per-Article Author Elements

- Visible byline with the author's full name — linked to the author page
- 1–2 sentence bio excerpt at the bottom of the article
- The full author page linked from the bio excerpt
- Do NOT use generic bylines for any topic — especially not for health, finance, legal, or safety content

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

- Do NOT fabricate credentials — this is both an SEO risk and potentially illegal misrepresentation
- Do NOT write fake testimonials or fabricated endorsements — violates FTC guidelines and Google's spam policies
- Do NOT use paid review schemes — violates Google's spam policies and consumer protection laws in most jurisdictions
- Do NOT claim expertise the author does not have
- Do NOT use ghost authorship for YMYL content without disclosing the actual expert reviewer

**Source:** https://static.googleusercontent.com/media/guidelines.raterhub.com/en//searchqualityevaluatorguidelines.pdf
**Source:** https://schema.org/Person

---

### 14.9 — CONTENT FRESHNESS AND UPDATE STRATEGY

**Official basis:** Google December 2025 Core Update (https://developers.google.com/search/blog), Google Helpful Content System

#### How Google's Freshness Algorithm Categorizes Queries

| Query type | Examples | Update priority |
|-----------|----------|----------------|
| Breaking | News, viral events | Hours matter |
| Recent | Product launches, software versions | Weeks matter |
| Ongoing | Industry tutorials, best practices | Months matter |
| Evergreen | Definitions, fundamentals | Accuracy matters more than recency |

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

**Google's December 2025 Core Update explicitly penalizes fake freshness — changing dates without meaningful updates is now treated as a deceptive practice.**

#### Content Audit Schedule

| Frequency | Actions |
|-----------|---------|
| Monthly | Check GSC for pages losing impressions — candidates for update |
| Quarterly | Refresh top-performing articles with new data and updated sections |
| Annually | Full content audit — identify pages to update, consolidate, or remove |
| On algorithm update | Re-evaluate pages that lost traffic against the update's stated focus |

**Source:** https://developers.google.com/search/blog
**Source:** https://developers.google.com/search/docs/fundamentals/creating-helpful-content

---

### 14.10 — RSS FEED SETUP AND OPTIMIZATION

**Official basis:** Google Search Central Blog — Best practices for XML sitemaps and RSS/Atom feeds (https://developers.google.com/search/blog/2014/10/best-practices-for-xml-sitemaps-rssatom)

Google officially recommends using BOTH XML sitemaps AND RSS/Atom feeds together:
- XML sitemaps: tell Google about all pages on the site
- RSS/Atom feeds: tell Google about recent updates — crawled more frequently than sitemaps

#### RSS Feed Best Practices

| Rule | Why |
|------|-----|
| Include only canonical URLs | Never include duplicate URLs — increases server load without improving indexing |
| Set `pubDate` accurately | Only update timestamps when content changes meaningfully — Google uses these to track content lifecycle |
| Do NOT artificially modify timestamps | Google detects timestamp manipulation — treat this the same as fake freshness |
| Submit RSS feed to Google Search Console (Sitemaps section) | Alongside the XML sitemap — not instead of it |
| Submit RSS feed to Bing Webmaster Tools separately | Completely separate from Google submission |
| Keep feed to last 20–50 items | Practical standard — Google needs recent updates, not full history |
| All URLs in the feed must return 200 status codes | Broken links in RSS confuse crawlers |

#### WebSub / PubSubHubbub

John Mueller (Google) has recommended using RSS with WebSub (formerly PubSubHubbub) as the fastest method for getting new content indexed. This is a ping protocol that notifies Google and feed aggregators immediately when new content is published.
- WordPress: supported natively by Jetpack and many SEO plugins
- Custom sites: requires developer implementation
- Protocol: https://www.w3.org/TR/websub/

#### Bing-Specific: IndexNow

Bing's IndexNow protocol allows direct URL submission the moment content is published — faster and more direct for Bing indexing than RSS alone. Use both in parallel:
- RSS/Atom feed submitted to Bing Webmaster Tools
- IndexNow API for immediate URL submission on publish
- IndexNow documentation: https://www.indexnow.org

**Source:** https://developers.google.com/search/blog/2014/10/best-practices-for-xml-sitemaps-rssatom
**Source:** https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a
**Source:** https://www.indexnow.org

---

### 14.11 — CONTENT CALENDAR AND PUBLISHING CADENCE

**Official basis:** Google Helpful Content System (https://developers.google.com/search/docs/fundamentals/creating-helpful-content)

Quality always supersedes quantity. One excellent, comprehensive article outranks ten thin ones. Publishing cadence matters only when quality is maintained.

#### Recommended Content Calendar Framework

**Monthly minimum (for sites building authority):**
- 2 cluster articles supporting active pillar pages
- 1 content refresh of an existing page losing impressions in GSC
- 1 FAQ-rich article targeting People Also Ask terms in the niche

**Quarterly:**
- 1 pillar page or major comprehensive guide
- Content audit review (GSC impressions vs. previous quarter)
- Update `dateModified` on refreshed pages — only if meaningfully updated

**On algorithm update announcement:**
- Wait for full rollout (typically 1–3 weeks) before making major decisions
- Compare pre/post impression data in GSC
- Update content based on the stated focus of the update
- Monitor: https://developers.google.com/search/blog for official update announcements

#### Keyword Cannibalization Prevention

Before creating any new article, check whether an existing page on the site already targets the same primary keyword with the same search intent. If yes:
- Do NOT create a second article — the two pages will compete against each other
- Instead, strengthen the existing article with the new content you planned to write
- If the existing article is very thin, replace it rather than creating a parallel article

#### Publishing Rules

- Publish one complete, fully useful article before publishing two partial ones
- Every published article must fully cover its topic — splitting one topic across multiple thin articles creates cannibalization and dilutes authority
- Do not publish placeholder or "coming soon" pages — unpublished drafts should remain private until complete

**Source:** https://developers.google.com/search/docs/fundamentals/creating-helpful-content

---

### PART 14 — OFFICIAL REFERENCES

All sources used in this section. Verify these are current at each re-audit.

- **Article Structured Data:** https://developers.google.com/search/docs/appearance/structured-data/article
- **BlogPosting (Schema.org):** https://schema.org/BlogPosting
- **NewsArticle (Schema.org):** https://schema.org/NewsArticle
- **Featured Snippets Guide:** https://developers.google.com/search/docs/appearance/featured-snippets
- **Title Link Guide:** https://developers.google.com/search/docs/appearance/title-link
- **Helpful Content System:** https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- **Quality Rater Guidelines:** https://static.googleusercontent.com/media/guidelines.raterhub.com/en//searchqualityevaluatorguidelines.pdf
- **Google Developer Style Guide — Headings:** https://developers.google.com/style/headings
- **RSS/Atom Best Practices:** https://developers.google.com/search/blog/2014/10/best-practices-for-xml-sitemaps-rssatom
- **Google Search Central Blog (Algorithm Updates):** https://developers.google.com/search/blog
- **Person Schema:** https://schema.org/Person
- **IndexNow (Bing):** https://www.indexnow.org
- **Bing Webmaster Guidelines:** https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a
- **Google Spam Policies:** https://developers.google.com/search/docs/essentials/spam-policies
