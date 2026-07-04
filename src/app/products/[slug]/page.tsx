import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle, MessageSquare, FileText, ArrowRight, Package, CreditCard, Ship, FlaskConical, Truck } from "lucide-react";
import { ProductTabs } from "@/components/product-tabs";
import { InquiryForm } from "@/components/forms/inquiry-form";
import { JsonLd } from "@/components/json-ld";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { products, getProductBySlug, getProductById } from "@/lib/products";
import { getCaseStudiesByProductId } from "@/lib/case-studies";
import { productJsonLd, faqPageJsonLd } from "@/lib/seo";
import { waLink } from "@/lib/site";
import { Breadcrumbs } from "@/components/breadcrumbs";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product) {
    return { title: "Product Not Found" };
  }
  return {
    title: `${product.model} ${product.name}`,
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

  const productCases = getCaseStudiesByProductId(product.id);

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
          ...(product.faq && product.faq.length > 0 ? [faqPageJsonLd(product.faq)] : []),
        ]}
      />

      <section className="pt-24 pb-12 bg-bg-light">
        <div className="container-max">
          <Breadcrumbs
            items={[
              { name: "Products", href: "/products" },
              { name: categoryLabel, href: `/products?category=${product.category}` },
              { name: product.name },
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
              <a href="#documents" className="btn-secondary w-full mt-4 flex items-center justify-center gap-2">
                <FileText className="w-4 h-4" /> Request Technical Documents
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

      {productCases.length > 0 && (
        <section className="py-16 bg-bg-light">
          <div className="container-max">
            <h2 className="text-2xl font-bold text-dark mb-2 text-center">
              Real-World Applications
            </h2>
            <p className="text-muted text-center mb-8 max-w-2xl mx-auto">
              See how global buyers deploy the {product.model} {product.name} in the field.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {productCases.map((cs) => (
                <Link
                  key={cs.id}
                  href="/case-studies"
                  className="card group block"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-2xl">{cs.flag}</span>
                    <span className="text-sm text-muted">{cs.country}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-dark mb-2 group-hover:text-primary transition-colors">
                    {cs.title.split(" — ")[0]}
                  </h3>
                  <p className="text-muted text-sm mb-4 line-clamp-2">{cs.background}</p>
                  <div className="flex flex-wrap gap-3">
                    {cs.results.slice(0, 3).map((r, i) => (
                      <div key={i} className="bg-cta/5 border border-cta/20 rounded-lg px-3 py-1">
                        <span className="text-cta font-bold text-sm">{r.value}</span>
                        <span className="text-muted text-xs ml-1">{r.metric}</span>
                      </div>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {product.procurement && (
        <section className="py-16">
          <div className="container-max">
            <h2 className="text-2xl font-bold text-dark mb-8 text-center">Ordering &amp; Procurement</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 border border-border">
                <Package className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-dark mb-2">Packaging</h3>
                <p className="text-muted text-sm">{product.procurement.packaging}</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-border">
                <CreditCard className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-dark mb-2">Payment Terms</h3>
                <p className="text-muted text-sm">{product.procurement.paymentTerms}</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-border">
                <Ship className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-dark mb-2">Trade Terms (Incoterms)</h3>
                <p className="text-muted text-sm">{product.procurement.tradeTerms}</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-border">
                <Truck className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-dark mb-2">Shipping</h3>
                <p className="text-muted text-sm">{product.procurement.shipping}</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-border">
                <FlaskConical className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-semibold text-dark mb-2">Samples</h3>
                <p className="text-muted text-sm">{product.procurement.samples}</p>
              </div>
              <div className="bg-cta/5 rounded-xl p-6 border border-cta/20 flex flex-col justify-center">
                <h3 className="font-semibold text-dark mb-2">Need a custom quote?</h3>
                <p className="text-muted text-sm mb-4">Tell us your quantity and destination port for an accurate landed cost estimate.</p>
                <a href="#quote" className="btn-primary text-sm w-fit">Request Quote</a>
              </div>
            </div>
          </div>
        </section>
      )}

      {product.faq && product.faq.length > 0 && (
        <section className="py-16">
          <div className="container-max max-w-3xl">
            <h2 className="text-2xl font-bold text-dark mb-8 text-center">
              {product.model} FAQ
            </h2>
            <Accordion type="single" collapsible className="bg-white rounded-xl border border-border">
              {product.faq.map((item, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-border last:border-0">
                  <AccordionTrigger className="px-6 py-4 text-left font-medium text-dark hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4 text-muted">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      )}

      <section className="py-16 bg-bg-light">
        <div className="container-max">
          <h2 className="text-2xl font-bold text-dark mb-8 text-center">Related Products</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {relatedProducts.map((rp) => (
              <Link key={rp.id} href={`/products/${rp.slug}`} className="card group">
                <div className="relative aspect-[3/2] bg-primary/5 rounded-xl overflow-hidden mb-4">
                  <Image
                    src={rp.image}
                    alt={`${rp.model} ${rp.name}`}
                    fill
                    sizes="(min-width: 768px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
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
