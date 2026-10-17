<!-- Part 7 of the seo-geo-optimizer skill. Generated from skill/SEO_GEO_SKILL.md by scripts/sync-skill.js. Edit that file, then run npm run sync:skill. -->

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
