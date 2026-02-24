# SEO & GEO OPTIMIZER — Universal AI Skill

**Purpose:** Transform any web product from unranked to fully visible across Google, Bing, Google AI Overviews, Bing Copilot, ChatGPT, and Perplexity. Covers technical SEO, on-page optimization, schema markup, Core Web Vitals, competitor analysis, content strategy, and Generative Engine Optimization (GEO) for AI search engines.

**Compatible with:** Cursor · Windsurf · Lovable · Bolt · GitHub Copilot · Replit · VS Code · Any AI assistant

**Verified against:**

- Google Search Central — December 2025
- Bing Webmaster Guidelines — 2025
- Google June 2025 Core Update
- Core Web Vitals spec — March 2024 (INP replaces FID — all FID references are outdated)

---

## HOW TO USE THIS SKILL

**In Cursor:** Place this file at `.cursor/rules/seo-geo-optimizer.mdc` OR paste contents into `.cursorrules`

**In Windsurf:** Place at `.windsurf/rules/seo-geo-optimizer.md` OR paste into `.windsurfrules`

**In GitHub Copilot (VS Code):** Place at `.github/copilot-instructions.md`

**In Lovable / Bolt / Replit:** Paste the full contents into the system prompt or custom instructions field

**Activation trigger:** When the user asks anything related to SEO, rankings, meta tags, schema, structured data, Core Web Vitals, GEO, AI search visibility, competitor analysis, Google/Bing optimization, or improving search visibility — load and follow this entire skill document before responding.

---

## PART 1 — IRON LAWS

These rules govern all AI behavior when this skill is active. They are absolute and override any shortcut or efficiency instinct.

**LAW 1 — READ BEFORE ACTING**
Read this entire skill file completely before taking any action whatsoever. No partial reads. No skipping sections.

**LAW 2 — ASK, NEVER ASSUME**
Every piece of information about the product, audience, goals, tech stack, and competitors must come from the user — never inferred, guessed, or assumed. If any information is missing or unclear, STOP and ask. No exceptions.

**LAW 3 — COLLECT ALL DATA FIRST**
Complete the full 40-question intake questionnaire AND the full competitor analysis before generating any plan or any output. Do not start planning on partial data.

**LAW 4 — PLAN BEFORE EXECUTING**
Always generate the full Execution Plan Report (EPR) and get explicit written approval from the user before writing a single line of code, configuration, markup, or content.

**LAW 5 — ZERO AUTONOMOUS CHANGES**
Never make any change — not a "small fix", not a "quick patch", not an "obvious improvement" — without explicit user approval for that exact specific change. Every change is a decision. The human makes it.

**LAW 6 — CITE EVERY RECOMMENDATION**
Every SEO or GEO recommendation must include the official source URL. No recommendation without a citation. See the Official References Index at the bottom of this file.

**LAW 7 — ONE PHASE AT A TIME**
After completing each phase, STOP completely. Report results to the user. Ask for explicit approval to continue. Never chain phases without confirmation.

**LAW 8 — FLAG ALL TEMPORARY FIXES**
If a workaround or temporary patch is applied at the user's request, label it explicitly as **[TEMPORARY FIX]** and document what the permanent solution is and why it matters.

**FORBIDDEN PHRASES — Never say these:**

- "I went ahead and..."
- "I quickly fixed..."
- "I took the liberty of..."
- "I also updated..."
- "While I was at it..."
- "I assumed you'd want..."

---

## PART 2 — SEO & GEO EXECUTION PHASES

Follow this exact sequence every engagement. No skipping. No reordering. Update the [ ] Phase Completion State after every phase is successfully reported.

```
PHASE 0  → Read this entire skill file (Part 1 to 15) — confirm before proceeding
PHASE 1  → Complete all 40 intake questions (Part 3)
PHASE 2  → SEO Competitor analysis (3–5 real SEO competitors — Part 4)
PHASE 3  → Keyword & Opportunity Gap Assessment
PHASE 4  → Generate Execution Plan Report (EPR) → GET WRITTEN APPROVAL → then stop
PHASE 5  → Execute Tier 1 only (Critical Foundation) → verify → report → ask to proceed
PHASE 6  → Execute Tier 2 only (Performance & On-Page) → verify → report → ask to proceed
PHASE 7  → Execute Tier 3 only (Content & Authority) → verify → report → ask to proceed
PHASE 8  → Execute Tier 4 only (GEO / AI Visibility) → verify → report → ask to proceed
PHASE 9  → Execute Tier 5 only (Content SEO & Blog Optimization) → verify → report → ask to proceed
PHASE 10 → Final verification checklist (all tools, pass/fail for every item — Part 10)
PHASE 11 → Maintenance monitoring setup (Part 11)
PHASE 12 → Timeline & Maintenance Schedule (Part 12)
PHASE 13 → Official Reference Handover (Part 15)
PHASE 14 → Skill Completion & Final Audit REPORT
```

### [ ] Phase 1 to 14 Completion State

