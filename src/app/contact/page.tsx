import type { Metadata } from "next";
import { Suspense } from "react";
import { MapPin, Clock, Users, Globe, Mail, MessageSquare, ExternalLink } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ContactInquiry } from "@/components/forms/contact-inquiry";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { JsonLd } from "@/components/json-ld";
import { faqPageJsonLd } from "@/lib/seo";
import { siteConfig, waLink } from "@/lib/site";
import { contactFaqs } from "@/lib/facts";

export const metadata: Metadata = {
  title: "Contact AccuMeasureTech | Get a Quote Within 24 Hours — Level, Flow & Pressure Instruments",
  description:
    "Get a quote within 24 hours. Contact AccuMeasure for level sensors, flow meters, and pressure transmitters. Email, WhatsApp, or request a callback.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact AccuMeasure — Get a Quote Within 24 Hours",
    description:
      "Factory-direct measurement instruments. Email, WhatsApp, or use our inquiry form. Response within 24 hours.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "AccuMeasure" }],
  },
};

const faqs = contactFaqs;

// One monitored desk — subject lines route OEM vs standard inquiries.
const salesContacts = [
  {
    name: "Sales & OEM Desk",
    role: "Quotations, samples, bulk orders, private label, custom engineering",
    email: siteConfig.email,
    subject: "Website inquiry",
    wa: siteConfig.whatsappDisplay,
  },
];

function ContactFormFallback() {
  const fieldBlocks = Array.from({ length: 6 });

  return (
    <div
      className="min-h-[920px] animate-pulse space-y-6"
      aria-hidden="true"
    >
      <div className="grid md:grid-cols-2 gap-6">
        {fieldBlocks.slice(0, 2).map((_, index) => (
          <div key={index} className="space-y-2">
            <div className="h-4 w-24 rounded bg-border" />
            <div className="h-10 rounded-lg bg-bg-light" />
          </div>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {fieldBlocks.slice(2, 4).map((_, index) => (
          <div key={index} className="space-y-2">
            <div className="h-4 w-28 rounded bg-border" />
            <div className="h-10 rounded-lg bg-bg-light" />
          </div>
        ))}
      </div>
      <div className="grid md:grid-cols-2 gap-6">
        {fieldBlocks.slice(4, 6).map((_, index) => (
          <div key={index} className="space-y-2">
            <div className="h-4 w-32 rounded bg-border" />
            <div className="h-10 rounded-lg bg-bg-light" />
          </div>
        ))}
      </div>
      <div className="space-y-2">
        <div className="h-4 w-32 rounded bg-border" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
          {Array.from({ length: 6 }).map((_, index) => (
            <div key={index} className="h-12 rounded-lg bg-bg-light" />
          ))}
        </div>
      </div>
      <div className="space-y-2">
        <div className="h-4 w-40 rounded bg-border" />
        <div className="h-32 rounded-lg bg-bg-light" />
      </div>
      <div className="h-5 w-64 max-w-full rounded bg-bg-light" />
      <div className="h-12 rounded-lg bg-primary/20" />
    </div>
  );
}

export default function ContactPage() {
  return (
    <div>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "@id": `${siteConfig.url}/contact#contactpage`,
            name: "Contact AccuMeasure Instruments",
            url: `${siteConfig.url}/contact`,
            mainEntity: { "@id": `${siteConfig.url}/#organization` },
          },
          faqPageJsonLd(faqs.map((f) => ({ question: f.q, answer: f.a }))),
        ]}
      />
      <section className="pt-24 pb-16 bg-bg-light">
        <div className="container-max">
          <Breadcrumbs items={[{ name: "Contact Us", href: "/contact" }]} />
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
              <div className="bg-white rounded-xl p-8 border border-border min-h-[1120px] md:min-h-[800px]">
                <Suspense fallback={<ContactFormFallback />}>
                  <ContactInquiry />
                </Suspense>
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
                          <a
                            href={`mailto:${contact.email}?subject=${encodeURIComponent(contact.subject)}`}
                            className="text-sm text-primary hover:underline flex items-center gap-2"
                          >
                            <Mail className="w-4 h-4" />
                            {contact.email}
                          </a>
                          <a
                            href={waLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-success hover:underline flex items-center gap-2"
                          >
                            <MessageSquare className="w-4 h-4" />
                            {contact.wa}
                          </a>
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
                      <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm py-2 px-4">
                        WhatsApp
                      </a>
                      {siteConfig.social.alibaba && (
                        <a href={siteConfig.social.alibaba} target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm py-2 px-4">
                          Alibaba
                        </a>
                      )}
                      {siteConfig.social.linkedin && (
                        <a href={siteConfig.social.linkedin} target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm py-2 px-4">
                          LinkedIn
                        </a>
                      )}
                      {siteConfig.social.youtube && (
                        <a href={siteConfig.social.youtube} target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm py-2 px-4">
                          YouTube
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-bg-light rounded-xl border border-border p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-dark mb-2">Factory Location</h3>
                    <p className="text-sm text-muted mb-4">{siteConfig.address}</p>
                    <a
                      href="https://www.google.com/maps/search/?api=1&query=Xi%27an%20High-Tech%20Zone%2C%20Shaanxi%2C%20China"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary text-sm py-2 px-4"
                    >
                      Open Google Maps
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
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
