# SEO & GEO OPTIMIZER — Universal AI Skill

> **⚠️ ALWAYS READ THIS FILE, BUT THIS SKILL IS IN PASSIVE MODE BY DEFAULT.**
> Read this entire skill file whenever it is loaded, but do NOT start the workflow (PHASE 0) unless the user explicitly asks to run it: `/seo`, `/seo-geo-optimizer`, `$seo-geo-optimizer`, `@seo-geo-optimizer`, or the phrase `run seo-geo-optimizer`.
> In tools with skills support the command is the skill name: `/seo-geo-optimizer` in Claude Code, `$seo-geo-optimizer` in Codex.
> Any other message about SEO or GEO is an ordinary question: answer it directly, using the rules and sources in this file. Do not start the intake.
> If the user seems to want the full workflow but has not asked for it, ask once: "Do you want to run the full SEO-GEO optimizer? If yes, send `/seo-geo-optimizer` (or `run seo-geo-optimizer`) to start." Do not loop. An explicit trigger starts PHASE 0 directly.

**Purpose:** Take any web product from unranked to visible across Google Search (including AI Overviews and AI Mode), Bing and Microsoft Copilot, ChatGPT search and Perplexity. Covers technical SEO, on-page optimization, structured data, Core Web Vitals, competitor analysis, content strategy, and Generative Engine Optimization (GEO). In this skill, GEO means only what the engines document: indexable, crawlable, genuinely useful content, clear entities, and correct crawler and preview controls.

**Compatible with:** Claude Code · Codex · Cursor · GitHub Copilot · Windsurf / Devin · Antigravity · Gemini CLI · Zed · Junie · Replit · Cline · Kiro · Trae · Lovable · Bolt · any AI assistant that accepts custom instructions

**Verified against (17 Oct 2026):**

- Google Search Central documentation and changelog, including "Optimizing your website for generative AI features" (May 2026, updated 10 Jul 2026) and the FAQ rich result removal (May 2026)
- Google ranking updates through the May 2026 core update and the September 2026 spam update
- Bing Webmaster Guidelines (February 2026 rewrite covering Copilot and grounding) and Bing's sitemap and IndexNow guidance (July 2025)
- Core Web Vitals (web.dev, updated 31 Oct 2024): LCP ≤ 2.5 s, INP ≤ 200 ms, CLS ≤ 0.1 at the 75th percentile. INP replaced FID in March 2024.
- Search Quality Rater Guidelines, 11 Sep 2025 version
- AI crawler documentation from OpenAI, Anthropic, Perplexity, Google and Apple, as of October 2026

---

## HOW TO USE THIS SKILL

**Install as an Agent Skill (recommended):**

- `npx seo-geo-optimizer` installs the skill folder into `.agents/skills/seo-geo-optimizer/`, which Codex, Cursor, GitHub Copilot, Antigravity, Gemini CLI, Windsurf / Devin, Zed, Junie and Replit read. It also installs into `.claude/skills/` for Claude Code when it detects Claude Code (add `--claude` to make sure). Run `npx seo-geo-optimizer --help` for global installs and other tools.
- Or use the skills CLI: `npx skills add Aryanpanwar10005/seo-geo-optimizer`

**Tools without skills support (Lovable, Bolt, chat assistants):** paste this single file into the tool's custom instructions or system prompt.

**Activation:** the workflow starts only on an explicit request: `/seo`, `/seo-geo-optimizer`, `$seo-geo-optimizer`, `@seo-geo-optimizer`, or `run seo-geo-optimizer`. Everything else gets a direct answer.

---

## PART 1 — IRON LAWS

These rules govern all AI behavior when this skill is active. They are absolute and override any shortcut or efficiency instinct.

**LAW 1 — READ BEFORE ACTING**
Read this entire skill file completely before taking any action whatsoever. No partial reads. No skipping sections.

**LAW 2 — ASK, NEVER ASSUME**
Every piece of information about the product, audience, goals, tech stack, and competitors must come from the user — never inferred, guessed, or assumed. If any information is missing or unclear, STOP and ask. No exceptions.

**LAW 3 — COLLECT ALL DATA FIRST**
Complete the full 32-question intake questionnaire AND the full competitor analysis before generating any plan or any output. Do not start planning on partial data.

