"use client";

import { motion } from "framer-motion";
import { ArrowRight, Lightbulb, Rocket, Package, Shield, Building2 } from "lucide-react";
import Link from "next/link";

const products = [
  {
    id: "prototype",
    title: "Prototype",
    subtitle: "Validate your idea",
    description: "AI-powered working demo with a live URL. Test your concept in minutes, not months.",
    icon: Lightbulb,
    timeline: "Minutes",
    color: "bg-violet-600",
  },
  {
    id: "mvp",
    title: "MVP",
    subtitle: "Launch your product",
    description: "Full-stack product with authentication, database, and core features. Ready for your first users.",
    icon: Rocket,
    timeline: "6-8 Weeks",
    color: "bg-blue-600",
  },
  {
    id: "product",
    title: "Product 1.0",
    subtitle: "Go to market",
    description: "Production-ready web and mobile applications. Native iOS and Android, App Store submission included.",
    icon: Package,
    timeline: "12-16 Weeks",
    color: "bg-emerald-600",
  },
  {
    id: "compliance",
    title: "Compliance",
    subtitle: "Meet standards",
    description: "WCAG accessibility, SOC2 preparation, GDPR and HIPAA compliance. Built-in, not bolted on.",
    icon: Shield,
    timeline: "Ongoing",
    color: "bg-amber-600",
  },
  {
    id: "enterprise",
    title: "Enterprise Integration",
    subtitle: "Scale & integrate",
    description: "Enterprise architecture, custom integrations, dedicated support, and SLA guarantees.",
    icon: Building2,
    timeline: "Custom",
    color: "bg-rose-600",
  },
];

export function ProductsMenu() {
  return (
    <section id="products" className="py-32 px-6 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-medium tracking-widest text-violet-600 dark:text-violet-400 uppercase mb-4">
            Products
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-zinc-900 dark:text-white leading-tight max-w-3xl">
            The startup journey,{" "}
            <span className="font-semibold">productized</span>
          </h2>
          <p className="mt-6 text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
            Clear deliverables at every stage. Start anywhere, progress at your pace.
          </p>
        </motion.div>

        {/* Journey line (desktop) */}
        <div className="hidden lg:block relative mb-8">
          <div className="absolute top-6 left-0 right-0 h-0.5 bg-zinc-200 dark:bg-zinc-800" />
          <div className="flex justify-between">
            {products.map((product, index) => (
              <div key={product.id} className="relative flex flex-col items-center">
                <div className={`w-12 h-12 rounded-full ${product.color} flex items-center justify-center z-10`}>
                  <product.icon className="w-6 h-6 text-white" />
                </div>
                {index < products.length - 1 && (
                  <ArrowRight className="absolute -right-8 top-3 w-5 h-5 text-zinc-300 dark:text-zinc-700" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {products.map((product, index) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.id}
                className="group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="h-full p-6 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors">
                  {/* Mobile icon */}
                  <div className={`lg:hidden w-10 h-10 rounded-lg ${product.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>

                  <div className="text-xs font-medium text-zinc-500 dark:text-zinc-500 uppercase tracking-wide mb-2">
                    {product.timeline}
                  </div>
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-1 group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-3">
                    {product.subtitle}
                  </p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-500">
                    {product.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link
            href="#contact"
            className="inline-flex items-center text-zinc-900 dark:text-white font-medium hover:text-violet-600 dark:hover:text-violet-400 transition-colors group"
          >
            Discuss your product needs
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
