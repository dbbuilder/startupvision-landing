"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  Rocket,
  Smartphone,
  Code,
  Shield,
  Building2,
  ArrowRight,
  Check,
} from "lucide-react";

const services = [
  {
    id: "prototype",
    title: "Prototype",
    subtitle: "Minutes",
    description: "AI-powered working demo with a live URL. Validate before you invest.",
    icon: Lightbulb,
    price: "Free - $99",
    color: "from-violet-500 to-purple-600",
    features: ["Interactive prototype", "Shareable URL", "Real-time iteration"],
    size: "large",
  },
  {
    id: "mvp",
    title: "MVP",
    subtitle: "6-8 Weeks",
    description: "Full backend, auth, database. Everything you need to launch.",
    icon: Rocket,
    price: "$15,000+",
    color: "from-blue-500 to-cyan-600",
    features: ["Backend infrastructure", "User authentication", "Admin dashboard"],
    size: "medium",
  },
  {
    id: "app",
    title: "App",
    subtitle: "12-16 Weeks",
    description: "Native iOS and Android. App Store ready.",
    icon: Smartphone,
    price: "$35,000+",
    color: "from-emerald-500 to-green-600",
    features: ["iOS & Android", "Push notifications", "Offline support"],
    size: "medium",
  },
  {
    id: "code-review",
    title: "Code Review",
    subtitle: "1-2 Weeks",
    description: "Expert assessment of your codebase.",
    icon: Code,
    price: "$2,500+",
    color: "from-sky-500 to-blue-600",
    features: ["Architecture review", "Security scan"],
    size: "small",
  },
  {
    id: "compliance",
    title: "Compliance",
    subtitle: "Ongoing",
    description: "WCAG, SOC2, GDPR, HIPAA ready.",
    icon: Shield,
    price: "$5,000+",
    color: "from-amber-500 to-orange-600",
    features: ["Accessibility", "Security audit"],
    size: "small",
  },
  {
    id: "enterprise",
    title: "Enterprise",
    subtitle: "Custom",
    description: "Dedicated team, 24/7 support, scale to millions.",
    icon: Building2,
    price: "$50,000+",
    color: "from-rose-500 to-pink-600",
    features: ["Dedicated team", "SLA guarantees"],
    size: "small",
  },
];

export function BentoServices() {
  return (
    <section id="services" className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900/50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-1.5 bg-white dark:bg-zinc-800 rounded-full text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-4 shadow-sm">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            Everything You Need to Build
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto">
            From first prototype to enterprise scale. Pick your starting point.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
          {/* Prototype - Large spanning 2 cols */}
          <motion.div
            className="md:col-span-2 lg:row-span-2 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="h-full p-8 rounded-3xl bg-gradient-to-br from-violet-500 to-purple-600 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative">
                <Lightbulb className="w-10 h-10 mb-4 opacity-80" />
                <div className="text-sm font-medium opacity-80 mb-1">Start Here</div>
                <h3 className="text-3xl font-bold mb-2">Prototype</h3>
                <p className="text-lg opacity-90 mb-6 max-w-sm">
                  AI-powered working demo with a live URL. Validate your idea in minutes, not months.
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Interactive demo", "Shareable URL", "Instant feedback", "Real-time iteration"].map((f) => (
                    <span key={f} className="px-3 py-1 bg-white/20 rounded-full text-sm">
                      {f}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-3xl font-bold">Free - $99</div>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* MVP */}
          <motion.div
            className="lg:col-span-2 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="h-full p-6 rounded-3xl bg-gradient-to-br from-blue-500 to-cyan-600 text-white relative overflow-hidden">
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <div className="relative flex flex-col h-full">
                <Rocket className="w-8 h-8 mb-3 opacity-80" />
                <h3 className="text-2xl font-bold mb-1">MVP</h3>
                <p className="text-sm opacity-80 mb-2">6-8 Weeks</p>
                <p className="opacity-90 mb-4 flex-grow">
                  Full backend with auth, database, and core features. Launch ready.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold">$15,000+</div>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* App */}
          <motion.div
            className="lg:col-span-2 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="h-full p-6 rounded-3xl bg-gradient-to-br from-emerald-500 to-green-600 text-white relative overflow-hidden">
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-white/10 rounded-full blur-2xl" />
              <div className="relative flex flex-col h-full">
                <Smartphone className="w-8 h-8 mb-3 opacity-80" />
                <h3 className="text-2xl font-bold mb-1">App</h3>
                <p className="text-sm opacity-80 mb-2">12-16 Weeks</p>
                <p className="opacity-90 mb-4 flex-grow">
                  Native iOS and Android. App Store submission included.
                </p>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold">$35,000+</div>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Code Review */}
          <motion.div
            className="group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <div className="h-full p-5 rounded-2xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:border-sky-500/50 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 flex items-center justify-center mb-3">
                <Code className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">Code Review</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-3">1-2 Weeks</p>
              <div className="text-lg font-bold text-zinc-900 dark:text-white">$2,500+</div>
            </div>
          </motion.div>

          {/* Compliance */}
          <motion.div
            className="group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="h-full p-5 rounded-2xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:border-amber-500/50 transition-colors">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 flex items-center justify-center mb-3">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-1">Compliance</h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-3">Ongoing</p>
              <div className="text-lg font-bold text-zinc-900 dark:text-white">$5,000+</div>
            </div>
          </motion.div>

          {/* Enterprise */}
          <motion.div
            className="md:col-span-2 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            <div className="h-full p-6 rounded-2xl bg-gradient-to-r from-zinc-900 to-zinc-800 dark:from-zinc-800 dark:to-zinc-700 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-48 h-48 bg-rose-500/20 rounded-full blur-3xl" />
              <div className="relative flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-500 to-pink-600 flex items-center justify-center flex-shrink-0">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold mb-1">Enterprise</h3>
                  <p className="text-sm opacity-70">Dedicated team, custom development, 24/7 support</p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold">$50,000+</div>
                  <div className="text-sm opacity-70">Custom timeline</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
