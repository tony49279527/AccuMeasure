import type { Metadata } from "next";
import Link from "next/link";
import { FileText, BookOpen, MessageSquare, ArrowRight } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Sensor Datasheets & Technical Documents | AccuMeasure",
  description:
    "Request current product datasheets, installation manuals, 3D models, and certificates for AccuMeasure level sensors, flow meters, and pressure transmitters.",
  alternates: { canonical: "/resources" },
  openGraph: {
    url: "/resources",
    title: "Resources — Datasheets, Manuals & Technical Documents | AccuMeasure",
    description:
      "Request controlled product datasheets, installation manuals, and technical documentation for AccuMeasure measurement instruments.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "AccuMeasure Resources" }],
  },
};

export default function ResourcesPage() {
  return (
    <div>
      <section className="pt-24 pb-16 bg-bg-light">
        <div className="container-max">
          <Breadcrumbs items={[{ name: "Resources", href: "/resources" }]} />
          <div className="text-center">
            <h1 className="text-4xl font-bold text-dark mb-6">Resources &amp; Technical Documents</h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Request the latest controlled datasheets, installation manuals, 3D models, and technical guides for AccuMeasure instruments.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-max">
          {products.map((product, idx) => (
            <div
              key={product.id}
              className={`${idx > 0 ? "border-t border-border pt-8 mt-8" : ""}`}
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                <div>
                  <span className="text-xs font-mono font-bold text-primary bg-primary/10 px-2 py-1 rounded">
                    {product.model}
                  </span>
                  <h2 className="text-xl font-semibold text-dark mt-2">{product.name}</h2>
                </div>
                <Link
                  href={`/products/${product.slug}`}
                  className="text-primary text-sm font-medium hover:underline flex items-center gap-1 shrink-0"
                >
                  View Product <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
                {product.downloads.map((dl, dIdx) => (
                  <Link
                    key={dIdx}
                    href={`/contact?product=${encodeURIComponent(product.id)}&document=${encodeURIComponent(dl.name)}`}
                    className="flex items-center gap-3 p-3 rounded-lg border border-border hover:border-primary hover:bg-primary/5 transition-all"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                      {dl.type === "pdf" ? (
                        <FileText className="w-5 h-5 text-primary" />
                      ) : (
                        <MessageSquare className="w-5 h-5 text-primary" />
                      )}
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-dark truncate">{dl.name}</p>
                      <p className="text-xs text-muted uppercase">{dl.type === "3d" ? "3D Model · Request STEP" : "Request PDF"}</p>
                    </div>
                    <span className="ml-auto text-xs font-medium text-primary">Request</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 bg-bg-light">
        <div className="container-max text-center">
          <BookOpen className="w-12 h-12 text-primary mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-dark mb-4">Need a custom datasheet?</h2>
          <p className="text-muted mb-6 max-w-lg mx-auto">
            If you need technical drawings, custom specification sheets, or application-specific documentation,
            our engineering team can prepare them for your review.
          </p>
          <Link href="/contact" className="btn-primary">
            Request Documentation
          </Link>
        </div>
      </section>
    </div>
  );
}
