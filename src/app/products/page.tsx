import type { Metadata } from "next";
import { ProductsExplorer } from "@/components/products-explorer";
import { Breadcrumbs } from "@/components/breadcrumbs";

const validCategories = ["all", "level", "flow", "pressure"] as const;
type Category = (typeof validCategories)[number];

export function generateMetadata({
  searchParams,
}: {
  searchParams: { category?: string };
}): Metadata {
  const requested = searchParams.category as Category | undefined;
  const hasFilter =
    requested && validCategories.includes(requested) && requested !== "all";

  return {
    title: "Products — Level Sensors, Flow Meters & Pressure Transmitters",
    description:
      "Browse 9 factory-direct industrial measurement instruments: capacitive & 80GHz radar level sensors, electromagnetic & ultrasonic flow meters, piezoresistive pressure transmitters. From $15.",
    alternates: { canonical: "/products" },
    robots: hasFilter
      ? { index: false, follow: true }
      : { index: true, follow: true },
    keywords: [
      "level sensor",
      "radar level transmitter",
      "electromagnetic flow meter",
      "pressure transmitter",
      "industrial measurement",
    ],
  };
}

export default function ProductsPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const requested = searchParams.category as Category | undefined;
  const initialCategory: Category =
    requested && validCategories.includes(requested) ? requested : "all";

  return (
    <div>
      <section className="pt-24 pb-12 bg-bg-light">
        <div className="container-max">
          <Breadcrumbs items={[{ name: "Products" }]} />
          <div className="text-center">
            <h1 className="text-4xl font-bold text-dark mb-4">
              Industrial Measurement Products: Level Sensors, Flow Meters &amp; Pressure Transmitters
            </h1>
            <p className="text-muted max-w-2xl mx-auto">
              Search factory-direct level, flow, and pressure instruments by model, application,
              output signal, certification, or measuring range. Every unit ships with a calibration certificate.
            </p>
          </div>
        </div>
      </section>

      <ProductsExplorer initialCategory={initialCategory} />
    </div>
  );
}
