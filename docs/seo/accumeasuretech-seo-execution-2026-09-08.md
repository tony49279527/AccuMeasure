# AccuMeasureTech SEO Execution Register - 2026-09-08

## Scope and Baseline

- Source plan: `/Users/liangxile/project/SEO技能学习/四站SEO优化执行方案-2026-09-08/accumeasuretech-seo-action-plan.md`.
- Baseline source snapshot: Git commit `e0a45fe` before this execution batch.
- Search baseline recorded by the plan for 2026-08-09 through 2026-09-05: 9 clicks, 1,598 impressions, 0.56% CTR, and average position 56.65. The prior equal window is 2026-07-12 through 2026-08-08.
- The plan identifies `/products/flow` and AM-RL80 as priority pages. Existing repository GSC exports are older local snapshots and are retained as historical inputs, not substituted for the plan's stated baseline.

## Item Register

| Item | Status at start | This execution | Acceptance / remaining condition |
| --- | --- | --- | --- |
| A1: flow capability table | Evidence blocked | Removed category-page wording that mapped portable or mass-flow queries to a confirmed configuration. Kept a document-first RFQ route. | `evidence-pending`: engineering sign-off, current model datasheets, and exact certificate scope are required before publishing a capability table. |
| A2: AM-RL80 evidence | Evidence blocked | Added a model-specific configuration-review CTA and visible optional inputs for medium, vessel/range, temperature/pressure, mounting, output, and documentation requirements. No numerical specification, certificate, PDF, or installation drawing was added. | `evidence-pending`: current datasheet, installation drawing, and approved model/claim evidence are required. |
| A3: comparison and blog intent | Production verified | Differentiated the comparison page as a procurement matrix and the blog as water-treatment implementation guidance; added reciprocal contextual links. | Observe recrawl and 28 complete post-release data days. |
| A4: rich-result, hreflang, title checks | Production verified | No fabricated Offer or hreflang was added. Production AM-RL80 HTML contains Product and BreadcrumbList JSON-LD, without `offers` or `manufacturer`; no equivalent translation pages exist, so no hreflang pair was created. | Observe recrawl and 28 complete post-release data days. |
| A5: ATEX / IECEx extension | Conditional | No new URL or model/certificate table created. | `do-not-publish` until A1 evidence is approved and engineering reviews a unique, non-duplicative guide. |

## Measurement and Rollback

- Deployment validation: HTTP status, canonical, robots, sitemap, internal links, mobile layout, structured data, and invalid-form behavior. No real buyer inquiry is submitted for testing.
- Growth validation: after Google recrawls and 28 complete post-release data days, compare the same page/query scope with the equal pre-release window. Low-volume queries remain directional observations; they do not prove causality or revenue impact.
- Rollback anchor: revert the release commit created for this execution if a canonical, availability, form, or rendering regression is verified.

## Local Verification - 2026-09-08

- `npm run lint` completed with 0 errors and one pre-existing React Hook Form compiler warning at `src/components/forms/inquiry-form.tsx:56`.
- `next build --webpack` completed successfully: TypeScript passed and 48 routes were generated. The default Turbopack build could not create a sandboxed process port after font access was available; this is an execution-environment limitation, not a source error.
- Schema CI passed: 45 HTML files, 168 JSON-LD blocks, and 0 validation errors. SEO CI passed: 43 HTML pages and 0 validation errors.
- Local production HTTP smoke: target flow, comparison, blog, and AM-RL80 pages returned 200; `/flow-meters` and `/level-sensors` returned 301 to their current category routes; an unknown route returned 404; `robots.txt`, `sitemap.xml`, and `llms.txt` returned 200; an empty inquiry payload returned 422 without sending a real inquiry.
- Built HTML confirmed canonical URLs, revised flow wording, comparison/blog reciprocal links, AM-RL80 configuration fields, Product plus BreadcrumbList JSON-LD, and 2026-09-08 sitemap dates. The flow decision table retains an explicit responsive horizontal-scroll wrapper for narrow viewports.

## Production Verification - 2026-09-08

- Release commit `2e44ef3` was pushed normally to `origin/main`. Vercel Git deployment `dpl_84UzboZ7snKtMcAyyuopbo2Hwdsc` reached `Ready` at `https://accu-measure-p707cxm03-context27149.vercel.app` and aliases `https://www.accumeasuretech.com` plus the apex domain.
- The canonical production domain returned 200 for the flow category, flow comparison, water-treatment guide, AM-RL80 product page, `robots.txt`, `sitemap.xml`, and `llms.txt`. `/flow-meters` and `/level-sensors` returned 301 to their canonical category pages; an unknown URL returned 404.
- Production HTML confirms the revised flow wording, comparison/blog link path, AM-RL80 configuration-review CTA and input template, canonical URLs, Product plus BreadcrumbList JSON-LD, and updated sitemap dates. Invalid inquiry data returned 422 without a real submission. HSTS, `nosniff`, `SAMEORIGIN`, referrer, and permissions headers remain present.
- No authenticated Google URL Inspection client is configured in this project execution path, so no inspection, indexing request, or sitemap submission was performed. Recheck crawl status and the same GSC page/query scope after Google has recrawled the release.

## Mobile Verification Follow-up - 2026-09-08

- An initial 390×844 production-viewport check found that the AM-RL80 message prefill was not visibly present in the rendered textarea. This was corrected with visible, optional project-input fields rather than treating an invisible template as evidence of data capture.
- The canonical AM-RL80 URL is `/products/am-rl80-80ghz-radar-level-transmitter`. Local 390×844 isolated-browser verification passed for that exact route: the title and H1 identify AM-RL80, there is no whole-page horizontal overflow, and all six optional configuration inputs plus the Quote CTA are visible and enabled. The flow page has no whole-page horizontal overflow, its comparison table retains an internal horizontal-scroll container, and the visible Quote CTA remains available.
- A local intercepted form test filled all six synthetic configuration values and confirmed that they are included in the client request payload without transmitting a lead. A direct local route test accepted the same valid payload with delivery environment variables blank, returned the expected `503 delivery_failed`, and did not deliver email or webhook traffic. Production mobile verification remains required after this release; no real form submission is part of that check.

## URL Verification Correction - 2026-09-08

- An earlier check used `/products/am-rl80`, which is not a published product URL and renders the product not-found view. It must not be treated as AM-RL80 production verification or used alone as evidence for a new legacy redirect.
- The product route now declares its build-time catalog as non-dynamic so an unknown product slug resolves as an HTTP 404. The corrected local production build returned 200 for `/products/am-rl80-80ghz-radar-level-transmitter` and 404 for an unknown product slug. This removes the observed product-route soft 404 without adding a speculative buyer-facing alias. The canonical AM-RL80 route remains `/products/am-rl80-80ghz-radar-level-transmitter`.
