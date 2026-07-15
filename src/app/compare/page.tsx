import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { comparisonPages, getComparisonProducts } from "@/lib/comparisons";

export const metadata: Metadata = {
  title: "Industrial Sensor Comparison Guides | AccuMeasure",
  description:
    "Compare level sensors and flow meters by media, accuracy, range, installation, price, MOQ, and lead time. Choose a model and request a factory quote.",
  alternates: { canonical: "/compare" },
  openGraph: {
    url: "/compare",
    title: "Industrial Sensor Comparison Guides | AccuMeasure",
    description:
      "Compare level sensors and flow meters by media, accuracy, range, installation, price, MOQ, and lead time. Choose a model and request a factory quote.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "AccuMeasure Comparison Guides" }],
  },
};

export default function ComparePage() {
  return (
    <div>
      <section className="pt-24 pb-14 bg-bg-light">
        <div className="container-max">
          <Breadcrumbs items={[{ name: "Comparison Guides", href: "/compare" }]} />
          <div className="max-w-4xl">
            <h1 className="text-4xl font-bold text-dark mb-5">
              Industrial Sensor &amp; Flow Meter Comparison Guides
            </h1>
            <p className="text-lg text-muted max-w-3xl">
              Compare published specifications, installation constraints, commercial terms,
              and best-fit applications before sending an RFQ.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-8">
            {comparisonPages.map((page) => {
              const comparedProducts = getComparisonProducts(page);
              return (
                <article key={page.slug} className="card flex flex-col">
                  <div className="text-sm font-medium text-primary mb-3">Buyer decision guide</div>
                  <h2 className="text-2xl font-bold text-dark mb-3">{page.h1}</h2>
                  <p className="text-muted mb-6">{page.directAnswer}</p>
                  <ul className="space-y-2 mb-7">
                    {comparedProducts.map((product) => (
                      <li key={product.id} className="flex items-center gap-2 text-sm text-muted">
                        <CheckCircle className="w-4 h-4 text-cta flex-shrink-0" />
                        {product.model} {product.name}: from ${product.priceFrom}, MOQ {product.moq}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/compare/${page.slug}`}
                    className="text-primary font-medium inline-flex items-center gap-2 mt-auto"
                  >
                    Compare models <ArrowRight className="w-4 h-4" />
                  </Link>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-bg-light">
        <div className="container-max text-center">
          <h2 className="text-2xl font-bold text-dark mb-4">Need a comparison for your duty?</h2>
          <p className="text-muted max-w-2xl mx-auto mb-7">
            Send the medium, range, process conditions, installation drawing, output, and quantity.
            An application engineer will recommend the closest standard model.
          </p>
          <Link href="/contact" className="btn-primary">
            Request a Model Recommendation
          </Link>
        </div>
      </section>
    </div>
  );
}
