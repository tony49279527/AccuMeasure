import type { Metadata } from "next";
import { CategoryPage, generateCategoryMetadata, type CategoryPageData } from "../category-page";
import { categoryPriceFrom } from "@/lib/facts";

const priceFrom = categoryPriceFrom("pressure");

const data: CategoryPageData = {
  slug: "pressure",
  label: "Pressure Sensors",
  title: "Industrial Pressure Sensor Manufacturer | AccuMeasure",
  description: `Compare pressure transmitters and digital gauges from $${priceFrom}. Review 10kPa-100MPa ranges, ±0.25% FS accuracy, ATEX options, MOQ, and lead time.`,
  h1: "Pressure Sensors for Industrial & Hazardous Applications",
  lead: "Piezoresistive pressure transmitters and battery-powered digital gauges. 0–10kPa to 0–100MPa. ±0.25% FS accuracy. ATEX explosion-proof. Built for high-vibration industrial duty.",
  overview: "AccuMeasure pressure sensors cover the full spectrum of industrial pressure measurement: ATEX-certified transmitters for hazardous areas, battery-powered digital gauges as drop-in replacements for mechanical gauges, and high-accuracy piezoresistive sensors for hydraulic and process control applications. Every unit undergoes 72-hour temperature cycling with a calibration certificate.",
  lastReviewed: "2026-08-05",
  decisionTable: {
    title: "Which Pressure Instrument Should I Buy?",
    description: "Match the published AM-PT300 and AM-PG200 capabilities to signal, display, power, certification, and OEM requirements.",
    rows: [
      {
        buyerNeed: "Process signal to PLC, DCS, or SCADA with ATEX coverage",
        firstChoice: "AM-PT300 pressure transmitter",
        secondChoice: "AM-PG200 digital pressure gauge",
        guidance: "AM-PT300 supports 4-20mA and RS485 Modbus with ATEX Ex d IIC T6; AM-PG200 is not the hazardous-area transmitter path.",
      },
      {
        buyerNeed: "Local digital readout, battery power, or private-label gauge",
        firstChoice: "AM-PG200 smart digital pressure gauge",
        secondChoice: "AM-PT300 if a remote signal is also required",
        guidance: "AM-PG200 has a 4-digit LCD, 2-year battery life, and an OEM branding path with a 100-unit MOQ.",
      },
      {
        buyerNeed: "High-vibration hydraulic or heavy machinery duty",
        firstChoice: "AM-PT300 pressure transmitter",
        secondChoice: "AM-PG200 for local panel indication",
        guidance: "AM-PT300 is marketed for high-vibration industrial duty; send your vibration profile with the RFQ for confirmation.",
      },
      {
        buyerNeed: "Battery-powered field gauge without wiring",
        firstChoice: "AM-PG200 digital pressure gauge",
        secondChoice: "AM-PT300 pressure transmitter",
        guidance: "AM-PG200 runs on 2x AA batteries, while AM-PT300 requires 12-36V DC power.",
      },
    ],
  },
  decisionBlocks: [
    {
      title: "ATEX and ex-certified pressure selection",
      body: "AM-PT300 carries ATEX Ex d IIC T6 and IP65 protection. AM-PG200 is published with ISO 9001 and CE but not ATEX. If an RFQ says “ex certified pressure gauge,” confirm whether a transmitter output, digital display, or both are required, and send the area classification.",
      links: [
        { label: "AM-PT300 pressure transmitter", href: "/products/am-pt300-pressure-transmitter" },
        { label: "Certificates & verification", href: "/certificates" },
      ],
    },
    {
      title: "OEM and private-label pressure gauges",
      body: "AM-PG200 supports OEM branding from a published MOQ of 100 units with no tooling fee for logo and packaging. Full ODM with new enclosure or PCB starts at 500 units. Confirm artwork, packaging, ranges, and display units before production.",
      links: [
        { label: "AM-PG200 digital pressure gauge", href: "/products/am-pg200-digital-pressure-gauge" },
        { label: "OEM/ODM customization", href: "/customization" },
      ],
    },
  ],
  relatedGuides: [
    {
      title: "Pressure Transmitters for OEM Equipment",
      description: "Define range, connection, output, housing, branding, documentation, and annual volume for OEM projects.",
      href: "/applications/pressure-transmitter-for-oem-equipment",
    },
    {
      title: "Pressure Transmitter Selection Guide",
      description: "Review pressure type, range, overload, wetted material, process connection, signal, and environment.",
      href: "/blog/pressure-transmitter-selection-guide",
    },
  ],
  selectionGuide: [
    {
      title: "Set the pressure range",
      description:
        "Choose a range with enough overload margin for pump starts, hydraulic spikes, and process surges; avoid running the transmitter at its limit.",
    },
    {
      title: "Confirm process connection",
      description:
        "Specify G1/4, G1/2, NPT, M20, flange, diaphragm seal, or sanitary connection, plus wetted material compatibility with the medium.",
    },
    {
      title: "Check environment and certification",
      description:
        "For hazardous areas or outdoor sites, confirm ATEX Ex d IIC T6, IP rating, vibration resistance, cable entry, and calibration certificate needs.",
    },
  ],
  faqs: [
    {
      question: "Is the AM-PG200 digital pressure gauge ATEX certified?",
      answer: "No. AM-PG200 is published with ISO 9001 and CE only. For hazardous-area pressure measurement, use AM-PT300 with ATEX Ex d IIC T6 and confirm the exact area classification before ordering.",
    },
    {
      question: "What is the OEM MOQ for pressure instruments?",
      answer: "OEM logo and packaging start at 100 units with no tooling fee. Full ODM such as a new enclosure or PCB typically starts at 500 units.",
    },
    {
      question: "Which AccuMeasure pressure instrument is better for hydraulic systems?",
      answer: "AM-PT300 is the high-vibration industrial transmitter option. Send your pressure range, process connection, output signal, and vibration profile so our engineers can confirm the configuration.",
    },
  ],
};

export const metadata: Metadata = generateCategoryMetadata(data);

export default function PressureSensorsPage() {
  return <CategoryPage data={data} />;
}
