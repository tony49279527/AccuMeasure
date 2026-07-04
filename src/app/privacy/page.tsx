import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How AccuMeasure collects, uses, and protects your personal information.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="container-max max-w-3xl">
        <h1 className="text-4xl font-bold text-dark mb-8">Privacy Policy</h1>
        <div className="prose prose-slate max-w-none text-muted space-y-4">
          <p className="text-sm">Last updated: {new Date().getFullYear()}</p>
          <p>
            AccuMeasure Instruments Co., Ltd. (&ldquo;we&rdquo;, &ldquo;us&rdquo;) respects your
            privacy. This policy explains how we collect, use, and protect information you
            provide through this website.
          </p>
          <h2 className="text-xl font-semibold text-dark">Information We Collect</h2>
          <p>
            We collect the information you voluntarily submit via our inquiry and
            customization forms: name, company, email, phone/WhatsApp, country, and project
            requirements. We do not use tracking cookies for advertising.
          </p>
          <h2 className="text-xl font-semibold text-dark">How We Use Your Information</h2>
          <p>
            Your information is used solely to respond to your inquiry, prepare quotes, and
            communicate about your project. We never sell or rent your data to third parties.
          </p>
          <h2 className="text-xl font-semibold text-dark">Data Storage</h2>
          <p>
            Inquiry data is stored securely and retained for up to 2 years for project
            reference. You may request deletion of your data at any time by emailing
            info@accumeasuretech.com.
          </p>
          <h2 className="text-xl font-semibold text-dark">Contact</h2>
          <p>
            Questions about this policy? Email us at info@accumeasuretech.com.
          </p>
        </div>
      </div>
    </div>
  );
}
