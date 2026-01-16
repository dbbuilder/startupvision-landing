"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  Rocket,
  Smartphone,
  Code,
  Shield,
  Users,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const modules = [
  {
    id: "build",
    label: "Build",
    title: "From Idea to Product",
    description:
      "Whether you're validating a concept or launching a full platform, we build what you need at every stage.",
    services: [
      {
        name: "Prototype",
        desc: "Working demo in minutes to validate your idea",
        icon: Lightbulb,
      },
      {
        name: "MVP Development",
        desc: "Full-stack product with auth, database, and core features",
        icon: Rocket,
      },
      {
        name: "Mobile Apps",
        desc: "Native iOS and Android, App Store ready",
        icon: Smartphone,
      },
    ],
    gradient: "from-violet-600 to-purple-700",
    bgGradient: "from-violet-600/10 to-purple-700/10",
  },
  {
    id: "scale",
    label: "Scale",
    title: "Grow with Confidence",
    description:
      "As your product gains traction, we help you scale infrastructure, team, and processes without breaking what works.",
    services: [
      {
        name: "Code Review & Optimization",
        desc: "Expert assessment and performance tuning",
        icon: Code,
      },
      {
        name: "Compliance & Security",
        desc: "WCAG, SOC2, GDPR, HIPAA—built in, not bolted on",
        icon: Shield,
      },
      {
        name: "Enterprise Architecture",
        desc: "Scale to millions with dedicated support",
        icon: Users,
      },
    ],
    gradient: "from-cyan-600 to-blue-700",
    bgGradient: "from-cyan-600/10 to-blue-700/10",
  },
];

export function ServiceModules() {
  return (
    <section id="services" className="py-32 px-6 bg-white dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-violet-600 dark:text-violet-400 font-medium tracking-wide uppercase text-sm mb-4">
            What We Do
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 dark:text-white mb-6">
            Full-Service Product Development
          </h2>
          <p className="text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Everything you need to take your product from concept to market leader.
            One partner, complete coverage.
          </p>
        </motion.div>

        {/* Large service modules */}
        <div className="space-y-16">
          {modules.map((module, moduleIndex) => (
            <motion.div
              key={module.id}
              className={`relative rounded-3xl overflow-hidden bg-gradient-to-br ${module.bgGradient} border border-zinc-200 dark:border-zinc-800`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: moduleIndex * 0.2 }}
            >
              <div className="p-10 md:p-16">
                {/* Module header */}
                <div className="mb-12">
                  <span
                    className={`inline-block px-4 py-1.5 rounded-full bg-gradient-to-r ${module.gradient} text-white text-sm font-semibold mb-4`}
                  >
                    {module.label}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
                    {module.title}
                  </h3>
                  <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
                    {module.description}
                  </p>
                </div>

                {/* Services grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {module.services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <motion.div
                        key={service.name}
                        className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 group hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: moduleIndex * 0.2 + index * 0.1 }}
                      >
                        <div
                          className={`w-12 h-12 rounded-xl bg-gradient-to-br ${module.gradient} flex items-center justify-center mb-4`}
                        >
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h4 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                          {service.name}
                        </h4>
                        <p className="text-zinc-600 dark:text-zinc-400">
                          {service.desc}
                        </p>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
