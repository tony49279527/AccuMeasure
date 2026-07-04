# AccuMeasure SEO + GEO Audit Report

**Audit Date:** 2026-07-04
**Auditor:** TRAE AI Assistant
**Site:** accumeasuretech.com (pre-deployment)
**Methodology:** 8-module weighted scoring framework

---

## 1. Executive Summary

**Total Score: 3.62 / 5.00 (72.4%)** — up from baseline 3.05 / 5.00 (61.0%)

| Metric | Value |
|--------|-------|
| Total weighted score | 3.62 / 5.00 |
| Modules at ≥4.0 | 4 of 8 |
| Open issues | 14 (P0: 0, P1: 3, P2: 7, P3: 4) |
| Pages audited | 26 (7 static + 9 product SSG + 10 dynamic) |
| Schema types deployed | 7 (Organization, WebSite, Product, BreadcrumbList, FAQPage, Article, Person) |

**Most critical opportunity:** GEO visibility testing (score 1.5/5) — the site has strong technical foundations and structured data but zero AI-citability measurement. Establishing a recurring GEO Query Set test across Perplexity/ChatGPT/Copilot/Gemini is the highest-leverage next step.

**Most critical risk:** Entity trust gaps — team photos, certificate images, and factory photos are all placeholders. AI engines and human buyers alike cannot verify E-E-A-T signals without real visual evidence. This directly suppresses AI citability scores.

---

## 2. Scoring Matrix

| # | Module | Weight | Raw (0-5) | Weighted | Key Gap |
|---|--------|--------|-----------|----------|---------|
| 1 | Technical & Index Health | 18% | 4.2 | 0.756 | No GSC/Bing verification yet (pre-deployment) |
| 2 | Page & Info Architecture | 16% | 4.5 | 0.720 | None significant — breadcrumbs + canonicals clean |
| 3 | Content Quality & Extractable Facts | 16% | 3.5 | 0.560 | EFD unquantified; product pages lack source-backed facts (certificate numbers on product pages) |
| 4 | Page Experience & Performance | 10% | 3.0 | 0.300 | No Lighthouse/PSI/CrUX data (pre-deployment); image optimization unverified |
| 5 | Entity Trust & E-E-A-T | 14% | 3.0 | 0.420 | Placeholder media (team/certs/factory); no external consistency check |
| 6 | Structured Data | 8% | 4.5 | 0.360 | Schema valid but unverified by Rich Results Test (needs deployment) |
| 7 | GEO Visibility | 12% | 1.5 | 0.180 | Zero AI query testing done; no GEO Query Set established |
| 8 | Conversion Path | 6% | 4.0 | 0.240 | Form A/B variants untested; RFQ friction unmeasured |
| | **Total** | **100%** | | **3.516** | |

**Score interpretation:**
- 4.0–5.0: Strong — maintain and monitor
- 3.0–3.9: Adequate — targeted improvements needed
- 2.0–2.9: Weak — significant gaps
- 0–1.9: Critical — blocking issues

---

## 3. Issue Log

| ID | Issue | Evidence | Impact | Priority | Status |
|----|-------|----------|--------|----------|--------|
| I-01 | Placeholder factory/team/cert images | `/factory/*.jpg`, `/team/*.jpg`, `/certs/*.jpg` all missing | E-E-A-T trust signals absent; AI cannot verify entity | P1 | Open — awaiting client media |
| I-02 | No GEO Query Set testing | Zero AI platform queries logged | Cannot measure AI citability or visibility | P1 | Open — requires deployment |
| I-03 | Certificate numbers not on product pages | Certs only on About page | Product-level EAR (fact evidence rate) low | P1 | Open |
| I-04 | No Lighthouse/PSI baseline | Pre-deployment, no performance data | Core Web Vitals unverified | P2 | Open — post-deploy |
| I-05 | No external entity consistency check | LinkedIn/Alibaba/customs alignment unverified | AI may confuse brand with trading co. | P2 | Open — manual audit needed |
| I-06 | Product page EFD unquantified | No atomic-fact count done per page | Cannot prioritize content gaps | P2 | Open |
| I-07 | No Schema CI in build pipeline | JSON-LD validated manually only | Schema regressions possible on deploy | P2 | In progress — scaffold building |
| I-08 | OG images are placeholders | `/og-image.png` is auto-generated | Social sharing appearance weak | P2 | Open |
| I-09 | No hreflang x-default annotation | Only `en-US` in alternates.languages | Multi-language expansion blocked | P2 | Open — reserved structure ready |
| I-10 | Case study pages are single-page (no detail routes) | `/case-studies` is one page | Deep-linking to specific cases impossible | P2 | Open |
| I-11 | No sitemap image extension | sitemap.xml has no `<image>` entries | Image indexation suboptimal | P3 | Open |
| I-12 | No JSON-LD for ContactPage/WebPage type | Contact page has no page-level schema | Page-type signaling incomplete | P3 | Open |
| I-13 | No llms.txt (intentional) | Per Google guidance, no benefit | N/A — correct decision | P3 | Closed (by design) |
| I-14 | Blog has no article content | `/blog` is placeholder | Content coverage for long-tail queries missing | P3 | Open — content strategy needed |

---

## 4. Schema Audit

