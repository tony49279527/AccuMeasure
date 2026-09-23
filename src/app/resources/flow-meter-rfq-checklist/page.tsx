import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PrintChecklistButton } from "@/components/print-checklist-button";

export const metadata: Metadata = {
  title: "Flow Meter RFQ Checklist for Industrial Buyers | AccuMeasure",
  description:
    "Printable flow meter RFQ checklist: collect fluid, pipe, installation, signal, validation, quantity, and delivery requirements before comparing suppliers.",
  alternates: { canonical: "/resources/flow-meter-rfq-checklist" },
  openGraph: {
    url: "/resources/flow-meter-rfq-checklist",
    title: "Flow Meter RFQ Checklist for Industrial Buyers",
    description:
      "A practical checklist for preparing comparable electromagnetic, clamp-on ultrasonic, and thermal mass flow meter quotations.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Flow meter RFQ checklist" }],
  },
};

const sections = [
  {
    title: "1. Project and service",
    description: "Define what is being purchased and how the measurement will be used.",
    items: [
      "Company, project, plant, and installation country",
      "Contact name and role in technical or commercial approval",
      "Permanent installation, retrofit, temporary survey, skid, or OEM integration",
      "Quantity, required delivery date, quotation currency, and trade term",
    ],
  },
  {
    title: "2. Fluid and operating conditions",
    description: "Record minimum, normal, and maximum conditions where they change.",
    items: [
      "Fluid name and phase: liquid, gas, steam, or slurry",
      "Conductivity, solids, particle size, viscosity, and composition when known",
      "Corrosive, abrasive, sanitary, or material-compatibility requirements",
      "Minimum, normal, and maximum temperature, pressure, and flow rate",
    ],
  },
  {
    title: "3. Pipe and installation",
    description: "Installation details often decide whether a technology is suitable.",
    items: [
      "Nominal diameter, actual internal diameter, pipe material, wall thickness, and lining",
      "Flange standard, pressure rating, and face type for an inline meter",
      "Available upstream and downstream straight run, pipe orientation, and full-pipe condition",
      "Grounding, access, maintenance space, and whether the pipe can be shut down or cut",
      "Ambient temperature, weather, washdown, vibration, and hazardous-area classification",
    ],
  },
  {
    title: "4. Instrument and control-system interface",
    description: "State the required result and how it must reach the plant system.",
    items: [
      "Preferred technology or permission for the supplier to recommend one",
      "Accuracy, repeatability, turndown, flow direction, and empty-pipe requirements",
      "Output and communications: 4-20 mA, pulse, relay, RS485, Modbus, or another interface",
      "Supply voltage, local display, remote transmitter, enclosure, cable, and connector",
      "PLC, SCADA, data logger, or energy-management system receiving the measurement",
    ],
  },
  {
    title: "5. Documents and acceptance",
    description: "Ask each supplier to quote against the same evidence and acceptance package.",
    items: [
      "Current model datasheet, dimensional drawing, installation, wiring, and communication documents",
      "Calibration certificate, method, inspection report, and material information required by the project",
      "Declaration or hazardous-area documentation with the exact quoted model scope, when applicable",
      "Sample, commissioning, site test, inspection, and final acceptance requirements",
      "Required records, document language, revision control, and approval milestones",
    ],
  },
];

export default function FlowMeterRfqChecklistPage() {
  return (
    <div>
      <section className="pt-24 pb-12 bg-bg-light print:pt-4 print:pb-6">
        <div className="container-max">
          <Breadcrumbs
            items={[
              { name: "Resources", href: "/resources" },
              { name: "Flow Meter RFQ Checklist", href: "/resources/flow-meter-rfq-checklist" },
            ]}
          />
          <div className="max-w-4xl">
            <p className="text-sm font-semibold text-primary mb-3">Buyer planning tool</p>
            <h1 className="text-4xl font-bold text-dark mb-5">Flow Meter RFQ Checklist</h1>
            <p className="text-lg text-muted max-w-3xl mb-6">
              Collect the process, pipe, installation, signal, document, and commercial inputs below
              before comparing electromagnetic, clamp-on ultrasonic, or thermal mass flow meter quotations.
            </p>
            <div className="flex flex-wrap gap-3">
              <PrintChecklistButton />
              <Link href="/contact?document=Flow%20Meter%20RFQ%20Checklist" className="btn-primary print:hidden">
                Send requirements for review
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 print:py-4">
        <div className="container-max max-w-5xl">
          <div className="mb-10 border-l-4 border-accent bg-accent/5 p-5 print:border print:bg-white">
            <h2 className="font-semibold text-dark mb-2">Use one completed checklist per measurement point</h2>
            <p className="text-sm text-muted leading-6">
              Ask shortlisted suppliers to identify their proposed model, open technical questions,
              document revision, exclusions, and commercial assumptions in writing. Confirm the quoted
              configuration against current controlled documents before ordering.
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
            <h2 className="text-xl font-bold text-dark mb-3">First-pass technology screen</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <p className="text-sm text-muted">
                <strong className="block text-dark mb-1">Electromagnetic</strong>
                Start here for a suitable conductive liquid and full-pipe installation. Confirm
                conductivity, lining, electrodes, grounding, and inline installation requirements.
              </p>
              <p className="text-sm text-muted">
                <strong className="block text-dark mb-1">Clamp-on ultrasonic</strong>
                Consider external installation when avoiding pipe cutting matters. Confirm pipe material,
                dimensions, lining, wall condition, fluid, and acoustic path.
              </p>
              <p className="text-sm text-muted">
                <strong className="block text-dark mb-1">Thermal mass</strong>
                Evaluate for gas service after defining gas composition, pressure, temperature, range,
                installation, and calibration requirements.
              </p>
            </div>
          </section>

          <div className="mt-10 flex flex-wrap gap-3 print:hidden">
            <Link href="/products/flow" className="btn-secondary">Compare flow technologies</Link>
            <Link href="/contact?document=Flow%20Meter%20RFQ%20Checklist" className="btn-primary">
              Request application review
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
