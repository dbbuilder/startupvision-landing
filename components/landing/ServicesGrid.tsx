"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  Rocket,
  Smartphone,
  Shield,
  Building2,
  Code,
  Clock,
  DollarSign,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    id: "prototype",
    icon: Lightbulb,
    title: "Prototype",
    tagline: "Validate fast",
    description:
      "Get a working prototype in minutes, not months. Test your idea with real users before investing in development.",
    timeline: "Minutes",
    price: "Free - $99",
    color: "from-violet-500 to-purple-600",
    features: [
      "AI-powered generation",
      "Working interactive demo",
      "Shareable live URL",
      "Iterate in real-time",
    ],
  },
  {
    id: "mvp",
    icon: Rocket,
    title: "MVP",
    tagline: "Launch ready",
    description:
      "Transform your validated prototype into a real product with authentication, database, and core features.",
    timeline: "6-8 Weeks",
    price: "Starting at $15,000",
    color: "from-blue-500 to-cyan-600",
    features: [
      "Full backend infrastructure",
      "User authentication",
      "Database & APIs",
      "Admin dashboard",
    ],
  },
  {
    id: "app",
    icon: Smartphone,
    title: "App",
    tagline: "Go native",
    description:
      "Launch on iOS and Android with native apps that delight users and meet App Store requirements.",
    timeline: "12-16 Weeks",
    price: "Starting at $35,000",
    color: "from-emerald-500 to-green-600",
    features: [
      "iOS & Android native",
      "App Store submission",
      "Push notifications",
      "Offline support",
    ],
  },
  {
    id: "code-review",
    icon: Code,
    title: "Code Review",
    tagline: "Expert eyes",
    description:
      "Get your existing codebase reviewed by senior engineers. Actionable recommendations for security, performance, and maintainability.",
    timeline: "1-2 Weeks",
    price: "Starting at $2,500",
    color: "from-sky-500 to-blue-600",
    features: [
      "Architecture assessment",
      "Security vulnerability scan",
      "Performance optimization",
      "Best practices report",
    ],
  },
  {
    id: "compliance",
    icon: Shield,
    title: "Compliance",
    tagline: "Stay protected",
    description:
      "Meet industry standards and regulations. WCAG accessibility, SOC2, GDPR, HIPAA - we've got you covered.",
    timeline: "2-4 Weeks",
    price: "Starting at $5,000",
    color: "from-amber-500 to-orange-600",
    features: [
      "WCAG accessibility",
      "SOC2 preparation",
      "GDPR & HIPAA",
      "Security audit",
    ],
  },
  {
    id: "enterprise",
    icon: Building2,
    title: "Enterprise",
    tagline: "Scale big",
    description:
      "Dedicated team, custom development, and 24/7 support. Scale your product to millions of users.",
    timeline: "Custom",
    price: "Starting at $50,000+",
    color: "from-rose-500 to-pink-600",
    features: [
      "Dedicated team",
      "Custom integrations",
      "24/7 support",
      "SLA guarantees",
    ],
  },
];

export function ServicesGrid() {
  return (
    <section className="py-24 px-6 bg-white dark:bg-zinc-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            className="inline-block px-4 py-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-full text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Services
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Everything You Need to Build
          </motion.h2>
          <motion.p
            className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            From your first prototype to enterprise scale, we provide end-to-end
            product development services.
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.id}
                className={`relative p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors group ${
                  index === 4 ? "md:col-span-2 lg:col-span-1" : ""
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}
                >
                  <Icon className="w-6 h-6 text-white" />
                </div>

                {/* Title & Tagline */}
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                    {service.title}
                  </h3>
                  <span className="text-xs font-medium text-zinc-500 dark:text-zinc-500 px-2 py-0.5 bg-zinc-100 dark:bg-zinc-800 rounded-full">
                    {service.tagline}
                  </span>
                </div>

                {/* Description */}
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-1.5 mb-6">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400"
                    >
                      <div
                        className={`w-1 h-1 rounded-full bg-gradient-to-br ${service.color}`}
                      />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Timeline & Price */}
                <div className="flex items-center justify-between pt-4 border-t border-zinc-100 dark:border-zinc-800">
                  <div className="flex items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-500">
                    <Clock className="w-4 h-4" />
                    {service.timeline}
                  </div>
                  <div className="flex items-center gap-1.5 text-sm font-medium text-zinc-700 dark:text-zinc-300">
                    <DollarSign className="w-4 h-4" />
                    {service.price}
                  </div>
                </div>

                {/* Hover Arrow */}
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="w-5 h-5 text-zinc-400" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Button
            size="lg"
            className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-100"
          >
            View All Services
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
