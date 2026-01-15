import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/landing/Navbar";
import { Footer } from "@/components/landing/Footer";
import { GoogleAnalytics } from "@/components/analytics/GoogleAnalytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "StartupVision | From Idea to Enterprise",
  description:
    "Full-service product development from prototype to enterprise scale. Human-powered, AI-accelerated. Start at any stage of your product journey.",
  keywords: [
    "product development",
    "startup",
    "MVP",
    "app development",
    "prototype",
    "enterprise",
    "software agency",
  ],
  authors: [{ name: "StartupVision" }],
  openGraph: {
    title: "StartupVision | From Idea to Enterprise",
    description:
      "Full-service product development from prototype to enterprise scale. Human-powered, AI-accelerated.",
    type: "website",
    url: "https://startupvision.net",
  },
  twitter: {
    card: "summary_large_image",
    title: "StartupVision | From Idea to Enterprise",
    description:
      "Full-service product development from prototype to enterprise scale. Human-powered, AI-accelerated.",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleAnalytics />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
