import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { applicationPages } from "@/lib/applications";

export const metadata: Metadata = {
  title: "Application Guides — Level, Flow & Pressure Solutions | AccuMeasure",
  description:
    "Application landing pages for oil-tank radar level, water-treatment flow meters, OEM pressure transmitters, and radar vs ultrasonic selection.",
  alternates: { canonical: "/applications" },
  openGraph: {
    title: "Application Guides | AccuMeasure",
    description:
      "Buyer-focused application pages linking AccuMeasure instruments to real industrial use cases.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "AccuMeasure Applications" }],
  },
};

export default function ApplicationsIndexPage() {
  return (
    <div>
      <section className="pt-24 pb-12 bg-bg-light">
        <div className="container-max">
          <Breadcrumbs items={[{ name: "Applications", href: "/applications" }]} />
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold text-dark mb-4">Application Guides</h1>
            <p className="text-lg text-muted">
              Practical selection pages for common buyer jobs — not catalog filler.
              Each guide links to the exact AccuMeasure models, RFQ checklist, and FAQ.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-max grid md:grid-cols-2 gap-8">
          {applicationPages.map((page) => (
            <Link
              key={page.slug}
              href={`/applications/${page.slug}`}
              className="card group"
            >
              <div className="text-sm font-medium text-primary mb-2">{page.industry}</div>
              <h2 className="text-xl font-semibold text-dark mb-3 group-hover:text-primary transition-colors">
                {page.h1}
              </h2>
              <p className="text-muted text-sm mb-6 line-clamp-3">{page.description}</p>
              <span className="inline-flex items-center gap-2 text-accent font-medium">
                Open guide <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
