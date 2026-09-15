import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PrintChecklistButton } from "@/components/print-checklist-button";

export const metadata: Metadata = {
  title: "OEM Pressure Instrument Qualification Sheet | AccuMeasure",
  description:
    "Use this printable OEM pressure instrument qualification sheet to define pressure, process, interface, branding, documentation, sample, and production requirements.",
  alternates: { canonical: "/resources/oem-pressure-instrument-qualification-sheet" },
  openGraph: {
    url: "/resources/oem-pressure-instrument-qualification-sheet",
    title: "OEM Pressure Instrument Qualification Sheet",
    description:
      "Prepare a controlled qualification brief for pressure transmitters and digital gauges used in OEM equipment.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "OEM pressure instrument qualification sheet" }],
  },
};

const sections = [
  {
    title: "1. OEM program",
    description: "Define the equipment program, people, volumes, schedule, and confidentiality boundary.",
    items: [
      "OEM or integrator, equipment name, application, and installation country",
      "Engineering contact and commercial approval owner",
      "Sample quantity, first production quantity, and estimated annual quantity",
      "Target sample, approval, and production dates",
      "Whether an NDA is required before drawings, customer data, or artwork are exchanged",
    ],
  },
  {
    title: "2. Pressure and process",
    description: "Record normal conditions and the transients that the instrument must survive.",
    items: [
      "Pressure type and required measuring range",
      "Minimum, normal, and maximum operating pressure",
      "Overload, pressure spikes, pulsation, vacuum exposure, and pressure cycling",
      "Medium, process temperature, ambient temperature, and material compatibility",
      "Process connection, thread or flange standard, wetted materials, and seals",
      "Measured vibration and shock profile with mounting details",
    ],
  },
  {
    title: "3. Electrical and mechanical integration",
    description: "Define the interface and physical envelope before a sample is selected.",
    items: [
      "Accuracy, repeatability, response, and calibration-point requirements",
      "Output signal, communications, supply voltage, and electrical connector",
      "Cable, display, units, language, firmware, protocol, or calibration interface",
      "Enclosure, ingress protection, mounting envelope, clearance, and port orientation",
      "PLC, controller, panel, display, or machine system receiving the result",
    ],
  },
  {
    title: "4. OEM documents and branding",
    description: "Separate standard-product documentation from private-label program requirements.",
    items: [
      "Nameplate, label, private-label artwork, product code, and revision control",
      "Packaging, carton markings, barcode, serial number, and manual language",
      "Current datasheet, dimensional drawing, wiring information, and installation instructions",
      "Calibration certificate per unit or batch, inspection plan, and acceptance record",
      "Required compliance documents with the exact quoted model scope",
      "Change-notification process, warranty route, service contact, and ownership of approved files",
    ],
  },
  {
    title: "5. Qualification and production release",
    description: "Agree how samples are tested and what evidence releases the program to production.",
    items: [
      "Sample test method and required report format",
      "Environmental, vibration, shock, pressure-cycle, and electrical interface tests",
      "Calibration points, tolerance, repeatability, and failure criteria",
      "Acceptance owner, corrective-action route, and retest rules",
      "Approval date, golden sample or reference unit, and production release gate",
    ],
  },
];

export default function OemPressureQualificationPage() {
  return (
    <div>
      <section className="pt-24 pb-12 bg-bg-light print:pt-4 print:pb-6">
        <div className="container-max">
          <Breadcrumbs
            items={[
              { name: "Resources", href: "/resources" },
              {
                name: "OEM Pressure Qualification Sheet",
                href: "/resources/oem-pressure-instrument-qualification-sheet",
              },
            ]}
          />
          <div className="max-w-4xl">
            <p className="text-sm font-semibold text-primary mb-3">OEM qualification tool</p>
            <h1 className="text-4xl font-bold text-dark mb-5">OEM Pressure Instrument Qualification Sheet</h1>
            <p className="text-lg text-muted max-w-3xl mb-6">
              Prepare a controlled engineering and purchasing brief for a pressure transmitter or
              digital gauge used in OEM equipment, private-label programs, or system integration.
            </p>
            <div className="flex flex-wrap gap-3">
              <PrintChecklistButton />
              <Link
                href="/contact?document=OEM%20Pressure%20Instrument%20Qualification%20Sheet"
                className="btn-primary print:hidden"
              >
                Send non-confidential requirements
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 print:py-4">
        <div className="container-max max-w-5xl">
          <div className="mb-10 border-l-4 border-accent bg-accent/5 p-5 print:border print:bg-white">
            <h2 className="font-semibold text-dark mb-2">Protect drawings, customer data, and artwork</h2>
            <p className="text-sm text-muted leading-6">
              Send only non-confidential requirements during initial screening. Exchange protected files
              after the parties agree in writing on confidentiality, permitted use, ownership, access,
              retention, and deletion. Keep technical qualification separate from branding approval.
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
            <h2 className="text-xl font-bold text-dark mb-3">Choose the initial instrument path</h2>
            <div className="grid gap-5 md:grid-cols-2">
              <p className="text-sm text-muted">
                <strong className="block text-dark mb-1">Pressure transmitter</strong>
                Start here when the machine or control system needs a continuous electrical signal.
                Confirm pressure type, range, surge conditions, interface, connector, mounting, environment,
                and current model documents.
              </p>
              <p className="text-sm text-muted">
                <strong className="block text-dark mb-1">Digital pressure gauge</strong>
                Start here when local indication, battery operation, panel use, or private labeling is central.
                Confirm the current display, power, range, enclosure, branding feasibility, validation, and terms.
              </p>
            </div>
          </section>

          <p className="mt-6 text-sm text-muted">
            Final model, performance, environmental limits, compliance scope, customization, tooling, MOQ,
            schedule, warranty, and commercial terms must be confirmed in the current controlled documents
            and written quotation.
          </p>

          <div className="mt-10 flex flex-wrap gap-3 print:hidden">
            <Link href="/products/pressure" className="btn-secondary">Compare pressure instruments</Link>
            <Link href="/customization" className="btn-secondary">Review OEM process</Link>
            <Link
              href="/contact?document=OEM%20Pressure%20Instrument%20Qualification%20Sheet"
              className="btn-primary"
            >
              Request qualification review
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
