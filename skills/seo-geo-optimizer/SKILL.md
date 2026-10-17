---
name: seo-geo-optimizer
description: "SEO and GEO (generative engine optimization) for websites and web apps: technical SEO, meta tags, structured data, Core Web Vitals, sitemaps, robots.txt and AI crawlers, content SEO, and visibility in Google (including AI Overviews and AI Mode), Bing and Copilot, ChatGPT search and Perplexity. Use it for any SEO or GEO question about a site, so answers follow its myth list and official sources, and for full audits. One-off questions get a direct answer. The guided workflow (intake questions, competitor analysis, an approval gate, then tiered execution) starts only when the user asks to run seo-geo-optimizer."
license: MIT
metadata:
  author: Aryan Panwar
  homepage: https://aryanpanwar.in/case-studies/seo-geo-optimizer
  repository: https://github.com/Aryanpanwar10005/seo-geo-optimizer
---
<!-- Agent Skills edition. Generated from skill/SEO_GEO_SKILL.md by scripts/sync-skill.js. Edit that file, then run npm run sync:skill. -->

> **Agent Skills edition.** This skill is split into this file and the reference files listed under
> "Reference files" at the end. Wherever the text below says "this skill file", "the entire skill file",
> "Part N" or "the Official References Index", it means this file plus the matching reference file.
> Read this file in full when the skill activates, then read each reference file in full before the
> phase that uses it. That is how LAW 1 applies to this edition. Skip the install notes in
> "HOW TO USE THIS SKILL": the skill is already installed.

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

## Reference files

| Part | File | Read it before |
|---|---|---|
| 3. Intake Questionnaire (All 32 Questions) | [references/03-intake-questionnaire.md](references/03-intake-questionnaire.md) | Phase 1 |
| 4. Competitor Analysis Framework | [references/04-competitor-analysis.md](references/04-competitor-analysis.md) | Phases 2-3 |
| 5. Execution Plan Report (EPR) Template | [references/05-execution-plan-report.md](references/05-execution-plan-report.md) | Phase 4, and the tier task lists for Phases 5-9 |
| 6. Schema JSON-LD Templates | [references/06-schema-templates.md](references/06-schema-templates.md) | Any phase that adds or fixes structured data |
| 7. Meta Tag Rules | [references/07-meta-tag-rules.md](references/07-meta-tag-rules.md) | Phases 5-6 |
| 8. Core Web Vitals Reference | [references/08-core-web-vitals.md](references/08-core-web-vitals.md) | Phase 6 |
| 9. Google vs. Bing Differences | [references/09-google-vs-bing.md](references/09-google-vs-bing.md) | Phases 5-8 |
| 10. Verification Checklist | [references/10-verification-checklist.md](references/10-verification-checklist.md) | Phase 10 |
| 11. Algorithm Update Monitoring | [references/11-algorithm-update-monitoring.md](references/11-algorithm-update-monitoring.md) | Phase 11 |
| 12. Beginner Execution Timeline | [references/12-execution-timeline.md](references/12-execution-timeline.md) | Phase 12 |
| 13. Official References Index | [references/13-official-references.md](references/13-official-references.md) | Every recommendation (LAW 6), and Phase 13 |
| 14. Content SEO & Blog Optimization | [references/14-content-seo.md](references/14-content-seo.md) | Phase 9 (Tier 5), and any content or blog work |
