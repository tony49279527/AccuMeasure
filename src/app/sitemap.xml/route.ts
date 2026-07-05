import { blogPosts } from "@/lib/blog";
import { caseStudies } from "@/lib/case-studies";
import { products } from "@/lib/products";
import { siteConfig } from "@/lib/site";

export const dynamic = "force-static";

interface SitemapEntry {
  url: string;
  lastModified: string;
  changeFrequency: string;
  priority: number;
  images?: string[];
}

function escapeXml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function renderEntry(entry: SitemapEntry): string {
  const images = (entry.images ?? [])
    .map((img) => `<image:image><image:loc>${escapeXml(img)}</image:loc></image:image>`)
    .join("\n");
  return [
    "<url>",
    `<loc>${escapeXml(entry.url)}</loc>`,
    images,
    `<lastmod>${entry.lastModified}</lastmod>`,
    `<changefreq>${entry.changeFrequency}</changefreq>`,
    `<priority>${entry.priority}</priority>`,
    "</url>",
  ]
    .filter(Boolean)
    .join("\n");
}

export function GET() {
  const now = new Date().toISOString();

  const staticPages: SitemapEntry[] = [
    { url: siteConfig.url, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${siteConfig.url}/products`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${siteConfig.url}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteConfig.url}/quality`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteConfig.url}/certificates`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteConfig.url}/industries`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteConfig.url}/resources`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: `${siteConfig.url}/case-studies`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${siteConfig.url}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.6 },
    { url: `${siteConfig.url}/customization`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.url}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${siteConfig.url}/products/level`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteConfig.url}/products/flow`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${siteConfig.url}/products/pressure`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
  ];

  const productPages: SitemapEntry[] = products.map((p) => ({
    url: `${siteConfig.url}/products/${p.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
    // Only the main image is a real file; gallery paths are placeholders not yet on disk.
    images: [`${siteConfig.url}${p.image}`],
  }));

  const casePages: SitemapEntry[] = caseStudies.map((cs) => ({
    url: `${siteConfig.url}/case-studies/${cs.slug}`,
    lastModified: new Date(`${cs.dateModified}T00:00:00Z`).toISOString(),
    changeFrequency: "monthly",
    priority: 0.7,
    images: [`${siteConfig.url}${cs.image}`],
  }));

  const blogPages: SitemapEntry[] = blogPosts.map((post) => ({
    url: `${siteConfig.url}/blog/${post.slug}`,
    lastModified: new Date(`${post.dateModified}T00:00:00Z`).toISOString(),
    changeFrequency: "monthly",
    priority: 0.65,
  }));

  const entries = [...staticPages, ...productPages, ...casePages, ...blogPages];

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">',
    ...entries.map(renderEntry),
    "</urlset>",
  ].join("\n");

  return new Response(xml, {
    headers: { "Content-Type": "application/xml" },
  });
}
