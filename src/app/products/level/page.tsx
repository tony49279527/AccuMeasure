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
  overview: "AccuMeasure level sensors cover every industrial level measurement scenario: capacitive for aggressive chemicals, 80GHz FMCW radar for high-accuracy non-contact measurement up to 80m, ultrasonic for economical non-contact applications, and IoT WiFi smart sensors for remote tank monitoring. Each sensor is factory-calibrated with a calibration certificate and backed by a 2-year warranty.",
  relatedGuides: [
    {
      title: "Radar Level Sensor for Oil Tanks",
      description: "Check vapor, nozzle, tank geometry, output, and hazardous-area inputs for fuel and chemical storage.",
      href: "/applications/radar-level-sensor-for-oil-tank",
    },
    {
      title: "Radar vs Ultrasonic Level Sensor",
      description: "Compare range, vapor, dust, foam, accuracy, installation, and cost before selecting a technology.",
      href: "/applications/radar-vs-ultrasonic-level-sensor",
    },
    {
      title: "How to Choose a Radar Level Sensor",
      description: "Work through frequency, process conditions, beam angle, mounting, output, and certification.",
      href: "/blog/how-to-choose-radar-level-sensor",
    },
    {
      title: "80GHz vs 26GHz Radar",
      description: "Understand where frequency, beam angle, range, and process conditions affect performance.",
      href: "/blog/80ghz-vs-26ghz-radar-level-sensor",
    },
    {
      title: "Choosing a Level Sensor Supplier in China",
      description: "Review factory, calibration, documentation, engineering support, samples, and export checks.",
      href: "/blog/how-to-choose-level-sensor-supplier-china",
    },
  ],
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
