import Link from "next/link";
import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container-max">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-xl">A</span>
              </div>
              <span className="text-xl font-bold">AccuMeasure</span>
            </div>
            <p className="text-white/70 text-sm mb-6">
              Level · Flow · Pressure instruments from Xi&apos;an, China
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-6">Products</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/products/level" className="text-white/70 hover:text-white transition-colors text-sm">
                  Level Sensors
                </Link>
              </li>
              <li>
                <Link href="/products/flow" className="text-white/70 hover:text-white transition-colors text-sm">
                  Flow Meters
                </Link>
              </li>
              <li>
                <Link href="/products/pressure" className="text-white/70 hover:text-white transition-colors text-sm">
                  Pressure Sensors
                </Link>
              </li>
              <li>
                <Link href="/customization" className="text-white/70 hover:text-white transition-colors text-sm">
                  Customization
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-6">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/industries" className="text-white/70 hover:text-white transition-colors text-sm">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-white/70 hover:text-white transition-colors text-sm">
                  Case Studies
                </Link>
              </li>
              <li>
                <Link href="/resources" className="text-white/70 hover:text-white transition-colors text-sm">
                  Resources
                </Link>
              </li>
              <li>
                <Link href="/certificates" className="text-white/70 hover:text-white transition-colors text-sm">
                  Certificates
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-6">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-white/70 hover:text-white transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/quality" className="text-white/70 hover:text-white transition-colors text-sm">
                  Quality
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-white/70 hover:text-white transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/about#factory" className="text-white/70 hover:text-white transition-colors text-sm">
                  Factory Tour
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-6">Contact</h3>
            <ul className="space-y-3 text-white/70 text-sm">
              <li>{siteConfig.address}</li>
              <li>
                <a href={`mailto:${siteConfig.email}`} className="hover:text-white transition-colors">
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a href={`tel:${siteConfig.phone}`} className="hover:text-white transition-colors">
                  {siteConfig.phoneDisplay}
                </a>
              </li>
              <li>{siteConfig.officeHours}</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/70 text-sm">
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-white/70 hover:text-white transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/70 hover:text-white transition-colors text-sm">
              Terms of Service
            </Link>
            <Link href="/sitemap.xml" className="text-white/70 hover:text-white transition-colors text-sm">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
