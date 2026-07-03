"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Gauge, Waves, Activity } from "lucide-react";
import { products } from "@/lib/products";
import { cn } from "@/lib/utils";

type Category = "all" | "level" | "flow" | "pressure";

export function ProductsExplorer({ initialCategory }: { initialCategory: Category }) {
  const [activeCategory, setActiveCategory] = useState<Category>(initialCategory);

  const filteredProducts =
    activeCategory === "all"
      ? products
      : products.filter((p) => p.category === activeCategory);

  const tabs: { label: string; value: Category | "customization"; icon?: typeof Gauge }[] = [
    { label: "All", value: "all" },
    { label: "Level", value: "level", icon: Gauge },
    { label: "Flow", value: "flow", icon: Waves },
    { label: "Pressure", value: "pressure", icon: Activity },
    { label: "Customization", value: "customization" },
  ];

  return (
    <>
      <section className="py-8 border-b border-border">
        <div className="container-max">
          <div className="flex flex-wrap gap-2 justify-center">
            {tabs.map((tab) => {
              const isActive =
                tab.value !== "customization" && activeCategory === tab.value;
              return (
                <button
                  key={tab.value}
                  onClick={() => {
                    if (tab.value === "customization") {
                      window.location.href = "/customization";
                    } else {
                      setActiveCategory(tab.value as Category);
                    }
                  }}
                  className={cn(
                    "px-6 py-2 rounded-lg font-medium transition-colors flex items-center gap-2",
                    isActive
                      ? "bg-primary text-white"
                      : "bg-white text-muted hover:text-dark"
                  )}
                >
                  {tab.icon && <tab.icon className="w-4 h-4" />}
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-max">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/products/${product.slug}`}
                className="card group"
              >
                <div className="aspect-video bg-primary/10 rounded-xl flex items-center justify-center mb-6 overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={400}
                    height={225}
                    className="object-cover"
                  />
                </div>
                <div className="text-sm text-cta font-medium mb-2">
                  {product.model}
                </div>
                <h3 className="text-xl font-semibold text-dark mb-3">
                  {product.name}
                </h3>
                <p className="text-muted mb-4 line-clamp-2">{product.tagline}</p>
                <div className="flex items-center justify-between">
                  <span className="text-lg font-bold text-dark">
                    From ${product.priceFrom}
                  </span>
                  <span className="text-accent font-medium inline-flex items-center gap-2">
                    View Details <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-bg-light">
        <div className="container-max text-center">
          <h2 className="text-2xl font-bold text-dark mb-4">
            Can&apos;t find what you need?
          </h2>
          <p className="text-muted mb-6">
            We do custom manufacturing tailored to your specifications
          </p>
          <Link href="/customization" className="btn-primary">
            Request a Custom Solution
          </Link>
        </div>
      </section>
    </>
  );
}
