<!-- Part 6 of the seo-geo-optimizer skill. Generated from skill/SEO_GEO_SKILL.md by scripts/sync-skill.js. Edit that file, then run npm run sync:skill. -->

## PART 6 — SCHEMA JSON-LD TEMPLATES

All templates use **JSON-LD format** (preferred by both Google and Bing). Insert inside `<script type="application/ld+json">` in `<head>`. Replace all `{{GENERIC_VALUE}}` values with real data.

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
