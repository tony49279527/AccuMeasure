import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";

const buyerWorkflows = [
  {
    title: "Application review",
    description:
      "Start with the medium, process limits, installation, signal, documentation, quantity, and destination rather than selecting from a model name alone.",
  },
  {
    title: "Configuration confirmation",
    description:
      "Record the exact range, materials, connection, output, enclosure, accessories, labeling, and project options in the quotation and approved datasheet.",
  },
  {
    title: "Document check",
    description:
      "Match current inspection, calibration, and compliance documents to the quoted model and project scope before approval.",
  },
  {
    title: "Commercial handoff",
    description:
      "Confirm sample or production quantity, acceptance criteria, packing, delivery, warranty, and after-sales ownership in writing.",
  },
];

const verificationAreas = [
  {
    title: "Company and contact",
    description:
      "Verify the contracting entity, sales contact, quotation details, payment beneficiary, and communication channel before placing an order.",
    href: "/contact",
    linkLabel: "Contact AccuMeasure",
  },
  {
    title: "Product scope",
    description:
      "Confirm the exact model, measuring principle, range, materials, process connection, output, and environmental limits for the application.",
    href: "/products",
    linkLabel: "Review product families",
  },
  {
    title: "Compliance scope",
    description:
      "Check the holder, issuer, standard, model applicability, marking, validity, and permitted use of each required document.",
    href: "/certificates",
    linkLabel: "Review documentation status",
  },
  {
    title: "Quality records",
    description:
      "Request the inspection, calibration, test, traceability, and acceptance records required by the project instead of relying on a general quality claim.",
    href: "/quality",
    linkLabel: "Review quality workflow",
  },
  {
    title: "Controlled documents",
    description:
      "Use the current revision of datasheets, manuals, drawings, certificates, and project documents. Do not rely on an old attachment or page summary.",
    href: "/resources",
    linkLabel: "Request current documents",
  },
  {
    title: "OEM change control",
    description:
      "For private-label work, approve samples, artwork, packaging, serialization, inspection criteria, and change control before production.",
    href: "/customization",
    linkLabel: "Prepare an OEM brief",
  },
];

export const metadata: Metadata = {
  title: "About AccuMeasure | Industrial Measurement Supplier",
  description:
    "Learn how AccuMeasure handles application review, model confirmation, project documents, OEM requirements, and industrial instrument RFQs.",
  alternates: { canonical: "/about" },
  openGraph: {
    url: "/about",
    title: "About AccuMeasure | Industrial Measurement Supplier",
    description:
      "A verification-first overview of AccuMeasure application review, configuration, documents, and commercial handoff.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "AccuMeasure Instruments" }],
  },
};

export default function AboutPage() {
  return (
    <div>
      <section className="pt-24 pb-16 bg-bg-light">
        <div className="container-max">
          <Breadcrumbs items={[{ name: "About Us", href: "/about" }]} />
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-start">
            <div className="max-w-3xl">
              <p className="text-sm font-medium text-primary mb-3">AccuMeasure Instruments Co., Ltd.</p>
              <h1 className="text-4xl font-bold text-dark mb-6">
                Industrial measurement support built around project inputs
              </h1>
              <p className="text-lg text-muted leading-8">
                AccuMeasure supplies level, flow, and pressure instrument options for
                industrial buyers. The useful starting point is a complete application
                brief and a model-specific document review, not an unsupported company
                statistic or a generic certificate claim.
              </p>
            </div>
            <aside className="bg-white border border-border rounded-xl p-8">
              <h2 className="text-xl font-bold text-dark mb-3">Prepare a useful first inquiry</h2>
              <p className="text-sm text-muted leading-6 mb-6">
                Include the medium, range, process conditions, installation, signal,
                required documents, quantity, destination, and target date.
              </p>
              <div className="flex flex-col gap-3">
                <Link href="/applications" className="btn-secondary justify-center">
                  Review application inputs
                </Link>
                <Link href="/contact" className="btn-primary justify-center">
                  Send project requirements
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-max">
          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl font-bold text-dark mb-4">How an inquiry moves to a quotation</h2>
            <p className="text-muted leading-7">
              Each step should leave a reviewable record. Availability, specifications,
              documents, and commercial terms remain subject to the exact quoted model
              and written project scope.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {buyerWorkflows.map((item, index) => (
              <article key={item.title} className="card">
                <div className="text-sm font-medium text-primary mb-3">Step {index + 1}</div>
                <h3 className="text-xl font-semibold text-dark mb-3">{item.title}</h3>
                <p className="text-sm text-muted leading-6">{item.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-bg-light">
        <div className="container-max">
          <div className="max-w-3xl mb-10">
            <h2 className="text-3xl font-bold text-dark mb-4">What buyers should verify</h2>
            <p className="text-muted leading-7">
              These checks are more useful than relying on employee counts, market
              totals, generic factory claims, or a certificate name without scope.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {verificationAreas.map((area) => (
              <article key={area.title} className="bg-white border border-border rounded-xl p-6">
                <div className="flex items-start gap-3 mb-3">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <h3 className="text-lg font-semibold text-dark">{area.title}</h3>
                </div>
                <p className="text-sm text-muted leading-6 mb-5">{area.description}</p>
                <Link href={area.href} className="inline-flex items-center gap-2 text-primary text-sm font-medium">
                  {area.linkLabel} <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-max grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2 className="text-3xl font-bold text-dark mb-4">Evidence and publication policy</h2>
            <p className="text-muted leading-7 mb-6">
              Company scale, employee identities, customer names, project outcomes,
              certifications, test results, shipment records, and performance figures
              should be published only when their source, scope, date, redaction, and
              channel approval are recorded.
            </p>
            <p className="text-muted leading-7">
              Until that review is complete, this site uses bounded process language and
              asks buyers to confirm the current model and document set in the quotation.
            </p>
          </div>
          <div className="border-l-4 border-primary pl-6 py-2">
            <h2 className="text-xl font-bold text-dark mb-3">Need due-diligence documents?</h2>
            <p className="text-sm text-muted leading-6 mb-6">
              Name the model, destination market, intended use, and required document.
              The team can confirm what is currently available and applicable.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/certificates" className="btn-secondary">
                Documentation status
              </Link>
              <Link href="/resources" className="btn-secondary">
                Document requests
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
