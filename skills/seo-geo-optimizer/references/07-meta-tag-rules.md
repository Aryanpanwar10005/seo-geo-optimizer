<!-- Part 7 of the seo-geo-optimizer skill. Generated from skill/SEO_GEO_SKILL.md by scripts/sync-skill.js. Edit that file, then run npm run sync:skill. -->

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
