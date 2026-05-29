"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Prototype", href: "/services/prototype" },
    { label: "MVP", href: "/services/mvp" },
    { label: "App Development", href: "/services/app" },
    { label: "Compliance", href: "/services/compliance" },
    { label: "Enterprise", href: "/services/enterprise" },
  ],
  constellation: [
    { label: "DBBuilder (parent)", href: "https://dbbuilder.ai" },
    { label: "SchoolVision", href: "https://schoolvision.ai" },
    { label: "ServiceVision", href: "https://servicevisionai.com" },
    { label: "MobileID.ai", href: "https://mobileid.ai" },
    { label: "Portfolio", href: "https://portfolio.servicevision.io" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "#contact" },
    { label: "Blog", href: "/blog" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-4 h-4 text-white" />
              </div>
              <span className="text-xl font-bold">StartupVision</span>
            </Link>
            <p className="text-zinc-400 text-sm mb-3">
              From idea to enterprise. Human-powered, AI-accelerated product
              development.
            </p>
            <p className="text-zinc-500 text-xs">
              A division of the DBBuilder constellation by Vision Companies.
              One of four stars, built on the{" "}
              <a
                href="https://visiondataplatform.com"
                className="text-zinc-300 hover:text-white underline underline-offset-2"
              >
                Vision Data Platform
              </a>
              {" "}— 25 years of regulated-industry delivery, Est. 2001.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Constellation */}
          <div>
            <h4 className="font-semibold mb-4">Constellation</h4>
            <ul className="space-y-2">
              {footerLinks.constellation.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-zinc-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-zinc-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-zinc-500 text-sm">
            &copy; {new Date().getFullYear()} StartupVision. All rights
            reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-zinc-500 hover:text-white text-sm transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-zinc-500 hover:text-white text-sm transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
