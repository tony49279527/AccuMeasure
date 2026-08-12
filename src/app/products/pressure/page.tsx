import type { Metadata } from "next";
import { CategoryPage, generateCategoryMetadata, type CategoryPageData } from "../category-page";

const data: CategoryPageData = {
  slug: "pressure",
  label: "Pressure Sensors",
  title: "Industrial Pressure Sensor Manufacturer | AccuMeasure",
  description: "Compare pressure transmitters and digital gauges by pressure type, range, connection, output, environment, display, and documentation requirements.",
  h1: "Pressure Sensors for Industrial & Hazardous Applications",
  lead: "Review transmitter and digital-gauge paths for process control, local indication, hydraulic equipment, and OEM integration. Confirm current performance, environmental limits, and document scope for the selected configuration.",
  overview: "Start with pressure type, normal and surge range, wetted materials, process connection, signal or display, power, enclosure, and area classification. Published model data is a selection aid; the controlled datasheet, certificate scope, test documents, warranty, and commercial terms must be confirmed for each RFQ.",
  lastReviewed: "2026-08-12",
  decisionTable: {
    title: "Which Pressure Instrument Should I Buy?",
    description: "Use the two model paths to identify the datasheet, environmental, documentation, and OEM questions that require confirmation.",
    rows: [
      {
        buyerNeed: "Process signal to PLC, DCS, or SCADA in a hazardous area",
        firstChoice: "AM-PT300 pressure transmitter",
        secondChoice: "AM-PG200 digital pressure gauge",
        guidance: "Start with the transmitter path, then verify output, protection concept, certificate holder, exact model scope, marking, and validity for the site classification.",
      },
      {
        buyerNeed: "Local digital readout, battery power, or private-label gauge",
        firstChoice: "AM-PG200 smart digital pressure gauge",
        secondChoice: "AM-PT300 if a remote signal is also required",
        guidance: "Start with the local-display path, then confirm the current display, power, range, branding feasibility, MOQ, and schedule in the datasheet and quotation.",
      },
      {
        buyerNeed: "High-vibration hydraulic or heavy machinery duty",
        firstChoice: "AM-PT300 pressure transmitter",
        secondChoice: "AM-PG200 for local panel indication",
        guidance: "Send the measured vibration profile and mounting details; do not treat a general industrial-use description as a verified vibration rating.",
      },
      {
        buyerNeed: "Battery-powered field gauge without wiring",
        firstChoice: "AM-PG200 digital pressure gauge",
        secondChoice: "AM-PT300 pressure transmitter",
        guidance: "Confirm the current battery and transmitter power requirements in the quoted model datasheets before system design.",
      },
    ],
  },
  decisionBlocks: [
    {
      title: "ATEX and ex-certified pressure selection",
      body: "If an RFQ requires hazardous-area equipment, send the area classification and required protection concept. Request the current certificate and verify its holder, model scope, marking, issuer, and validity before selecting either pressure instrument.",
      links: [
        { label: "AM-PT300 pressure transmitter", href: "/products/am-pt300-pressure-transmitter" },
        { label: "Certificates & verification", href: "/certificates" },
      ],
    },
    {
      title: "OEM and private-label pressure gauges",
      body: "For private-label or ODM work, send artwork, packaging, range, display, documentation, first-order quantity, and annual volume. Branding feasibility, tooling, fees, MOQ, validation, and schedule are confirmed after review.",
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
        "For hazardous or outdoor sites, state the area classification, ingress, vibration, cable-entry, and calibration-document requirements, then verify them against current controlled records.",
    },
  ],
  faqs: [
    {
      question: "How should I verify hazardous-area suitability for a pressure instrument?",
      answer: "Send the area classification and required protection concept. Request the current certificate and confirm its holder, exact model scope, marking, issuer, and validity before ordering; do not infer coverage from a category-page label.",
    },
    {
      question: "What is the OEM MOQ for pressure instruments?",
      answer: "MOQ depends on the selected model, artwork, packaging, tooling, testing, documentation, and customization scope. It is stated in the project quotation after these inputs are reviewed.",
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
