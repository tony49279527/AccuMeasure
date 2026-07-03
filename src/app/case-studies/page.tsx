import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { caseStudies, clientLogos } from "@/lib/case-studies";

export const metadata: Metadata = {
  title: "Case Studies — Global Buyers Trust AccuMeasure",
  description:
    "Real projects from Saudi Arabia, Indonesia, and Brazil. 71% cost savings, 200-unit deliveries, OEM branding. See how global buyers use AccuMeasure instruments.",
  alternates: { canonical: "/case-studies" },
};

export default function CaseStudiesPage() {
  return (
    <div>
      <section className="pt-24 pb-16 bg-bg-light">
        <div className="container-max text-center">
          <h1 className="text-4xl font-bold text-dark mb-6">Case Studies</h1>
          <p className="text-lg text-muted max-w-3xl mx-auto">
            Real projects. Real results. See how global buyers use AccuMeasure instruments.
          </p>
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
                  </div>
                  <h2 className="text-2xl font-bold text-dark mb-2">{cs.title}</h2>

                  <div className="grid md:grid-cols-2 gap-8 mt-6">
                    <div className="aspect-video bg-primary/10 rounded-xl flex items-center justify-center">
                      <span className="text-muted">Project Photo</span>
                    </div>

                    <div>
                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="font-medium text-dark mb-1">Background</h4>
                          <p className="text-muted text-sm">{cs.background}</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-dark mb-1">Challenge</h4>
                          <p className="text-muted text-sm">{cs.challenge}</p>
                        </div>
                        <div>
                          <h4 className="font-medium text-dark mb-1">Solution</h4>
                          <ul className="text-muted text-sm space-y-1">
                            {cs.solution.map((s, i) => (
                              <li key={i} className="flex items-start gap-2">
                                <span className="text-primary">•</span> {s}
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-medium text-dark mb-2">Results</h4>
                          <div className="flex flex-wrap gap-4">
                            {cs.results.map((r, i) => (
                              <div key={i} className="bg-cta/5 border border-cta/20 rounded-lg px-4 py-2">
                                <div className="text-cta font-bold text-lg">{r.value}</div>
                                <div className="text-muted text-xs">{r.metric}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="bg-bg-light p-6 rounded-xl">
                        <p className="italic text-muted mb-4">&ldquo;{cs.testimonial}&rdquo;</p>
                        <p className="text-sm font-medium text-dark">
                          — {cs.testimonialAuthor}, {cs.title.split(" — ")[0]}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-bg-light">
        <div className="container-max text-center">
          <h2 className="text-2xl font-bold text-dark mb-8">Trusted By</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {clientLogos.map((logo, i) => (
              <div
                key={i}
                className="aspect-video bg-white rounded-xl border border-border flex items-center justify-center px-2"
              >
                <span className="text-muted text-sm text-center">{logo}</span>
              </div>
            ))}
          </div>
          <p className="text-muted text-sm mt-4">
            Partial client list. Some clients are confidential.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container-max text-center">
          <h2 className="text-2xl font-bold text-dark mb-6">
            Become our next success story
          </h2>
          <Link href="/contact" className="btn-primary">
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}
