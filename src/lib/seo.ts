import { siteConfig } from "./site";
import { getProductById } from "./products";
import type { Product, CaseStudy } from "./types";
import type { BlogPost } from "./blog";

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    alternateName: siteConfig.cnName,
    url: siteConfig.url,
    logo: {
      "@type": "ImageObject",
      url: `${siteConfig.url}/logo-mark.png`,
      width: 512,
      height: 512,
    },
    email: siteConfig.email,
    telephone: siteConfig.phoneDisplay,
    address: {
      "@type": "PostalAddress",
      streetAddress: "High-Tech Zone",
      addressLocality: "Xi'an",
      addressRegion: "Shaanxi",
      addressCountry: "CN",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: siteConfig.email,
      telephone: siteConfig.phoneDisplay,
      availableLanguage: ["English", "Chinese"],
    },
    description: siteConfig.description,
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.youtube,
      siteConfig.social.alibaba,
    ].filter((url): url is string => Boolean(url)),
  };
}

// No SearchAction: the on-site product search doesn't use a URL parameter,
// and ?category= URLs are robots-disallowed — declaring a search endpoint
// that crawlers can't fetch violates schema/visible-behavior consistency.
export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    publisher: { "@id": `${siteConfig.url}/#organization` },
  };
}

const categoryLabels: Record<Product["category"], string> = {
  level: "Level Sensors",
  flow: "Flow Meters",
  pressure: "Pressure Sensors",
};

export function productJsonLd(product: Product) {
  const productUrl = `${siteConfig.url}/products/${product.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${productUrl}#product`,
    name: product.name,
    sku: product.model,
    mpn: product.model,
    description: product.description,
    image: [`${siteConfig.url}${product.image}`],
    url: productUrl,
    brand: { "@type": "Brand", name: "AccuMeasure" },
    manufacturer: { "@id": `${siteConfig.url}/#organization` },
    category: categoryLabels[product.category],
    additionalProperty: product.keySpecs.map((spec) => ({
      "@type": "PropertyValue",
      name: spec.label,
      value: spec.value,
    })),
    subjectOf: product.applications.map((application) => ({
      "@type": "Thing",
      name: application.name,
      description: application.description,
    })),
    mainEntityOfPage: { "@type": "WebPage", "@id": productUrl },
  };
}

export function faqPageJsonLd(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
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

function productUrlForId(id: string) {
  const product = getProductById(id);
  return product ? `${siteConfig.url}/products/${product.slug}` : `${siteConfig.url}/products`;
}

export function articleJsonLd(caseStudy: CaseStudy) {
  const caseUrl = `${siteConfig.url}/case-studies/${caseStudy.slug}`;
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${caseUrl}#article`,
    headline: caseStudy.title,
    url: caseUrl,
    image: [`${siteConfig.url}/og-image.jpg`],
    datePublished: caseStudy.datePublished,
    dateModified: caseStudy.dateModified,
    articleSection: "Application Planning Brief",
    author: { "@id": `${siteConfig.url}/#organization` },
    publisher: { "@id": `${siteConfig.url}/#organization` },
    about: caseStudy.background,
    mainEntityOfPage: { "@type": "WebPage", "@id": caseUrl },
    mentions: caseStudy.productIds.map(productUrlForId),
  };
}

export function blogArticleJsonLd(post: BlogPost) {
  const postUrl = `${siteConfig.url}/blog/${post.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${postUrl}#article`,
    headline: post.title,
    description: post.description,
    url: postUrl,
    image: [`${siteConfig.url}/og-image.jpg`],
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    articleSection: post.category,
    keywords: post.keywords.join(", "),
    author: { "@id": `${siteConfig.url}/#organization` },
    publisher: { "@id": `${siteConfig.url}/#organization` },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
    about: post.description,
    mentions: post.relatedProductIds.map(productUrlForId),
  };
}
