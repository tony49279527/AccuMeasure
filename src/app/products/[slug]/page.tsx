import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle, MessageSquare, Download, ArrowRight, FileText } from "lucide-react";
import { ProductTabs } from "@/components/product-tabs";
import { InquiryForm } from "@/components/forms/inquiry-form";
import { JsonLd } from "@/components/json-ld";
import { products, getProductBySlug, getProductById } from "@/lib/products";
import { productJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { siteConfig, waLink } from "@/lib/site";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) {
    return { title: "Product Not Found" };
  }
  return {
    title: `${product.model} ${product.name} | AccuMeasure`,
    description: `${product.tagline} ${product.keySpecs
      .map((s) => `${s.label}: ${s.value}`)
      .join(", ")}. From $${product.priceFrom}. Factory direct from Xi'an, China.`,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      title: `${product.model} ${product.name}`,
      description: product.tagline,
      type: "website",
    },
  };
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = getProductBySlug(params.slug);
  if (!product) notFound();

  const relatedProducts = product.relatedProductIds
    .map((id) => getProductById(id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));

  const categoryLabel =
    product.category === "level"
      ? "Level Sensors"
      : product.category === "flow"
      ? "Flow Meters"
      : "Pressure Sensors";

  return (
    <div>
      <JsonLd
        data={[
          productJsonLd(product),
          breadcrumbJsonLd([
            { name: "Home", url: siteConfig.url },
            { name: "Products", url: `${siteConfig.url}/products` },
            { name: categoryLabel, url: `${siteConfig.url}/products?category=${product.category}` },
            { name: product.name, url: `${siteConfig.url}/products/${product.slug}` },
          ]),
        ]}
      />

      <section className="pt-24 pb-12 bg-bg-light">
        <div className="container-max">
          <nav className="text-sm text-muted mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span className="mx-2">›</span>
            <Link href="/products" className="hover:text-primary">Products</Link>
            <span className="mx-2">›</span>
            <Link href={`/products?category=${product.category}`} className="hover:text-primary">
              {categoryLabel}
            </Link>
            <span className="mx-2">›</span>
            <span className="text-dark">{product.name}</span>
          </nav>

          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <div className="aspect-square bg-white rounded-xl border border-border flex items-center justify-center mb-4">
                <span className="text-muted font-mono">{product.model}</span>
              </div>
              <div className="grid grid-cols-4 gap-2">
                {[0, 1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="aspect-square bg-white rounded-lg border border-border flex items-center justify-center"
                  >
                    <span className="text-muted text-xs">View {i + 1}</span>
                  </div>
                ))}
              </div>
              <a href="#" className="btn-secondary w-full mt-4 flex items-center justify-center gap-2">
                <Download className="w-4 h-4" /> Download Spec Sheet (PDF)
              </a>
            </div>

            <div className="lg:col-span-3">
              <span className="inline-block bg-cta/10 text-cta text-sm font-medium px-3 py-1 rounded-full mb-4">
                {product.model}
              </span>
              <h1 className="text-3xl font-bold text-dark mb-4">{product.name}</h1>
              <p className="text-lg text-muted mb-8">{product.tagline}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {product.keySpecs.map((spec, idx) => (
                  <div key={idx} className="bg-white border border-border rounded-lg p-4">
                    <div className="text-muted text-xs mb-1">{spec.label}</div>
                    <div className="text-dark font-mono-num font-semibold">{spec.value}</div>
                  </div>
                ))}
              </div>

              <div className="bg-bg-light rounded-lg p-4 mb-8">
                <div className="text-2xl font-bold text-dark">
                  From ${product.priceFrom}
                  <span className="text-sm font-normal text-muted ml-2">(FOB Xi&apos;an)</span>
                </div>
                <div className="text-muted text-sm mt-1">MOQ: {product.moq} units · Lead time: {product.leadTime}</div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="#quote" className="btn-primary flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" /> Get a Quote for This Product
                </a>
                <a
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary flex items-center gap-2"
                  style={{ background: "#25D366", borderColor: "#25D366", color: "white" }}
                >
                  <MessageSquare className="w-5 h-5" /> Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-max">
          <ProductTabs product={product} />
        </div>
      </section>

      <section className="py-16 bg-bg-light">
        <div className="container-max">
          <h2 className="text-2xl font-bold text-dark mb-8 text-center">Why This Product</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {product.advantages.map((adv, idx) => (
              <div key={idx} className="bg-white rounded-xl p-8 border border-border">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-dark mb-3">{adv.title}</h3>
                <p className="text-muted text-sm">{adv.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {product.competitorComparison && product.competitorComparison.length > 0 && (
        <section className="py-16">
          <div className="container-max">
            <h2 className="text-2xl font-bold text-dark mb-8 text-center">How We Compare</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 text-muted font-medium">Parameter</th>
                    <th className="text-left py-4 px-4 text-primary font-semibold bg-primary/5">AccuMeasure</th>
                    <th className="text-left py-4 px-4 text-muted font-medium">European Brand</th>
                  </tr>
                </thead>
                <tbody>
                  {product.competitorComparison.map((row, idx) => (
                    <tr key={idx} className="border-b border-border/50">
                      <td className="py-4 px-4 text-muted">{row.feature}</td>
                      <td className="py-4 px-4 text-dark font-medium bg-primary/5">{row.accumeasure}</td>
                      <td className="py-4 px-4 text-muted">{row.competitor}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-bg-light">
        <div className="container-max">
          <h2 className="text-2xl font-bold text-dark mb-8 text-center">Related Products</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedProducts.map((rp) => (
              <Link key={rp.id} href={`/products/${rp.slug}`} className="card group">
                <div className="aspect-video bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <span className="text-muted text-sm font-mono">{rp.model}</span>
                </div>
                <div className="text-sm text-cta font-medium mb-1">{rp.model}</div>
                <h3 className="text-lg font-semibold text-dark mb-2">{rp.name}</h3>
                <p className="text-muted text-sm mb-3 line-clamp-2">{rp.tagline}</p>
                <span className="text-accent font-medium inline-flex items-center gap-1 text-sm">
                  View Details <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="quote" className="py-16">
        <div className="container-max max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-dark mb-2">
              Get a Quote: {product.name}
            </h2>
            <p className="text-muted">
              Fill out the form below and we&apos;ll reply within 24 hours.
            </p>
          </div>
          <div className="bg-white rounded-xl p-8 border border-border">
            <InquiryForm
              productId={product.id}
              productName={product.name}
              defaultInterest={categoryLabel}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
