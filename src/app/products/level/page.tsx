import type { Metadata } from "next";
import { CategoryPage, generateCategoryMetadata, type CategoryPageData } from "../category-page";
import { categoryPriceFrom } from "@/lib/facts";

const priceFrom = categoryPriceFrom("level");

const data: CategoryPageData = {
  slug: "level",
  label: "Level Sensors",
  title: "Industrial Level Sensor Manufacturer | AccuMeasure",
  description: `Compare capacitive, 80GHz radar, ultrasonic, and IoT level sensors from $${priceFrom}. Review 0.3-80m ranges, approvals, MOQ, and request a factory quote.`,
  h1: "Level Sensors for Industrial Tanks & Silos",
  lead: "Non-contact and contact level measurement from 0.3m to 80m range. Capacitive, radar, ultrasonic, and IoT technologies. Factory-calibrated with 72-hour aging test on every unit.",
  overview: "AccuMeasureTech level sensors cover every industrial level measurement scenario: capacitive for aggressive chemicals, 80GHz FMCW radar for high-accuracy non-contact measurement up to 80m, ultrasonic for economical non-contact applications, and IoT WiFi smart sensors for remote tank monitoring. Each sensor is factory-calibrated with a calibration certificate and backed by a 2-year warranty.",
  selectionGuide: [
    {
      title: "Match technology to media",
      description:
        "Use 80GHz radar for vapor, dust, foam, and tall silos; ultrasonic for clean water tanks; capacitive probes for oil, chemicals, and compact vessels.",
    },
    {
      title: "Confirm tank geometry",
      description:
        "Send tank height, nozzle size, mounting location, internal structures, and dead-zone constraints so the beam angle and range are correct.",
    },
    {
      title: "Specify output and approval",
      description:
        "Confirm 4-20mA, HART, RS485 Modbus, or IoT requirements, plus CE, ATEX, or RoHS documentation needed by your market.",
    },
  ],
};

export const metadata: Metadata = generateCategoryMetadata(data);

export default function LevelSensorsPage() {
  return <CategoryPage data={data} />;
}
