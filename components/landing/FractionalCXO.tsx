"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const roles = [
  {
    title: "Fractional CTO",
    description:
      "Technical strategy, architecture decisions, and engineering leadership without the full-time commitment.",
  },
  {
    title: "Fractional CISO",
    description:
      "Security leadership, compliance frameworks, and risk management for growing organizations.",
  },
  {
    title: "Fractional CPO",
    description:
      "Product strategy, roadmap development, and user experience leadership to drive growth.",
  },
  {
    title: "Fractional CMO",
    description:
      "Go-to-market strategy, brand development, and growth marketing for technology products.",
  },
];

export function FractionalCXO() {
  return (
    <section id="leadership" className="py-32 px-6 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-medium tracking-widest text-violet-600 dark:text-violet-400 uppercase mb-4">
              Executive Leadership
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-zinc-900 dark:text-white mb-6 leading-tight">
              Fractional
              <br />
              <span className="font-semibold">C-Suite</span>
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8 max-w-md leading-relaxed">
              Senior executive leadership on a fractional basis. Get the expertise
              you need without the overhead of a full-time hire.
            </p>
            <Link
              href="#contact"
              className="inline-flex items-center text-zinc-900 dark:text-white font-medium hover:text-violet-600 dark:hover:text-violet-400 transition-colors group"
            >
              Discuss your needs
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          {/* Right: Roles */}
          <div className="space-y-6">
            {roles.map((role, index) => (
              <motion.div
                key={role.title}
                className="p-8 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                  {role.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400">{role.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
