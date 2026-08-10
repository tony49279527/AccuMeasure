import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { caseStudies } from "@/lib/case-studies";
import { getProductById } from "@/lib/products";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Industrial Measurement Project Planning Briefs | AccuMeasure",
  description:
    "Review project planning briefs for radar level, electromagnetic flow, and OEM pressure measurement, including selection inputs and document checks.",
  alternates: { canonical: "/case-studies" },
  openGraph: {
    url: "/case-studies",
    title: "Industrial Measurement Project Planning Briefs | AccuMeasure",
    description:
      "Selection context, engineering review steps, and verification checklists for common industrial measurement projects.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "AccuMeasure Project Briefs" }],
  },
};

export default function CaseStudiesPage() {
  return (
    <div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "AccuMeasure Industrial Measurement Project Briefs",
          itemListElement: caseStudies.map((cs, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: cs.title,
            url: `${siteConfig.url}/case-studies/${cs.slug}`,
          })),
        }}
      />
      <section className="pt-24 pb-16 bg-bg-light">
        <div className="container-max">
          <Breadcrumbs items={[{ name: "Project Briefs", href: "/case-studies" }]} />
          <div className="text-center">
            <h1 className="text-4xl font-bold text-dark mb-6">Project Planning Briefs</h1>
            <p className="text-lg text-muted max-w-3xl mx-auto">
              Use these briefs to prepare selection inputs, engineering checks, and
              document requirements before a model or supplier is approved.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-max">
          <div className="space-y-12">
            {caseStudies.map((cs) => (
              <div key={cs.id} className="card overflow-hidden">
                <div className="p-8">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-sm text-cta font-medium">
                      {cs.clientType}
                    </span>
                    <span className="text-sm text-muted">•</span>
                    <span className="text-sm text-muted flex items-center gap-1">
                      <span>{cs.flag}</span> {cs.country}
                    </span>
                    <span className="text-sm text-muted">•</span>
                    <time className="text-sm text-muted" dateTime={cs.datePublished}>
                      Published {cs.datePublished}
                    </time>
                  </div>
                  <h2 className="text-2xl font-bold text-dark mb-2">
                    <Link href={`/case-studies/${cs.slug}`} className="hover:text-primary transition-colors">
                      {cs.title}
                    </Link>
                  </h2>

                  <div className="grid md:grid-cols-2 gap-8 mt-6">
                    <div>
                      <div className="space-y-4 mb-6">
                        <div>
                          <h3 className="font-medium text-dark mb-1">Selection context</h3>
                          <p className="text-muted text-sm">{cs.background}</p>
                        </div>
                        <div>
                          <h3 className="font-medium text-dark mb-1">Engineering task</h3>
                          <p className="text-muted text-sm">{cs.challenge}</p>
                        </div>
                        <div>
                          <h3 className="font-medium text-dark mb-1">Review approach</h3>
                          <ul className="text-muted text-sm space-y-1">
                            {cs.solution.map((s, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-primary">•</span> {s}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <Link
                        href={`/case-studies/${cs.slug}`}
                        className="text-accent font-medium inline-flex items-center gap-1 text-sm mt-4"
                      >
                        Open Project Brief <ArrowRight className="w-4 h-4" />
                      </Link>

                      {cs.productIds.length > 0 && (
                        <div className="mt-4">
                          <h3 className="font-medium text-dark mb-2 text-sm">Related instruments</h3>
                          <div className="flex flex-wrap gap-2">
                            {cs.productIds.map((pid) => {
                              const p = getProductById(pid);
                              if (!p) return null;
                              return (
                                <Link
                                  key={pid}
                                  href={`/products/${p.slug}`}
                                  className="inline-flex items-center gap-1 text-xs bg-white border border-border rounded-full px-3 py-1 hover:border-primary hover:text-primary transition-colors"
                                >
                                  {p.model} {p.name}
                                </Link>
                              );
                            })}
                          </div>
                        </div>
                      )}
                    </div>

                    <div className="bg-bg-light border border-border rounded-xl p-6">
                      <h3 className="font-semibold text-dark mb-4">Verify before approval</h3>
                      <ul className="space-y-3">
                        {cs.verificationChecks.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-sm text-muted">
                            <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-bg-light">
        <div className="container-max max-w-3xl text-center">
          <h2 className="text-2xl font-bold text-dark mb-4">Evidence before claims</h2>
          <p className="text-muted mb-6">
            Customer identities, project outcomes, order quantities, and testimonials
            are published only after source, scope, redaction, and channel approval.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/certificates" className="btn-secondary">
              Review documentation status
            </Link>
            <Link href="/resources" className="btn-secondary">
              Request current documents
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-max text-center">
          <h2 className="text-2xl font-bold text-dark mb-6">
            Prepare an application review
          </h2>
          <Link href="/contact" className="btn-primary">
            Send Project Requirements
          </Link>
        </div>
      </section>
    </div>
  );
}