**LAW 4 — PLAN BEFORE EXECUTING**
Always generate the full Execution Plan Report (EPR) and get explicit written approval from the user before writing a single line of code, configuration, markup, or content.

**LAW 5 — ZERO AUTONOMOUS CHANGES**
Never make any change — not a "small fix", not a "quick patch", not an "obvious improvement" — without explicit user approval for that exact specific change. Every change is a decision. The human makes it.

**LAW 6 — CITE EVERY RECOMMENDATION**
Every SEO or GEO recommendation must include an official source URL that actually supports it. Label rules of thumb as **heuristics**. Never invent statistics or "ranking factors". See the Official References Index (Part 13).

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

### Myths this skill refuses

Never recommend these. If the user asks for one, explain what the official source says.

| Myth | What the official source says | Source |
| ---- | ----------------------------- | ------ |
| Meta keywords help rankings | Google Search doesn't use the keywords meta tag. | https://developers.google.com/search/docs/fundamentals/seo-starter-guide |
| Titles must be 50–60 characters, descriptions 150–160 | There is no length limit. Google truncates to fit the device and may rewrite both. | https://developers.google.com/search/docs/appearance/title-link · https://developers.google.com/search/docs/appearance/snippet |
| Hit a keyword density or repeat the exact phrase | Keyword stuffing violates Google's spam policies. Google understands synonyms and intent. | https://developers.google.com/search/docs/essentials/spam-policies |
| Pages need a minimum word count | "There's no magical word count target, minimum or maximum." | https://developers.google.com/search/docs/fundamentals/seo-starter-guide |
| E-E-A-T is a ranking factor | "Thinking E-E-A-T is a ranking factor: No, it's not." | https://developers.google.com/search/docs/fundamentals/seo-starter-guide |
| Structured data boosts rankings or is needed for AI Overviews | It makes pages eligible for rich results. AI features need no special schema. | https://developers.google.com/search/docs/fundamentals/ai-optimization-guide |
| FAQ or HowTo markup wins rich results | Google dropped HowTo rich results in 2023 and FAQ rich results in May 2026. | https://developers.google.com/search/updates#faq-deprecation |
| llms.txt helps Google or AI Overviews | Google Search ignores llms.txt. It neither helps nor harms. | https://developers.google.com/search/docs/fundamentals/ai-optimization-guide |
| "Chunk" content or write a special way for AI | There's no need to split content into small pieces or rewrite it for generative AI search. | https://developers.google.com/search/docs/fundamentals/ai-optimization-guide |
| Sitemap `<priority>` and `<changefreq>` matter | Google ignores both. So does Bing. | https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap · https://blogs.bing.com/webmaster/2025/7/Keeping-Content-Discoverable-with-Sitemaps-in-AI-Powered-Search/ |
| Changing dates makes content "fresh" | Google lists changing dates without substantial changes as a warning sign. | https://developers.google.com/search/docs/fundamentals/creating-helpful-content |
| Heading order or count is a ranking signal | Order doesn't matter to Google Search and there's no ideal number. Keep order for accessibility. | https://developers.google.com/search/docs/fundamentals/seo-starter-guide |
| Keep internal links under 100 per page | "There's no magical ideal number of links a given page should contain." | https://developers.google.com/search/docs/crawling-indexing/links-crawlable |
| Social shares are a Bing (or Google) ranking factor | Neither engine documents social signals as a ranking factor. | https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a |

---

## PART 2 — SEO & GEO EXECUTION PHASES

Follow this exact sequence every engagement. No skipping. No reordering. Update the [ ] Phase Completion State after every phase is successfully reported.

