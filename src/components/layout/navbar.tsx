"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, MessageSquare, Factory } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "Level Sensors", href: "/products/level" },
      { label: "Flow Meters", href: "/products/flow" },
      { label: "Pressure Sensors", href: "/products/pressure" },
    ],
  },
  { label: "Customization", href: "/customization" },
  { label: "Industries", href: "/industries" },
  { label: "Resources", href: "/resources" },
  { label: "Blog", href: "/blog" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container-max">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
            <span className="text-xl font-bold text-dark">AccuMeasure</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => {
              const hasChildren = item.children && item.children.length > 0;
              const isActive = pathname === item.href || (hasChildren && item.children.some(c => pathname.startsWith(c.href.split('?')[0])));

              return (
                <div key={item.label} className="relative group">
                  {hasChildren ? (
                    <Link
                      href={item.href}
                      aria-haspopup="true"
                      className={cn(
                        "flex items-center gap-1 py-2 text-sm font-medium transition-colors",
                        isActive ? "text-primary" : "text-muted hover:text-dark"
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
                        isActive ? "text-primary" : "text-muted hover:text-dark"
                      )}
                    >
                      {item.label}
                    </Link>
                  )}

                  {hasChildren && (
                    <div className="absolute left-0 top-full pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-focus-within:opacity-100 group-focus-within:visible transition-all duration-200">
                      <div className="bg-white border border-border rounded-xl shadow-lg p-2 min-w-48">
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
            className="md:hidden p-2"
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
        <div id="mobile-navigation" className="md:hidden bg-white border-t border-border">
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
                        {item.children.map((child) => (
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
