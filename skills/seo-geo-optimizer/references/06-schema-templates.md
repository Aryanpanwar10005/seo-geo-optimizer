<!-- Part 6 of the seo-geo-optimizer skill. Generated from skill/SEO_GEO_SKILL.md by scripts/sync-skill.js. Edit that file, then run npm run sync:skill. -->

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
