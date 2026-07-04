import type { Metadata } from "next";
import { CategoryPage, generateCategoryMetadata, type CategoryPageData } from "../category-page";

const data: CategoryPageData = {
  slug: "flow",
  label: "Flow Meters",
  title: "Flow Meters — Electromagnetic, Ultrasonic & Thermal Mass | AccuMeasureTech",
  description: "Electromagnetic, clamp-on ultrasonic, and thermal mass flow meters. DN6–DN1000 sizes. ±0.5% to ±1% FS accuracy. ATEX available. 4-20mA, RS485, EtherNet/IP outputs. Factory-direct from AccuMeasureTech, Xi'an, China.",
  h1: "Flow Meters for Liquids &amp; Gases",
  lead: "Electromagnetic, ultrasonic, and thermal mass flow measurement from DN6 to DN1000. ±0.5% FS accuracy. ATEX explosion-proof options. RS485/4-20mA/EtherNet/IP outputs.",
  overview: "AccuMeasureTech flow meters provide reliable measurement for conductive liquids, non-conductive fluids, and gases across water treatment, chemical processing, oil & gas, food & beverage, and pharmaceutical industries. Choose electromagnetic for high-accuracy conductive fluids, clamp-on ultrasonic for non-invasive installation, or thermal mass for gas flow control.",
};

export const metadata: Metadata = generateCategoryMetadata(data);

export default function FlowMetersPage() {
  return <CategoryPage data={data} />;
}
