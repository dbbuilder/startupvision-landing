"use client";

import { motion } from "framer-motion";
import { Users, Award, MapPin, Briefcase, GraduationCap, Shield } from "lucide-react";

export function BentoAbout() {
  return (
    <section id="about" className="py-24 px-6 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 bg-zinc-100 dark:bg-zinc-800 rounded-full text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-4">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            A Collective of Senior Builders
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Not a typical agency. We're the team you wish you had in-house.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* Main intro - spans 2 cols */}
          <motion.div
            className="md:col-span-2 lg:col-span-2 lg:row-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="h-full p-8 rounded-3xl bg-gradient-to-br from-zinc-900 to-zinc-800 text-white">
              <h3 className="text-2xl font-bold mb-4">Who We Are</h3>
              <div className="space-y-4 text-zinc-300">
                <p>
                  StartupVision is a collective of{" "}
                  <span className="text-white font-semibold">
                    Senior Engineers, Designers, and QA specialists
                  </span>{" "}
                  who've spent decades building enterprise-grade systems.
                </p>
                <p>
                  Our founders have{" "}
                  <span className="text-white font-semibold">
                    taken SaaS products from concept to successful acquisition
                  </span>
                  . We know what it takes to build products that scale, sell, and stand up to scrutiny.
                </p>
                <p>
                  With an MBA in the mix and{" "}
                  <span className="text-white font-semibold">20+ years average experience</span>,
                  we bring both technical excellence and business acumen.
                </p>
              </div>
            </div>
          </motion.div>

          {/* 20+ Years */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="h-full p-6 rounded-2xl bg-violet-500 text-white">
              <Users className="w-8 h-8 mb-4 opacity-80" />
              <div className="text-4xl font-bold mb-1">20+</div>
              <div className="text-sm opacity-80">Years Average Experience</div>
            </div>
          </motion.div>

          {/* Senior Team */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="h-full p-6 rounded-2xl bg-blue-500 text-white">
              <Award className="w-8 h-8 mb-4 opacity-80" />
              <div className="text-4xl font-bold mb-1">Senior</div>
              <div className="text-sm opacity-80">Engineers & Designers</div>
            </div>
          </motion.div>

          {/* 100% US */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="h-full p-6 rounded-2xl bg-emerald-500 text-white">
              <MapPin className="w-8 h-8 mb-4 opacity-80" />
              <div className="text-4xl font-bold mb-1">100%</div>
              <div className="text-sm opacity-80">US Native English Speakers</div>
            </div>
          </motion.div>

          {/* SaaS to Sale */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="h-full p-6 rounded-2xl bg-amber-500 text-white">
              <Briefcase className="w-8 h-8 mb-4 opacity-80" />
              <div className="text-2xl font-bold mb-1">SaaS to Sale</div>
              <div className="text-sm opacity-80">Founder Experience</div>
            </div>
          </motion.div>

          {/* Compliance First - spans 2 cols */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <div className="h-full p-6 rounded-2xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">
                    Compliance-First Systems
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400">
                    WCAG, SOC2, GDPR, HIPAA—we bake compliance in from day one, not as an afterthought.
                    Built for worldwide deployment.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* MBA */}
          <motion.div
            className="md:col-span-1 lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <div className="h-full p-6 rounded-2xl bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border border-violet-500/20">
              <div className="flex items-center gap-4">
                <GraduationCap className="w-8 h-8 text-violet-500" />
                <div>
                  <div className="font-bold text-zinc-900 dark:text-white">
                    Enterprise-grade quality. Startup-friendly approach.
                  </div>
                  <div className="text-sm text-zinc-600 dark:text-zinc-400">
                    Big-company expertise without the big-company overhead.
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
