import { products } from "./products";
import { siteConfig } from "./site";

export interface ApplicationPage {
  slug: string;
  title: string;
  h1: string;
  description: string;
  industry: string;
  problem: string;
  solution: string;
  selectionChecks: string[];
  checklist: string[];
  relatedProductIds: string[];
  relatedCaseSlug?: string;
  faqs: { question: string; answer: string }[];
}

export const applicationPages: ApplicationPage[] = [
  {
    slug: "radar-level-sensor-for-oil-tank",
    title: "80GHz Radar Level Sensor for Oil Tanks | AccuMeasure",
    h1: "80GHz Radar Level Sensor for Oil Storage Tanks",
    description:
      "A buyer guide for evaluating non-contact 80GHz radar on oil, fuel, and chemical storage tanks, including installation and documentation checks.",
    industry: "Oil & Gas / Fuel Storage",
    problem:
      "Oil and fuel tanks often have vapor, temperature swing, and hazardous-area requirements. Contact probes foul; ultrasonic sensors struggle with vapor and foam.",
    solution:
      "Evaluate the AM-RL80 against the tank drawing, process conditions, mounting geometry, required signal, and site classification. Confirm the exact model configuration and current documentation before ordering.",
    selectionChecks: [
      "Confirm measuring range, blind zone, accuracy, and antenna choice in the current model datasheet",
      "Match hazardous-area marking and certificate scope to the exact quoted model and installation zone",
      "Review nozzle size, tank internals, foam, vapor, temperature, and pressure with engineering",
      "Confirm power supply and output requirements for the control or tank-gauging system",
      "Request the current calibration, inspection, and compliance documents required for the project",
    ],
    checklist: [
      "Tank height and nozzle size",
      "Medium (crude, diesel, gasoline, chemicals)",
      "Hazardous area classification (Zone 0/1/2)",
      "Output signal (4-20mA, HART, Modbus)",
      "Process temperature and pressure",
    ],
    relatedProductIds: ["2", "1"],
    relatedCaseSlug: "saudi-water-radar-level",
    faqs: [
      {
        question: "Can AM-RL80 measure diesel and gasoline tanks?",
        answer:
          "It can be evaluated for non-contact measurement on these tanks, but final selection depends on tank geometry, vapor, process conditions, mounting, and site classification. Share those inputs for an engineering check.",
      },
      {
        question: "Do you supply ATEX-certified radar for oil terminals?",
        answer:
          "Hazardous-area requirements must be checked against the current certificate, exact model, protection marking, and installation zone. Request the applicable document set with the quotation rather than relying on a page summary.",
      },
      {
        question: "What is the MOQ and lead time?",
        answer:
          "MOQ and lead time depend on the confirmed model, documentation, customization, quantity, and destination. They are stated in the project quotation after the configuration review.",
      },
    ],
  },
  {
    slug: "electromagnetic-flow-meter-for-water-treatment",
    title: "Electromagnetic Flow Meter for Water Treatment | AccuMeasure",
    h1: "Electromagnetic Flow Meter for Water & Wastewater Treatment",
    description:
      "A selection guide for evaluating AM-EMF100 electromagnetic flow meters in municipal water and industrial wastewater applications.",
    industry: "Water & Wastewater",
    problem:
      "Utilities and EPCs need to match the meter to liquid conductivity, pipe conditions, lining compatibility, installation space, accuracy requirements, and the plant control system.",
    solution:
      "Evaluate the AM-EMF100 only after confirming the liquid is conductive and documenting pipe size, flange standard, liner compatibility, grounding, straight-run conditions, power, and output requirements.",
    selectionChecks: [
      "Confirm the liquid conductivity and chemical compatibility before selecting electromagnetic technology",
      "Match pipe size, pressure class, flange standard, liner, and electrode material to the project",
      "Review grounding, straight-run, full-pipe, and installation requirements with engineering",
      "Confirm accuracy and output requirements in the current quoted model datasheet",
      "Request the calibration and inspection documents required by the project before ordering",
    ],
    checklist: [
      "Pipe diameter (DN) and flange standard",
      "Medium conductivity and temperature",
      "Liner material preference",
      "Power supply and output (pulse / 4-20mA / RS485)",
      "Required accuracy and grounding conditions",
    ],
    relatedProductIds: ["5", "6"],
    relatedCaseSlug: "indonesia-pdam-electromagnetic-flow",
    faqs: [
      {
        question: "What liquids can AM-EMF100 measure?",
        answer:
          "Electromagnetic meters require a conductive liquid. Water and many wastewater streams can be candidates, while oils and other low-conductivity media generally require another technology. Confirm actual conductivity and compatibility before selection.",
      },
      {
        question: "Can you match existing flange standards?",
        answer:
          "Specify the existing flange standard, size, pressure class, and face type in the RFQ. Engineering will confirm whether the required connection is available for the quoted model.",
      },
      {
        question: "Do you support large utility orders?",
        answer:
          "Share the required quantity, inspection plan, packing rules, destination, and delivery schedule. Capacity and any phased delivery plan are confirmed in the quotation.",
      },
    ],
  },
  {
    slug: "pressure-transmitter-for-oem-equipment",
    title: "OEM Pressure Transmitter & Private Label Gauge | AccuMeasure",
    h1: "Pressure Transmitters for OEM Equipment & Private Label",
    description:
      "A qualification guide for AM-PT300 pressure transmitters and AM-PG200 digital gauges in OEM and private-label equipment projects.",
    industry: "OEM / System Integrators",
    problem:
      "Integrators need a pressure device that fits the process, electrical interface, enclosure, labeling, packaging, documentation, and supply plan for their equipment.",
    solution:
      "Qualify the AM-PT300 or AM-PG200 from the required range, overload conditions, wetted materials, process and electrical connections, output, enclosure, documentation, and branding brief. Custom scope is confirmed in writing before samples or production.",
    selectionChecks: [
      "Confirm normal pressure, surge pressure, accuracy, wetted materials, and process connection",
      "Document the required output, connector, power supply, display, enclosure, and environmental limits",
      "Provide approved logo, label, serial-number, packaging, and language requirements",
      "Agree sample approval, inspection, change-control, and production acceptance criteria",
      "Confirm MOQ, tooling, warranty, documentation, and delivery terms in the written quotation",
    ],
    checklist: [
      "Pressure range and accuracy",
      "Process connection thread",
      "Output signal and electrical connector",
      "Logo / label / packaging requirements",
      "Annual volume and first-order quantity",
    ],
    relatedProductIds: ["8", "9"],
    relatedCaseSlug: "brazil-integrator-oem-pressure-gauge",
    faqs: [
      {
        question: "What is the OEM branding MOQ?",
        answer:
          "MOQ depends on the product, artwork, packaging, tooling, testing, and customization scope. Share the annual volume and first-order quantity so the applicable terms can be included in the quotation.",
      },
      {
        question: "Can you sign an NDA for private-label projects?",
        answer:
          "Request an NDA before sharing confidential drawings or artwork. The parties and permitted use should be agreed in writing before protected materials are exchanged.",
      },
      {
        question: "How fast can you quote a custom range?",
        answer:
          `We aim to acknowledge a complete inquiry within ${siteConfig.responseTarget}. The quotation schedule depends on the technical review, sample, tooling, and documentation requirements.`,
      },
    ],
  },
  {
    slug: "radar-vs-ultrasonic-level-sensor",
    title: "Radar vs Ultrasonic Level Sensor: How to Choose | AccuMeasure",
    h1: "Radar vs Ultrasonic Level Sensor — Buyer Selection Guide",
    description:
      "Compare 80GHz radar and ultrasonic level sensors for tanks and silos. Accuracy, vapor, dust, price, and when to choose AM-RL80 vs AM-UL20.",
    industry: "Level Measurement Selection",
    problem:
      "Buyers often shortlist both radar and ultrasonic. Wrong choice causes false echoes, vapor errors, or unnecessary cost.",
    solution:
      "Evaluate ultrasonic for clean liquids and open applications with suitable environmental conditions. Evaluate 80GHz radar when vapor, dust, foam, range, beam geometry, or hazardous-area requirements change the measurement task.",
    selectionChecks: [
      "Compare the medium, vapor, dust, foam, condensation, temperature, and pressure conditions",
      "Review range, blind zone, accuracy, beam path, nozzle, and tank-internal constraints",
      "Confirm whether hazardous-area documentation is required for the exact installation",
      "Compare current model datasheets and request an engineering review before ordering",
    ],
    checklist: [
      "Medium and vapor/dust conditions",
      "Required accuracy and measuring range",
      "Budget vs lifecycle cost",
      "Hazardous area needs",
      "Mounting nozzle size",
    ],
    relatedProductIds: ["2", "3"],
    faqs: [
      {
        question: "When is ultrasonic good enough?",
        answer:
          "Ultrasonic is commonly evaluated for clean liquids and open applications without heavy vapor, foam, dust, or difficult mounting geometry. Confirm range and environmental limits for the exact model.",
      },
      {
        question: "When should I buy 80GHz radar instead?",
        answer:
          "Radar is often evaluated when vapor, dust, foam, longer range, narrow beam geometry, or hazardous-area requirements make ultrasonic less suitable. The exact radar model and documentation still need project review.",
      },
      {
        question: "Can you recommend a model from my tank drawing?",
        answer:
          "Yes — send tank height, medium, nozzle size, and output requirement via the contact form or WhatsApp.",
      },
    ],
  },
];

export function getApplicationBySlug(slug: string) {
  return applicationPages.find((page) => page.slug === slug);
}

export function getRelatedProducts(page: ApplicationPage) {
  return page.relatedProductIds
    .map((id) => products.find((p) => p.id === id))
    .filter((p): p is NonNullable<typeof p> => Boolean(p));
}
