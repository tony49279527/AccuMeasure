import type { Metadata } from "next";
import { CategoryPage, generateCategoryMetadata, type CategoryPageData } from "../category-page";

const data: CategoryPageData = {
  slug: "flow",
  label: "Flow Meters",
  title: "Industrial Flow Meters: Electromagnetic, Ultrasonic & Thermal Mass",
  description:
    "Compare electromagnetic, clamp-on ultrasonic, and thermal mass flow meters by medium, conductivity, pipe access, installation, outputs, and document requirements.",
  h1: "Flow Meters for Liquids & Gases",
  lead: "Choose flow technology by medium, conductivity, pipe access, installation, and system signal. Confirm current model range, performance, document scope, and commercial terms before release.",
  overview:
    "AccuMeasure publishes electromagnetic, clamp-on ultrasonic, and thermal-mass flow options for project review. Start with liquid conductivity, fluid phase, pipe access, installation constraints, and the required signal. Treat published values as selection inputs and verify the exact quoted configuration against current model-specific records.",
  lastReviewed: "2026-09-08",
  decisionTable: {
    title: "Which Flow Meter Should I Buy?",
    description: "Use this table to match the published AccuMeasure models to the fluid, installation, and approval requirements in your RFQ.",
    rows: [
      {
        buyerNeed: "Conductive liquid in a new full-bore line",
        firstChoice: "AM-EMF100 electromagnetic",
        secondChoice: "AM-UF200 clamp-on ultrasonic",
        guidance: "Start with electromagnetic for conductive water, wastewater, and process liquids when an inline installation is acceptable. Confirm the quoted configuration and installation requirements.",
      },
      {
        buyerNeed: "Existing pipe cannot be cut or the liquid has low conductivity",
        firstChoice: "AM-UF200 clamp-on ultrasonic",
        secondChoice: "AM-EMF100 electromagnetic",
        guidance: "Consider clamp-on ultrasonic when pipe modification is constrained or the liquid has low conductivity. Confirm pipe material, wall condition, fluid properties, and installation method.",
      },
      {
        buyerNeed: "Hazardous area flow measurement",
        firstChoice: "Project-specific documentation review",
        secondChoice: "Do not select from a category-page label alone",
        guidance: "Provide the area classification and required protection concept. Verify the holder, issuer, exact model scope, marking, and validity in the current controlled document before ordering.",
      },
      {
        buyerNeed: "Gas mass flow in lab, semiconductor, or process gas lines",
        firstChoice: "AM-MF50 configuration review",
        secondChoice: "Project-specific ultrasonic survey review",
        guidance: "The category page does not establish a portable mass-flow configuration. Confirm gas composition, flow range, pressure, temperature, output, and installation details against the current model documentation.",
      },
      {
        buyerNeed: "Temporary survey or multi-point pipe checks",
        firstChoice: "Project-specific portable or fixed configuration review",
        secondChoice: "Do not substitute a fixed gas meter for a survey request",
        guidance: "State the survey method, fluid phase, pipe conditions, and required result. Confirm whether the quoted configuration is portable or fixed before it is shortlisted.",
      },
    ],
  },
  decisionBlocks: [
    {
      title: "Hazardous-area documentation",
      body: "For an oil, gas, chemical, or other hazardous-area project, send the area classification, required protection concept, fluid, pipe size, and installation conditions. Request the current controlled document and verify its holder, issuer, exact model scope, marking, and validity before selecting any configuration.",
      links: [
        { label: "AM-EMF100 electromagnetic flow meter", href: "/products/am-emf100-electromagnetic-flow-meter" },
        { label: "Certificates & verification", href: "/certificates" },
      ],
    },
    {
      title: "Non-contact, clamp-on, and non-invasive installation",
      body: "For a non-contact or non-invasive request, begin with clamp-on ultrasonic options: the sensors are evaluated for external mounting rather than a full-bore insertion. Confirm pipe material, outside diameter, wall thickness, lining, fluid condition, access, and installation method against the current model documentation.",
      links: [
        { label: "AM-UF200 ultrasonic flow meter", href: "/products/am-uf200-ultrasonic-flow-meter" },
        {
          label: "Electromagnetic vs ultrasonic comparison",
          href: "/compare/electromagnetic-vs-ultrasonic-flow-meter",
        },
      ],
    },
    {
      title: "Portable survey vs fixed process metering",
      body: "Temporary surveys and fixed process metering require different installation and verification steps. A “portable mass flow” query does not identify a quoted model by itself. State the pipe size, fluid phase, survey method, and whether the result is for a temporary check or permanent control; then confirm the current configuration before a model is shortlisted.",
      links: [
        { label: "AM-UF200 ultrasonic flow meter", href: "/products/am-uf200-ultrasonic-flow-meter" },
        { label: "AM-MF50 thermal mass (gas)", href: "/products/am-mf50-mass-flow-meter" },
      ],
    },
  ],
  relatedGuides: [
    {
      title: "Electromagnetic Flow Meter for Water Treatment",
      description: "Define conductivity, pipe size, liner, flange, grounding, signal, and utility project requirements.",
      href: "/applications/electromagnetic-flow-meter-for-water-treatment",
    },
    {
      title: "Electromagnetic vs Ultrasonic Flow Meter",
      description: "Compare media limits, installation work, accuracy, maintenance, and lifecycle tradeoffs.",
      href: "/compare/electromagnetic-vs-ultrasonic-flow-meter",
    },
    {
      title: "Magmeter vs Ultrasonic Selection Guide",
      description: "Use practical pipe, process, and installation questions to shortlist the right flow technology.",
      href: "/blog/electromagnetic-vs-ultrasonic-flow-meter",
    },
  ],
  selectionGuide: [
    {
      title: "Check conductivity first",
      description:
        "Electromagnetic flow meters need conductive liquids (typically >5 µS/cm). Clamp-on ultrasonic is better for non-conductive fluids or when the pipe cannot be cut.",
    },
    {
      title: "Define pipe and flow range",
      description:
        "Share pipe size, material, liner, minimum and maximum flow rate, straight-run length, and whether the line can be stopped for installation.",
    },
    {
      title: "Plan signal integration",
      description:
        "Select 4-20mA, pulse, RS485 Modbus, HART, or EtherNet/IP based on the PLC, SCADA, or data logger used by the plant.",
    },
    {
      title: "Specify hazardous-area approval",
      description:
        "For hazardous-area projects, state the required classification and documentation. Verify the certificate holder, issuer, exact model scope, marking, and validity in the current controlled record before ordering.",
    },
    {
      title: "Do not conflate a portable survey with mass-flow requirements",
      description:
        "Do not infer a portable mass-flow configuration from a category keyword. Describe the fluid phase, pipe, survey method, target result, and whether the duty is temporary or permanent before the current quoted configuration is reviewed.",
    },
  ],
  faqs: [
    {
      question: "Do you offer explosion-proof or ATEX flow meters?",
      answer:
        "Send the area classification, required protection concept, fluid, and pipe size. Hazardous-area suitability can be confirmed only from the current document for the exact quoted model and configuration.",
    },
    {
      question: "What is a non-contact or non-invasive flow meter in your catalog?",
      answer:
        "Start with the clamp-on ultrasonic category. Confirm pipe material, wall thickness, lining, fluid condition, access, and the current installation instructions before selection.",
    },
    {
      question: "Is a portable flow meter available?",
      answer:
        "State whether the project needs a temporary survey or a permanent installation. Availability of a portable or fixed configuration, measurement scope, and installation conditions are confirmed for the quoted model.",
    },
    {
      question: "Do you sell portable mass flow meters?",
      answer:
        "The flow category does not publish a portable mass-flow configuration. Describe the fluid phase, pipe, target range, survey method, and whether the requirement is temporary or permanent so the current configuration can be reviewed.",
    },
    {
      question: "Electromagnetic or ultrasonic—which should I choose?",
      answer:
        "Start electromagnetic review for conductive liquids and clamp-on ultrasonic review when pipe modification is constrained or the medium has low conductivity. Confirm actual fluid, pipe, and installation conditions in the quotation.",
    },
  ],
};

export const metadata: Metadata = generateCategoryMetadata(data);

export default function FlowMetersPage() {
  return <CategoryPage data={data} />;
}