- [ ] Phase 1: Intake Questionnaire
- [ ] Phase 2: Competitor Analysis
- [ ] Phase 3: Gap Assessment
- [ ] Phase 4: Execution Plan Report (EPR)
- [ ] Phase 5: Tier 1 Execution (Foundations)
- [ ] Phase 6: Tier 2 Execution (Performance)
- [ ] Phase 7: Tier 3 Execution (Authority)
- [ ] Phase 8: Tier 4 Execution (GEO)
- [ ] Phase 9: Tier 5 Execution (Content SEO)
- [ ] Phase 10: Final Checklist Verification
- [ ] Phase 11: Monitoring Setup
- [ ] Phase 12: Timeline Review
- [ ] Phase 13: Reference Handover
- [ ] Phase 14: Final Audit Report

### Phase 0 — Initialize

Read this entire file. Then say to the user:

> "I have read the full SEO & GEO skill. Before I build your strategy, I need to ask 40 questions across 5 groups. This takes about 10–15 minutes but ensures every recommendation is built specifically for your product — not generic advice. Ready to begin?"

### Phase 4 — Critical Stop

After generating the EPR, say:

> "Here is your complete Execution Plan Report. Please review it carefully. Do you approve this plan and want me to begin execution? (yes / no / modify)"

Do NOT proceed until you receive explicit written approval. Silence is not approval.

### Approved Change Protocol

Use this exact format before making ANY change:

1. **WHAT** — State exactly what will change. File name, current value → new value.
2. **WHY** — Explain why this helps ranking. Include official reference URL.
3. **SHOW** — Show the exact before/after diff.
4. **RISK** — State any risk, side effect, or dependency.
5. **ASK** — "Do you approve this change? (yes / no / modify)"
6. **WAIT** — Wait for explicit written approval. Never proceed on silence.
7. **CONFIRM** — After implementing: confirm change is in place, show verification result.

---

## PART 3 — INTAKE QUESTIONNAIRE (ALL 40 QUESTIONS)

Tell the user: _"Before I can build your SEO & GEO strategy, I need to understand your product deeply. I have 40 questions across 5 groups. Every question matters — this is what separates tailored strategy from generic advice."_

Ask all questions in groups. Document every answer. If the user skips a question, state the default assumption you will use and ask for explicit confirmation.

### GROUP A — Product & Business Identity

| ID  | Question                                                                                                            |
| --- | ------------------------------------------------------------------------------------------------------------------- |
| A1  | What is the full name of your product/website? What does it do in one sentence?                                     |
| A2  | What is the URL? Is it live, staging, or not built yet?                                                             |
| A3  | Product category? (SaaS / e-commerce / blog / local business / portfolio / app landing page / news / other?)        |
| A4  | What specific problem does this product solve? Who has this problem?                                                |
| A5  | What is the primary call-to-action? (Sign up / Buy / Contact / Read / Download / Book a call?)                      |
| A6  | Is this a new domain or an existing one? How old is the domain approximately?                                       |
| A7  | What tech stack is the site built on? (React / Next.js / Vue / WordPress / Webflow / Shopify / plain HTML / other?) |
| A8  | Is the site server-side rendered (SSR), statically generated (SSG/pre-rendered), or client-side only (CSR / SPA)?   |

### GROUP B — Target Audience & Market

| ID  | Question                                                                                                   |
| --- | ---------------------------------------------------------------------------------------------------------- |
| B1  | Who is the ideal user/customer? Describe their age, profession, expertise level, and location.             |
| B2  | What countries or regions are you targeting? What languages?                                               |
| B3  | What would your ideal user type into Google or Bing to find you? Please list 5–10 specific search phrases. |
| B4  | Are you targeting local, national, or global search?                                                       |
| B5  | Is the audience B2B (businesses), B2C (consumers), or both?                                                |
| B6  | What is the typical buying journey — research-heavy over weeks, or a quick impulse decision?               |

### GROUP C — Competitors & Current State

| ID  | Question                                                                                         |
| --- | ------------------------------------------------------------------------------------------------ |
| C1  | Name 3–5 websites you consider direct competitors. Please give their URLs or names.              |
| C2  | Which competitor do you most want to outrank? Why do you think they currently rank higher?       |
| C3  | Have you done any SEO work on this site before? If yes, what was done and which tools were used? |
| C4  | Is Google Search Console set up and verified? Is Bing Webmaster Tools set up?                    |
| C5  | Do you have any analytics on the site? What is your estimated current monthly organic traffic?   |
| C6  | Are there any keywords you currently rank for, even at positions 20–100?                         |

### GROUP D — Goals & Constraints

| ID  | Question                                                                                                                        |
| --- | ------------------------------------------------------------------------------------------------------------------------------- |
| D1  | Primary SEO goal? (Get indexed / reach top 10 / beat a specific competitor / appear in Google AI Overviews / all of the above?) |
| D2  | What is your timeline? When do you need to see measurable results?                                                              |
| D3  | Is a developer available to make code changes? Or must this be no-code only?                                                    |
| D4  | What SEO tools do you have access to? (Ahrefs / SEMrush / Moz / only free tools like GSC and Bing WT?)                          |
| D5  | How many pages currently exist on the site? Is there existing content?                                                          |
| D6  | Any technical constraints? (CDN limits / hosting restrictions / CMS blocks / no access to `<head>` tag?)                        |
| D7  | Does the site use AI-generated content? If yes, what human review and editing process exists?                                   |

