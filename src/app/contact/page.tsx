import type { Metadata } from "next";
import { MapPin, Clock, Users, Globe, Mail, MessageSquare } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { InquiryForm } from "@/components/forms/inquiry-form";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { getProductById } from "@/lib/products";
import { siteConfig, waLink } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get a quote within 24 hours. Contact AccuMeasure for level sensors, flow meters, and pressure transmitters. Email, WhatsApp, or request a callback.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact AccuMeasure — Get a Quote Within 24 Hours",
    description:
      "Factory-direct measurement instruments. Email, WhatsApp, or use our inquiry form. Response within 24 hours.",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "AccuMeasure" }],
  },
};

const faqs = [
  {
    q: "What's your MOQ?",
    a: "1 unit for samples, 50+ for bulk pricing. Contact us for details.",
  },
  {
    q: "How long is the lead time?",
    a: "15-20 days standard, 25-35 days for custom orders.",
  },
  {
    q: "Do you provide calibration certificates?",
    a: "Yes! Every unit ships with a calibration certificate.",
  },
  {
    q: "Can I visit your factory?",
    a: "Yes, welcome! Video tour is also available.",
  },
  {
    q: "What payment methods do you accept?",
    a: "T/T, PayPal, L/C, Alibaba Trade Assurance.",
  },
];

const salesContacts = [
  { name: "Sarah Chen", role: "International Sales", email: "sarah@accumeasure.cn", wa: "+86-138-0000-0001" },
  { name: "Leo Wang", role: "OEM/ODM Sales", email: "leo@accumeasure.cn", wa: "+86-138-0000-0002" },
];

export default function ContactPage({
  searchParams,
}: {
  searchParams: { product?: string; document?: string; request?: string };
}) {
  const productId = searchParams.product;
  const product = productId ? getProductById(productId) : undefined;
  const defaultMessage =
    searchParams.request === "catalog"
      ? "Please send me your latest product catalog."
      : product && searchParams.document
        ? `Please send me the latest ${searchParams.document} for ${product.model} ${product.name}.`
        : undefined;

  return (
    <div>
      <section className="pt-24 pb-16 bg-bg-light">
        <div className="container-max">
          <Breadcrumbs items={[{ name: "Contact Us" }]} />
          <div className="text-center">
            <h1 className="text-4xl font-bold text-dark mb-6">Contact Us</h1>
            <p className="text-lg text-muted max-w-3xl mx-auto">
              Get a quote within 24 hours. Or just say hi.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="bg-white rounded-xl p-8 border border-border">
                <InquiryForm
                  productId={product?.id}
                  productName={product?.name}
                  defaultInterest={
                    product
                      ? product.category === "level"
                        ? "Level Sensors"
                        : product.category === "flow"
                        ? "Flow Meters"
                        : "Pressure Sensors"
                      : undefined
                  }
                  defaultMessage={defaultMessage}
                />
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-white rounded-xl p-8 border border-border">
                <h3 className="text-xl font-semibold text-dark mb-6">
                  Contact Information
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-medium text-dark">Factory Address</div>
                      <div className="text-muted text-sm">
                        {siteConfig.address}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-medium text-dark">Office Hours</div>
                      <div className="text-muted text-sm">
                        {siteConfig.officeHours}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <Mail className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                    <div>
                      <div className="font-medium text-dark">Email</div>
                      <a href={`mailto:${siteConfig.email}`} className="text-muted text-sm hover:text-primary">
                        {siteConfig.email}
                      </a>
                    </div>
                  </div>

                  <div className="border-t border-border pt-6">
                    <div className="font-medium text-dark mb-4 flex items-center gap-2">
                      <Users className="w-5 h-5" />
                      Sales Contacts
                    </div>
                    <div className="space-y-4">
                      {salesContacts.map((contact, idx) => (
                        <div key={idx} className="bg-bg-light p-4 rounded-lg">
                          <div className="font-medium text-dark">{contact.name}</div>
                          <div className="text-muted text-sm mb-2">{contact.role}</div>
                          <div className="text-sm text-primary flex items-center gap-2">
                            <Mail className="w-4 h-4" />
                            {contact.email}
                          </div>
                          <div className="text-sm text-success flex items-center gap-2">
                            <MessageSquare className="w-4 h-4" />
                            {contact.wa}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-border pt-6">
                    <div className="font-medium text-dark mb-4 flex items-center gap-2">
                      <Globe className="w-5 h-5" />
                      Find Us On
                    </div>
                    <div className="flex flex-wrap gap-3">
                      <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm py-2 px-4">
                        LinkedIn
                      </a>
                      <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm py-2 px-4">
                        WhatsApp
                      </a>
                      <a href={siteConfig.social.alibaba} target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm py-2 px-4">
                        Alibaba
                      </a>
                      <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm py-2 px-4">
                        YouTube
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="aspect-video bg-primary/10 rounded-xl flex items-center justify-center overflow-hidden">
                <iframe
                  title="Factory Location"
                  src="https://www.google.com/maps?q=Xi%27an+High-Tech+Zone&output=embed"
                  className="w-full h-full border-0"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-bg-light">
        <div className="container-max max-w-3xl">
          <h2 className="text-2xl font-bold text-dark mb-8 text-center">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="bg-white rounded-xl border border-border">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`} className="border-b border-border last:border-0">
                <AccordionTrigger className="px-6 py-4 text-left font-medium text-dark hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-muted">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </div>
  );
}