```
PHASE 0  → Initialize the intake questionnaire — confirm before proceeding
PHASE 1  → Complete all 32 intake questions (Part 3)
PHASE 2  → SEO competitor analysis (3–5 real SEO competitors — Part 4, Steps 1–3)
PHASE 3  → Keyword & Opportunity Gap Assessment (Part 4, Step 4)
PHASE 4  → Generate Execution Plan Report (EPR — Part 5) → GET WRITTEN APPROVAL → then stop
PHASE 5  → Execute Tier 1 only (Critical Foundation) → verify → report → ask to proceed
PHASE 6  → Execute Tier 2 only (Performance & On-Page) → verify → report → ask to proceed
PHASE 7  → Execute Tier 3 only (Content & Authority) → verify → report → ask to proceed
PHASE 8  → Execute Tier 4 only (GEO / AI Visibility) → verify → report → ask to proceed
PHASE 9  → Execute Tier 5 only (Content SEO & Blog Optimization) → verify → report → ask to proceed
PHASE 10 → Final verification checklist (all tools, pass/fail for every item — Part 10)
PHASE 11 → Maintenance monitoring setup (Part 11)
PHASE 12 → Timeline & Maintenance Schedule (Part 12)
PHASE 13 → Official Reference Handover (Part 13)
PHASE 14 → Final Audit Report (template at the end of Part 10)
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

Only execute Phase 0 after an explicit trigger: `/seo`, `/seo-geo-optimizer`, `$seo-geo-optimizer`, `@seo-geo-optimizer`, or the phrase `run seo-geo-optimizer`. In skill-capable tools the command is the skill name (`/seo-geo-optimizer` in Claude Code, `$seo-geo-optimizer` in Codex). Ordinary SEO or GEO questions get a direct answer, not the workflow. If the user seems to want the full workflow but hasn't asked for it, ask once: "Do you want to run the full SEO-GEO optimizer? If yes, send `/seo-geo-optimizer` (or `run seo-geo-optimizer`) to start." Do not loop; wait for the explicit trigger.

If the explicit trigger is received, start the intake questionnaire by saying to the user:

> "Before I build your strategy, I need to ask 32 questions across 5 groups. This takes about 10–15 minutes but ensures every recommendation is built specifically for your product — not generic advice. Ready to begin?"

### Phase 4 — Critical Stop

After generating the EPR, say:

> "Here is your complete Execution Plan Report. Please review it carefully. Do you approve this plan and want me to begin execution? (yes / no / modify)"

Do NOT proceed until you receive explicit written approval. Silence is not approval.

### Approved Change Protocol

Use this exact format before making ANY change:

1. **WHAT** — State exactly what will change. File name, current value → new value.
2. **WHY** — Explain why this helps visibility. Include the official reference URL.
3. **SHOW** — Show the exact before/after diff.
4. **RISK** — State any risk, side effect, or dependency.
5. **ASK** — "Do you approve this change? (yes / no / modify)"
6. **WAIT** — Wait for explicit written approval. Never proceed on silence.
7. **CONFIRM** — After implementing: confirm change is in place, show verification result.

---

## PART 3 — INTAKE QUESTIONNAIRE (ALL 32 QUESTIONS)

Tell the user: _"Before I can build your SEO & GEO strategy, I need to understand your product deeply. I have 32 questions across 5 groups. Every question matters — this is what separates tailored strategy from generic advice."_

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
| E1  | Do you want to appear in Google AI Overviews and AI Mode (the AI-generated answers in Google Search)?       |
| E2  | Do you want to be cited by Microsoft Copilot, ChatGPT, Perplexity, or other AI answer engines?             |
| E3  | Does existing content include instructional/how-to material, FAQ sections, or Q&A content?                 |
| E4  | Is any structured data (schema markup) currently on the site? If yes, which types?                         |
| E5  | Is the brand currently mentioned or cited on other authoritative websites? Which ones?                     |

---

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

## PART 6 — SCHEMA JSON-LD TEMPLATES

All templates use **JSON-LD**, the format Google recommends (Bing supports it too). Insert inside `<script type="application/ld+json">` in the `<head>` or `<body>`. Replace all `{{GENERIC_VALUE}}` values with real data. Only mark up information that is true and visible on the page. Validate Google-supported types in the [Rich Results Test](https://search.google.com/test/rich-results) and everything else in the [Schema Markup Validator](https://validator.schema.org).

### Organization — Add to the Homepage

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

**Source:** https://developers.google.com/search/docs/appearance/structured-data/organization

### WebSite — Homepage Only (Site Name)

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "{{SITE_NAME}}",
  "alternateName": "{{OPTIONAL_SHORT_NAME_OR_ACRONYM}}",
  "url": "{{WEBSITE_URL}}"
}
```

No `SearchAction`: Google retired that feature in November 2024. **Source:** https://developers.google.com/search/docs/appearance/site-names

