import type { Metadata } from "next";
import { ProductsExplorer } from "@/components/products-explorer";

export const metadata: Metadata = {
  title: "Products — Level Sensors, Flow Meters & Pressure Transmitters",
  description:
    "Browse 9 factory-direct industrial measurement instruments: capacitive & 80GHz radar level sensors, electromagnetic & ultrasonic flow meters, piezoresistive pressure transmitters. From $15.",
  alternates: { canonical: "/products" },
  keywords: [
    "level sensor",
    "radar level transmitter",
    "electromagnetic flow meter",
    "pressure transmitter",
    "industrial measurement",
  ],
};

const validCategories = ["all", "level", "flow", "pressure"] as const;
type Category = (typeof validCategories)[number];

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
          <nav className="text-sm text-muted mb-4" aria-label="Breadcrumb">
            <a href="/" className="hover:text-primary">Home</a>
            <span className="mx-2">›</span>
            <span className="text-dark">Products</span>
          </nav>
          <div className="text-center">
            <h1 className="text-4xl font-bold text-dark mb-4">Products</h1>
            <p className="text-muted max-w-2xl mx-auto">
              Industrial measurement instruments, factory-direct. Every unit ships with a calibration certificate.
            </p>
          </div>
        </div>
      </section>

      <ProductsExplorer initialCategory={initialCategory} />
    </div>
  );
}