### GROUP E — GEO & AI Visibility Goals

| ID  | Question                                                                                                   |
| --- | ---------------------------------------------------------------------------------------------------------- |
| E1  | Do you want to appear in Google AI Overviews (the AI-generated answer boxes at the top of Google results)? |
| E2  | Do you want to be cited by Bing Copilot, ChatGPT, Perplexity, or other AI answer engines?                  |
| E3  | Does existing content include instructional/how-to material, FAQ sections, or Q&A content?                 |
| E4  | Is any structured data (schema markup) currently on the site? If yes, which types?                         |
| E5  | Is the brand currently mentioned or cited on other authoritative websites? Which ones?                     |

---

## PART 4 — COMPETITOR ANALYSIS FRAMEWORK

### Step 1 — Find Real SEO Competitors

> ⚠️ Business competitors and SEO competitors are often different. Always run this process rather than using the business rivals the user listed.

1. Take the 5–10 keyword phrases from intake answer **B3**.
2. Search each phrase in Google (incognito/private mode). Record top 5 organic results.
3. Search the same phrases in Bing. Record top 5 results.
4. Identify domains appearing **3 or more times** across all searches. These are real SEO competitors.
5. Remove unreachable benchmarks: Wikipedia, Amazon, Forbes, Reddit, major news sites — unless the user is enterprise-level.
6. Filter to **3–5 competitors** with Domain Rating (DR) within ±20 of the user's site. Check via Ahrefs Free Backlink Checker or Moz Link Explorer.
7. Present the shortlist to the user and ask: _"Are these the right competitors to analyze? Any to add or remove?"_

**Rule:** 40%+ keyword overlap = genuine SEO competitor. Under 20% = not worth deep analysis.

### Step 2 — Analyze All 13 Dimensions For Each Competitor

