# AccuMeasure Instruments — Official Website

The official B2B website for **AccuMeasure Instruments Co., Ltd.** (西安精准测量仪器有限公司), an industrial measurement instrument manufacturer based in Xi'an, China. The site showcases level sensors, flow meters, and pressure transmitters, and converts overseas buyers into inquiries.

## Tech Stack

- **Framework**: Next.js 14 (App Router) + TypeScript
- **Styling**: Tailwind CSS + shadcn-style components (Radix UI)
- **Forms**: React Hook Form + Zod validation
- **Icons**: Lucide React
- **SEO**: Native metadata API, `sitemap.ts`, `robots.ts`, JSON-LD structured data

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
│   ├── (routes)/           # 8 main pages + 9 product detail pages
│   ├── api/inquiry/        # Inquiry submission endpoint
│   ├── sitemap.ts          # Dynamic sitemap
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

The `/api/inquiry` route validates submissions with Zod and logs them server-side. To enable email delivery, wire up a provider (e.g. Resend, Nodemailer) in `src/app/api/inquiry/route.ts` and configure credentials in `.env.local`:

```
EMAIL_FROM=info@accumeasuretech.com
EMAIL_TO=info@accumeasuretech.com
```

## Placeholder Media

All images in `public/` are generated placeholders (gray backgrounds with text). Replace them with real photography while keeping the same filenames and dimensions:

- `public/products/am-*.jpg` (600×400) — product photos
- `public/cases/*.jpg` (600×400) — case study photos
- `public/factory/*.jpg` (400×300) — factory floor photos
- `public/og-image.png` (1200×630) — social share image

Regenerate placeholders with `node scripts/generate-placeholders.cjs`.

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
