import type { Metadata } from "next";
import { ArrowRight, ClipboardCheck, FileCheck, Shield } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { DocumentRequestLink } from "@/components/document-request-link";

export const metadata: Metadata = {
  title: "Documentation & Compliance Review | AccuMeasure",
  description:
    "Request current model-specific technical documentation and verify certificate scope, issuer, applicability, and validity for an AccuMeasure project.",
  alternates: { canonical: "/certificates" },
  openGraph: {
    url: "/certificates",
    title: "Documentation & Compliance Review | AccuMeasure",
    description:
      "Use a controlled document review to confirm the selected model, certificate scope, issuer, applicability, and current revision before approval.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "AccuMeasure document review" }],
  },
};

const requestTypes = [
  {
    icon: FileCheck,
    title: "Model documentation",
    body: "Request the current datasheet, drawing, wiring information, and configuration record for the selected model.",
  },
  {
    icon: Shield,
    title: "Compliance scope",
    body: "For a required standard, request the current certificate or declaration and verify its holder, issuer, model scope, marking, and validity.",
  },
  {
    icon: ClipboardCheck,
    title: "Project records",
    body: "State the inspection, calibration, traceability, packing, delivery, and acceptance records required by the project.",
  },
];

export default function CertificatesPage() {
  return (
    <div>
      <section className="pt-24 pb-16 bg-bg-light">
        <div className="container-max">
          <Breadcrumbs items={[{ name: "Documentation & Compliance", href: "/certificates" }]} />
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-primary mb-3">Controlled document review</p>
            <h1 className="text-4xl font-bold text-dark mb-6">Documentation &amp; Compliance Review</h1>
            <p className="text-lg text-muted">
              Public category labels are not a substitute for project evidence. Request the current document package for the selected configuration and verify its exact scope before approval.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-max">
          <div className="grid md:grid-cols-3 gap-6">
            {requestTypes.map((item) => (
              <div key={item.title} className="card">
                <item.icon className="w-7 h-7 text-primary mb-4" />
                <h2 className="text-lg font-semibold text-dark mb-3">{item.title}</h2>
                <p className="text-sm text-muted">{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-bg-light">
        <div className="container-max max-w-4xl">
          <h2 className="text-2xl font-bold text-dark mb-8">What to verify before a project release</h2>
          <div className="space-y-4">
            {[
              ["Match the document to the configuration", "The product model, options, marking, market, and conditions must match the specific item under review."],
              ["Check the evidence chain", "Record the document holder, issuing organization, document number, issue or expiry date, and the official verification route where applicable."],
              ["Confirm the controlled revision", "Use the current revision supplied for the RFQ rather than an old scan, brochure, cached page, or unrelated model document."],
              ["Keep approval conditions in writing", "Capture required inspections, calibration or test records, acceptance criteria, packaging, delivery, and commercial terms in the project documentation."],
            ].map(([title, body]) => (
              <div key={title} className="bg-white border border-border rounded-lg p-5">
                <h3 className="font-semibold text-dark mb-2">{title}</h3>
                <p className="text-sm text-muted">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-max text-center max-w-2xl">
          <h2 className="text-2xl font-bold text-dark mb-4">Request a document review</h2>
          <p className="text-muted mb-8">
            Include the selected model, destination market, required standard, application, and the documents your project needs.
          </p>
          <DocumentRequestLink
            href="/contact?document=Project%20Document%20Review"
            documentName="Project Document Review"
            source="certificates"
            className="btn-primary"
          >
            Start a document request <ArrowRight className="w-4 h-4" />
          </DocumentRequestLink>
        </div>
      </section>
    </div>
  );
}
