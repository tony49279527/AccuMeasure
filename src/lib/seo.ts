import { siteConfig } from "./site";
import type { Product } from "./types";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    alternateName: siteConfig.cnName,
    url: siteConfig.url,
    email: siteConfig.email,
    telephone: siteConfig.phoneDisplay,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Xi'an",
      addressRegion: "Shaanxi",
      addressCountry: "CN",
    },
    description: siteConfig.description,
    sameAs: [siteConfig.social.linkedin, siteConfig.social.alibaba],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/products?category={query}`,
      "query-input": "required name=query",
    },
  };
}

export function productJsonLd(product: Product) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    sku: product.model,
    mpn: product.model,
    description: product.tagline,
    brand: { "@type": "Brand", name: "AccuMeasure" },
    category: product.category,
    offers: {
      "@type": "Offer",
      price: product.priceFrom,
      priceCurrency: "USD",
      availability: "https://schema.org/InStock",
      url: `${siteConfig.url}/products/${product.slug}`,
      seller: { "@type": "Organization", name: siteConfig.name },
    },
  };
}

export function breadcrumbJsonLd(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: it.url,
    })),
  };
}
