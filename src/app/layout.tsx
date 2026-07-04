import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { FloatingButtons } from "@/components/layout/floating-buttons";
import { JsonLd } from "@/components/json-ld";
import { organizationJsonLd, websiteJsonLd } from "@/lib/seo";

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
    default: "AccuMeasure | Level Sensor, Flow Meter & Pressure Transmitter Manufacturer",
    template: "%s | AccuMeasure",
  },
  description:
    "Factory-direct industrial measurement instruments from Xi'an, China. Capacitive & radar level sensors, electromagnetic flow meters, pressure transmitters. ISO9001 certified. 10+ years exporting to 40+ countries.",
  keywords: [
    "level sensor manufacturer",
    "radar level transmitter",
    "electromagnetic flow meter",
    "pressure transmitter",
    "industrial measurement instruments",
    "AccuMeasure",
  ],
  metadataBase: new URL("https://accumeasuretech.com"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "AccuMeasure Instruments",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "AccuMeasure Instruments Co., Ltd.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AccuMeasure | Level Sensor, Flow Meter & Pressure Transmitter Manufacturer",
    description:
      "Factory-direct industrial measurement instruments from Xi'an, China. ISO9001 certified. 10+ years exporting to 40+ countries.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
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
        <Navbar />
        <main>{children}</main>
        <Footer />
        <FloatingButtons />
      </body>
    </html>
  );
}
