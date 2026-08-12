import type { Metadata } from "next";
import { CategoryPage, generateCategoryMetadata, type CategoryPageData } from "../category-page";

const data: CategoryPageData = {
  slug: "level",
  label: "Level Sensors",
  title: "Industrial Level Sensor Manufacturer | AccuMeasure",
  description: "Compare capacitive, radar, ultrasonic, and connected level sensors by medium, tank geometry, installation, output, and documentation requirements.",
  h1: "Level Sensors for Industrial Tanks & Silos",
  lead: "Compare contact and non-contact level technologies for tanks and silos. Confirm the selected model's current range, accuracy, output, materials, test documents, and warranty in the controlled datasheet and quotation.",
  overview: "Use process conditions and installation constraints to narrow capacitive, radar, ultrasonic, or connected level sensing. Published card values are selection inputs, not a final project specification; engineering must confirm the model, configuration, document scope, and commercial terms for the RFQ.",
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
        "Confirm the required signal or protocol and list any market or hazardous-area documentation. Verify the exact certificate holder, model scope, marking, and validity before ordering.",
    },
  ],
};

export const metadata: Metadata = generateCategoryMetadata(data);

export default function LevelSensorsPage() {
  return <CategoryPage data={data} />;
}