| #   | Analysis Area                    | What to Find                                           | Free Tool                                                              |
| --- | -------------------------------- | ------------------------------------------------------ | ---------------------------------------------------------------------- |
| 1   | Title tag strategy               | Keyword position, brand placement, length, power words | View page source                                                       |
| 2   | Meta description style           | Format (benefit/question/CTA), length, keyword         | metatags.io                                                            |
| 3   | H1/H2 keyword usage              | Exact vs. semantic match, heading hierarchy depth      | View page source                                                       |
| 4   | Content length & depth           | Word count on ranking pages. Shallow or comprehensive? | Paste into word counter                                                |
| 5   | Schema markup present            | Which schema types? Any errors?                        | [Rich Results Test](https://search.google.com/test/rich-results)       |
| 6   | Core Web Vitals scores           | LCP, INP, CLS — note where they fail                   | [PageSpeed Insights](https://pagespeed.web.dev/)                       |
| 7   | Backlink profile                 | Referring domains, .edu/.gov links present?            | Ahrefs Free / Moz                                                      |
| 8   | Social signals (Bing factor)     | Active sharing on Facebook, LinkedIn, X?               | Manual check                                                           |
| 9   | FAQ / AI-optimized content       | FAQ sections with schema? HowTo guides? Q&A blocks?    | Manual review + Rich Results Test                                      |
| 10  | Content freshness                | When were key pages last updated?                      | Google cache check: `cache:url`                                        |
| 11  | Keyword gap                      | Keywords they rank for that user doesn't               | SEMrush Keyword Gap (free trial)                                       |
| 12  | Featured snippets / AI Overviews | Do they own any for target keywords?                   | Manual search                                                          |
| 13  | Mobile experience                | Does the mobile version work cleanly?                  | [Mobile-Friendly Test](https://search.google.com/test/mobile-friendly) |

### Step 3 — Competitor Analysis Table (Fill For Each Competitor)

```
Competitor URL:
Domain Age (approx.):
Estimated Monthly Traffic:
Top 3 Ranking Keywords:
Schema Types Detected:
CWV — LCP / INP / CLS:
Content Depth (avg. words on key pages):
Has FAQPage Schema?:
Social Signal Activity:
Referring Domains Count:
Key Strengths vs. Our Product:
Key Weaknesses / Our Opportunity:
Keyword Gap Opportunities:
```

---

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

| T4-7 | Add `SoftwareApplication` JSON-LD schema for SaaS/app products: applicationCategory, operatingSystem, offers (pricing) | App-specific rich results + AI product citation | [schema.org/SoftwareApplication](https://schema.org/SoftwareApplication) |

---

#### TIER 5 — Content SEO & Blog Optimization (Week 4–5)

| ID   | Action                                                                                                                   | Why                                                                     | Official Reference                                                                                         |
| ---- | ------------------------------------------------------------------------------------------------------------------------ | ----------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| T5-1 | Audit H1/H2/H3 structure: ensure one H1 per page, standalone H2 answer blocks, and correct heading hierarchy             | Blocks are the extraction unit for AI Overviews and Copilot             | [Google: Snippets](https://developers.google.com/search/docs/appearance/featured-snippets)                 |
| T5-2 | Restructure intro paragraphs: lead with the direct answer (inverted pyramid) in the first 40–60 words                    | Increases featured snippet eligibility + AI extraction reliability      | [Google: Snippets](https://developers.google.com/search/docs/appearance/featured-snippets)                 |
| T5-3 | Add `BlogPosting` or `Article` schema to all content pages: headline, images (1:1/4:3/16:9), datePublished, dateModified | Required for Google Discover + Big Rich Results eligibility             | [Google: Article](https://developers.google.com/search/docs/appearance/structured-data/article)            |
| T5-4 | Implement Pillar-Cluster model: one pillar page per topic linking to 8–12 cluster pages                                  | Establishes topical authority — critical for the Helpful Content System | [Google: Helpful Content](https://developers.google.com/search/docs/fundamentals/creating-helpful-content) |
| T5-5 | Author E-E-A-T audit: visible byline, custom author bio, and link to credentialed author page with `Person` schema       | Core trust signal for both Google (E-E-A-T) and users                   | [Google: E-E-A-T](https://developers.google.com/search/docs/fundamentals/creating-helpful-content)         |
| T5-6 | Content freshness sync: update `dateModified` only when substantive content changes occur                                | Fake freshness (date changes without content updates) is penalized      | [Google: Blog](https://developers.google.com/search/blog)                                                  |
| T5-7 | RSS Feed + WebSub/IndexNow setup: submit RSS to GSC/Bing WT and enable immediate pinging on publish                      | Fastest route to indexing new content in Google AND Bing                | [Google: RSS](https://developers.google.com/search/blog/2014/10/best-practices-for-xml-sitemaps-rssatom)   |

---

## PART 6 — SCHEMA JSON-LD TEMPLATES

All templates use **JSON-LD format** (preferred by both Google and Bing). Insert inside `<script type="application/ld+json">` in `<head>`. Replace all `{{PLACEHOLDER}}` values with real data.

### Organization — Add to Every Homepage

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "{{COMPANY_NAME}}",
  "url": "{{WEBSITE_URL}}",
  "logo": "{{LOGO_URL_MIN_112x112px}}",
  "description": "{{ONE_SENTENCE_DESCRIPTION}}",
  "foundingDate": "{{YEAR}}",
  "sameAs": [
    "{{LINKEDIN_URL}}",
    "{{TWITTER_X_URL}}",
    "{{FACEBOOK_URL}}",
    "{{GITHUB_URL}}"
  ],
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "customer support",
    "email": "{{SUPPORT_EMAIL}}",
    "url": "{{CONTACT_PAGE_URL}}"
  }
}
```

### WebSite — Add to Every Homepage

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "{{SITE_NAME}}",
  "url": "{{WEBSITE_URL}}",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "{{WEBSITE_URL}}/search?q={search_term_string}"
    },
    "query-input": "required name=search_term_string"
  }
}
```

### WebPage — Add to Every Individual Page

```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "{{PAGE_TITLE}}",
  "description": "{{PAGE_DESCRIPTION}}",
  "url": "{{PAGE_URL}}",
  "datePublished": "{{YYYY-MM-DD}}",
  "dateModified": "{{YYYY-MM-DD}}",
  "inLanguage": "{{e.g. en-US}}",
  "isPartOf": {
    "@type": "WebSite",
    "url": "{{WEBSITE_URL}}"
  }
}
```

### FAQPage — Highest GEO Impact (3.2× More Likely in AI Overviews)

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "{{EXACT_QUESTION_USERS_TYPE}}",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "{{DIRECT_ANSWER_IN_PLAIN_TEXT_NO_HTML}}"
      }
    },
    {
      "@type": "Question",
      "name": "{{QUESTION_2}}",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "{{ANSWER_2}}"
      }
    }
  ]
}
```

### Article / BlogPosting — Add to All Content Pages

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "{{TITLE_MAX_110_CHARS}}",
  "description": "{{META_DESCRIPTION}}",
  "url": "{{PAGE_URL}}",
  "datePublished": "{{YYYY-MM-DD}}",
  "dateModified": "{{YYYY-MM-DD}}",
  "author": {
    "@type": "Person",
    "name": "{{AUTHOR_FULL_NAME}}",
    "url": "{{AUTHOR_BIO_URL}}",
    "sameAs": ["{{AUTHOR_LINKEDIN_URL}}"]
  },
  "publisher": {
    "@type": "Organization",
    "name": "{{COMPANY_NAME}}",
    "logo": {
      "@type": "ImageObject",
      "url": "{{LOGO_URL}}"
    }
  },
  "image": {
    "@type": "ImageObject",
    "url": "{{FEATURED_IMAGE_1200x630px}}",
    "width": 1200,
    "height": 630
  }
}
```

### SoftwareApplication — For SaaS and App Products

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "{{APP_NAME}}",
  "description": "{{APP_DESCRIPTION}}",
  "url": "{{APP_URL}}",
  "applicationCategory": "{{e.g. BusinessApplication / UtilitiesApplication / EducationalApplication}}",
  "operatingSystem": "{{e.g. Web / iOS / Android / Windows}}",
  "offers": {
    "@type": "Offer",
    "price": "{{STARTING_PRICE_or_0_if_free}}",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "{{e.g. 4.7}}",
    "reviewCount": "{{NUMBER}}",
    "bestRating": "5"
  }
}
```

### HowTo — For Tutorial and Instructional Content

```json
{
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "{{HOW_TO_TITLE}}",
  "description": "{{BRIEF_DESCRIPTION}}",
  "totalTime": "{{ISO_DURATION_e.g._PT30M_for_30_minutes}}",
  "tool": [{ "@type": "HowToTool", "name": "{{REQUIRED_TOOL}}" }],
  "step": [
    {
      "@type": "HowToStep",
      "position": 1,
      "name": "{{STEP_1_SHORT_NAME}}",
      "text": "{{STEP_1_FULL_DESCRIPTION}}",
      "image": "{{STEP_1_IMAGE_URL_OPTIONAL}}"
    }
  ]
}
```

### BreadcrumbList — All Multi-Level Pages

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "{{HOMEPAGE_URL}}"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "{{SECTION_NAME}}",
      "item": "{{SECTION_URL}}"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "{{PAGE_NAME}}",
      "item": "{{PAGE_URL}}"
    }
  ]
}
```

### LocalBusiness — For Location-Based Products or Services

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "{{BUSINESS_NAME}}",
  "description": "{{DESCRIPTION}}",
  "url": "{{WEBSITE_URL}}",
  "telephone": "{{PHONE}}",
  "email": "{{EMAIL}}",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "{{STREET}}",
    "addressLocality": "{{CITY}}",
    "addressRegion": "{{STATE_REGION}}",
    "postalCode": "{{ZIP}}",
    "addressCountry": "{{e.g. US}}"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "{{LAT}}",
    "longitude": "{{LNG}}"
  }
}
```

---

## PART 7 — META TAG RULES

### `<title>` Tag

- **Length:** 50–60 characters maximum
- **Structure:** `Primary Keyword — Descriptive Phrase | Brand Name`
- **Rule:** Primary keyword near the start; brand at the end
- **Every page must have a unique title — never duplicate**
- **Bing:** Uses title more as-written. Exact keyword phrase match critical.
- **Google:** Often rewrites titles. Write the best human-readable version.
- **Reference:** https://developers.google.com/search/docs/appearance/title-link

### `<meta name="description">`

- **Length:** 150–160 characters maximum
- **Must include:** Primary keyword + compelling reason to click (benefit, promise, or action)
- **Every page must have a unique description — never duplicate**
- **Bing:** Uses your written description mostly as-is. Write it carefully.
- **Google:** Often rewrites it to match the specific query.
- **Reference:** https://developers.google.com/search/docs/appearance/snippet

### `<meta name="robots">`

- Rankable pages: `content="index, follow"`
- Admin / thank-you / internal search / duplicate pages: `content="noindex, nofollow"`
- Pages with useful links but not for ranking: `content="noindex, follow"`
- **Reference:** https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag

### `<link rel="canonical">`

- **Every page must have one**
- Self-referencing on unique, original pages
- Must use absolute URLs including `https://`
- **Reference:** https://developers.google.com/search/docs/crawling-indexing/canonicalization

### `<meta name="viewport">`

- Always: `content="width=device-width, initial-scale=1"`
- Required for Google mobile-first indexing

### Open Graph (`og:`)

- `og:image` minimum **1200×630px** — critical for Bing social signal ranking
- `og:type`: use `website` for homepage, `article` for blog posts
- Validate with: https://developers.facebook.com/tools/debug/
- **Reference:** https://ogp.me/

### `<link rel="hreflang">`

- Required only for multi-language or multi-regional sites
- Include `x-default` pointing to the default language
- **Reference:** https://developers.google.com/search/docs/specialty/international/localization

---

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

## PART 9 — GOOGLE vs. BING DIFFERENCES

Never treat Google and Bing as the same search engine. Handle both explicitly.

| Factor                 | Google                                                           | Bing                                                                                                 |
| ---------------------- | ---------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| Keyword matching       | Semantic + intent-based. Understands synonyms and related terms. | **Exact-match preferred.** Use the exact keyword phrase verbatim in title, H1, URL, first paragraph. |
| Social signals         | Not officially used as ranking signals                           | **Explicitly used.** Facebook shares, LinkedIn engagement, X reposts directly boost ranking.         |
| JavaScript rendering   | Excellent — handles complex SPAs, multi-pass rendering           | **WEAK.** Client-side-only React/Vue/Angular is often invisible to Bingbot. SSR or SSG required.     |
| Indexing priority      | **Mobile-first.** Desktop is secondary.                          | Desktop-first. Both versions must be optimized.                                                      |
| Meta description usage | Often rewrites to match the specific query                       | Uses your written description mostly as-is. Write carefully.                                         |
| Domain age             | Content quality can overcome a new domain                        | Older, established domains receive more inherent trust.                                              |
| Backlink weighting     | Quality + topical relevance                                      | **Extra weight for .edu and .gov domains.** Total count also matters more.                           |
| Content length         | Depth and completeness over raw word count                       | Explicitly prefers longer-form, comprehensive content.                                               |
| Webmaster tools        | Google Search Console                                            | **Bing Webmaster Tools — completely separate. Manual sitemap submission required.**                  |
| Structured data        | Powers rich results + AI Overviews                               | Powers Bing rich results + Copilot citations                                                         |

---

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

## PART 11 — ALGORITHM UPDATE MONITORING

### When Google or Bing Announces an Update

1. Check the official reference links below for what changed.
2. Cross-reference against the affected section of this skill file.
3. Generate a specific impact report: what changed, which pages/tags/schema are affected, what action is needed.
4. Present impact report to user. Follow the Approved Change Protocol for every proposed update action.
5. After implementing: update any local notes with new version information.

### Sources to Monitor

| Source                     | URL                                                    | Check Frequency             |
| -------------------------- | ------------------------------------------------------ | --------------------------- |
| Google Search Central Blog | https://developers.google.com/search/blog              | Weekly                      |
| Bing Webmaster Blog        | https://blogs.bing.com/webmaster/                      | Monthly                     |
| Search Engine Land         | https://searchengineland.com/category/google/algorithm | Weekly during major updates |
| Search Engine Roundtable   | https://www.seroundtable.com/                          | Weekly                      |
| Core Web Vitals changelog  | https://web.dev/articles/vitals                        | Quarterly                   |

---

## PART 12 — BEGINNER EXECUTION TIMELINE

For users starting from zero, execute in this exact order:

| When        | Actions                                                                                                                                                                                        |
| ----------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Day 1**   | Meta tags (title, description, robots, canonical, viewport) · Organization schema · WebSite schema · robots.txt audit · HTTPS verify · Sitemap → GSC + Bing WT                                 |
| **Week 1**  | CWV fixes (LCP/INP/CLS) · H1/H2/H3 structure · Open Graph tags · Twitter Cards · WebPage schema · BreadcrumbList schema · Mobile-friendly test · Bing JS rendering audit · Bing Places listing |
| **Week 2**  | FAQPage schema · HowTo schema · Person/Author schema · Article schema · Keyword placement audit · Image alt text · Bing social sharing strategy                                                |
| **Week 3**  | Topic cluster planning · Internal link audit · Content freshness plan · Social sharing schedule · Fix any orphan pages                                                                         |
| **Week 4**  | GEO: self-contained H2 content blocks · Definitive answer formats ("X is Y.") · Entity name optimization · Citation links to credible sources · Tables/lists restructuring                     |
| **Ongoing** | Monthly: Review GSC + Bing WT errors · Quarterly: Refresh top-performing content pages · On update announcement: Check monitoring sources above                                                |

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

| Rule                                         | Explanation                                                                                                                                                 |
| -------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| One primary H1 per page                      | Best practice for clarity — Google's John Mueller has confirmed multiple H1s do not technically harm SEO, but one clear H1 signals the page's primary topic |
| H1 ≠ title tag                               | The `<title>` tag is for SERPs; the H1 is for the page. They should be related but different. Google rewrites title tags when they don't match page content |
| Contains the primary keyword naturally       | Do not force it — if the keyword fits naturally, use it; if it creates awkward phrasing, prioritize readability                                             |
| Describes the page's exact purpose           | Per Google's developer style guide: "Write document titles based on the primary purpose of the document"                                                    |
| 20–70 characters is the readable range       | No official character limit — but longer H1s reduce scannability                                                                                            |
| Never use H1 for styling                     | Use CSS for visual formatting. Reserve heading tags for content structure                                                                                   |
| Homepage H1 ≠ Blog post H1 ≠ Product page H1 | Each page type has a different primary purpose — the H1 formula changes accordingly                                                                         |

**Homepage H1 formula:** `[Brand Name] — [What You Do] for [Who You Serve]`
**Blog post H1 formula:** `[Primary Keyword Naturally Phrased as the Article's Exact Topic]`
**Product/service page H1 formula:** `[Product/Service Name] — [Primary Benefit or Use Case]`

#### H2 Rules

H2 tags mark the major sections of a page. Each H2 is a self-contained topic block.

**Critical for AI search visibility:** Google AI Overviews and featured snippets extract content by block — by H2 section — not by full page. A self-contained H2 block that fully answers its implied question is the primary format that gets extracted and cited.

| Rule                                                  | Explanation                                                                                                        |
| ----------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ |
| Each H2 is a standalone answer block                  | The content immediately below each H2 must answer that H2's question completely, without relying on other sections |
| Question-format H2s for informational content         | "What is X?", "How does X work?", "Why does X matter?" — these match voice search and People Also Ask queries      |
| Statement-format H2s for listicles and how-to content | "The 5 types of X", "How to do X in 3 steps" — clearer for structured content                                      |
| Contains semantic keyword variants naturally          | Use related terms and synonyms — do not repeat the exact H1 keyword                                                |
| One heading every 200–300 words                       | Observable pattern across top-ranking pages for scannability and crawl structure                                   |
| Descriptive — never vague                             | "Introduction" and "Overview" are weak H2s. "What Core Web Vitals Are and Why They Affect Rankings" is strong      |
| H2 anchor text previews the section                   | The reader should know what they will find in the section just from reading the H2                                 |

#### H3 Rules

H3 is a subsection within an H2. It is never placed without a parent H2.

| Rule                                          | Explanation                                                             |
| --------------------------------------------- | ----------------------------------------------------------------------- |
| Never place H3 without a parent H2            | Do not skip heading levels — breaks logical structure and accessibility |
| Use for sub-angles within an H2 section       | Drilling into a specific example, a definition, a step within a process |
| Long-tail keyword variants fit naturally here | H3s often match the most specific, long-tail search queries             |
| Do not use H3 for styling                     | Same rule as H1 — heading tags are for structure, not visual design     |

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

| Content type                      | Typical range   | Rationale                           |
| --------------------------------- | --------------- | ----------------------------------- |
| Pillar page / comprehensive guide | 2,000+ words    | Must cover a broad topic with depth |
| Cluster / supporting article      | 800–1,500 words | Focused on one specific subtopic    |
| FAQ article                       | 600–1,200 words | Answers multiple specific questions |
| News / update post                | 300–600 words   | Timeliness matters more than length |

Do not pad content. Filler paragraphs dilute the article's quality signal.

**Source:** https://developers.google.com/search/docs/fundamentals/creating-helpful-content
**Source:** https://static.googleusercontent.com/media/guidelines.raterhub.com/en//searchqualityevaluatorguidelines.pdf

---

### 14.3 — ARTICLE AND BLOGPOSTING SCHEMA

**Official basis:** https://developers.google.com/search/docs/appearance/structured-data/article (updated December 2025)

Article schema helps Google understand blog and news content and enables rich results including larger images, author information, and publication dates in search results and Google Discover.

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

| Rule                                                 | Why it matters                                                                           |
| ---------------------------------------------------- | ---------------------------------------------------------------------------------------- |
| `headline` max 110 characters                        | Truncated in rich results beyond this                                                    |
| Images in all three aspect ratios                    | Required for full rich result eligibility — 1:1, 4:3, and 16:9                           |
| `dateModified` reflects actual content changes only  | Google penalizes fake freshness — only update when substantive changes are made          |
| `author.url` links to a real author page             | Author page must have credentials — not a generic homepage                               |
| Schema must reflect visible page content             | Never mark up content users cannot see — Google requires markup to match on-page content |
| Validate with Rich Results Test after implementation | https://search.google.com/test/rich-results                                              |

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

| Rule                                                                          | Source                               |
| ----------------------------------------------------------------------------- | ------------------------------------ |
| Click depth ≤ 3 from homepage to any important page                           | Google's crawlability guidelines     |
| Under 100 internal links per page                                             | Google's documented recommendation   |
| Contextual anchor text only — describes the target page topic                 | Google Search Central                |
| Fix orphan pages (zero inbound internal links) — they cannot rank effectively | Screaming Frog / GSC coverage report |
| No linking purely for link equity — every link must serve user navigation     | Google spam policies                 |

**Source:** https://developers.google.com/search/docs/crawling-indexing/links-crawlable
**Source:** https://developers.google.com/search/docs/essentials

---

### 14.5 — KEYWORD RESEARCH FOR CONTENT CREATION

**Official basis:** Google Search Essentials, Google Helpful Content System

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

Creating informational content for a transactional keyword (or vice versa) will not rank — the content type must match the intent.

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
- Write for readers first — Google's systems are designed to evaluate whether content genuinely serves users

**Source:** https://developers.google.com/search/docs/fundamentals/seo-starter-guide
**Source:** https://developers.google.com/search/docs/fundamentals/creating-helpful-content

---

### 14.6 — BLOG TITLE AND H1 FORMULAS

**Official basis:** https://developers.google.com/search/docs/appearance/title-link

#### Title Tag Rules (for SERPs)

| Rule                                   | Specification                                                                 |
| -------------------------------------- | ----------------------------------------------------------------------------- |
| Character length                       | 50–60 characters — beyond 60 is typically truncated in SERPs                  |
| Primary keyword position               | Toward the front when natural — do not force it                               |
| Must be accurate                       | Google rewrites title tags that don't match page content                      |
| Title tag ≠ H1                         | They should be related but different — title is for SERPs, H1 is for the page |
| No keyword stuffing                    | Google detects and rewrites manipulative title tags                           |
| No superlative claims without evidence | "Best", "World's #1" — only use if you can substantiate the claim             |

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

| Element                   | Requirement                                                                 |
| ------------------------- | --------------------------------------------------------------------------- |
| Full name                 | Not "Admin", "Editor", or "SEO Team"                                        |
| Professional credentials  | Relevant to the topics the author writes about                              |
| Years of experience       | Specific to the subject area                                                |
| External profile links    | LinkedIn, professional associations, published work elsewhere               |
| Photo                     | Increases human trust signals                                               |
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

**Google's December 2025 Core Update explicitly penalizes fake freshness — changing dates without meaningful updates is now treated as a deceptive practice.**

#### Content Audit Schedule

| Frequency           | Actions                                                               |
| ------------------- | --------------------------------------------------------------------- |
| Monthly             | Check GSC for pages losing impressions — candidates for update        |
| Quarterly           | Refresh top-performing articles with new data and updated sections    |
| Annually            | Full content audit — identify pages to update, consolidate, or remove |
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

| Rule                                                        | Why                                                                                                     |
| ----------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| Include only canonical URLs                                 | Never include duplicate URLs — increases server load without improving indexing                         |
| Set `pubDate` accurately                                    | Only update timestamps when content changes meaningfully — Google uses these to track content lifecycle |
| Do NOT artificially modify timestamps                       | Google detects timestamp manipulation — treat this the same as fake freshness                           |
| Submit RSS feed to Google Search Console (Sitemaps section) | Alongside the XML sitemap — not instead of it                                                           |
| Submit RSS feed to Bing Webmaster Tools separately          | Completely separate from Google submission                                                              |
| Keep feed to last 20–50 items                               | Practical standard — Google needs recent updates, not full history                                      |
| All URLs in the feed must return 200 status codes           | Broken links in RSS confuse crawlers                                                                    |

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

## PART 15 — OFFICIAL REFERENCES INDEX

All critical official documentation. Verify these are current at each re-audit. If a URL redirects or changes, note it and update the skill file.

### Google

- **Search Essentials (Official Rules):** https://developers.google.com/search/docs/essentials
- **SEO Starter Guide:** https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- **Helpful Content System:** https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- **Core Web Vitals:** https://web.dev/articles/vitals
- **LCP:** https://web.dev/articles/lcp
- **INP:** https://web.dev/articles/inp
- **CLS:** https://web.dev/articles/cls
- **Structured Data Overview:** https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
- **Rich Results Test:** https://search.google.com/test/rich-results
- **Featured Snippets Guide:** https://developers.google.com/search/docs/appearance/featured-snippets
- **Title Link Guide:** https://developers.google.com/search/docs/appearance/title-link
- **Snippets/Meta Description:** https://developers.google.com/search/docs/appearance/snippet
- **Canonical Guide:** https://developers.google.com/search/docs/crawling-indexing/canonicalization
- **robots.txt Guide:** https://developers.google.com/search/docs/crawling-indexing/robots/intro
- **Robots Meta Tag:** https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag
- **Sitemaps Guide:** https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview
- **Mobile Sites Guide:** https://developers.google.com/search/docs/appearance/mobile-sites
- **Images Guide:** https://developers.google.com/search/docs/appearance/google-images
- **Breadcrumbs Schema:** https://developers.google.com/search/docs/appearance/structured-data/breadcrumb
- **FAQPage Schema:** https://developers.google.com/search/docs/appearance/structured-data/faqpage
- **HowTo Schema:** https://developers.google.com/search/docs/appearance/structured-data/how-to
- **hreflang Guide:** https://developers.google.com/search/docs/specialty/international/localization
- **Search Central Blog (Algorithm Updates):** https://developers.google.com/search/blog
- **Quality Rater Guidelines (PDF):** https://static.googleusercontent.com/media/guidelines.raterhub.com/en//searchqualityevaluatorguidelines.pdf
- **Google Developer Style Guide — Headings:** https://developers.google.com/style/headings
- **RSS/Atom Best Practices:** https://developers.google.com/search/blog/2014/10/best-practices-for-xml-sitemaps-rssatom
- **Google Spam Policies:** https://developers.google.com/search/docs/essentials/spam-policies

### Bing

- **Webmaster Guidelines:** https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a
- **Webmaster Tools:** https://www.bing.com/webmasters/
- **Bing Places:** https://www.bingplaces.com/
- **Bing Structured Data:** https://www.bing.com/webmasters/help/marking-up-your-site-12a3234f
- **Bing URL Inspection:** https://www.bing.com/webmasters/url-inspection
- **Bing Search Blog:** https://blogs.bing.com/webmaster/
- **IndexNow (Bing):** https://www.indexnow.org

### Schema Vocabulary

- **Schema.org Full Vocabulary:** https://schema.org/
- **Schema.org Validator:** https://validator.schema.org
- **Organization:** https://schema.org/Organization
- **WebSite:** https://schema.org/WebSite
- **WebPage:** https://schema.org/WebPage
- **Article:** https://schema.org/Article
- **BlogPosting:** https://schema.org/BlogPosting
- **NewsArticle:** https://schema.org/NewsArticle
- **FAQPage:** https://schema.org/FAQPage
- **HowTo:** https://schema.org/HowTo
- **Product:** https://schema.org/Product
- **SoftwareApplication:** https://schema.org/SoftwareApplication
- **LocalBusiness:** https://schema.org/LocalBusiness
- **BreadcrumbList:** https://schema.org/BreadcrumbList
- **Person:** https://schema.org/Person
- **AggregateRating:** https://schema.org/AggregateRating

### Protocols & Social

- **Open Graph Protocol:** https://ogp.me/
- **Twitter/X Card Docs:** https://developer.twitter.com/en/docs/twitter-for-websites/cards/
- **Facebook OG Debugger:** https://developers.facebook.com/tools/debug/
- **Google PageSpeed Insights:** https://pagespeed.web.dev/
- **Mobile-Friendly Test:** https://search.google.com/test/mobile-friendly
- **Meta Tags Preview:** https://metatags.io
