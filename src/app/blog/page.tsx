import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, Clock, Tag } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { blogPosts } from "@/lib/blog";

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
          <Breadcrumbs items={[{ name: "Blog", href: "/blog" }]} />
          <div className="text-center">
            <h1 className="text-4xl font-bold text-dark mb-6">
              Measurement Instrument Insights
            </h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Technical articles, selection guides, and application notes from AccuMeasure engineers for overseas B2B buyers.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-max">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card group flex flex-col"
              >
                <div className="flex items-center gap-2 text-primary text-sm font-medium mb-4">
                  <Tag className="w-4 h-4" />
                  {post.category}
                </div>
                <h2 className="text-xl font-semibold text-dark mb-3 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted text-sm mb-6 flex-1">{post.description}</p>
                <div className="flex items-center justify-between text-sm text-muted pt-4 border-t border-border">
                  <span className="inline-flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                  <span className="text-accent font-medium inline-flex items-center gap-1">
                    Read guide <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-bg-light">
        <div className="container-max">
          <div className="bg-white rounded-2xl border border-border p-8 md:p-10 grid lg:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 text-primary font-medium mb-3">
                <BookOpen className="w-5 h-5" />
                Buyer education library
              </div>
              <h2 className="text-2xl font-bold text-dark mb-3">
                Need a guide for a specific application?
              </h2>
              <p className="text-muted max-w-2xl">
                Send tank size, pipe size, medium, temperature, pressure, output signal,
                and target quantity. Our engineers can recommend a model and turn the
                answer into a purchasing checklist for your team.
              </p>
            </div>
            <Link href="/contact" className="btn-primary">
              Ask an Engineer <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
