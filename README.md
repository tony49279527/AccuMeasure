# AccuMeasure Instruments — Official Website

The official B2B website for **AccuMeasure Instruments Co., Ltd.** (西安精准测量仪器有限公司), an industrial measurement instrument manufacturer based in Xi'an, China. The site showcases level sensors, flow meters, and pressure transmitters, and converts overseas buyers into inquiries.

## Tech Stack

- **Framework**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS + shadcn-style components (Radix UI)
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **SEO**: Native metadata API, dynamic `sitemap.xml`/`robots.txt`, JSON-LD structured data

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project Structure

```
src/
├── app/                    # App Router pages
│   ├── (routes)/           # Main pages, category pages, blog/case routes, and product detail pages
│   ├── api/inquiry/        # Inquiry submission endpoint
│   ├── sitemap.xml/        # Dynamic sitemap route
│   └── robots.ts           # Robots rules
├── components/
│   ├── forms/              # Inquiry & customization forms (RHF + Zod)
│   ├── layout/             # Navbar, Footer, FloatingButtons
│   ├── ui/                 # Reusable UI primitives
│   ├── product-tabs.tsx    # Product detail tabs (client)
│   └── products-explorer.tsx # Product grid with filters (client)
└── lib/
    ├── products.ts         # 9 product data records
    ├── case-studies.ts     # Case study data
    ├── schema.ts           # Zod form schemas + country list
    ├── seo.ts              # JSON-LD builders
    ├── site.ts             # Site-wide config (contact info, links)
    └── types.ts            # TypeScript interfaces
```

## Pages

| Route | Description |
|-------|-------------|
| `/` | Home — Hero, trust bar, product lines, advantages, cases, factory, CTA |
| `/products` | Product overview with category filters (reads `?category=`) |
| `/products/[slug]` | 9 product detail pages with specs, applications, comparison, inquiry form |
| `/about` | Company story, mission, timeline, team, factory data |
| `/quality` | 5-stage QC, 72h aging test, calibration lab, quality stats |
| `/case-studies` | 3 detailed cases + client logo wall |
| `/customization` | OEM/ODM/non-standard services, 7-step process, request form |
| `/contact` | Inquiry form (handles `?product=`), contact info, FAQ |

## Key Features

- **Inquiry forms** with Zod validation across contact, product detail, and customization pages
- **Lead source snapshots** capturing landing page, referrer, and UTM parameters with each inquiry/customization submission
- **WhatsApp floating button** (desktop) + mobile bottom bar (WhatsApp / Call / Quote)
- **SEO**: per-page metadata, `generateMetadata` for products, JSON-LD (Organization, Product, BreadcrumbList), sitemap & robots
- **Responsive**: mobile-first, tested down to 375px width
- **Accessible**: semantic HTML, ARIA labels, keyboard-navigable forms

## Forms & Backend

The `/api/inquiry` route validates submissions with Zod, drops honeypot bot submissions, avoids logging personal contact details, and sends email through Resend when credentials are configured:

```
RESEND_API_KEY=re_xxx
EMAIL_FROM=AccuMeasure Website <info@accumeasuretech.com>
EMAIL_TO=info@accumeasuretech.com
LEAD_WEBHOOK_URL=https://example.com/lead-webhook
LEAD_WEBHOOK_SECRET=optional-shared-secret
```

`EMAIL_FROM` is optional; without it, the route falls back to Resend's onboarding sender. Production email delivery requires `RESEND_API_KEY` and `EMAIL_TO` in Vercel. `LEAD_WEBHOOK_URL` is optional and posts each valid human submission to a CRM, Google Apps Script, Airtable, or automation endpoint before email delivery. Webhook failures are logged but do not block the buyer-facing success response.

## Media Assets

The site now uses optimized JPEG assets for product, factory, industry, case study, and Open Graph media. Keep filenames stable when replacing assets so existing page data continues to resolve:

- `public/products/am-*-v2.jpg` (1200×800) — product photos
- `public/cases/*.jpg` (1200×800) — case study photos
- `public/factory/*.jpg` (900×900) — factory/process photos
- `public/industries/*.jpg` (1200×900) — industry photos
- `public/og-image.jpg` (1200×630) — social share image

Real factory photos and certificate scans are still the highest-value trust upgrade when available.

## Deployment

This project is optimized for **Vercel**:

1. Push the repo to GitHub
2. Import into Vercel
3. Add environment variables (GA4 ID, email provider keys)
4. Deploy

## GEO 自动监控与优化闭环

The repository contains a repeatable B2B GEO loop for AccuMeasure: observe real AI-search results, generate an optimization report, make only evidence-backed page changes, and re-test on the next cycle.

### Local dry run

```bash
npm run geo:dry-run
npm run geo:report
```

The dry run validates query selection without calling OpenAI or writing observation rows. The report generator writes:

- `reports/geo/geo-observation-status.md`
- `reports/geo/geo-optimization-latest.md`

### Run a real observation

Create `.env.local`:

```bash
OPENAI_API_KEY=sk-...
GEO_TARGET_URL=https://www.accumeasuretech.com
```

Then run high-priority queries:

```bash
npm run geo:observe -- --priority high --limit 20
npm run geo:report
```

Supported filters: `--query-id`, `--family`, `--intent`, `--priority`, `--limit`. The script only logs responses with status `completed` and a non-empty answer. Failed, empty, or incomplete responses are saved as raw reports but are never counted as brand absence.

### Weekly GitHub Actions

`.github/workflows/geo-observation.yml` runs every Monday 09:00 Asia/Shanghai and can be triggered manually. Configure these repository settings:

- Secret `OPENAI_API_KEY`: required for real runs.
- Variable `GEO_ISSUE_NUMBER`: optional private GitHub issue number for weekly comments.
- Secret `GEO_NOTIFY_WEBHOOK`: optional Feishu/WeCom/Telegram webhook; no webhook is called unless this is set.
- Variable `GEO_TARGET_URL`: optional target URL override.

The workflow runs high-priority queries, regenerates the status and optimization reports, commits `data/geo-observation-log.csv` and `reports/geo/` back to `main`, then appends a summary to the configured issue.

### Files in this loop

- `data/geo-query-set.csv`: 76 B2B buying-intent queries mapped to real AccuMeasure pages.
- `data/geo-observation-log.csv`: completed observations only.
- `scripts/geo-observe-openai.mjs`: OpenAI Responses API collector.
- `scripts/geo-recommendations.py`: status and optimization report generator.
- `reports/geo/raw/`: original response payloads, including failed calls.
- `llms.txt`: machine-readable company, product, procurement, compliance, and contact facts.

### Weekly execution

1. Run the high-priority query set.
2. Review `geo-optimization-latest.md`; separate `not visible` from `not measured`.
3. Edit only pages whose required facts are already verifiable in the project.
4. Update internal links, `llms.txt`, and sitemap `lastmod` when content changes.
5. Build and run SEO/schema CI, then deploy only after user authorization.
6. Re-test the same query IDs next cycle and compare brand mentions, citations, citation position, and coverage.

## Analytics (optional)

Add Google Analytics 4 and Microsoft Clarity via environment variables in `.env.local`:

```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_CLARITY_ID=xxxxxxxxxx
```

## License

© AccuMeasure Instruments Co., Ltd. All rights reserved.
