"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    number: "01",
    title: "Product Development",
    description:
      "End-to-end product development from prototype to production. Web applications, mobile apps, and enterprise platforms built by senior engineers.",
    capabilities: ["Rapid Prototyping", "MVP Development", "Mobile Applications", "Enterprise Platforms"],
  },
  {
    number: "02",
    title: "Technical Strategy",
    description:
      "Architecture decisions, technology selection, and technical roadmaps aligned with your business objectives and growth trajectory.",
    capabilities: ["Architecture Design", "Technology Assessment", "Scalability Planning", "Technical Due Diligence"],
  },
  {
    number: "03",
    title: "Security & Compliance",
    description:
      "Comprehensive security programs and compliance frameworks. WCAG, SOC2, GDPR, HIPAA—built into every engagement from day one.",
    capabilities: ["Security Audits", "Compliance Programs", "Risk Assessment", "Penetration Testing"],
  },
  {
    number: "04",
    title: "Code Review & Optimization",
    description:
      "Expert assessment of existing codebases with actionable recommendations for performance, security, and maintainability.",
    capabilities: ["Code Quality Assessment", "Performance Optimization", "Security Review", "Technical Debt Analysis"],
  },
];

export function ConsultingServices() {
  return (
    <section id="services" className="py-32 px-6 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-medium tracking-widest text-violet-600 dark:text-violet-400 uppercase mb-4">
            Services
          </p>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <h2 className="text-4xl md:text-5xl font-light text-zinc-900 dark:text-white leading-tight max-w-2xl">
              Comprehensive technology services for{" "}
              <span className="font-semibold">ambitious startups</span>
            </h2>
            <Link
              href="#contact"
              className="inline-flex items-center text-zinc-900 dark:text-white font-medium hover:text-violet-600 dark:hover:text-violet-400 transition-colors group whitespace-nowrap"
            >
              View all capabilities
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>

        {/* Services list */}
        <div className="space-y-0">
          {services.map((service, index) => (
            <motion.div
              key={service.number}
              className="border-t border-zinc-200 dark:border-zinc-800 py-12 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                {/* Number */}
                <div className="lg:col-span-1">
                  <span className="text-sm font-medium text-zinc-400 dark:text-zinc-600">
                    {service.number}
                  </span>
                </div>

                {/* Title */}
                <div className="lg:col-span-3">
                  <h3 className="text-2xl font-semibold text-zinc-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                    {service.title}
                  </h3>
                </div>

                {/* Description */}
                <div className="lg:col-span-4">
                  <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Capabilities */}
                <div className="lg:col-span-4">
                  <div className="flex flex-wrap gap-2">
                    {service.capabilities.map((cap) => (
                      <span
                        key={cap}
                        className="px-3 py-1 text-sm text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 rounded"
                      >
                        {cap}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
