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
import { waLinkFor } from "@/lib/site";

export function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const cs = getCaseStudyBySlug(params.slug);
  if (!cs) return { title: "Case Study Not Found" };
  const resultSummary = cs.results.map((r) => `${r.metric}: ${r.value}`).join(", ");
  return {
    title: `${cs.title} | Case Study | AccuMeasureTech`,
    description: `${cs.clientType} in ${cs.country}. ${cs.challenge} Results — ${resultSummary}.`,
    alternates: { canonical: `/case-studies/${cs.slug}` },
    openGraph: {
      title: cs.title,
      description: cs.challenge,
      type: "article",
      publishedTime: cs.datePublished,
      modifiedTime: cs.dateModified,
      images: [{ url: cs.image, width: 600, height: 400, alt: cs.title }],
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
              { name: "Case Studies", href: "/case-studies" },
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
          <div className="flex flex-wrap gap-4">
            {cs.results.map((r, i) => (
              <div key={i} className="bg-white border border-cta/20 rounded-lg px-5 py-3">
                <div className="text-cta font-bold text-2xl">{r.value}</div>
                <div className="text-muted text-xs">{r.metric}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-max grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-10">
            <div className="relative aspect-video rounded-xl overflow-hidden border border-border">
              <Image src={cs.image} alt={cs.title} fill sizes="(min-width: 1024px) 66vw, 100vw" className="object-cover" priority />
            </div>

            <div>
              <h2 className="text-2xl font-bold text-dark mb-3">Background</h2>
              <p className="text-muted">{cs.background}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-dark mb-3">Challenge</h2>
              <p className="text-muted">{cs.challenge}</p>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-dark mb-3">Solution</h2>
              <ul className="space-y-3">
                {cs.solution.map((s, i) => (
                  <li key={i} className="flex items-start gap-3 text-muted">
                    <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-bg-light p-8 rounded-xl">
              <p className="italic text-dark text-lg mb-4">&ldquo;{cs.testimonial}&rdquo;</p>
              <p className="text-sm font-medium text-muted">
                — {cs.testimonialAuthor}, {cs.title.split(" — ")[0]}
              </p>
            </div>
          </div>

          <aside className="space-y-6">
            {usedProducts.length > 0 && (
              <div className="bg-white rounded-xl border border-border p-6">
                <h2 className="font-semibold text-dark mb-4">Products Used</h2>
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
                          From ${p.priceFrom} · MOQ {p.moq} · {p.leadTime}
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            <div className="bg-cta/5 rounded-xl border border-cta/20 p-6">
              <h2 className="font-semibold text-dark mb-2">Have a similar project?</h2>
              <p className="text-muted text-sm mb-4">
                Tell us your application, quantity, and destination — we&apos;ll reply with a quote within 24 hours.
              </p>
              <div className="flex flex-col gap-3">
                <Link href="/contact" className="btn-primary text-sm justify-center">
                  Request a Quote
                </Link>
                <a
                  href={waLinkFor(
                    `Hi AccuMeasure, I read the "${cs.title}" case study and have a similar project. Can we discuss?`,
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
          <h2 className="text-2xl font-bold text-dark mb-8 text-center">More Case Studies</h2>
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
                    Read Case Study <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
