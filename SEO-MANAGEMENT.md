# MetaSvit SEO and measurement — 30 October 2026

## Implemented foundation

All five public routes have self-canonical URLs, unique search/share metadata and a real share-image endpoint. The XML sitemap contains only those five canonical routes; robots.txt references it and excludes the contact API. The www host redirects permanently to the apex while keeping paths and query parameters. Public organization/website JSON-LD uses facts already present on the site. No claims, business address, reviews or performance figures were invented. Visual layouts and contact transport are unchanged.

The production homepage and every route already rendered their main content in HTML. A missing robots file or sitemap was a discovery/maintenance gap, not evidence the sites were blocked or deindexed. Public site: searches returned no results in the sampled search tool; only Search Console can establish actual Google indexing/performance for the owner's property.

## Measurement status

- Vercel read-only analytics query: web_analytics_not_enabled. There is no verified visitor count or organic-traffic baseline.
- No analytics script was found in the inspected source/HTML. Cloudflare hosting/DNS statistics, if available, include requests/bots and should not be reported as unique human visits.
- Current Google CLI logins have Workspace/mail/site-verification permissions, but no Search Console permission. Existing logins have not been overwritten or reauthorised.
- Google Search Console property access and sitemap submission remain unverified. Visitor analytics is not activated by these code changes.

## Finish the reporting connection

Use the company's Google account to access Search Console and check for an existing metasvit.io domain property before creating anything. If needed, verify the domain using the exact Google-issued DNS TXT record, then submit https://metasvit.io/sitemap.xml. For CLI reporting, use a new dedicated login folder and the Search Console read-only scope; never replace existing Gmail/Workspace folders or add cloud-platform. Read-only access cannot submit sitemaps; use the verified owner's Search Console console for that step, or separately authorise the precise write permission.

Google Workspace domain verification alone does not establish Search Console access. Do not fabricate a verification token or analytics identifier.

For optional visitor reporting, choose a provider before enabling it. Vercel's current Pro pricing is usage-based at $0.03 per 1,000 events, without an included event allotment (subject to plan credit). Do not turn on paid collection or the Plus add-on without the owner's choice. A free alternative can be considered if the Cloudflare account supports Web Analytics. Avoid personal fields and query strings in custom events; do not send contact brief contents, names or email addresses.

## Weekly operating checklist

Owner: Ruslan/company marketing operator. This is a documented cadence, not a scheduled job.

1. In Search Console, check indexing of the five canonical URLs and sitemap processing/errors. Request indexing after substantial page changes only.
2. Compare the last complete 28 days with the previous complete 28 days: impressions, clicks, CTR and position by query and landing page. Separate brand queries (Metasvit/MetaSvit) from service intent. Do not compare a partial week with a complete week.
3. Once visitor reporting is enabled, inspect landing pages and referrers; distinguish search, AI referrals, direct visits and campaigns. A direct visit does not prove an AI recommendation.
4. Review actual contact enquiries privately. A click on email is intent, not a delivered message; a successful contact API response is the appropriate conversion boundary.
5. Recheck robots/sitemap/canonical/redirect status after deployments. Retain dated exports, not guesses about traffic or ranking.

## Content backlog

- Services owns AI agent development, smart contract development and blockchain engineering intent. Work owns evidence from real shipped projects. About explains the team and operating approach. Contact owns the project brief.
- The next useful additions are deeper project case studies with the owner's actual role, delivery and approved outcomes. Create dedicated service pages only where substantial distinct material exists.
- Keep CryptoSvit focused on venture-building/portfolio intent and MetaSvit on engineering-services intent; avoid duplicating pages across the two brands.
- No paid backlink campaigns, fabricated reviews, bulk generated location pages, fake awards or ranking promises.
- AI discovery uses the same readable public facts. No llms.txt file is required by Google Search; current Google documentation explicitly says it ignores that file for ranking. Search/answer citation checks should record the exact query, date, platform and repeated sample count.

## Tools and references

Security-reviewed local skills: seo-audit 2.2.2, ai-seo 2.12.0 and analytics 2.2.2 from coreyhaines31/marketingskills at 820ad2c1c0ac4cc350158bd7912c753681a7d173. Installed under ~/.agents/skills.31 files were pattern-scanned; no flagged patterns or executable installation hooks. Installed hashes match the reviewed files. This is a bounded review, not a guarantee of safety or correctness. Some AI-search claims in community material conflict with current documentation; primary platform guidance takes precedence.

- https://developers.google.com/search/docs/fundamentals/seo-starter-guide
- https://developers.google.com/search/docs/fundamentals/ai-optimization-guide
- https://developers.google.com/search/docs/crawling-indexing/sitemaps/overview
- https://developers.google.com/search/docs/appearance/structured-data/organization
- https://vercel.com/docs/analytics/limits-and-pricing

Validation: ESLint and Next production build pass. Actual HTTP checks cover all five canonicals/OG URLs/JSON-LD,five sitemap entries, robots reference, PNG share image and www redirect with campaign query. No contact message sent.

Merge owner: this SEO session after Website checks pass. Existing Vercel Git deployment publishes the exact merged head. No new dependency or tracking subscription is required.