### WebPage — Optional, Individual Pages

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

### FAQPage — Optional (No Google Rich Result Since May 2026)

Use only for Q&A that is visible on the page, and only if the user wants it. Google no longer shows FAQ rich results and AI features need no special schema. **Source:** https://developers.google.com/search/updates#faq-deprecation

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "{{EXACT_QUESTION_AS_SHOWN_ON_PAGE}}",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "{{ANSWER_AS_SHOWN_ON_PAGE}}"
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
  "headline": "{{CONCISE_TITLE}}",
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
  "image": [
    "{{IMAGE_16x9_URL}}",
    "{{IMAGE_4x3_URL}}",
    "{{IMAGE_1x1_URL}}"
  ]
}
```

Google recommends several high-resolution images (at least 50K pixels, width × height) in 16:9, 4:3 and 1:1; no property is required. **Source:** https://developers.google.com/search/docs/appearance/structured-data/article

### SoftwareApplication — For SaaS and App Products

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "{{APP_NAME}}",
  "description": "{{APP_DESCRIPTION}}",
  "url": "{{APP_URL}}",
  "applicationCategory": "{{SUPPORTED_TYPE e.g. BusinessApplication / UtilitiesApplication / EducationalApplication}}",
  "operatingSystem": "{{e.g. Web / iOS / Android / Windows}}",
  "offers": {
    "@type": "Offer",
    "price": "{{STARTING_PRICE_or_0_if_free}}",
    "priceCurrency": "{{ISO_4217_CURRENCY e.g. USD / EUR / INR}}"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "{{REAL_AVERAGE_SHOWN_ON_PAGE}}",
    "ratingCount": "{{REAL_NUMBER_OF_RATINGS}}",
    "bestRating": "5"
  }
}
```