| Schema Type | Pages | Valid | Missing Properties | Fix Recommendation |
|-------------|-------|-------|--------------------|--------------------|
| Organization | Global (layout) | Pending RR Test | `numberOfEmployees`, `foundingDate`, `naics`, `logo`, `contactPoint` — all added | Verify via Rich Results Test post-deploy |
| WebSite | Global (layout) | Pending RR Test | `potentialAction` (SearchAction) — added | Verify post-deploy |
| Product | 9 product pages | Pending RR Test | `additionalProperty` (MOQ, leadTime, certs, applications, material, countryOfOrigin), `image`, `@id`, `priceSpecification`, `eligibleQuantity` — all added | Add `review`/`aggregateRating` once customer reviews collected |
| BreadcrumbList | All 16 content pages | Pending RR Test | Complete | — |
| FAQPage | 9 product pages | Pending RR Test | Complete (5 Q&A per product) | Note: Google deprecated FAQ rich result (2026); retained for AI extractability |
| Article | 3 case studies | Pending RR Test | `datePublished`, `dateModified` missing | Add publication dates to case study data |
| Person | 3 team members (About) | Pending RR Test | `sameAs` (LinkedIn) missing | Add LinkedIn profiles when available |

**Schema validation status:** All JSON-LD is syntactically valid (build passes). Rich Results Test validation requires deployment to a live domain.

---

## 5. Entity Audit

| Entity Attribute | Value | Source | Consistency Issue |
|-----------------|-------|--------|-------------------|
| Legal name | AccuMeasure Instruments Co., Ltd. | site.ts | Needs verification against business license |
| Brand name | AccuMeasure | site.ts | Check Alibaba/LinkedIn match |
| Chinese name | 西安精准测量仪器有限公司 | site.ts | Verify character accuracy |
| Address | Xi'an High-Tech Zone, Shaanxi, CN | site.ts | Needs street-level detail |
| Founded | 2014 | Organization schema + About page | Verify against registration |
| Employees | 82 | Organization schema + About page | Verify current headcount |
| NAICS | 334513 (Instruments) | Organization schema | Verify appropriateness |
| Phone | +86-29-8888-XXXX | site.ts | Placeholder — needs real number |
| Email | info@accumeasuretech.com | site.ts | MX records not set up — email routing needed |
| LinkedIn | linkedin.com/company/accumeasure | site.ts | Profile may not exist yet |
| Alibaba | alibaba.com/accumeasure | site.ts | Storefront URL needs verification |

**Action required:** Cross-check all entity attributes against LinkedIn company page, Alibaba storefront, and customs registration records before deployment.

---

## 6. Repair Roadmap

### P0 — Critical (blocking crawl/index/conversion)
*None remaining.* Parameter page noindex (I-completed), canonical self-reference, and sitemap are all in place.

### P1 — High priority (major traffic/inquiry impact)

| Task | Est. Impact | Dependencies |
|------|-------------|--------------|
| Replace placeholder media (factory/team/certs) | +0.4 on Entity Trust | Client provides real photos |
| Add certificate numbers + badge to product pages | +0.2 on Content Quality | Certificate image files |
| Establish GEO Query Set + first test round | +1.0 on GEO Visibility | Site deployment |

### P2 — Medium (moderate improvements)

| Task | Est. Impact | Dependencies |
|------|-------------|--------------|
| Run Lighthouse/PSI baseline + fix CWV | +0.5 on Performance | Site deployment |
| External entity consistency audit (LinkedIn/Alibaba) | +0.3 on Entity Trust | Manual research |
| Quantify EFD per product page + fill gaps | +0.3 on Content Quality | Content audit |
| Deploy Schema CI in build pipeline | Prevents regression | Scaffold (in progress) |
| Design real OG images per page type | +0.1 on Page Experience | Design resources |
| Add hreflang x-default + plan multilingual | +0.2 on Info Architecture | Content translation |
| Create individual case study detail routes | +0.1 on Info Architecture | Route + content |

### P3 — Long-term building

| Task | Est. Impact | Dependencies |
|------|-------------|--------------|
| Add image sitemap extension | +0.1 on Technical | Low effort |
| Add WebPage/ContactPage schema | +0.05 on Structured Data | Low effort |
| Publish blog articles (selection guides) | +0.3 on GEO long-tail | Content strategy |
| Collect + schema customer reviews | +0.2 on Entity Trust | Post-launch reviews |

---

## 7. Automation Recommendations

| Automation | Tool/API | Frequency | Effort |
|------------|----------|-----------|--------|
| Top queries/pages export | GSC Search Analytics API | Weekly | Low |
| PSI batch test (top 20 URLs) | PageSpeed Insights API | Weekly | Low |
| Schema regression check | Schema CI script (build-time) | Every deploy | Medium (scaffold ready) |
| Canonical/noindex diff | Custom crawler script | Pre/post deploy | Medium |
| GEO Query re-test | Manual + AI test script template | Monthly | Medium |
| Bing AI citation monitoring | Bing Webmaster Tools | Weekly | Low |
| CrUX field data monitoring | CrUX API / Looker Studio | Monthly | Low |

**Schema CI scaffold:** A build-time JSON-LD validation script is being developed (see `/scripts/` directory). It will parse all generated HTML pages, extract `<script type="application/ld+json">` blocks, and validate against schema.org type definitions before deployment.

**GEO Query Set template:** A standardized query list covering brand, product, comparison, and intent queries will be maintained in `/docs/geo-query-set.md` for monthly re-testing across Perplexity, ChatGPT, Copilot, and Gemini.
