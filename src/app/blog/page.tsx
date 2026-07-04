import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";

export const metadata: Metadata = {
  title: "Blog — Measurement Instrument Insights",
  description:
    "Technical articles on level, flow, and pressure measurement: selection guides, application notes, and industry best practices from AccuMeasure engineers.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "AccuMeasure Blog — Measurement Instrument Insights",
    description:
      "Selection guides, application notes, and engineering best practices for industrial measurement instruments.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "AccuMeasure Blog" }],
  },
};

export default function BlogPage() {
  return (
    <div>
      <section className="pt-24 pb-16 bg-bg-light">
        <div className="container-max">
          <Breadcrumbs items={[{ name: "Blog" }]} />
          <div className="text-center">
            <h1 className="text-4xl font-bold text-dark mb-6">
              Measurement Instrument Insights
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Technical articles, selection guides, and application notes from our engineers. Coming soon.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-max max-w-2xl text-center">
          <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-primary" />
          </div>
          <h2 className="text-2xl font-bold text-dark mb-4">
            Be the first to know
          </h2>
          <p className="text-muted mb-8">
            We&apos;re preparing in-depth technical content on level, flow, and pressure
            measurement. Subscribe to get notified when we publish, or explore our products
            and case studies in the meantime.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/products" className="btn-primary flex items-center gap-2">
              Browse Products <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/case-studies" className="btn-secondary">
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
