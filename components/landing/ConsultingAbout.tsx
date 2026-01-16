"use client";

import { motion } from "framer-motion";

export function ConsultingAbout() {
  return (
    <section id="about" className="py-32 px-6 bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-medium tracking-widest text-violet-400 uppercase mb-4">
              Who We Are
            </p>
            <h2 className="text-4xl md:text-5xl font-light leading-tight mb-8">
              A collective of
              <br />
              <span className="font-semibold">senior builders</span>
            </h2>
            <div className="space-y-6 text-zinc-400 text-lg leading-relaxed">
              <p>
                Not a typical agency. StartupVision is a collective of senior engineers,
                designers, and technology executives who've spent decades building
                enterprise-grade systems.
              </p>
              <p>
                Our founders have taken SaaS products from concept to successful acquisition.
                We understand what it takes to build products that scale, sell, and stand up
                to due diligence.
              </p>
            </div>
          </motion.div>

          {/* Right: Details */}
          <motion.div
            className="lg:pt-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="space-y-12">
              <div>
                <p className="text-3xl font-light mb-2">Senior Team</p>
                <p className="text-zinc-500">
                  20+ years average experience. Engineers and designers who've built
                  at scale for Fortune 500 companies and high-growth startups alike.
                </p>
              </div>
              <div>
                <p className="text-3xl font-light mb-2">US-Based</p>
                <p className="text-zinc-500">
                  100% US-based native English speakers. Clear communication,
                  aligned time zones, direct collaboration.
                </p>
              </div>
              <div>
                <p className="text-3xl font-light mb-2">Compliance-First</p>
                <p className="text-zinc-500">
                  WCAG, SOC2, GDPR, HIPAA expertise built into every engagement.
                  Enterprise-grade standards from day one.
                </p>
              </div>
              <div>
                <p className="text-3xl font-light mb-2">Founder Experience</p>
                <p className="text-zinc-500">
                  We've been where you are. MBA perspective combined with technical
                  depth. We speak both languages fluently.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
