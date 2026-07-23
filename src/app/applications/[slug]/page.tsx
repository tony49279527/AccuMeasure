import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle, MessageSquare } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import {
  applicationPages,
  getApplicationBySlug,
  getRelatedProducts,
} from "@/lib/applications";
import { faqPageJsonLd } from "@/lib/seo";
import { siteConfig, waLinkFor } from "@/lib/site";

export function generateStaticParams() {
  return applicationPages.map((page) => ({ slug: page.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const page = getApplicationBySlug(params.slug);
  if (!page) return {};
  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/applications/${page.slug}` },
    openGraph: {
      url: `/applications/${page.slug}`,
      title: page.h1,
      description: page.description,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: page.h1 }],
    },
  };
}

export default function ApplicationDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const page = getApplicationBySlug(params.slug);
  if (!page) notFound();

  const related = getRelatedProducts(page);

  return (
    <div>
      <JsonLd
        data={[
          faqPageJsonLd(page.faqs),
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: page.h1,
            description: page.description,
            url: `${siteConfig.url}/applications/${page.slug}`,
            isPartOf: { "@id": `${siteConfig.url}/#website` },
            about: { "@id": `${siteConfig.url}/#organization` },
          },
        ]}
      />

      <section className="pt-24 pb-12 bg-bg-light">
        <div className="container-max">
          <Breadcrumbs
            items={[
              { name: "Applications", href: "/applications" },
              { name: page.h1, href: `/applications/${page.slug}` },
            ]}
          />
          <div className="max-w-3xl">
            <p className="text-sm font-medium text-primary mb-3">{page.industry}</p>
            <h1 className="text-3xl lg:text-5xl font-bold text-dark mb-6">{page.h1}</h1>
            <p className="text-lg text-muted mb-8">{page.description}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact" className="btn-primary">
                <MessageSquare className="w-5 h-5" />
                Get Application Quote
              </Link>
              <a
                href={waLinkFor(
                  `Hi AccuMeasure, I need a recommendation for: ${page.h1}. Can you help me select a model?`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                Ask on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-max grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-dark mb-4">The Buyer Problem</h2>
            <p className="text-muted leading-7 mb-8">{page.problem}</p>
            <h2 className="text-2xl font-bold text-dark mb-4">Recommended Approach</h2>
            <p className="text-muted leading-7">{page.solution}</p>
          </div>
          <div className="bg-bg-light rounded-xl border border-border p-8">
            <h2 className="text-xl font-bold text-dark mb-6">Why AccuMeasure for this job</h2>
            <ul className="space-y-4">
              {page.whyAccuMeasure.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted">
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 bg-bg-light">
        <div className="container-max">
          <h2 className="text-2xl font-bold text-dark mb-4">RFQ Checklist</h2>
          <p className="text-muted mb-8 max-w-2xl">
            Send these details and we aim to reply within {siteConfig.responseTarget} with a model recommendation and quote.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {page.checklist.map((item) => (
              <div key={item} className="bg-white rounded-lg border border-border p-4 text-sm text-dark">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-max">
          <h2 className="text-2xl font-bold text-dark mb-8">Recommended Products</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {related.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="card overflow-hidden p-0 group"
              >
                <div className="relative h-48 bg-bg-light">
                  <Image
                    src={product.image}
                    alt={`${product.model} ${product.name}`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <div className="text-sm text-muted mb-1">{product.model}</div>
                  <h3 className="text-xl font-semibold text-dark mb-2">{product.name}</h3>
                  <p className="text-muted text-sm mb-4">{product.tagline}</p>
                  <span className="inline-flex items-center gap-2 text-accent font-medium">
                    View specs <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
          {page.relatedCaseSlug && (
            <div className="mt-10">
              <Link
                href={`/case-studies/${page.relatedCaseSlug}`}
                className="text-accent font-medium inline-flex items-center gap-2"
              >
                Read related case study <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 bg-bg-light">
        <div className="container-max max-w-3xl">
          <h2 className="text-2xl font-bold text-dark mb-8 text-center">FAQ</h2>
          <Accordion type="single" collapsible defaultValue="item-0" className="bg-white rounded-xl border border-border">
            {page.faqs.map((faq, idx) => (
              <AccordionItem key={faq.question} value={`item-${idx}`} className="border-b border-border last:border-0">
                <AccordionTrigger className="px-6 py-4 text-left font-medium text-dark hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
