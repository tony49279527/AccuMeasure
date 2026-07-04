import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CheckCircle, MessageSquare, FileText, ArrowRight, Package, CreditCard, Ship, FlaskConical, Truck, Gauge, Wrench, ShieldCheck } from "lucide-react";
import { ProductTabs } from "@/components/product-tabs";
import { InquiryForm } from "@/components/forms/inquiry-form";
import { JsonLd } from "@/components/json-ld";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { products, getProductBySlug, getProductById } from "@/lib/products";
import { getCaseStudiesByProductId } from "@/lib/case-studies";
import { productJsonLd, faqPageJsonLd } from "@/lib/seo";
import { waLink } from "@/lib/site";
import { Breadcrumbs } from "@/components/breadcrumbs";

const reservedSlugs = ["level", "flow", "pressure"];

export function generateStaticParams() {
  return products
    .filter((p) => !reservedSlugs.includes(p.slug))
    .map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const product = getProductBySlug(params.slug);
  if (!product || reservedSlugs.includes(params.slug)) {
    return { title: "Product Not Found" };
  }
  return {
    title: `${product.model} ${product.name} | Measurement Range, Accuracy, Applications | AccuMeasureTech`,
    description: `${product.tagline} Measurement range: ${product.keySpecs.find(s => s.label.toLowerCase().includes('range') || s.label.toLowerCase().includes('accuracy'))?.value || product.keySpecs[0]?.value || 'various'}. From $${product.priceFrom} (FOB Xi'an). Factory-direct from AccuMeasure, ISO 9001 certified.`,
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
  if (!product || reservedSlugs.includes(params.slug)) notFound();

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
          <div className="mb-12">
            <h2 className="text-lg font-semibold text-dark mb-4">Quick Specifications</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
              {(() => {
                const allItems = product.specifications.flatMap((g) => g.items);
                const priorityKeys = [
                  "accuracy", "range", "range (liquid)", "max range",
                  "output", "output signal", "output protocol",
                  "material", "wetted material", "electrode material",
                  "process connection", "connection", "mounting",
                  "process temperature", "temperature", "operating temperature",
                  "protection", "protection class", "ip rating",
                  "power supply", "supply", "power",
                  "frequency", "technology", "measurement principle",
                  "sizes", "size", "pipe size",
                  "certification", "certifications", "approvals",
                  "battery", "battery life",
                  "response time", "response",
                ];
                const filtered = allItems.filter((it) =>
                  priorityKeys.some((k) => it.param.toLowerCase().includes(k.toLowerCase())),
                );
                const result = filtered.length >= 6 ? filtered.slice(0, 6) : allItems.slice(0, 6);
                return result.map((spec, i) => (
                  <div key={i} className="bg-white rounded-lg p-3 border border-border">
                    <p className="text-xs text-muted mb-1">{spec.param}</p>
                    <p className="text-sm font-semibold text-dark">{spec.value}</p>
                  </div>
                ));
              })()}
            </div>
            <p className="text-xs text-muted mt-3">
              Key specifications shown above. See full specification tables below.
            </p>
          </div>
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

      <section className="py-16">
        <div className="container-max">
          <h2 className="text-2xl font-bold text-dark mb-8 text-center">How to Choose</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Gauge className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-dark mb-3">What to look for</h3>
              <ul className="space-y-2 text-muted text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>Accuracy:</strong> Match your process tolerance. 0.25% FS for custody transfer, 1% FS for tank level monitoring.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>Range:</strong> Ensure the sensor covers your full tank depth, including dead zones. Add 20% margin.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>Medium compatibility:</strong> Check wetted material against your fluid&apos;s chemical compatibility chart.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>Output signal:</strong> Match your PLC/DCS interface. 4-20mA is universal; RS485 for Modbus; EtherNet/IP for industrial Ethernet.</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-8 border border-border">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-dark mb-3">Installation &amp; Wiring</h3>
              <ul className="space-y-2 text-muted text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>Power:</strong> Most AccuMeasure instruments run on 12–36V DC. Battery-powered models available for remote sites.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>Mounting:</strong> Threaded (G1/4, G1/2, M20), flange (DN25–DN200), or clamp-on. Standard process connections ship with the unit.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>Wiring:</strong> 2-wire (loop-powered) or 4-wire configurations. All units include a wiring diagram on the housing label.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span><strong>Environment:</strong> Check IP rating for outdoor installations. IP67 units are suitable for direct rain and dust exposure.</span>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-center text-sm text-muted mt-6">
            Not sure which configuration is right for you? <a href="#quote" className="text-primary underline">Ask our engineers</a> — we&apos;ll review your spec and recommend the best option.
          </p>
        </div>
      </section>

      <section className="py-16 bg-bg-light">
        <div className="container-max">
          <h2 className="text-2xl font-bold text-dark mb-8 text-center">Quality &amp; Certification</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 border border-border text-center">
              <div className="w-12 h-12 bg-cta/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-6 h-6 text-cta" />
              </div>
              <h3 className="font-semibold text-dark mb-2">72-Hour Aging Test</h3>
              <p className="text-muted text-sm">
                Every unit runs continuously for 72 hours under temperature cycling (0°C to 50°C) to detect infant mortality failures before shipment.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-border text-center">
              <div className="w-12 h-12 bg-cta/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-cta" />
              </div>
              <h3 className="font-semibold text-dark mb-2">Calibration Certificate</h3>
              <p className="text-muted text-sm">
                Individual calibration certificate with traceable reference standards included with every shipment at no extra charge.
              </p>
            </div>
            <div className="bg-white rounded-xl p-6 border border-border text-center">
              <div className="w-12 h-12 bg-cta/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-6 h-6 text-cta" />
              </div>
              <h3 className="font-semibold text-dark mb-2">ISO 9001 · CE · ATEX · RoHS</h3>
              <p className="text-muted text-sm">
                ISO 9001 certified factory. Products bear CE, ATEX (where applicable), and RoHS marks. See <Link href="/certificates" className="text-primary underline">full certificates</Link>.
              </p>
            </div>
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
