"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, MessageSquare } from "lucide-react";
import { cn } from "@/lib/utils";
import { BrandLogo } from "@/components/brand/logo";
import { products } from "@/lib/products";

const productChildren = [
  { label: "All Products", href: "/products" },
  { label: "Level Sensors", href: "/products/level", group: "category" as const },
  { label: "Flow Meters", href: "/products/flow", group: "category" as const },
  { label: "Pressure Sensors", href: "/products/pressure", group: "category" as const },
  ...products.map((p) => ({
    label: `${p.model} — ${p.name}`,
    href: `/products/${p.slug}`,
    group: "model" as const,
    category: p.category,
  })),
];

const navItems = [
  {
    label: "Products",
    href: "/products",
    mega: true,
    children: productChildren,
  },
  {
    label: "Solutions",
    href: "/industries",
    children: [
      { label: "Industries", href: "/industries" },
      { label: "Applications", href: "/applications" },
      { label: "Comparison Guides", href: "/compare" },
      { label: "Case Studies", href: "/case-studies" },
      { label: "Customization / OEM", href: "/customization" },
      { label: "Resources", href: "/resources" },
    ],
  },
  {
    label: "Company",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Quality", href: "/quality" },
      { label: "Certificates", href: "/certificates" },
      { label: "Blog", href: "/blog" },
    ],
  },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container-max">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center">
            <BrandLogo />
          </Link>

          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isActive =
                pathname === item.href ||
                (hasChildren &&
                  item.children.some((c) =>
                    pathname.startsWith((c.href.split("?")[0] ?? c.href)),
                  ));

              return (
                <div key={item.label} className="relative group">
                  {hasChildren ? (
                    <Link
                      href={item.href}
                      aria-haspopup="true"
                      className={cn(
                        "flex items-center gap-1 py-2 text-sm font-medium transition-colors",
                        isActive ? "text-primary" : "text-muted hover:text-dark",
                      )}
                    >
                      {item.label}
                      <ChevronDown className="w-4 h-4" />
                    </Link>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "py-2 text-sm font-medium transition-colors",
                        isActive ? "text-primary" : "text-muted hover:text-dark",
                      )}
                    >
                      {item.label}
                    </Link>
                  )}

                  {hasChildren && item.mega && (
                    <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200 z-50">
                      <div className="bg-white border border-border rounded-xl shadow-lg p-6 w-[720px]">
                        <div className="grid grid-cols-3 gap-6">
                          {(["level", "flow", "pressure"] as const).map((cat) => (
                            <div key={cat}>
                              <Link
                                href={`/products/${cat}`}
                                className="text-sm font-semibold text-dark hover:text-primary mb-3 block capitalize"
                              >
                                {cat === "level"
                                  ? "Level Sensors"
                                  : cat === "flow"
                                    ? "Flow Meters"
                                    : "Pressure Sensors"}
                              </Link>
                              <div className="space-y-1">
                                {products
                                  .filter((p) => p.category === cat)
                                  .map((p) => (
                                    <Link
                                      key={p.id}
                                      href={`/products/${p.slug}`}
                                      className="block px-2 py-1.5 text-sm text-muted hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                                    >
                                      <span className="font-medium text-dark">{p.model}</span>
                                      <span className="block text-xs text-muted truncate">
                                        {p.name}
                                      </span>
                                    </Link>
                                  ))}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="mt-4 pt-4 border-t border-border flex justify-between items-center">
                          <Link href="/products" className="text-sm font-medium text-accent hover:underline">
                            Browse all products
                          </Link>
                          <Link href="/applications" className="text-sm font-medium text-muted hover:text-primary">
                            Application guides →
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}

                  {hasChildren && !item.mega && (
                    <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200">
                      <div className="bg-white border border-border rounded-xl shadow-lg p-2 min-w-52">
                        {item.children.map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-muted hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <Link href="/contact" className="hidden md:flex btn-primary">
            <MessageSquare className="w-4 h-4" />
            Get a Quote
          </Link>

          <button
            type="button"
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div id="mobile-navigation" className="lg:hidden bg-white border-t border-border max-h-[80vh] overflow-y-auto">
          <div className="container-max py-4 space-y-2">
            {navItems.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              return (
                <div key={item.label}>
                  {hasChildren ? (
                    <>
                      <Link
                        href={item.href}
                        className="block px-4 py-2 font-medium text-dark hover:text-primary"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                      <div className="pl-4 space-y-1">
                        {(item.mega
                          ? [
                              { label: "All Products", href: "/products" },
                              { label: "Level Sensors", href: "/products/level" },
                              { label: "Flow Meters", href: "/products/flow" },
                              { label: "Pressure Sensors", href: "/products/pressure" },
                              { label: "Application Guides", href: "/applications" },
                              { label: "Comparison Guides", href: "/compare" },
                            ]
                          : item.children
                        ).map((child) => (
                          <Link
                            key={child.label}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-muted hover:text-primary"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="block px-4 py-2 font-medium text-dark hover:text-primary"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              );
            })}
            <Link
              href="/contact"
              className="block mx-4 mt-4 btn-primary text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Get a Quote
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
