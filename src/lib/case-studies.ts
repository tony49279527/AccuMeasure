import type { CaseStudy } from "./types";

export const caseStudies: CaseStudy[] = [
  {
    id: "1",
    slug: "saudi-water-radar-level",
    title: "Saudi Water Storage Radar Level Planning Brief",
    seoTitle: "Radar Level Planning for Saudi Water Storage Tanks",
    seoDescription:
      "Plan an 80GHz radar review for water storage tanks in high ambient heat. Check tank geometry, process conditions, documentation, and RFQ inputs.",
    datePublished: "2025-11-12",
    dateModified: "2026-08-10",
    clientType: "Application Planning Brief",
    country: "Saudi Arabia",
    flag: "🇸🇦",
    productIds: ["2"],
    background:
      "This brief outlines the information needed to evaluate non-contact radar level measurement for water storage tanks operating in high ambient temperatures. It does not identify or claim results for a specific customer project.",
    challenge:
      "Select a configuration that fits the tank geometry, operating temperature, mounting location, power and signal requirements, while documenting the exact environmental and compliance limits.",
    solution: [
      "Review the tank drawing, nozzle, measuring range, internals, condensation, foam, and expected ambient and process temperatures.",
      "Compare the required range, blind zone, accuracy, antenna, enclosure, power, and output with the current AM-RL80 datasheet.",
      "Request model-specific inspection, calibration, environmental, and compliance documents before approval.",
    ],
    verificationChecks: [
      "Tank drawing, nozzle dimensions, measuring range, medium, and obstructions",
      "Normal and maximum ambient and process temperature",
      "Power, signal, control-system, ingress-protection, and mounting requirements",
      "Current datasheet revision and applicable model-specific documentation",
      "Written quotation covering configuration, inspection, delivery, and acceptance criteria",
    ],
    results: [
      { metric: "Brief Type", value: "Planning" },
      { metric: "Evidence Status", value: "Verify" },
      { metric: "Checklist Items", value: "5" },
    ],
    image: "/og-image.jpg",
  },
  {
    id: "2",
    slug: "indonesia-pdam-electromagnetic-flow",
    title: "Indonesia Water Network Magmeter Planning Brief",
    seoTitle: "Electromagnetic Flow Meter Planning for Indonesia Water Networks",
    seoDescription:
      "Plan an electromagnetic flow meter review for treated-water networks. Check conductivity, pipe conditions, materials, installation, and project documents.",
    datePublished: "2025-12-03",
    dateModified: "2026-08-10",
    clientType: "Application Planning Brief",
    country: "Indonesia",
    flag: "🇮🇩",
    productIds: ["5"],
    background:
      "This brief organizes the inputs for evaluating electromagnetic flow meters in treated-water distribution networks. It does not identify a utility or claim a completed order.",
    challenge:
      "Match the meter to liquid conductivity, pipe sizes, pressure class, flange standard, liner and electrode compatibility, grounding, installation conditions, and the control system.",
    solution: [
      "Confirm the water conductivity and chemical conditions before selecting electromagnetic technology.",
      "Document each pipe size, flange and pressure standard, liner and electrode requirement, straight-run availability, and grounding method.",
      "Review the current AM-EMF100 configuration and request the calibration, inspection, packing, and delivery documents required by the project.",
    ],
    verificationChecks: [
      "Liquid conductivity, temperature, chemistry, and solids content",
      "Pipe schedule, diameter, flange, pressure class, lining, and electrode material",
      "Grounding, full-pipe condition, straight runs, and available installation space",
      "Power, output, communication, display, and accuracy requirements",
      "Approved datasheet, calibration scope, inspection plan, packing, and delivery terms",
    ],
    results: [
      { metric: "Brief Type", value: "Planning" },
      { metric: "Evidence Status", value: "Verify" },
      { metric: "Checklist Items", value: "5" },
    ],
    image: "/og-image.jpg",
  },
  {
    id: "3",
    slug: "brazil-integrator-oem-pressure-gauge",
    title: "Brazil OEM Digital Pressure Gauge Planning Brief",
    seoTitle: "OEM Digital Pressure Gauge Planning Brief for Brazil",
    seoDescription:
      "Prepare an OEM digital pressure gauge qualification brief covering process fit, branding, samples, documentation, inspection, and written commercial terms.",
    datePublished: "2026-01-15",
    dateModified: "2026-08-10",
    clientType: "OEM Planning Brief",
    country: "Brazil",
    flag: "🇧🇷",
    productIds: ["9"],
    background:
      "This brief describes the qualification work for a private-label digital pressure gauge program. It does not identify a system integrator or claim order or margin results.",
    challenge:
      "Align the gauge specification, electrical and mechanical interfaces, artwork, packaging, sample approval, documentation, quality checks, and supply terms before production.",
    solution: [
      "Create a controlled specification covering pressure range, overload, accuracy, process connection, display, units, power, enclosure, and environmental conditions.",
      "Provide approved artwork, label, serial-number, language, packaging, and confidentiality requirements before sample preparation.",
      "Agree sample acceptance, inspection, change control, documentation, MOQ, tooling, warranty, and delivery terms in writing.",
    ],
    verificationChecks: [
      "Pressure and overload range, accuracy, materials, thread, display, output, and enclosure",
      "Logo, label, packaging, manuals, language, serialization, and confidentiality scope",
      "Prototype and sample approval criteria with named reviewers",
      "Inspection, calibration, traceability, change-control, and nonconformance process",
      "Written MOQ, tooling, warranty, payment, packing, and delivery terms",
    ],
    results: [
      { metric: "Brief Type", value: "Planning" },
      { metric: "Evidence Status", value: "Verify" },
      { metric: "Checklist Items", value: "5" },
    ],
    image: "/og-image.jpg",
  },
];

export function getCaseStudyBySlug(slug: string): CaseStudy | undefined {
  return caseStudies.find((c) => c.slug === slug);
}

export function getCaseStudiesByProductId(productId: string): CaseStudy[] {
  return caseStudies.filter((c) => c.productIds.includes(productId));
}
