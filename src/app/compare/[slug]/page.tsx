import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle, MessageSquare } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import {
  comparisonPages,
  getComparisonBySlug,
  getComparisonProducts,
} from "@/lib/comparisons";
import { companyFacts } from "@/lib/facts";
import { faqPageJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export function generateStaticParams() {
  return comparisonPages.map((page) => ({ slug: page.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const page = getComparisonBySlug(params.slug);
  if (!page) return { title: "Comparison Not Found" };

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/compare/${page.slug}` },
    openGraph: {
      url: `/compare/${page.slug}`,
      title: page.h1,
      description: page.description,
      images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: page.h1 }],
    },
  };
}

export default function ComparisonDetailPage({ params }: { params: { slug: string } }) {
  const page = getComparisonBySlug(params.slug);
  if (!page) notFound();

  const comparedProducts = getComparisonProducts(page);
  const first = comparedProducts[0];
  const second = comparedProducts[1];
  if (!first || !second) notFound();

  const itemListJsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: page.h1,
    numberOfItems: comparedProducts.length,
    itemListElement: comparedProducts.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: `${product.model} ${product.name}`,
      url: `${siteConfig.url}/products/${product.slug}`,
    })),
  };

  return (
    <div>
      <JsonLd data={[itemListJsonLd, faqPageJsonLd(page.faqs)]} />

      <section className="pt-24 pb-14 bg-bg-light">
        <div className="container-max">
          <Breadcrumbs
            items={[
              { name: "Comparison Guides", href: "/compare" },
              { name: page.h1, href: `/compare/${page.slug}` },
            ]}
          />
          <div className="max-w-5xl">
            <p className="text-sm font-semibold text-primary mb-3">B2B buyer comparison</p>
            <h1 className="text-3xl lg:text-5xl font-bold text-dark mb-5">{page.h1}</h1>
            <p className="text-lg text-muted max-w-3xl mb-7">{page.directAnswer}</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                <MessageSquare className="w-5 h-5" /> Get a Quote
              </Link>
              <Link href="#comparison-table" className="btn-secondary">
                View Comparison
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section id="comparison-table" className="py-16 scroll-mt-20">
        <div className="container-max">
          <h2 className="text-2xl font-bold text-dark mb-3">Comparison at a Glance</h2>
          <p className="text-muted mb-8 max-w-3xl">
            Published values below come from the current AccuMeasure product specifications.
            Final configuration depends on the medium, installation, output, and certification.
          </p>
          <div className="overflow-x-auto border border-border rounded-lg">
            <table className="w-full min-w-[820px] border-collapse">
              <thead>
                <tr className="bg-bg-light border-b border-border">
                  <th className="text-left py-4 px-5 text-sm text-muted">Decision point</th>
                  <th className="text-left py-4 px-5 text-sm text-dark">{first.model} {first.name}</th>
                  <th className="text-left py-4 px-5 text-sm text-dark">{second.model} {second.name}</th>
                  <th className="text-left py-4 px-5 text-sm text-muted">Buyer guidance</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border/70">
                  <th className="text-left py-4 px-5 text-sm text-muted font-medium">Starting price</th>
                  <td className="py-4 px-5 font-semibold text-dark">${first.priceFrom} FOB Xi&apos;an</td>
                  <td className="py-4 px-5 font-semibold text-dark">${second.priceFrom} FOB Xi&apos;an</td>
                  <td className="py-4 px-5 text-sm text-muted">Confirm configuration and freight in the formal quote.</td>
                </tr>
                <tr className="border-b border-border/70 bg-bg-light/40">
                  <th className="text-left py-4 px-5 text-sm text-muted font-medium">MOQ / lead time</th>
                  <td className="py-4 px-5 text-dark">{first.moq} units / {first.leadTime}</td>
                  <td className="py-4 px-5 text-dark">{second.moq} units / {second.leadTime}</td>
                  <td className="py-4 px-5 text-sm text-muted">One sample is available before a bulk order.</td>
                </tr>
                {page.criteria.map((row, index) => (
                  <tr key={row.label} className={index % 2 ? "bg-bg-light/40 border-b border-border/70" : "border-b border-border/70"}>
                    <th className="text-left py-4 px-5 text-sm text-muted font-medium">{row.label}</th>
                    <td className="py-4 px-5 text-dark">{row.first}</td>
                    <td className="py-4 px-5 text-dark">{row.second}</td>
                    <td className="py-4 px-5 text-sm text-muted">{row.buyingGuidance}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="py-16 bg-bg-light">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-white border border-border rounded-lg p-7">
              <h2 className="text-xl font-bold text-dark mb-5">Choose {first.model} when...</h2>
              <ul className="space-y-3">
                {page.chooseFirst.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted">
                    <CheckCircle className="w-5 h-5 text-cta mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href={`/products/${first.slug}`} className="text-primary font-medium inline-flex items-center gap-2 mt-6">
                View {first.model} specifications <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="bg-white border border-border rounded-lg p-7">
              <h2 className="text-xl font-bold text-dark mb-5">Choose {second.model} when...</h2>
              <ul className="space-y-3">
                {page.chooseSecond.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted">
                    <CheckCircle className="w-5 h-5 text-cta mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Link href={`/products/${second.slug}`} className="text-primary font-medium inline-flex items-center gap-2 mt-6">
                View {second.model} specifications <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="text-center mt-9">
            <Link href="/contact" className="btn-primary">
              Ask an Engineer to Compare Your Duty
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-max grid lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-dark mb-5">RFQ Information to Send</h2>
            <ul className="space-y-3">
              {page.rfqChecklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-muted">
                  <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-dark mb-5">Factory &amp; Supply Facts</h2>
            <dl className="grid grid-cols-2 gap-4">
              <div className="border border-border rounded-lg p-4">
                <dt className="text-sm text-muted">Exporting</dt>
                <dd className="text-lg font-semibold text-dark">{companyFacts.yearsExportingLabel}</dd>
              </div>
              <div className="border border-border rounded-lg p-4">
                <dt className="text-sm text-muted">Markets</dt>
                <dd className="text-lg font-semibold text-dark">{companyFacts.exportMarkets} countries</dd>
              </div>
              <div className="border border-border rounded-lg p-4">
                <dt className="text-sm text-muted">Pre-shipment test</dt>
                <dd className="text-lg font-semibold text-dark">{companyFacts.agingHours} hours</dd>
              </div>
              <div className="border border-border rounded-lg p-4">
                <dt className="text-sm text-muted">Warranty</dt>
                <dd className="text-lg font-semibold text-dark">{companyFacts.warrantyLabel}</dd>
              </div>
            </dl>
            <p className="text-sm text-muted mt-5">
              Calibration certificates and serial-number traceability are supplied with each unit.
              Verify available approvals for the exact model and configuration before purchase.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-bg-light">
        <div className="container-max max-w-4xl">
          <h2 className="text-2xl font-bold text-dark mb-7">Buyer FAQ</h2>
          <div className="space-y-5">
            {page.faqs.map((faq) => (
              <div key={faq.question} className="bg-white border border-border rounded-lg p-6">
                <h3 className="font-semibold text-dark mb-2">{faq.question}</h3>
                <p className="text-muted leading-7">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container-max text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to validate the right model?</h2>
          <p className="text-white/80 max-w-2xl mx-auto mb-7">
            Send your operating conditions and target quantity. We will confirm the model,
            configuration, price, and lead time in one quotation.
          </p>
          <Link href="/contact" className="btn-outline-white">
            Get a Quote <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
