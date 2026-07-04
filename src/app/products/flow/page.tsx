import type { Metadata } from "next";
import { CategoryPage, generateCategoryMetadata, type CategoryPageData } from "../category-page";

const data: CategoryPageData = {
  slug: "flow",
  label: "Flow Meters",
  title: "Flow Meters — Electromagnetic, Ultrasonic & Thermal Mass | AccuMeasureTech",
  description: "Electromagnetic, clamp-on ultrasonic, and thermal mass flow meters. DN6–DN1000 sizes. ±0.5% to ±1% FS accuracy. ATEX available. 4-20mA, RS485, EtherNet/IP outputs. Factory-direct from AccuMeasureTech, Xi'an, China.",
  h1: "Flow Meters for Liquids & Gases",
  lead: "Electromagnetic, ultrasonic, and thermal mass flow measurement from DN6 to DN1000. ±0.5% FS accuracy. ATEX explosion-proof options. RS485/4-20mA/EtherNet/IP outputs.",
  overview: "AccuMeasureTech flow meters provide reliable measurement for conductive liquids, non-conductive fluids, and gases across water treatment, chemical processing, oil & gas, food & beverage, and pharmaceutical industries. Choose electromagnetic for high-accuracy conductive fluids, clamp-on ultrasonic for non-invasive installation, or thermal mass for gas flow control.",
  selectionGuide: [
    {
      title: "Check conductivity first",
      description:
        "Electromagnetic flow meters are ideal for conductive water, wastewater, and chemical liquids; clamp-on ultrasonic is better when pipe cutting is not possible.",
    },
    {
      title: "Define pipe and flow range",
      description:
        "Share pipe size, material, liner, minimum and maximum flow rate, straight pipe length, and whether the pipe can be stopped for installation.",
    },
    {
      title: "Plan signal integration",
      description:
        "Select 4-20mA, pulse, RS485 Modbus, HART, or EtherNet/IP based on the PLC, SCADA, or data logger used by the plant.",
    },
  ],
};

export const metadata: Metadata = generateCategoryMetadata(data);

export default function FlowMetersPage() {
  return <CategoryPage data={data} />;
}
