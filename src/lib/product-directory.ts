import type { Product } from "./types";

/**
 * Minimal, public product data for client-side navigation, search, and form
 * prefill. Keep commercial, compliance, and non-rendered catalog fields in
 * the server-only product records.
 */
export type ProductDirectoryEntry = Pick<
  Product,
  "id" | "slug" | "model" | "name" | "category" | "tagline" | "description" | "image"
>;

export const productDirectory: ProductDirectoryEntry[] = [
  {
    id: "1",
    slug: "am-cl100-capacitive-level-sensor",
    model: "AM-CL100",
    name: "Capacitive Level Sensor",
    category: "level",
    tagline: "Capacitive level measurement for industrial tank projects.",
    description:
      "Review medium, range, materials, installation, output, and current documents before selecting a capacitive level configuration.",
    image: "/products/am-cl100-v2.jpg",
  },
  {
    id: "2",
    slug: "am-rl80-80ghz-radar-level-transmitter",
    model: "AM-RL80",
    name: "80GHz FMCW Radar Level Transmitter",
    category: "level",
    tagline: "Non-contact radar level measurement for project evaluation.",
    description:
      "Review tank geometry, process conditions, output, hazardous-area requirements, and current model documents before selection.",
    image: "/products/am-rl80-v2.jpg",
  },
  {
    id: "3",
    slug: "am-ul20-ultrasonic-level-sensor",
    model: "AM-UL20",
    name: "Ultrasonic Level Sensor",
    category: "level",
    tagline: "Ultrasonic level measurement for liquid tank projects.",
    description:
      "Review medium, tank geometry, environmental conditions, output, and the current configuration before selecting an ultrasonic option.",
    image: "/products/am-ul20-v2.jpg",
  },
  {
    id: "4",
    slug: "am-wl50-iot-wifi-level-sensor",
    model: "AM-WL50",
    name: "IoT WiFi Smart Level Sensor",
    category: "level",
    tagline: "Connected level-monitoring option for project review.",
    description:
      "Review connectivity, power, tank conditions, data requirements, and current model documentation before selection.",
    image: "/products/am-wl50-v2.jpg",
  },
  {
    id: "5",
    slug: "am-emf100-electromagnetic-flow-meter",
    model: "AM-EMF100",
    name: "Electromagnetic Flow Meter",
    category: "flow",
    tagline: "Electromagnetic flow measurement for conductive-liquid projects.",
    description:
      "Review conductivity, pipe details, materials, output, installation, and required documents before selecting the configuration.",
    image: "/products/am-emf100-v2.jpg",
  },
  {
    id: "6",
    slug: "am-uf200-ultrasonic-flow-meter",
    model: "AM-UF200",
    name: "Ultrasonic Flow Meter",
    category: "flow",
    tagline: "Clamp-on ultrasonic flow measurement for pipe projects.",
    description:
      "Review pipe material, wall condition, fluid properties, access, installation, and current model instructions before selection.",
    image: "/products/am-uf200-v2.jpg",
  },
  {
    id: "7",
    slug: "am-mf50-mass-flow-meter",
    model: "AM-MF50",
    name: "Thermal Mass Flow Meter",
    category: "flow",
    tagline: "Thermal-mass flow measurement for gas projects.",
    description:
      "Review gas composition, range, pressure, temperature, output, and installation details against the current configuration.",
    image: "/products/am-mf50-v2.jpg",
  },
  {
    id: "8",
    slug: "am-pt300-pressure-transmitter",
    model: "AM-PT300",
    name: "Piezoresistive Pressure Transmitter",
    category: "pressure",
    tagline: "Piezoresistive pressure measurement for industrial applications.",
    description:
      "Review pressure range, connection, output, mounting, environmental conditions, and current model documentation before selection.",
    image: "/products/am-pt300-v2.jpg",
  },
  {
    id: "9",
    slug: "am-pg200-digital-pressure-gauge",
    model: "AM-PG200",
    name: "Smart Digital Pressure Gauge",
    category: "pressure",
    tagline: "Digital pressure display for project evaluation.",
    description:
      "Review range, display, power, process connection, environmental conditions, and current model documentation before selection.",
    image: "/products/am-pg200-v2.jpg",
  },
];

export function getProductDirectoryById(id: string) {
  return productDirectory.find((product) => product.id === id);
}
