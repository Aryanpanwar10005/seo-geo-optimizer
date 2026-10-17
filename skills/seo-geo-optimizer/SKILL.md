---
name: seo-geo-optimizer
description: "Full SEO and GEO (generative engine optimization) workflow for a website or web app: technical SEO, meta tags, JSON-LD structured data, Core Web Vitals, sitemaps, robots.txt and AI crawler access, content and blog SEO, and visibility in Google, Bing, AI Overviews, Copilot, ChatGPT and Perplexity. Use when the user asks for an SEO or GEO audit, wants better search rankings or more AI-search citations, or invokes seo-geo-optimizer. Answer one-off SEO questions directly; start the guided workflow (intake questions, competitor analysis, an approval gate, then tiered execution) only when the user asks to run seo-geo-optimizer."
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
> You must ALWAYS read this entire skill file, but do NOT execute PHASE 0 (the workflow) unless the user explicitly types `/seo` or `run seo-geo-optimizer`. 
> Treat "ambiguous" triggers as any user message that mentions SEO/geo concepts without the exact commands `/seo` or `run seo-geo-optimizer`. In those cases, answer the user's question rather than run the workflow.
> Instead of a confirmation loop for ambiguous triggers, ask a single clarifying prompt: "Do you want to run the full SEO-GEO optimizer? If yes, please send `/seo` to start." Sending `/seo` is treated as a new explicit trigger that directly starts PHASE 0.

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

**Activation trigger:** The user must explicitly type the command `/seo` or the phrase `run seo-geo-optimizer` to activate this skill.

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
PHASE 0  → Initialize the intake questionnaire — confirm before proceeding
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
PHASE 13 → Official Reference Handover (Part 13)
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

Only execute Phase 0 if the explicit trigger command (`/seo` or `run seo-geo-optimizer`) was used. If the trigger is ambiguous, ask the user a single clarifying prompt: "Do you want to run the full SEO-GEO optimizer? If yes, please send `/seo` to start." (Do not loop; wait for the explicit trigger).

If the explicit trigger is received, start the intake questionnaire by saying to the user:

> "Before I build your strategy, I need to ask 40 questions across 5 groups. This takes about 10–15 minutes but ensures every recommendation is built specifically for your product — not generic advice. Ready to begin?"

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

## Reference files

| Part | File | Read it before |
|---|---|---|
| 3. Intake Questionnaire (All 40 Questions) | [references/03-intake-questionnaire.md](references/03-intake-questionnaire.md) | Phase 1 |
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
