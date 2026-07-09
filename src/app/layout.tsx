import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingButtons } from "@/components/layout/floating-buttons";
import { JsonLd } from "@/components/json-ld";
import { Analytics } from "@/components/analytics";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "AccuMeasureTech | Precision Measurement Sensors & Industrial Measuring Solutions",
    template: "%s",
  },
  description: siteConfig.description,
  keywords: [
    "level sensor manufacturer",
    "radar level transmitter",
    "electromagnetic flow meter",
    "pressure transmitter",
    "industrial measurement instruments",
    "AccuMeasure",
  ],
  metadataBase: new URL("https://www.accumeasuretech.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "AccuMeasure Instruments",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "AccuMeasure Instruments Co., Ltd.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AccuMeasure | Level Sensor, Flow Meter & Pressure Transmitter Manufacturer",
    description: siteConfig.description,
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/logo-mark.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} pb-14 font-sans antialiased md:pb-0`}
      >
        <JsonLd data={[organizationJsonLd(), websiteJsonLd()]} />
        <Analytics />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
