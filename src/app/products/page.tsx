import type { Metadata } from "next";
import { Suspense } from "react";
import { ProductsExplorer } from "@/components/products-explorer";
import { Breadcrumbs } from "@/components/breadcrumbs";
import { companyFacts } from "@/lib/facts";

export const metadata: Metadata = {
  title: "Products — Level Sensors, Flow Meters & Pressure Transmitters",
  description:
    `Browse 9 factory-direct industrial measurement instruments: capacitive & 80GHz radar level sensors, electromagnetic & ultrasonic flow meters, piezoresistive pressure transmitters. From $${companyFacts.priceFrom}.`,
  alternates: { canonical: "/products" },
  robots: { index: true, follow: true },
  keywords: [
    "level sensor",
    "radar level transmitter",
    "electromagnetic flow meter",
    "pressure transmitter",
    "industrial measurement",
  ],
};

export default function ProductsPage() {
  return (
    <div>
      <section className="pt-24 pb-12 bg-bg-light">
        <div className="container-max">
          <Breadcrumbs items={[{ name: "Products", href: "/products" }]} />
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

      <Suspense fallback={null}>
        <ProductsExplorer />
      </Suspense>
    </div>
  );
}
