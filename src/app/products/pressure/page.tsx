import type { Metadata } from "next";
import { CategoryPage, generateCategoryMetadata, type CategoryPageData } from "../category-page";

const data: CategoryPageData = {
  slug: "pressure",
  label: "Pressure Sensors",
  title: "Pressure Sensors — Piezoresistive Transmitters & Digital Gauges | AccuMeasureTech",
  description: "Industrial pressure transmitters and digital pressure gauges. 0–10kPa to 0–100MPa range. ±0.25% to ±0.5% FS accuracy. ATEX Ex d IIC T6 certified. Aerospace-grade vibration resistance. From $28. AccuMeasureTech factory, Xi'an.",
  h1: "Pressure Sensors for Industrial & Hazardous Applications",
  lead: "Piezoresistive pressure transmitters and battery-powered digital gauges. 0–10kPa to 0–100MPa. ±0.25% FS accuracy. ATEX explosion-proof. Aerospace-grade vibration resistance.",
  overview: "AccuMeasureTech pressure sensors cover the full spectrum of industrial pressure measurement: ATEX-certified transmitters for hazardous areas, battery-powered digital gauges as drop-in replacements for mechanical gauges, and high-accuracy piezoresistive sensors for hydraulic and process control applications. Every unit undergoes 72-hour temperature cycling with a calibration certificate.",
  selectionGuide: [
    {
      title: "Set the pressure range",
      description:
        "Choose a range with enough overload margin for pump starts, hydraulic spikes, and process surges; avoid running the transmitter at its limit.",
    },
    {
      title: "Confirm process connection",
      description:
        "Specify G1/4, G1/2, NPT, M20, flange, diaphragm seal, or sanitary connection, plus wetted material compatibility with the medium.",
    },
    {
      title: "Check environment and certification",
      description:
        "For hazardous areas or outdoor sites, confirm ATEX Ex d IIC T6, IP rating, vibration resistance, cable entry, and calibration certificate needs.",
    },
  ],
};

export const metadata: Metadata = generateCategoryMetadata(data);

export default function PressureSensorsPage() {
  return <CategoryPage data={data} />;
}
