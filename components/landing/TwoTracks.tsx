"use client";

import { motion } from "framer-motion";
import { Wrench, Users, ArrowRight, Sparkles, Shield } from "lucide-react";
import Link from "next/link";

const tracks = [
  {
    id: "platform",
    icon: Wrench,
    label: "Platform",
    headline: "Use Our Tools",
    subheadline: "Guided by our experts",
    description:
      "Access our AI-powered development platform with senior engineers guiding your journey. You maintain control while we provide the expertise.",
    features: [
      "AI prototyping & development tools",
      "Expert guidance at every step",
      "Your team stays in the driver's seat",
      "Faster iteration, lower cost",
    ],
    cta: "Try the Platform",
    href: "https://prototyper.startupvision.net",
    external: true,
    accentColor: "violet",
  },
  {
    id: "partnership",
    icon: Users,
    label: "Partnership",
    headline: "Our Team Builds",
    subheadline: "Amplified by AI",
    description:
      "Our senior engineers, designers, and strategists build your product. AI tools magnify their capabilities—delivering enterprise quality at startup speed.",
    features: [
      "Dedicated senior team",
      "AI-accelerated development",
      "Full product ownership",
      "From concept to scale",
    ],
    cta: "Explore Partnership",
    href: "#services",
    external: false,
    accentColor: "blue",
  },
];

export function TwoTracks() {
  return (
    <section className="py-32 px-6 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm font-medium tracking-widest text-violet-600 dark:text-violet-400 uppercase mb-4">
            Two Ways to Work With Us
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-zinc-900 dark:text-white mb-6 leading-tight max-w-3xl mx-auto">
            Choose the engagement model{" "}
            <span className="font-semibold">that fits your needs</span>
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            Whether you want to leverage our tools with expert guidance, or have our team
            build while AI magnifies their output—we meet you where you are.
          </p>
        </motion.div>

        {/* Two Tracks Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {tracks.map((track, index) => {
            const Icon = track.icon;
            const isViolet = track.accentColor === "violet";

            return (
              <motion.div
                key={track.id}
                className="relative group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <div className="h-full p-10 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all">
                  {/* Label badge */}
                  <div className="flex items-center gap-3 mb-8">
                    <div
                      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        isViolet
                          ? "bg-violet-100 dark:bg-violet-900/30"
                          : "bg-blue-100 dark:bg-blue-900/30"
                      }`}
                    >
                      <Icon
                        className={`w-6 h-6 ${
                          isViolet
                            ? "text-violet-600 dark:text-violet-400"
                            : "text-blue-600 dark:text-blue-400"
                        }`}
                      />
                    </div>
                    <span
                      className={`text-sm font-medium tracking-wide uppercase ${
                        isViolet
                          ? "text-violet-600 dark:text-violet-400"
                          : "text-blue-600 dark:text-blue-400"
                      }`}
                    >
                      {track.label}
                    </span>
                  </div>

                  {/* Headlines */}
                  <h3 className="text-3xl font-semibold text-zinc-900 dark:text-white mb-2">
                    {track.headline}
                  </h3>
                  <p className="text-lg text-zinc-500 dark:text-zinc-500 mb-6">
                    {track.subheadline}
                  </p>

                  {/* Description */}
                  <p className="text-zinc-600 dark:text-zinc-400 mb-8 leading-relaxed">
                    {track.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-3 mb-10">
                    {track.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300"
                      >
                        <div
                          className={`w-1.5 h-1.5 rounded-full ${
                            isViolet ? "bg-violet-500" : "bg-blue-500"
                          }`}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  {track.external ? (
                    <a
                      href={track.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center font-medium transition-colors group/link ${
                        isViolet
                          ? "text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300"
                          : "text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                      }`}
                    >
                      {track.cta}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </a>
                  ) : (
                    <Link
                      href={track.href}
                      className={`inline-flex items-center font-medium transition-colors group/link ${
                        isViolet
                          ? "text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300"
                          : "text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                      }`}
                    >
                      {track.cta}
                      <ArrowRight className="ml-2 w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom note */}
        <motion.p
          className="text-center text-zinc-500 dark:text-zinc-500 mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Not sure which is right for you?{" "}
          <Link
            href="#contact"
            className="text-zinc-900 dark:text-white hover:text-violet-600 dark:hover:text-violet-400 transition-colors underline underline-offset-4"
          >
            Let's talk
          </Link>
        </motion.p>
      </div>
    </section>
  );
}
