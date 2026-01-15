"use client";

import { motion } from "framer-motion";
import { Users, Award, Globe, Briefcase, MapPin } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "20+",
    label: "Years Average Experience",
  },
  {
    icon: Award,
    value: "Senior",
    label: "Engineers & Designers",
  },
  {
    icon: MapPin,
    value: "100% US",
    label: "Native English Speakers",
  },
  {
    icon: Briefcase,
    value: "SaaS to Sale",
    label: "Founder Experience",
  },
];

export function About() {
  return (
    <section id="about" className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block px-4 py-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-full text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-6">
              A Collective of Senior Builders
            </h2>
            <div className="space-y-4 text-zinc-600 dark:text-zinc-400">
              <p className="text-lg">
                We're not a typical agency. StartupVision is a collective of{" "}
                <span className="font-semibold text-zinc-900 dark:text-white">
                  Senior Engineers, Designers, and QA specialists
                </span>{" "}
                who've spent decades building enterprise-grade systems.
              </p>
              <p>
                Our founders have{" "}
                <span className="font-semibold text-zinc-900 dark:text-white">
                  taken SaaS products from concept to successful acquisition
                </span>
                . We understand what it takes to build products that scale, sell,
                and stand up to scrutiny.
              </p>
              <p>
                With an{" "}
                <span className="font-semibold text-zinc-900 dark:text-white">
                  MBA in the mix
                </span>{" "}
                and an average of{" "}
                <span className="font-semibold text-zinc-900 dark:text-white">
                  over 20 years of experience
                </span>
                , we bring both technical excellence and business acumen to every
                project.
              </p>
              <p>
                Our specialty?{" "}
                <span className="font-semibold text-zinc-900 dark:text-white">
                  Compliance-first systems built for worldwide deployment
                </span>
                . Whether you need WCAG, SOC2, GDPR, or HIPAA compliance, we bake
                it in from day one—not as an afterthought.
              </p>
              <p>
                And communication is never a barrier—our entire team consists of{" "}
                <span className="font-semibold text-zinc-900 dark:text-white">
                  US-based native English speakers
                </span>
                . Clear, direct communication on every call and in every deliverable.
              </p>
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  className="p-6 rounded-2xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center mb-3">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <p className="text-2xl font-bold text-zinc-900 dark:text-white mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">
                    {stat.label}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom emphasis */}
        <motion.div
          className="mt-16 p-8 rounded-2xl bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border border-violet-500/20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-lg text-zinc-700 dark:text-zinc-300">
            <span className="font-semibold text-zinc-900 dark:text-white">
              Enterprise-grade quality.
            </span>{" "}
            <span className="font-semibold text-zinc-900 dark:text-white">
              Startup-friendly approach.
            </span>{" "}
            We bring big-company expertise without the big-company overhead.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
