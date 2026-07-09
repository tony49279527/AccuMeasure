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

## Analytics (optional)

Add Google Analytics 4 and Microsoft Clarity via environment variables in `.env.local`:

```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
NEXT_PUBLIC_CLARITY_ID=xxxxxxxxxx
```

## License

© AccuMeasure Instruments Co., Ltd. All rights reserved.
