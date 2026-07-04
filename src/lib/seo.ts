import { siteConfig } from "./site";
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
      url: `${siteConfig.url}/apple-icon.png`,
    },
    email: siteConfig.email,
    telephone: siteConfig.phoneDisplay,
    foundingDate: "2014",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      value: 82,
    },
    naics: "334513",
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
    ],
  };
}

export function websiteJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.url,
    publisher: { "@id": `${siteConfig.url}/#organization` },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteConfig.url}/products?category={query}`,
      },
      "query-input": "required name=query",
    },
  };
}

const categoryLabels: Record<Product["category"], string> = {
  level: "Level Sensors",
  flow: "Flow Meters",
  pressure: "Pressure Sensors",
};

export function productJsonLd(product: Product) {
  const productUrl = `${siteConfig.url}/products/${product.slug}`;
  const additionalProperties = [
    { "@type": "PropertyValue", name: "MOQ", value: product.moq },
    { "@type": "PropertyValue", name: "Lead Time", value: product.leadTime },
    {
      "@type": "PropertyValue",
      name: "Category",
      value: categoryLabels[product.category],
    },
    {
      "@type": "PropertyValue",
      name: "Certifications",
      value: product.certifications.join(", "),
    },
    {
      "@type": "PropertyValue",
      name: "Applications",
      value: product.applications.map((a) => a.name).join(", "),
    },
    { "@type": "PropertyValue", name: "Country of Origin", value: "CN" },
  ];

  const specs = product.specifications.flatMap((g) => g.items);
  const materialSpec = specs.find((s) =>
    s.param.toLowerCase().includes("material"),
  );
  if (materialSpec) {
    additionalProperties.push({
      "@type": "PropertyValue",
      name: "Material",
      value: materialSpec.value,
    });
  }

  return {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": `${productUrl}#product`,
    name: product.name,
    sku: product.model,
    mpn: product.model,
    description: `${product.tagline} ${product.description}`,
    image: [`${siteConfig.url}${product.image}`],
    url: productUrl,
    brand: { "@type": "Brand", name: "AccuMeasure" },
    manufacturer: { "@id": `${siteConfig.url}/#organization` },
    category: categoryLabels[product.category],
    additionalProperty: additionalProperties,
    offers: {
      "@type": "Offer",
      "@id": `${productUrl}#offer`,
      price: product.priceFrom,
      priceCurrency: "USD",
      priceSpecification: {
        "@type": "PriceSpecification",
        price: product.priceFrom,
        priceCurrency: "USD",
        valueAddedTaxIncluded: false,
      },
      availability: "https://schema.org/InStock",
      url: productUrl,
      seller: { "@id": `${siteConfig.url}/#organization` },
      eligibleQuantity: {
        "@type": "QuantitativeValue",
        minValue: product.moq,
        unitText: "unit",
      },
    },
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

export function articleJsonLd(caseStudy: CaseStudy) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${siteConfig.url}/case-studies#${caseStudy.slug}`,
    headline: caseStudy.title,
    image: [`${siteConfig.url}${caseStudy.image}`],
    articleSection: "Case Study",
    author: { "@id": `${siteConfig.url}/#organization` },
    publisher: { "@id": `${siteConfig.url}/#organization` },
    about: caseStudy.background,
    mentions: caseStudy.productIds.map(
      (id) => `${siteConfig.url}/products#${id}`,
    ),
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
    about: post.relatedProductIds.map((id) => `${siteConfig.url}/products#${id}`),
  };
}
