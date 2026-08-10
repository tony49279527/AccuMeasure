import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle, MessageSquare } from "lucide-react";
import { caseStudies, getCaseStudyBySlug } from "@/lib/case-studies";
import { getProductById } from "@/lib/products";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { articleJsonLd } from "@/lib/seo";
import { siteConfig, waLinkFor } from "@/lib/site";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const cs = getCaseStudyBySlug(params.slug);
  if (!cs) return { title: "Project Brief Not Found" };
  const product = cs.productIds.map((id) => getProductById(id)).find(Boolean);
  const title =
    cs.seoTitle ??
    `${cs.country} ${product?.model ?? "Instrument"} Application Planning Brief | AccuMeasure`;
  const description =
    cs.seoDescription ??
    `Review the selection inputs, verification checks, and documentation needed to evaluate ${product?.model ?? "AccuMeasure instruments"} for an application in ${cs.country}.`;
  return {
    title,
    description,
    alternates: { canonical: `/case-studies/${cs.slug}` },
    openGraph: {
      url: `/case-studies/${cs.slug}`,
      title: cs.title,
      description: cs.challenge,
      type: "article",
      publishedTime: cs.datePublished,
      modifiedTime: cs.dateModified,
      images: [{ url: `${siteConfig.url}/og-image.jpg`, width: 1200, height: 630, alt: cs.title }],
    },
  };
}

export default function CaseStudyDetailPage({ params }: { params: { slug: string } }) {
  const cs = getCaseStudyBySlug(params.slug);
  if (!cs) notFound();

  const usedProducts = cs.productIds
    .map((id) => getProductById(id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  return (
    <div>
      <JsonLd data={articleJsonLd(cs)} />

      <section className="pt-24 pb-12 bg-bg-light">
        <div className="container-max">
          <Breadcrumbs
            items={[
              { name: "Project Briefs", href: "/case-studies" },
              { name: cs.title.split(" — ")[0] ?? cs.title, href: `/case-studies/${cs.slug}` },
            ]}
          />
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-sm text-cta font-medium">{cs.clientType}</span>
            <span className="text-sm text-muted">•</span>
            <span className="text-sm text-muted flex items-center gap-1">
              <span>{cs.flag}</span> {cs.country}
            </span>
            <span className="text-sm text-muted">•</span>
            <time className="text-sm text-muted" dateTime={cs.datePublished}>
              Published {cs.datePublished}
            </time>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-dark mb-6">{cs.title}</h1>
          <p className="max-w-3xl text-muted">
            This planning brief provides selection and verification inputs. It does not
            identify a customer or publish unapproved project outcomes.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-max grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">
            <div>
              <h2 className="text-2xl font-bold text-dark mb-3">Selection context</h2>
              <p className="text-muted">{cs.background}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-dark mb-3">Engineering task</h2>
              <p className="text-muted">{cs.challenge}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-dark mb-3">Review approach</h2>
              <ul className="space-y-3">
                {cs.solution.map((s, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-bg-light p-8 rounded-xl border border-border">
              <h2 className="text-xl font-bold text-dark mb-3">Verification checklist</h2>
              <p className="text-sm text-muted leading-6 mb-6">
                Confirm these items against the current datasheet, quotation, and
                project-specific documents before approval.
              </p>
              <ul className="space-y-3">
                {cs.verificationChecks.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-x-5 gap-y-2 mt-6 pt-5 border-t border-border text-sm">
                <Link href="/certificates" className="text-primary font-medium hover:underline">
                  Review documentation status
                </Link>
                <Link href="/resources" className="text-primary font-medium hover:underline">
                  Request current documents
                </Link>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            {usedProducts.length > 0 && (
              <div className="bg-white rounded-xl border border-border p-6">
                <h2 className="font-semibold text-dark mb-4">Related instruments</h2>
                <div className="space-y-4">
                  {usedProducts.map((p) => (
                    <Link key={p.id} href={`/products/${p.slug}`} className="flex gap-3 group">
                      <div className="relative w-20 h-14 rounded-lg overflow-hidden bg-primary/5 flex-shrink-0">
                        <Image src={p.image} alt={`${p.model} ${p.name}`} fill sizes="80px" className="object-cover" />
                      </div>
                      <div>
                        <div className="text-xs text-cta font-medium">{p.model}</div>
                        <div className="text-sm font-semibold text-dark group-hover:text-primary transition-colors">
                          {p.name}
                        </div>
                        <div className="text-xs text-muted">
                          Review current specifications and project documents
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-cta/5 rounded-xl border border-cta/20 p-6">
              <h2 className="font-semibold text-dark mb-2">Planning a similar application?</h2>
              <p className="text-muted text-sm mb-4">
                Tell us your application, quantity, and destination. We&apos;ll aim to reply within {siteConfig.responseTarget}.
              </p>
              <div className="flex flex-col gap-3">
                <Link href="/contact" className="btn-primary text-sm justify-center">
                  Request a Quote
                </Link>
                <a
                  href={waLinkFor(
                    `Hi AccuMeasure, I read the "${cs.title}" planning brief and have a similar application. Can we discuss the selection inputs?`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-sm justify-center flex items-center gap-2"
                >
                  <MessageSquare className="w-4 h-4" /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="py-16 bg-bg-light">
        <div className="container-max">
          <h2 className="text-2xl font-bold text-dark mb-8 text-center">More Project Briefs</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {caseStudies
              .filter((other) => other.slug !== cs.slug)
              .map((other) => (
                <Link key={other.id} href={`/case-studies/${other.slug}`} className="card group">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xl">{other.flag}</span>
                    <span className="text-sm text-muted">{other.country}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-dark mb-2 group-hover:text-primary transition-colors">
                    {other.title}
                  </h3>
                  <p className="text-muted text-sm mb-3 line-clamp-2">{other.background}</p>
                  <span className="text-accent font-medium inline-flex items-center gap-1 text-sm">
                    Open Project Brief <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
