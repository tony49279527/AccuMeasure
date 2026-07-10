import { products } from "./products";

export interface ApplicationPage {
  slug: string;
  title: string;
  h1: string;
  description: string;
  industry: string;
  problem: string;
  solution: string;
  whyAccuMeasure: string[];
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
      "Non-contact 80GHz FMCW radar level transmitters for petroleum, diesel, and chemical storage tanks. ATEX options, ±2mm accuracy, factory-direct from Xi'an.",
    industry: "Oil & Gas / Fuel Storage",
    problem:
      "Oil and fuel tanks often have vapor, temperature swing, and hazardous-area requirements. Contact probes foul; ultrasonic sensors struggle with vapor and foam.",
    solution:
      "The AM-RL80 80GHz FMCW radar measures continuously without contacting the product. Narrow beam angle handles nozzles and tank internals; ATEX Ex d IIC T6 options support hazardous zones.",
    whyAccuMeasure: [
      "±2mm accuracy with 0.3–80m range for tall storage tanks",
      "ATEX Ex d IIC T6 option with DEKRA certificate number on request",
      "4-20mA / HART / RS485 outputs for DCS and tank-gauging systems",
      "72-hour aging test and calibration certificate with every unit",
      "Typical FOB pricing about 1/3 of European radar brands for comparable specs",
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
          "Yes. Non-contact 80GHz radar works on petroleum products. Confirm vapor density, nozzle geometry, and whether ATEX is required for your site.",
      },
      {
        question: "Do you supply ATEX-certified radar for oil terminals?",
        answer:
          "ATEX Ex d IIC T6 is available for AM-RL80. Request the DEKRA certificate scan (ATEX-2022-0158) with your RFQ.",
      },
      {
        question: "What is the MOQ and lead time?",
        answer:
          "Samples from 1 unit; bulk MOQ depends on model. Standard lead time is 15-20 days; ATEX/custom builds may take 25-35 days.",
      },
    ],
  },
  {
    slug: "electromagnetic-flow-meter-for-water-treatment",
    title: "Electromagnetic Flow Meter for Water Treatment | AccuMeasure",
    h1: "Electromagnetic Flow Meter for Water & Wastewater Treatment",
    description:
      "AM-EMF100 electromagnetic flow meters for PDAM, municipal water, and industrial wastewater. DN15–DN1000, ±0.5% accuracy, factory-direct from China.",
    industry: "Water & Wastewater",
    problem:
      "Utilities and EPCs need stable flow measurement on conductive liquids with low maintenance. Mechanical meters wear; clamp-on ultrasonic can drift on dirty pipes.",
    solution:
      "The AM-EMF100 magmeter has no moving parts, handles DN15–DN1000 lines, and delivers ±0.5% accuracy for billing, process control, and plant monitoring.",
    whyAccuMeasure: [
      "DN15–DN1000 coverage for plant and network lines",
      "±0.5% accuracy suitable for utility and industrial duty",
      "PTFE / rubber liner options for water and mild chemicals",
      "Proven on Indonesia PDAM-style water projects with repeat orders",
      "Calibration certificate shipped with every meter",
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
          "Conductive liquids such as water, wastewater, and many process fluids. Non-conductive media (oils, ultrapure water) need ultrasonic or other technologies.",
      },
      {
        question: "Can you match existing flange standards?",
        answer:
          "Yes — specify DIN, ANSI, or JIS flanges in the RFQ. We configure process connections before production.",
      },
      {
        question: "Do you support large utility orders?",
        answer:
          "Yes. Share monthly/annual quantity and delivery schedule. We quote phased production and packing for export.",
      },
    ],
  },
  {
    slug: "pressure-transmitter-for-oem-equipment",
    title: "OEM Pressure Transmitter & Private Label Gauge | AccuMeasure",
    h1: "Pressure Transmitters for OEM Equipment & Private Label",
    description:
      "AM-PT300 pressure transmitters and AM-PG200 digital gauges for OEM branding. MOQ from 100 for logo/packaging, factory-direct from Xi'an.",
    industry: "OEM / System Integrators",
    problem:
      "Integrators need stable pressure sensors with private-label packaging, predictable lead times, and documentation for their end customers — without European brand markups.",
    solution:
      "AccuMeasure supplies piezoresistive transmitters and digital gauges with OEM branding, custom ranges, and serial-number traceability. Brazil integrator case: 500 first order, 2,000 reorder.",
    whyAccuMeasure: [
      "OEM branding from MOQ 100 with no tooling fee",
      "Ranges up to 100MPa with 4-20mA / RS485 options",
      "2-year warranty and calibration certificate per unit",
      "15-engineer R&D support for non-standard ranges and housings",
      "Documented OEM reorder growth on private-label gauge programs",
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
          "OEM logo and packaging start at 100 units with no tooling fee. Full ODM (new enclosure/PCB) typically starts at 500 units.",
      },
      {
        question: "Can you sign an NDA for private-label projects?",
        answer:
          "Yes. NDA and branding confidentiality can be included before artwork exchange. Mention NDA in your inquiry.",
      },
      {
        question: "How fast can you quote a custom range?",
        answer:
          "Standard ranges quote within 24 hours. Non-standard ranges or housings usually get a solution outline within 7 days.",
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
      "Use ultrasonic for clean water and open channels at lower cost. Use 80GHz radar when vapor, dust, foam, long range, or hazardous-area certification matters.",
    whyAccuMeasure: [
      "Both technologies in one factory catalog — unbiased selection help",
      "AM-UL20 for economical water/tank duty; AM-RL80 for harsh process duty",
      "Side-by-side specs, MOQ, and lead time on each product page",
      "Application engineers reply within 24 hours with a model recommendation",
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
          "Clean liquids, short-to-medium range, no heavy vapor or foam, and cost-sensitive projects. AM-UL20 fits many water tank applications.",
      },
      {
        question: "When should I buy 80GHz radar instead?",
        answer:
          "Choose radar for vapor, dust, foam, taller tanks, higher accuracy, or ATEX zones. AM-RL80 is the AccuMeasure radar option.",
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
