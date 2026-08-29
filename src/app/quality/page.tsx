import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ClipboardCheck, FileText, Gauge, ShieldCheck } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { DocumentRequestLink } from "@/components/document-request-link";

export const metadata: Metadata = {
  title: "Quality & Project Documentation Review | AccuMeasure",
  description:
    "Prepare a project-specific quality and documentation review for an AccuMeasure measurement-instrument RFQ.",
  alternates: { canonical: "/quality" },
  openGraph: {
    url: "/quality",
    title: "Quality & Project Documentation Review | AccuMeasure",
    description:
      "Define the selected configuration, required records, acceptance criteria, and controlled document package before project release.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "AccuMeasure quality document review" }],
  },
};

const reviewSteps = [
  {
    icon: Gauge,
    title: "Confirm the configuration",
    body: "Document the selected model, process conditions, materials, interfaces, environmental limits, and destination-market requirements.",
  },
  {
    icon: FileText,
    title: "Set the evidence package",
    body: "List the current datasheet, drawings, certificates or declarations, inspection records, and calibration or test evidence the project requires.",
  },
  {
    icon: ClipboardCheck,
    title: "Define acceptance",
    body: "Agree measurement checks, document revision, reviewer, sampling or inspection plan, nonconformance handling, and release criteria in writing.",
  },
  {
    icon: ShieldCheck,
    title: "Close the RFQ record",
    body: "Confirm configuration, quantity, packing, delivery, warranty, payment, and change-control terms for the approved project.",
  },
];

export default function QualityPage() {
  return (
    <div>
      <section className="pt-24 pb-16 bg-bg-light">
        <div className="container-max">
          <Breadcrumbs items={[{ name: "Quality & Documentation", href: "/quality" }]} />
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-primary mb-3">Project-specific qualification</p>
            <h1 className="text-4xl font-bold text-dark mb-6">Quality &amp; Project Documentation Review</h1>
            <p className="text-lg text-muted">
              Build the quality and evidence requirements into the RFQ. Published product information helps begin the discussion; the selected configuration and required records must be confirmed for the project.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-max">
          <h2 className="text-3xl font-bold text-dark mb-10">A practical project review</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviewSteps.map((step) => (
              <div key={step.title} className="card">
                <step.icon className="w-7 h-7 text-primary mb-4" />
                <h3 className="text-lg font-semibold text-dark mb-3">{step.title}</h3>
                <p className="text-sm text-muted">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-bg-light">
        <div className="container-max grid lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold text-dark mb-4">Information to include in the RFQ</h2>
            <ul className="space-y-3 text-muted">
              <li>Measurement medium, range, process conditions, tank or pipe details, and installation constraints.</li>
              <li>Required performance, interfaces, materials, enclosure, destination market, and compliance scope.</li>
              <li>Required controlled documents, records, reviewers, inspection points, and acceptance criteria.</li>
              <li>Configuration, quantity, packaging, delivery, warranty, payment, and change-control terms.</li>
            </ul>
          </div>
          <div className="bg-white border border-border rounded-lg p-6">
            <h2 className="text-2xl font-bold text-dark mb-4">Evidence boundary</h2>
            <p className="text-muted mb-4">
              Certificates, test records, calibration evidence, customer information, and internal quality files are not public proof by default. Request the current, applicable controlled record for the exact project.
            </p>
            <Link href="/certificates" className="inline-flex items-center gap-2 text-primary font-medium">
              Review documentation requirements <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-primary text-white">
        <div className="container-max text-center max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">Prepare your RFQ document package</h2>
          <p className="text-white/80 mb-8">Tell us the selected model or measurement duty and the records your project needs reviewed.</p>
          <DocumentRequestLink
            href="/contact?document=Quality%20Document%20Review"
            documentName="Quality Document Review"
            source="quality"
            className="btn-primary"
          >
            Request project review <ArrowRight className="w-4 h-4" />
          </DocumentRequestLink>
        </div>
      </section>
    </div>
  );
}
