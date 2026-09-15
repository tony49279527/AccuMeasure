import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PrintChecklistButton } from "@/components/print-checklist-button";

export const metadata: Metadata = {
  title: "Industrial Instrument Supplier Evaluation Sheet | AccuMeasure",
  description:
    "Use this printable sheet to compare industrial instrument suppliers by identity, product fit, evidence, quality, supply readiness, and verification.",
  alternates: { canonical: "/resources/instrument-supplier-evaluation-sheet" },
  openGraph: {
    url: "/resources/instrument-supplier-evaluation-sheet",
    title: "Industrial Instrument Supplier Evaluation Sheet",
    description:
      "A neutral due-diligence worksheet for buyers comparing level, flow, pressure, and OEM measurement instrument suppliers.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Industrial instrument supplier evaluation sheet" }],
  },
};

const sections = [
  {
    title: "1. Company and manufacturing identity",
    description: "Confirm who is selling, where the relevant work is performed, and who owns the response.",
    items: [
      "Legal company name, registered address, manufacturing address, and registration document",
      "Manufacturer, distributor, or both; stated manufacturing scope",
      "Responsible sales and technical contacts",
      "RFI inbox owner, backup owner, response target, escalation path, and inquiry record",
    ],
  },
  {
    title: "2. Product fit",
    description: "Tie the proposed solution to one exact model and one documented application.",
    items: [
      "Product family, exact model, and measurement principle",
      "Published operating range, process limits, environmental limits, and known exclusions",
      "Materials, process connections, output, power, communication, and enclosure",
      "Current datasheet revision and open questions requiring engineering confirmation",
    ],
  },
  {
    title: "3. Evidence and quality",
    description: "Record what was received and independently checked instead of treating a marketing claim as proof.",
    items: [
      "Certificate name, number, issuer, issuer verification path, exact model or factory scope",
      "Issue date, expiry date, calibration method, and certificate format",
      "Serial-number traceability, incoming, in-process, and final inspection records",
      "Sample test or factory acceptance procedure, nonconformance, and corrective-action process",
      "Warranty terms, service route, and technical support owner",
    ],
  },
  {
    title: "4. Commercial and supply readiness",
    description: "Make commercial assumptions visible before comparing quotations or approving a sample.",
    items: [
      "Sample price and quantity, MOQ, volume tiers, standard lead time, and custom lead time",
      "Production capacity evidence when required by the project",
      "Packaging, export documents, Incoterm, payment terms, and destination restrictions",
      "Spare-parts, replacement, warranty, change-notification, and revision-control plan",
    ],
  },
  {
    title: "5. Buyer verification record",
    description: "Capture the decision trail so an approved supplier record can be revisited later.",
    items: [
      "Documents received and documents independently verified",
      "Open technical, compliance, commercial, and delivery questions",
      "Approved claims and claims not approved for publication",
      "Technical reviewer, procurement reviewer, review date, and evidence owner",
      "Final decision: approved, conditional, rejected, or more evidence required",
    ],
  },
];

export default function InstrumentSupplierEvaluationPage() {
  return (
    <div>
      <section className="pt-24 pb-12 bg-bg-light print:pt-4 print:pb-6">
        <div className="container-max">
          <Breadcrumbs
            items={[
              { name: "Resources", href: "/resources" },
              {
                name: "Supplier Evaluation Sheet",
                href: "/resources/instrument-supplier-evaluation-sheet",
              },
            ]}
          />
          <div className="max-w-4xl">
            <p className="text-sm font-semibold text-primary mb-3">Buyer due-diligence tool</p>
            <h1 className="text-4xl font-bold text-dark mb-5">Industrial Instrument Supplier Evaluation Sheet</h1>
            <p className="text-lg text-muted max-w-3xl mb-6">
              Compare level sensor, flow meter, pressure instrument, and OEM suppliers using records
              that can be checked by engineering and procurement teams.
            </p>
            <div className="flex flex-wrap gap-3">
              <PrintChecklistButton />
              <Link
                href="/contact?document=Industrial%20Instrument%20Supplier%20Evaluation%20Sheet"
                className="btn-primary print:hidden"
              >
                Request a supplier review
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 print:py-4">
        <div className="container-max max-w-5xl">
          <div className="mb-10 border-l-4 border-accent bg-accent/5 p-5 print:border print:bg-white">
            <h2 className="font-semibold text-dark mb-2">A completed row is a review record, not an endorsement</h2>
            <p className="text-sm text-muted leading-6">
              Ask the supplier to identify the exact model, document revision, scope, open questions,
              exclusions, and commercial assumptions. Keep certificates, customer records, internal QC
              files, and other protected evidence private unless the owner approves a controlled release.
            </p>
          </div>

          <div className="space-y-10">
            {sections.map((section) => (
              <section key={section.title} className="break-inside-avoid border-b border-border pb-8">
                <h2 className="text-2xl font-bold text-dark mb-2">{section.title}</h2>
                <p className="text-muted mb-5">{section.description}</p>
                <ul className="space-y-4">
                  {section.items.map((item) => (
                    <li key={item} className="grid grid-cols-[20px_1fr] gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 print:text-black" aria-hidden="true" />
                      <div>
                        <p className="text-sm font-medium text-dark">{item}</p>
                        <div className="mt-3 h-7 border-b border-dashed border-border" aria-hidden="true" />
                      </div>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          <section className="mt-10 bg-bg-light p-6 print:border print:bg-white">
            <h2 className="text-xl font-bold text-dark mb-3">Suggested review sequence</h2>
            <ol className="grid gap-4 md:grid-cols-3 text-sm text-muted">
              <li><strong className="block text-dark mb-1">1. Scope</strong>Confirm the application, model, installation, and buyer acceptance criteria.</li>
              <li><strong className="block text-dark mb-1">2. Evidence</strong>Match each important claim to an issuer, revision, exact scope, date, and verification path.</li>
              <li><strong className="block text-dark mb-1">3. Release</strong>Record open questions and approval owners before sample, quotation, or production decisions.</li>
            </ol>
          </section>

          <p className="mt-6 text-sm text-muted">
            This worksheet helps buyers compare suppliers. It does not certify a company, guarantee
            performance, or replace an engineering, legal, compliance, or procurement review.
          </p>

          <div className="mt-10 flex flex-wrap gap-3 print:hidden">
            <Link href="/products" className="btn-secondary">Browse measurement products</Link>
            <Link href="/quality" className="btn-secondary">Review quality questions</Link>
            <Link
              href="/contact?document=Industrial%20Instrument%20Supplier%20Evaluation%20Sheet"
              className="btn-primary"
            >
              Start a supplier review
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
