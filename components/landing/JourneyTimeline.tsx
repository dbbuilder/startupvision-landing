"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Lightbulb, Rocket, Smartphone, Shield, Building2 } from "lucide-react";

const phases = [
  {
    id: "prototype",
    title: "Prototype",
    timeline: "Minutes",
    icon: Lightbulb,
    color: "from-violet-500 to-purple-600",
    bgColor: "bg-violet-500/10",
    borderColor: "border-violet-500/30",
    description: "AI-powered working demo with a live URL",
    features: [
      "Working interactive prototype",
      "Shareable live URL",
      "Instant feedback gathering",
      "Validate your concept fast",
    ],
    priceRange: "Free - $99",
  },
  {
    id: "mvp",
    title: "MVP",
    timeline: "6-8 Weeks",
    icon: Rocket,
    color: "from-blue-500 to-cyan-600",
    bgColor: "bg-blue-500/10",
    borderColor: "border-blue-500/30",
    description: "Full backend with core features and user authentication",
    features: [
      "Complete backend infrastructure",
      "User authentication & accounts",
      "Core feature implementation",
      "Database & API integration",
    ],
    priceRange: "Starting at $15,000",
  },
  {
    id: "app",
    title: "App",
    timeline: "12-16 Weeks",
    icon: Smartphone,
    color: "from-emerald-500 to-green-600",
    bgColor: "bg-emerald-500/10",
    borderColor: "border-emerald-500/30",
    description: "Production-ready iOS and Android applications",
    features: [
      "Native iOS & Android apps",
      "App Store submission",
      "Push notifications",
      "Analytics & crash reporting",
    ],
    priceRange: "Starting at $35,000",
  },
  {
    id: "compliance",
    title: "Compliance",
    timeline: "Ongoing",
    icon: Shield,
    color: "from-amber-500 to-orange-600",
    bgColor: "bg-amber-500/10",
    borderColor: "border-amber-500/30",
    description: "WCAG, SOC2, GDPR, HIPAA compliance and App Store readiness",
    features: [
      "WCAG accessibility compliance",
      "SOC2 audit preparation",
      "GDPR & HIPAA readiness",
      "Security hardening",
    ],
    priceRange: "Starting at $5,000",
  },
  {
    id: "enterprise",
    title: "Enterprise",
    timeline: "Custom",
    icon: Building2,
    color: "from-rose-500 to-pink-600",
    bgColor: "bg-rose-500/10",
    borderColor: "border-rose-500/30",
    description: "Scale with dedicated team and custom development",
    features: [
      "Dedicated development team",
      "Custom integrations",
      "24/7 support & monitoring",
      "Scaling & optimization",
    ],
    priceRange: "Starting at $50,000+",
  },
];

export function JourneyTimeline() {
  const [activePhase, setActivePhase] = useState<string | null>(null);

  return (
    <section className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            The StartupVision Journey
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            From initial idea to enterprise scale. Start at any point in the
            journey.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Connection Line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-violet-500 via-emerald-500 to-rose-500 transform -translate-y-1/2 rounded-full opacity-30" />

          {/* Phase Cards */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-4">
            {phases.map((phase, index) => {
              const Icon = phase.icon;
              const isActive = activePhase === phase.id;

              return (
                <motion.div
                  key={phase.id}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.button
                    onClick={() =>
                      setActivePhase(isActive ? null : phase.id)
                    }
                    className={`w-full p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                      isActive
                        ? `${phase.bgColor} ${phase.borderColor}`
                        : "bg-white dark:bg-zinc-800 border-zinc-200 dark:border-zinc-700 hover:border-zinc-300 dark:hover:border-zinc-600"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {/* Icon */}
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${phase.color} flex items-center justify-center mb-4`}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>

                    {/* Title & Timeline */}
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-1">
                      {phase.title}
                    </h3>
                    <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 mb-2">
                      {phase.timeline}
                    </p>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                      {phase.description}
                    </p>
                  </motion.button>

                  {/* Expanded Details */}
                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div
                          className={`mt-4 p-4 rounded-xl ${phase.bgColor} border ${phase.borderColor}`}
                        >
                          <ul className="space-y-2">
                            {phase.features.map((feature, i) => (
                              <li
                                key={i}
                                className="flex items-center gap-2 text-sm text-zinc-700 dark:text-zinc-300"
                              >
                                <div
                                  className={`w-1.5 h-1.5 rounded-full bg-gradient-to-br ${phase.color}`}
                                />
                                {feature}
                              </li>
                            ))}
                          </ul>
                          <p className="mt-4 text-sm font-semibold text-zinc-800 dark:text-zinc-200">
                            {phase.priceRange}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Start Anywhere Message */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <p className="text-zinc-600 dark:text-zinc-400">
            <span className="font-semibold text-zinc-900 dark:text-white">
              Start at any point.
            </span>{" "}
            Whether you have an idea, a prototype, or an existing app, we meet
            you where you are.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
