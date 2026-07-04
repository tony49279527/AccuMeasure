import type { Metadata } from "next";
import { CategoryPage, generateCategoryMetadata, type CategoryPageData } from "../category-page";

const data: CategoryPageData = {
  slug: "level",
  label: "Level Sensors",
  title: "Level Sensors — Capacitive, Radar & Ultrasonic Level Measurement | AccuMeasureTech",
  description: "Factory-direct level sensors: capacitive, 80GHz FMCW radar, ultrasonic, and IoT WiFi smart level sensors. ±2mm to ±1% FS accuracy, 0.3–80m range. ATEX certified. From $22. ISO 9001 factory in Xi'an, China.",
  h1: "Level Sensors for Industrial Tanks &amp; Silos",
  lead: "Non-contact and contact level measurement from 0.3m to 80m range. Capacitive, radar, ultrasonic, and IoT technologies. Factory-calibrated with 72-hour aging test on every unit.",
  overview: "AccuMeasureTech level sensors cover every industrial level measurement scenario: capacitive for aggressive chemicals, 80GHz FMCW radar for high-accuracy non-contact measurement up to 80m, ultrasonic for economical non-contact applications, and IoT WiFi smart sensors for remote tank monitoring. Each sensor is factory-calibrated with a calibration certificate and backed by a 2-year warranty.",
};

export const metadata: Metadata = generateCategoryMetadata(data);

export default function LevelSensorsPage() {
  return <CategoryPage data={data} />;
}
