<!-- Part 9 of the seo-geo-optimizer skill. Generated from skill/SEO_GEO_SKILL.md by scripts/sync-skill.js. Edit that file, then run npm run sync:skill. -->

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