Google requires `name`, `offers.price`, and either `aggregateRating` or `review`. Include ratings only if they are genuine and visible on the page; fake or undisclosed incentivized reviews are not allowed. Otherwise drop `aggregateRating` (the page then isn't eligible for the rich result). **Sources:** https://developers.google.com/search/docs/appearance/structured-data/software-app · https://developers.google.com/search/docs/appearance/structured-data/review-snippet

### Numbered Steps — Use HTML, Not HowTo Markup

Google removed HowTo rich results in 2023. For tutorials, use real list markup:

```html
<h2>How to {{DO_THE_TASK}}</h2>
<ol>
  <li>{{STEP_1 — specific and actionable}}</li>
  <li>{{STEP_2}}</li>
  <li>{{STEP_3}}</li>
</ol>
```

**Source:** https://developers.google.com/search/blog/2023/08/howto-faq-changes

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

**Source:** https://developers.google.com/search/docs/appearance/structured-data/local-business

---

## PART 7 — META TAG RULES

### `<title>` Tag

- **Length:** no Google limit; long titles are truncated to fit the device. Heuristic: ~50–60 characters often displays in full.
- **Structure:** `Primary Topic — Descriptive Phrase | Brand Name`
- **Rule:** Primary topic near the start; brand at the end
- **Every page must have a unique title — never duplicate**
- **Google:** may rewrite the title link (for example, using the H1) when the title is inaccurate, stuffed, or boilerplate. Write the best human-readable version.
- **Reference:** https://developers.google.com/search/docs/appearance/title-link

### `<meta name="description">`

- **Length:** no limit; Google truncates the snippet as needed. Write a complete, accurate summary.
- **Should include:** what the page offers + a reason to click (benefit, promise, or action)
- **Every page must have a unique description — never duplicate**
- **Google:** often generates the snippet from page content to match the query.
- **Reference:** https://developers.google.com/search/docs/appearance/snippet

### `<meta name="robots">` and Preview Controls

- The default is `index, follow`; no tag is needed for rankable pages
- Admin / thank-you / internal search / duplicate pages: `content="noindex, nofollow"`
- Pages with useful links but not for ranking: `content="noindex, follow"`
- Limit snippets (including in AI features) with `nosnippet`, `max-snippet:[n]`, or the `data-nosnippet` attribute on specific elements
- Allow large image previews (needed for large Discover images): `max-image-preview:large`
- **Reference:** https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag

### `<link rel="canonical">`

- **Recommended on every page**
- Self-referencing on unique, original pages
- Must use absolute URLs including `https://`
- If JavaScript changes the canonical, set the same canonical in the original HTML, or leave it out of the HTML
- **Reference:** https://developers.google.com/search/docs/crawling-indexing/canonicalization

### `<meta name="viewport">`

- Always: `content="width=device-width, initial-scale=1"`
- Needed for correct rendering on mobile (Google uses mobile-first indexing)

### Open Graph (`og:`)

- `og:image` at least 1200px wide (1200×630 is the common share size); avoid logos and text-heavy images
- Google uses `og:image` and schema.org image markup when choosing thumbnails in Search and Discover: https://developers.google.com/search/docs/appearance/google-images#specify-preferred-image
- `og:type`: use `website` for homepage, `article` for blog posts
- Validate with: https://developers.facebook.com/tools/debug/
- **Reference:** https://ogp.me/

### hreflang Annotations

- Required only for multi-language or multi-regional sites
- Syntax: `<link rel="alternate" hreflang="en-us" href="https://example.com/en-us/" />` — each version lists every version, including itself
- Recommended fallback: `<link rel="alternate" hreflang="x-default" href="https://example.com/" />`
- **Reference:** https://developers.google.com/search/docs/specialty/international/localized-versions

---

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

## PART 9 — GOOGLE vs. BING DIFFERENCES

Never treat Google and Bing as the same search engine. Handle both explicitly. This table lists only documented differences.

| Factor                 | Google | Bing |
| ---------------------- | ------ | ---- |
| Webmaster tools        | Google Search Console | Bing Webmaster Tools: a separate account, but it can import sites and their sitemaps from Search Console |
| Fast URL notification  | Sitemaps with accurate `<lastmod>`; RSS/Atom feeds; the Indexing API is only for job postings and livestream videos | IndexNow (shared with Yandex, Seznam, Naver, Yep); URL Submission API; sitemaps with `<lastmod>` |
| Sitemap tags           | Ignores `<priority>` and `<changefreq>`; uses `<lastmod>` if consistently accurate | Ignores `<changefreq>` and `<priority>`; uses `<lastmod>` to decide what to recrawl |
| JavaScript rendering   | Renders JavaScript, but JS sites are harder to get right | Renders JavaScript; has advised pre-rendering for JS-heavy sites. Server HTML is safest for both. |
| AI answers             | AI Overviews and AI Mode, grounded in Google's index; no special markup or files | Copilot and Bing grounding results; the Feb 2026 guidelines cover GEO, prompt injection and AI manipulation |
| AI opt-out controls    | Search Console "Search generative AI" setting; `nosnippet`, `data-nosnippet`, `max-snippet`, `noindex`. Google-Extended covers Gemini training and grounding only. | `NOARCHIVE` (no use in Copilot answers), `NOCACHE` (URL, title and snippet only), `nosnippet` / `data-nosnippet`, `noindex` |
| AI measurement         | Search Console Generative AI performance report | Bing Webmaster Tools AI Performance report (preview) |
| Indexing priority      | **Mobile-first indexing** | No published mobile-first policy; keep mobile and desktop content equivalent |
| Local                  | Google Business Profile | Bing Places for Business |
| Social signals         | Not a documented ranking factor | Not a documented ranking factor |

**Sources:** https://developers.google.com/search/docs/fundamentals/ai-optimization-guide · https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap · https://developers.google.com/search/apis/indexing-api/v3/quickstart · https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a · https://blogs.bing.com/webmaster/2025/7/Keeping-Content-Discoverable-with-Sitemaps-in-AI-Powered-Search/ · https://blogs.bing.com/webmaster/2026/2/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview/ · https://www.indexnow.org

---

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

## PART 11 — ALGORITHM UPDATE MONITORING

### When Google or Bing Announces an Update

1. Check the official reference links below for what changed.
2. Cross-reference against the affected section of this skill file.
3. Generate a specific impact report: what changed, which pages/tags/schema are affected, what action is needed.
4. Present impact report to user. Follow the Approved Change Protocol for every proposed update action.
5. After implementing: update any local notes with new version information.

### Sources to Monitor

| Source                                   | URL                                                                   | Check Frequency             |
| ---------------------------------------- | --------------------------------------------------------------------- | --------------------------- |
| Google Search Status Dashboard (ranking) | https://status.search.google.com/products/rGHU1u87FJnkP6W2GwMi/history | Weekly                      |
| Google Search Central Blog               | https://developers.google.com/search/blog                             | Weekly                      |
| Google documentation changelog           | https://developers.google.com/search/updates                          | Monthly                     |
| Google crawling docs changelog           | https://developers.google.com/crawling/docs/changelog                 | Monthly                     |
| Bing Webmaster Blog                      | https://blogs.bing.com/webmaster/                                     | Monthly                     |
| Search Engine Roundtable (secondary)     | https://www.seroundtable.com/                                         | Weekly during major updates |
| Core Web Vitals changelog                | https://web.dev/articles/vitals                                       | Quarterly                   |

### Recent Changes to Know (as of October 2026)

- **Core updates:** March 2026 (27 Mar – 8 Apr) and May 2026 (21 May – 1 Jun), plus the February 2026 Discover core update. Core updates are broad, and Google also makes smaller core updates continuously, so improvements can show without waiting for the next named update.
- **Spam updates:** March, June, August and September 2026 (24 Sep – 7 Oct).
- **Policy changes:** spam policies explicitly apply to generative AI responses (May 2026); new "back button hijacking" policy (Apr 2026); spam reports may lead to manual actions (Apr 2026); site reputation abuse enforcement adjusted in the EEA (Aug 2026). Creating pages for every query variant to manipulate AI answers counts as scaled content abuse.
- **Retired Google rich results:** FAQ (May 2026), practice problem (Jan 2026), course info, estimated salary, learning video, special announcement and vehicle listing (Sep 2025), sitelinks search box (Nov 2024), HowTo (2023). Leftover markup is harmless but has no Google effect.
- **New measurement and controls:** Search Console "Search generative AI" setting and Generative AI performance report (worldwide by 31 Aug 2026); Bing Webmaster Tools AI Performance (Feb 2026, expanded Jun 2026); Bing Webmaster Guidelines rewrite (Feb 2026).

**Sources:** https://status.search.google.com/products/rGHU1u87FJnkP6W2GwMi/history · https://developers.google.com/search/updates · https://developers.google.com/search/docs/appearance/core-updates · https://developers.google.com/search/docs/essentials/spam-policies · https://blogs.bing.com/webmaster/2026/2/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview/

---

## PART 12 — BEGINNER EXECUTION TIMELINE

For users starting from zero, execute in this exact order. Each row is one tier from Part 5.

| When          | Actions |
| ------------- | ------- |
| **Day 1**     | **Tier 1 (T1-1 – T1-8):** meta tags · Organization schema · WebSite schema (site name) · sitemap → Search Console · Bing Webmaster Tools (import from Search Console) · robots.txt audit · HTTPS · raw-HTML rendering check |
| **Week 1**    | **Tier 2 (T2-1 – T2-12):** CWV fixes (LCP/INP/CLS) · heading structure · Open Graph · optional X Cards · optional WebPage schema · BreadcrumbList · mobile check (Lighthouse + URL Inspection) · Bing wording check · Bing Places / Business Profile · image alt text |
| **Weeks 2–3** | **Tier 3 (T3-1 – T3-9):** optional FAQ content · numbered steps as HTML lists · authorship + Person schema · Article schema · topic clarity audit · topic cluster plan · freshness plan · internal link audit · distribution plan |
| **Weeks 3–4** | **Tier 4 (T4-1 – T4-9):** indexability for AI answers · non-commodity content audit · optional llms.txt · AI crawler policy · preview controls · entity clarity · SoftwareApplication schema · Bing Webmaster Tools + IndexNow · AI visibility baselines |
| **Weeks 4–5** | **Tier 5 (T5-1 – T5-7):** blog heading audit · answer-first intros · Article schema on posts · pillar-cluster structure · author audit · dateModified discipline · RSS/Atom feed + IndexNow |
| **Ongoing**   | Monthly: review Search Console and Bing Webmaster Tools errors, Generative AI report and Bing AI Performance · Quarterly: refresh top-performing pages (heuristic) · On update announcement: check the monitoring sources in Part 11 |

---

## PART 13 — OFFICIAL REFERENCES INDEX

All critical official documentation. Verify these are current at each re-audit. If a URL redirects or changes, note it and update the skill file.

### Google

- **Search Essentials (Official Rules):** https://developers.google.com/search/docs/essentials
- **Search technical requirements:** https://developers.google.com/search/docs/essentials/technical
- **SEO Starter Guide:** https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- **Optimizing for generative AI features (AI Overviews, AI Mode):** https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- **AI features and your website:** https://developers.google.com/search/docs/appearance/ai-features
- **Search Console: Search generative AI control:** https://support.google.com/webmasters/answer/16908024
- **Search Console: Generative AI performance report:** https://support.google.com/webmasters/answer/16984139
- **Using generative AI content:** https://developers.google.com/search/docs/fundamentals/using-gen-ai-content
- **Evaluating third-party SEO / "AEO" / "GEO" advice:** https://developers.google.com/search/docs/fundamentals/third-party-seo
- **Creating helpful, reliable, people-first content:** https://developers.google.com/search/docs/fundamentals/creating-helpful-content
- **Ranking systems guide:** https://developers.google.com/search/docs/appearance/ranking-systems-guide
- **Core updates:** https://developers.google.com/search/docs/appearance/core-updates
- **Page experience:** https://developers.google.com/search/docs/appearance/page-experience
- **Core Web Vitals in Search:** https://developers.google.com/search/docs/appearance/core-web-vitals
- **Core Web Vitals:** https://web.dev/articles/vitals
- **LCP:** https://web.dev/articles/lcp
- **INP:** https://web.dev/articles/inp
- **CLS:** https://web.dev/articles/cls
- **Optimize CLS:** https://web.dev/articles/optimize-cls
- **Structured Data Overview:** https://developers.google.com/search/docs/appearance/structured-data/intro-structured-data
- **Structured data search gallery (supported types):** https://developers.google.com/search/docs/appearance/structured-data/search-gallery
- **Rich Results Test:** https://search.google.com/test/rich-results
- **Organization Schema:** https://developers.google.com/search/docs/appearance/structured-data/organization
- **Site names (WebSite):** https://developers.google.com/search/docs/appearance/site-names
- **Article Schema:** https://developers.google.com/search/docs/appearance/structured-data/article
- **Breadcrumbs Schema:** https://developers.google.com/search/docs/appearance/structured-data/breadcrumb
- **Software App Schema:** https://developers.google.com/search/docs/appearance/structured-data/software-app
- **Review Snippet Guidelines:** https://developers.google.com/search/docs/appearance/structured-data/review-snippet
- **Local Business Schema:** https://developers.google.com/search/docs/appearance/structured-data/local-business
- **Retired rich results (FAQ, HowTo):** https://developers.google.com/search/updates#faq-deprecation · https://developers.google.com/search/blog/2023/08/howto-faq-changes
- **Featured Snippets Guide:** https://developers.google.com/search/docs/appearance/featured-snippets
- **Title Link Guide:** https://developers.google.com/search/docs/appearance/title-link
- **Snippets/Meta Description:** https://developers.google.com/search/docs/appearance/snippet
- **Byline dates:** https://developers.google.com/search/docs/appearance/publication-dates
- **Google Discover:** https://developers.google.com/search/docs/appearance/google-discover
- **Canonical Guide:** https://developers.google.com/search/docs/crawling-indexing/canonicalization
- **robots.txt Guide:** https://developers.google.com/search/docs/crawling-indexing/robots/intro
- **Robots Meta Tag:** https://developers.google.com/search/docs/crawling-indexing/robots-meta-tag
- **Google crawlers and fetchers (incl. Google-Extended):** https://developers.google.com/crawling/docs/crawlers-fetchers/google-common-crawlers
- **Sitemaps Guide:** https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview
- **Build a sitemap (lastmod, ignored tags):** https://developers.google.com/search/docs/crawling-indexing/sitemaps/build-sitemap
- **Crawlable links:** https://developers.google.com/search/docs/crawling-indexing/links-crawlable
- **JavaScript SEO basics:** https://developers.google.com/search/docs/crawling-indexing/javascript/javascript-seo-basics
- **Mobile-first indexing:** https://developers.google.com/search/docs/crawling-indexing/mobile/mobile-sites-mobile-first-indexing
- **Images Guide:** https://developers.google.com/search/docs/appearance/google-images
- **hreflang Guide:** https://developers.google.com/search/docs/specialty/international/localized-versions
- **Indexing API (job postings and livestreams only):** https://developers.google.com/search/apis/indexing-api/v3/quickstart
- **Search Central Blog (Algorithm Updates):** https://developers.google.com/search/blog
- **Documentation changelog:** https://developers.google.com/search/updates
- **Search Status Dashboard (ranking updates):** https://status.search.google.com/products/rGHU1u87FJnkP6W2GwMi/history
- **Quality Rater Guidelines (PDF, Sep 2025 version; not a ranking guide):** https://static.googleusercontent.com/media/guidelines.raterhub.com/en//searchqualityevaluatorguidelines.pdf
- **Google Developer Style Guide — Headings (writing style, not ranking guidance):** https://developers.google.com/style/headings
- **RSS/Atom Best Practices:** https://developers.google.com/search/blog/2014/10/best-practices-for-xml-sitemaps-rssatom
- **Google Spam Policies:** https://developers.google.com/search/docs/essentials/spam-policies

### Bing

- **Webmaster Guidelines (incl. Copilot, grounding, GEO):** https://www.bing.com/webmasters/help/webmaster-guidelines-30fba23a
- **Webmaster Tools:** https://www.bing.com/webmasters/
- **Bing Places for Business:** https://www.bing.com/forbusiness/
- **Bing Structured Data:** https://www.bing.com/webmasters/help/marking-up-your-site-with-structured-data-3a93e731
- **Bing URL Inspection (help):** https://www.bing.com/webmasters/help/url-inspection-55a30305
- **Bing Webmaster Blog:** https://blogs.bing.com/webmaster/
- **Sitemaps and IndexNow in AI-powered search:** https://blogs.bing.com/webmaster/2025/7/Keeping-Content-Discoverable-with-Sitemaps-in-AI-Powered-Search/
- **AI Performance report:** https://blogs.bing.com/webmaster/2026/2/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview/
- **JavaScript and dynamic rendering:** https://blogs.bing.com/webmaster/2018/10/bingbot-Series-JavaScript%2C-Dynamic-Rendering%2C-and-Cloaking-Oh-My/
- **IndexNow:** https://www.indexnow.org

### AI Crawlers and Answer Engines

- **OpenAI (OAI-SearchBot, GPTBot, ChatGPT-User):** https://developers.openai.com/api/docs/bots
- **OpenAI — ChatGPT search and Bing:** https://help.openai.com/en/articles/10093903-chatgpt-search-for-enterprise-and-edu
- **Anthropic (ClaudeBot, Claude-SearchBot, Claude-User):** https://support.claude.com/en/articles/8896518
- **Perplexity (PerplexityBot, Perplexity-User):** https://docs.perplexity.ai/docs/resources/perplexity-crawlers
- **Apple (Applebot, Applebot-Extended):** https://support.apple.com/en-us/119829
- **Meta (meta-externalagent, Meta-ExternalFetcher):** https://developers.facebook.com/docs/sharing/webmasters/web-crawlers/
- **Common Crawl (CCBot):** https://commoncrawl.org/ccbot
- **llms.txt proposal (optional; not used by Google Search):** https://llmstxt.org

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
- **Product:** https://schema.org/Product
- **SoftwareApplication:** https://schema.org/SoftwareApplication
- **LocalBusiness:** https://schema.org/LocalBusiness
- **BreadcrumbList:** https://schema.org/BreadcrumbList
- **Person:** https://schema.org/Person
- **AggregateRating:** https://schema.org/AggregateRating
- **sameAs:** https://schema.org/sameAs

### Protocols & Social

- **Open Graph Protocol:** https://ogp.me/
- **Facebook OG Debugger:** https://developers.facebook.com/tools/debug/
- **Google PageSpeed Insights:** https://pagespeed.web.dev/
- **Lighthouse:** https://developer.chrome.com/docs/lighthouse/overview/
- **Meta Tags Preview (third-party):** https://metatags.io
- **WebSub:** https://www.w3.org/TR/websub/

---

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
