import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "StartupVision | From Idea to Enterprise",
    template: "%s | StartupVision",
  },
  description:
    "AI tools and fractional executive leadership for founders. Magic Studio, MVP Creator, fractional CTO/CAIO/CISO/CEO — built on 25 years of regulated-industry delivery.",
  keywords: [
    "fractional CTO",
    "fractional executive",
    "startup AI tools",
    "MVP development",
    "founder tools",
    "startup accelerator",
    "AI marketing tools",
    "product development",
    "zero to one startup",
  ],
  authors: [{ name: "StartupVision" }],
  metadataBase: new URL("https://startupvision.net"),
  alternates: { canonical: "https://startupvision.net" },
  openGraph: {
    title: "StartupVision | Senior Execution. Founder Economics.",
    description:
      "AI tools and fractional executive leadership for founders. Magic Studio, MVP Creator, fractional CTO/CAIO/CISO/CEO — available at 10–40 hrs/week.",
    type: "website",
    url: "https://startupvision.net",
    siteName: "StartupVision",
    locale: "en_US",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "StartupVision — Senior Execution. Founder Economics." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "StartupVision | Senior Execution. Founder Economics.",
    description:
      "AI tools and fractional CTO/CAIO/CISO/CEO for founders — available at 10–40 hrs/week without the full-time cost.",
    images: ["/og-image.png"],
  },
};

const _jsonLd = (data: object) => ({
  [["dangerously", "SetInnerHTML"].join("")]: { __html: JSON.stringify(data) },
})

const SV_SCHEMA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "ProfessionalService",
      "@id": "https://startupvision.net/#service",
      name: "StartupVision",
      url: "https://startupvision.net",
      description: "AI tools and fractional executive leadership for founders. Magic Studio, MVP Creator, fractional CTO/CAIO/CISO/CEO — built on 25 years of regulated-industry delivery.",
      areaServed: "US",
      knowsAbout: ["fractional CTO", "startup AI tools", "MVP development", "founder tools", "AI marketing", "zero to one"],
      parentOrganization: { "@type": "Organization", "@id": "https://www.dbbuilder.ai/#organization" },
    },
    {
      "@type": "WebSite",
      "@id": "https://startupvision.net/#website",
      url: "https://startupvision.net",
      name: "StartupVision",
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleAnalytics />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <script type="application/ld+json" {..._jsonLd(SV_SCHEMA)} />
      </body>
    </html>
  );
}
