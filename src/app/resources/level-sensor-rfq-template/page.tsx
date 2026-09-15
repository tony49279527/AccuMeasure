import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { PrintChecklistButton } from "@/components/print-checklist-button";

export const metadata: Metadata = {
  title: "Level Sensor RFQ Template for Tanks & Silos | AccuMeasure",
  description:
    "Use this printable level sensor RFQ template to collect medium, vessel, range, mounting, process, output, documentation, quantity, and delivery requirements.",
  alternates: { canonical: "/resources/level-sensor-rfq-template" },
  openGraph: {
    url: "/resources/level-sensor-rfq-template",
    title: "Level Sensor RFQ Template for Tanks & Silos",
    description:
      "Prepare comparable radar, ultrasonic, capacitive, and connected level sensor quotations with a complete project brief.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "Level sensor RFQ template" }],
  },
};

const sections = [
  {
    title: "1. Project and purchasing scope",
    description: "Identify the installation and the commercial scope that suppliers must quote.",
    items: [
      "Company, project, plant, contact, role, and installation country",
      "Application and measurement purpose",
      "New installation, replacement, retrofit, or temporary measurement",
      "Sample quantity, first-order quantity, annual demand, and required delivery date",
    ],
  },
  {
    title: "2. Medium and vessel",
    description: "Describe what is measured and the geometry around the measurement path.",
    items: [
      "Medium name and type: liquid, slurry, powder, or granular solid",
      "Density, bulk density, conductivity, viscosity, foam, vapor, dust, or condensation when relevant",
      "Tank, silo, open channel, or other vessel; vessel height and required measuring range",
      "Minimum and maximum level, nozzle size, mounting position, and available clearance",
      "Internal obstructions, ladders, coils, agitators, filling streams, or moving equipment",
    ],
  },
  {
    title: "3. Process and site conditions",
    description: "Record normal and worst-case conditions that can affect the sensing technology.",
    items: [
      "Minimum, normal, and maximum process temperature",
      "Minimum, normal, and maximum pressure, vacuum, or pressure cycling",
      "Corrosive, abrasive, sanitary, outdoor, washdown, vibration, or submersion conditions",
      "Hazardous-area classification, protection concept, and gas or dust group when applicable",
    ],
  },
  {
    title: "4. Instrument and system interface",
    description: "Define the required result and how the device connects to the process and control system.",
    items: [
      "Preferred technology: radar, ultrasonic, capacitive, connected, or open to recommendation",
      "Accuracy, repeatability, response, dead zone, and blanking-distance requirements",
      "Output and communications: 4-20 mA, HART, RS485, Modbus, relay, or another interface",
      "Supply voltage, local display, remote adjustment, enclosure, ingress protection, cable, and connector",
      "Process connection, wetted material, mounting adapter, and required manual language",
    ],
  },
  {
    title: "5. Documents and acceptance",
    description: "Use the same evidence request and acceptance criteria for every shortlisted supplier.",
    items: [
      "Current model datasheet, dimensional drawing, wiring diagram, and installation manual",
      "Calibration certificate, inspection report, test record, and serial-number traceability when required",
      "Declaration or hazardous-area documentation with the exact quoted model scope when applicable",
      "Sample inspection, factory acceptance test, site test, commissioning, and customer acceptance criteria",
      "Required records, document language, revision control, and approval milestones",
    ],
  },
];

export default function LevelSensorRfqTemplatePage() {
  return (
    <div>
      <section className="pt-24 pb-12 bg-bg-light print:pt-4 print:pb-6">
        <div className="container-max">
          <Breadcrumbs
            items={[
              { name: "Resources", href: "/resources" },
              { name: "Level Sensor RFQ Template", href: "/resources/level-sensor-rfq-template" },
            ]}
          />
          <div className="max-w-4xl">
            <p className="text-sm font-semibold text-primary mb-3">Buyer planning tool</p>
            <h1 className="text-4xl font-bold text-dark mb-5">Level Sensor RFQ Template</h1>
            <p className="text-lg text-muted max-w-3xl mb-6">
              Prepare a complete tank or silo measurement brief before comparing radar, ultrasonic,
              capacitive, or connected level sensor quotations.
            </p>
            <div className="flex flex-wrap gap-3">
              <PrintChecklistButton />
              <Link href="/contact?document=Level%20Sensor%20RFQ%20Template" className="btn-primary print:hidden">
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
            <h2 className="font-semibold text-dark mb-2">Attach the installation evidence you already have</h2>
            <p className="text-sm text-muted leading-6">
              A vessel drawing, nozzle photo, process datasheet, existing instrument record, or
              control-system interface description can reduce selection assumptions. Ask the supplier
              to return the proposed model, open questions, exclusions, and document revision in writing.
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
                <strong className="block text-dark mb-1">Radar</strong>
                Evaluate when vapor, dust, foam, pressure, temperature, range, or narrow beam geometry
                makes the application difficult. Confirm mounting and the exact quoted document scope.
              </p>
              <p className="text-sm text-muted">
                <strong className="block text-dark mb-1">Ultrasonic</strong>
                Consider for suitable non-contact applications after checking vapor, foam, condensation,
                temperature, pressure, range, blanking distance, and mounting conditions.
              </p>
              <p className="text-sm text-muted">
                <strong className="block text-dark mb-1">Capacitive</strong>
                Consider contact measurement after confirming medium properties, buildup, vessel material,
                probe arrangement, process connection, and wetted-material compatibility.
              </p>
            </div>
          </section>

          <p className="mt-6 text-sm text-muted">
            These are screening questions. Confirm final model, configuration, performance, certification
            scope, availability, and commercial terms in the current controlled documents and quotation.
          </p>

          <div className="mt-10 flex flex-wrap gap-3 print:hidden">
            <Link href="/products/level" className="btn-secondary">Compare level technologies</Link>
            <Link href="/contact?document=Level%20Sensor%20RFQ%20Template" className="btn-primary">
              Request application review
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
