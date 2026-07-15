import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms governing use of the AccuMeasure website, product information, quotations, intellectual property, and business inquiries.",
  alternates: { canonical: "/terms" },
  openGraph: {
    url: "/terms",
    title: "Terms of Service | AccuMeasure",
    description:
      "Terms governing use of the AccuMeasure website, product information, quotations, intellectual property, and business inquiries.",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630, alt: "AccuMeasure" }],
  },
  robots: { index: false, follow: true },
};

export default function TermsPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container-max max-w-3xl">
        <h1 className="text-4xl font-bold text-dark mb-8">Terms of Service</h1>
        <div className="prose prose-slate max-w-none text-muted space-y-4">
          <p className="text-sm">Last updated: {new Date().getFullYear()}</p>
          <p>
            By accessing this website, you agree to these terms. This site is operated by
            AccuMeasure Instruments Co., Ltd. for informational purposes.
          </p>
          <h2 className="text-xl font-semibold text-dark">Product Information</h2>
          <p>
            Specifications, pricing, and availability are subject to change without notice.
            All quotes are valid for 30 days unless otherwise stated.
          </p>
          <h2 className="text-xl font-semibold text-dark">Intellectual Property</h2>
          <p>
            All content on this site, including product designs and documentation, is the
            property of AccuMeasure or its licensors and may not be reproduced without
            permission.
          </p>
          <h2 className="text-xl font-semibold text-dark">Contact</h2>
          <p>
            Questions about these terms? Email us at info@accumeasuretech.com.
          </p>
        </div>
      </div>
    </div>
  );
}
