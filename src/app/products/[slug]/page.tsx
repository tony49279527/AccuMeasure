import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowRight,
  CheckCircle,
  ClipboardCheck,
  FileText,
  MessageSquare,
  ShieldCheck,
} from "lucide-react";
import { ProductTabs } from "@/components/product-tabs";
import { InquiryForm } from "@/components/forms/inquiry-form";
import { JsonLd } from "@/components/json-ld";
import { products, getProductById, getProductBySlug } from "@/lib/products";
import { getCaseStudiesByProductId } from "@/lib/case-studies";
import { productJsonLd } from "@/lib/seo";
import { waLinkFor } from "@/lib/site";
import { Breadcrumbs } from "@/components/breadcrumbs";

const reservedSlugs = ["level", "flow", "pressure"];

export function generateStaticParams() {
  return products
    .filter((product) => !reservedSlugs.includes(product.slug))
    .map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product || reservedSlugs.includes(slug)) {
    return { title: "Product Not Found" };
  }

  const primarySpec = product.keySpecs.slice(0, 2).map((spec) => spec.value).join(", ");
  return {
    title: `${product.model} ${product.name} | AccuMeasure`,
    description: `${product.model} ${product.name}: ${primarySpec}. Review published specifications and request the current model-specific documents and quotation.`,
    alternates: { canonical: `/products/${product.slug}` },
    openGraph: {
      url: `/products/${product.slug}`,
      title: `${product.model} ${product.name}`,
      description: "Review published specifications and confirm the project configuration in the current document package.",
      type: "website",
      images: [{ url: product.image, width: 1200, height: 630, alt: `${product.model} ${product.name}` }],
    },
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product || reservedSlugs.includes(slug)) notFound();

  const relatedProducts = product.relatedProductIds
    .map((id) => getProductById(id))
    .filter((candidate): candidate is NonNullable<typeof candidate> => Boolean(candidate));
  const planningBriefs = getCaseStudiesByProductId(product.id);
  const categoryLabel =
    product.category === "level"
      ? "Level Sensors"
      : product.category === "flow"
        ? "Flow Meters"
        : "Pressure Sensors";

  return (
    <div>
      <JsonLd data={productJsonLd(product)} />

      <section className="pt-24 pb-12 bg-bg-light">
        <div className="container-max">
          <Breadcrumbs
            items={[
              { name: "Products", href: "/products" },
              { name: categoryLabel, href: `/products/${product.category}` },
              { name: product.name, href: `/products/${product.slug}` },
            ]}
          />

          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2">
              <div className="relative aspect-[3/2] bg-white rounded-xl border border-border overflow-hidden">
                <Image
                  src={product.image}
                  alt={`${product.model} ${product.name}`}
                  fill
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            <div className="lg:col-span-3">
              <span className="inline-block bg-cta/10 text-cta text-sm font-medium px-3 py-1 rounded-lg mb-4">
                {product.model}
              </span>
              <h1 className="text-3xl font-bold text-dark mb-4">{product.name}</h1>
              <p className="text-lg text-muted mb-8">{product.tagline}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {product.keySpecs.map((spec) => (
                  <div key={spec.label} className="bg-white border border-border rounded-lg p-4">
                    <div className="text-muted text-xs mb-1">{spec.label}</div>
                    <div className="text-dark font-mono-num font-semibold">{spec.value}</div>
                  </div>
                ))}
              </div>

              <div className="bg-white border border-border rounded-lg p-4 mb-8 text-sm text-muted">
                Published specifications are selection inputs. Confirm the current configuration, document revision,
                compliance scope, inspection requirements, and commercial terms for this exact project.
              </div>

              <div className="flex flex-wrap gap-4">
                <a href="#quote" className="btn-primary flex items-center gap-2">
                  <MessageSquare className="w-5 h-5" /> Request a Project Quote
                </a>
                <a href="#documents" className="btn-secondary flex items-center gap-2">
                  <FileText className="w-5 h-5" /> Request Technical Documents
                </a>
                <a
                  href={waLinkFor(
                    `Hi AccuMeasure, I am evaluating the ${product.model} ${product.name}. Please help me confirm the current configuration and document package.`,
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary flex items-center gap-2"
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
          <div className="mb-12">
            <h2 className="text-lg font-semibold text-dark mb-4">Quick Specifications</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {(() => {
                const allItems = product.specifications.flatMap((group) => group.items);
                const priorityKeys = [
                  "accuracy", "range", "output", "material", "process connection", "mounting",
                  "process temperature", "temperature", "protection", "power", "frequency", "technology",
                  "sizes", "pipe size", "battery", "response time",
                ];
                const selected = allItems.filter((item) =>
                  priorityKeys.some((key) => item.param.toLowerCase().includes(key)),
                );
                const items = selected.length >= 6 ? selected.slice(0, 6) : allItems.slice(0, 6);
                return items.map((spec) => (
                  <div key={spec.param} className="bg-white rounded-lg p-3 border border-border">
                    <p className="text-xs text-muted mb-1">{spec.param}</p>
                    <p className="text-sm font-semibold text-dark">{spec.value}</p>
                  </div>
                ));
              })()}
            </div>
            <p className="text-xs text-muted mt-3">
              Use the published data to prepare questions for the RFQ; the current controlled datasheet is the document to approve.
            </p>
          </div>
          <ProductTabs product={product} />
        </div>
      </section>

      <section className="py-16 bg-bg-light">
        <div className="container-max">
          <div className="max-w-3xl mb-10">
            <h2 className="text-2xl font-bold text-dark mb-3">Published Product Information</h2>
            <p className="text-muted">
              These product points help structure an evaluation. Verify the selected configuration against current, model-specific documentation before release.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {product.advantages.map((advantage) => (
              <div key={advantage.title} className="bg-white rounded-lg p-6 border border-border">
                <CheckCircle className="w-6 h-6 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-dark mb-3">{advantage.title}</h3>
                <p className="text-muted text-sm">{advantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="documents" className="py-16">
        <div className="container-max">
          <h2 className="text-2xl font-bold text-dark mb-8 text-center">Project Selection &amp; Documentation</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: ClipboardCheck,
                title: "Application inputs",
                body: "Provide the medium, range, tank or pipe details, process conditions, installation, output, and destination-market requirements.",
              },
              {
                icon: FileText,
                title: "Current document package",
                body: "Request the current datasheet, drawings, applicable compliance scope, and any inspection, calibration, or test records required by the project.",
              },
              {
                icon: ShieldCheck,
                title: "Written release terms",
                body: "Confirm the configuration, quantity, packaging, delivery, warranty, payment, and acceptance criteria in the project quotation.",
              },
            ].map((item) => (
              <div key={item.title} className="card text-center">
                <item.icon className="w-7 h-7 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-dark mb-2">{item.title}</h3>
                <p className="text-muted text-sm">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {planningBriefs.length > 0 && (
        <section className="py-16 bg-bg-light">
          <div className="container-max">
            <h2 className="text-2xl font-bold text-dark mb-2 text-center">Application Planning Briefs</h2>
            <p className="text-muted text-center mb-8 max-w-2xl mx-auto">
              These briefs organize evaluation inputs. They do not identify customers or claim completed-order or field-performance results.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {planningBriefs.map((brief) => (
                <Link key={brief.id} href={`/case-studies/${brief.slug}`} className="card group block">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl" aria-hidden="true">{brief.flag}</span>
                    <span className="text-sm text-muted">{brief.country}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-dark mb-2 group-hover:text-primary transition-colors">
                    {brief.title}
                  </h3>
                  <p className="text-muted text-sm mb-4 line-clamp-3">{brief.background}</p>
                  <span className="text-primary font-medium inline-flex items-center gap-2 text-sm">
                    Open planning brief <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16 bg-bg-light">
        <div className="container-max">
          <h2 className="text-2xl font-bold text-dark mb-8 text-center">Related Products</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedProducts.map((related) => (
              <Link key={related.id} href={`/products/${related.slug}`} className="card group">
                <div className="relative aspect-[3/2] bg-primary/5 rounded-lg overflow-hidden mb-4">
                  <Image
                    src={related.image}
                    alt={`${related.model} ${related.name}`}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <div className="text-sm text-cta font-medium mb-1">{related.model}</div>
                <h3 className="text-lg font-semibold text-dark mb-2">{related.name}</h3>
                <p className="text-muted text-sm mb-3 line-clamp-2">{related.tagline}</p>
                <span className="text-accent font-medium inline-flex items-center gap-1 text-sm">
                  View details <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="quote" className="py-16">
        <div className="container-max max-w-2xl">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-dark mb-2">Request a Quote: {product.name}</h2>
            <p className="text-muted">
              Include the application and documentation requirements so the configuration and quotation can be reviewed for this project.
            </p>
          </div>
          <div className="bg-white rounded-lg p-8 border border-border">
            <InquiryForm productId={product.id} productName={product.name} defaultInterest={categoryLabel} />
          </div>
        </div>
      </section>
    </div>
  );
}
