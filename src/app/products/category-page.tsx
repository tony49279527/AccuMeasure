import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";
import { products } from "@/lib/products";
import type { Product } from "@/lib/types";

export interface CategoryPageData {
  slug: string;
  label: string;
  title: string;
  description: string;
  h1: string;
  lead: string;
  overview: string;
  selectionGuide: {
    title: string;
    description: string;
  }[];
}

export function generateCategoryMetadata(data: CategoryPageData): Metadata {
  return {
    title: data.title,
    description: data.description,
    alternates: { canonical: `/products/${data.slug}` },
    robots: { index: true, follow: true },
    openGraph: {
      title: data.label,
      description: data.description,
      images: [{ url: "/og-image.png", width: 1200, height: 630, alt: `AccuMeasure ${data.label}` }],
    },
  };
}

export function CategoryPage({ data }: { data: CategoryPageData }) {
  const categoryProducts = products.filter(
    (p) => p.category === data.slug,
  ) as Product[];

  return (
    <div>
      <JsonLd
        data={[
          breadcrumbJsonLd([
            { name: "Home", url: siteConfig.url },
            { name: "Products", url: `${siteConfig.url}/products` },
            { name: data.label, url: `${siteConfig.url}/products/${data.slug}` },
          ]),
        ]}
      />

      <section className="pt-24 pb-16 bg-bg-light">
        <div className="container-max">
          <Breadcrumbs
            items={[
              { name: "Products", href: "/products" },
              { name: data.label },
            ]}
          />
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-dark mb-6">{data.h1}</h1>
            <p className="text-lg text-muted max-w-3xl mx-auto">{data.lead}</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-border mb-12 max-w-4xl mx-auto">
            <p className="text-muted text-sm">{data.overview}</p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-max">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categoryProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="card group"
              >
                <div className="relative aspect-[3/2] bg-primary/5 rounded-xl overflow-hidden mb-4">
                  <Image
                    src={product.image}
                    alt={`${product.model} ${product.name} — ${data.label}`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="text-xs font-mono font-bold text-primary bg-primary/10 px-2 py-1 rounded inline-block mb-2">
                  {product.model}
                </div>
                <h2 className="text-lg font-semibold text-dark mb-2 group-hover:text-primary transition-colors">
                  {product.name}
                </h2>
                <p className="text-muted text-sm mb-4 line-clamp-2">{product.tagline}</p>
                <div className="grid grid-cols-2 gap-2 mb-4">
                  {product.keySpecs.slice(0, 4).map((spec, idx) => (
                    <div key={idx} className="bg-bg-light rounded p-2">
                      <p className="text-xs text-muted">{spec.label}</p>
                      <p className="text-sm font-semibold text-dark font-mono-num">{spec.value}</p>
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-accent font-medium text-sm">
                    From ${product.priceFrom}
                  </span>
                  <span className="text-primary font-medium inline-flex items-center gap-1 text-sm">
                    View Details <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-bg-light">
        <div className="container-max">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-dark mb-3">
              {data.label} Selection Guide
            </h2>
            <p className="text-muted max-w-2xl mx-auto">
              Use these checks before sending an RFQ. They help our engineers confirm
              the right model, output, material, and certification for your project.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {data.selectionGuide.map((item) => (
              <div key={item.title} className="bg-white rounded-xl border border-border p-6">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <CheckCircle className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold text-dark mb-2">{item.title}</h3>
                <p className="text-muted text-sm leading-6">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-max">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-dark mb-4">
              Need help choosing the right {data.label.toLowerCase()}?
            </h2>
            <p className="text-muted mb-8 max-w-lg mx-auto">
              Our engineers can recommend the best sensor for your application, medium, and budget.
              Describe your project and we&apos;ll respond within 24 hours.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/customization" className="btn-primary">
                Request a Recommendation
              </Link>
              <Link href="/industries" className="btn-secondary">
                Browse by Industry
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
