import type { Metadata } from "next";
import { CategoryPage, generateCategoryMetadata, type CategoryPageData } from "../category-page";

const data: CategoryPageData = {
  slug: "flow",
  label: "Flow Meters",
  title: "Flow Meter Manufacturer: Electromagnetic, Ultrasonic, ATEX",
  description:
    "Compare electromagnetic, clamp-on ultrasonic, and thermal mass meters (DN6–DN1000). ATEX options, non-contact clamp-on, portable survey, outputs, and MOQ.",
  h1: "Flow Meters for Liquids & Gases",
  lead: "Electromagnetic, ultrasonic, and thermal mass flow measurement from DN6 to DN1000. ±0.5% FS accuracy options. ATEX explosion-proof electromagnetic meters. Clamp-on non-contact and portable ultrasonic versions for retrofit and surveys.",
  overview:
    "AccuMeasure flow meters cover conductive liquids, non-conductive fluids, and process gases for water treatment, chemical processing, oil & gas, HVAC, and laboratory duty. Use electromagnetic (AM-EMF100) when the liquid is conductive and you need higher accuracy in a full-bore meter. Use clamp-on ultrasonic (AM-UF200) when you need non-invasive, non-contact installation without cutting the pipe—fixed or portable. Use thermal mass (AM-MF50) for precision gas mass flow in labs and semiconductor lines, not as a handheld pipe survey tool.",
  lastReviewed: "2026-08-05",
  decisionTable: {
    title: "Which Flow Meter Should I Buy?",
    description: "Use this table to match the published AccuMeasure models to the fluid, installation, and approval requirements in your RFQ.",
    rows: [
      {
        buyerNeed: "Conductive liquid in a new full-bore line with higher accuracy",
        firstChoice: "AM-EMF100 electromagnetic",
        secondChoice: "AM-UF200 clamp-on ultrasonic",
        guidance: "Start with electromagnetic for conductive water, wastewater, and process liquids when a flanged inline installation is acceptable.",
      },
      {
        buyerNeed: "Existing pipe cannot be cut or the liquid has low conductivity",
        firstChoice: "AM-UF200 clamp-on ultrasonic",
        secondChoice: "AM-EMF100 electromagnetic",
        guidance: "Clamp-on ultrasonic avoids pipe cutting, shutdown, and pressure drop and works with many non-conductive fluids.",
      },
      {
        buyerNeed: "Hazardous area flow measurement",
        firstChoice: "AM-EMF100 with ATEX Ex d IIC T6",
        secondChoice: "AM-MF50 or AM-UF200 only with written project-specific approval",
        guidance: "Confirm the area classification and that the certificate names the exact model and protection marking before ordering.",
      },
      {
        buyerNeed: "Gas mass flow in lab, semiconductor, or process gas lines",
        firstChoice: "AM-MF50 thermal mass meter",
        secondChoice: "AM-UF200 portable ultrasonic for volumetric survey",
        guidance: "AM-MF50 measures gas mass flow from 0 to 500 slm; it is not marketed as a handheld field mass meter for large process pipes.",
      },
      {
        buyerNeed: "Temporary survey or multi-point pipe checks",
        firstChoice: "AM-UF200 portable ultrasonic",
        secondChoice: "AM-MF50 thermal mass meter",
        guidance: "Portable ultrasonic is the survey answer; fixed thermal mass is for precision gas mass measurement, not a portable pipe survey tool.",
      },
    ],
  },
  decisionBlocks: [
    {
      title: "Explosion-proof / ATEX flow meters",
      body: "For hazardous-area oil & gas, chemical, or LPG/LNG service, start with the AM-EMF100 electromagnetic flow meter with ATEX Ex d IIC T6 available. Confirm fluid conductivity, pipe size, liner, grounding rings, and that the certificate names the exact model and protection marking before ordering. Clamp-on ultrasonic and thermal mass catalogs on this site are not the first path for Ex d process service unless a project-specific approval is confirmed in writing.",
      links: [
        { label: "AM-EMF100 electromagnetic flow meter", href: "/products/am-emf100-electromagnetic-flow-meter" },
        { label: "Certificates & verification", href: "/certificates" },
      ],
    },
    {
      title: "Non-contact, clamp-on, and non-invasive installation",
      body: "If buyers search for non-contact or non-invasive flow meters, they usually mean clamp-on ultrasonic: sensors mount on the outside of the pipe, so there is no pipe cutting, no process shutdown, and no pressure drop. AM-UF200 supports DN15–DN1000 metal and plastic pipes and works with fluids that transmit sound, including many oils and low-conductivity waters that a magmeter cannot measure.",
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
      body: "A portable ultrasonic version of AM-UF200 is intended for temporary surveys and multi-point checks. It is not the same as a portable thermal mass flow meter. AM-MF50 is a panel/process thermal mass meter for gas (0–500 slm), built for lab and semiconductor accuracy—not a handheld field mass meter for large process pipes. If your RFQ says “portable mass flow,” tell us pipe size, fluid phase (liquid or gas), and whether you need survey portability or fixed mass accuracy so we can refuse a mismatch instead of forcing a model.",
      links: [
        { label: "AM-UF200 portable / fixed ultrasonic", href: "/products/am-uf200-ultrasonic-flow-meter" },
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
        "For oil & gas, chemical, and LPG/LNG service, order AM-EMF100 with ATEX Ex d IIC T6 and verify the certificate names the model before shipment.",
    },
    {
      title: "Separate portable survey from mass accuracy",
      description:
        "Use portable ultrasonic for temporary checks. Use AM-MF50 when you need gas mass flow accuracy in a fixed thermal mass installation—not as a drop-in for “portable mass” pipe surveys.",
    },
  ],
  faqs: [
    {
      question: "Do you offer explosion-proof or ATEX flow meters?",
      answer:
        "Yes. The AM-EMF100 electromagnetic flow meter is available with ATEX Ex d IIC T6 for hazardous-area installations. Send the area classification, fluid, and pipe size so we can confirm the certified configuration.",
    },
    {
      question: "What is a non-contact or non-invasive flow meter in your catalog?",
      answer:
        "Clamp-on ultrasonic (AM-UF200). Sensors mount externally, so there is no pipe cutting, no shutdown, and no pressure drop. It is the usual answer to non-contact / non-invasive flow searches on process pipes.",
    },
    {
      question: "Is a portable flow meter available?",
      answer:
        "Yes—AM-UF200 is offered in portable and fixed versions for survey and permanent duty. Portable ultrasonic measures volumetric flow on prepared pipes; it is not a portable thermal mass meter.",
    },
    {
      question: "Do you sell portable mass flow meters?",
      answer:
        "AM-MF50 is a thermal mass meter for gas (0–500 slm) in lab and semiconductor use. It is not marketed as a handheld portable mass meter for large process lines. If you need portable liquid or gas survey capability, start with AM-UF200 and describe the fluid so we can confirm fit.",
    },
    {
      question: "Electromagnetic or ultrasonic—which should I choose?",
      answer:
        "Choose electromagnetic for conductive liquids and higher full-bore accuracy. Choose clamp-on ultrasonic when you cannot cut the pipe or the fluid is poorly conductive. See the comparison page for installation and maintenance tradeoffs.",
    },
  ],
};

export const metadata: Metadata = generateCategoryMetadata(data);

export default function FlowMetersPage() {
  return <CategoryPage data={data} />;
}
