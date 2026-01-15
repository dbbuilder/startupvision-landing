"use client";

import { motion } from "framer-motion";
import { Sparkles, Globe, Wand2, Code2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const entryPoints = [
  {
    icon: Sparkles,
    title: "Have a new idea?",
    description:
      "Start with a prototype in minutes. Test your concept before investing months of development.",
    cta: "Start at Prototype",
    phase: "Prototype",
    color: "from-violet-500 to-purple-600",
    bgGradient: "from-violet-500/10 to-purple-600/10",
  },
  {
    icon: Globe,
    title: "Have a WordPress site?",
    description:
      "Escape maintenance hell. Migrate to a modern, scalable platform that grows with you.",
    cta: "Modernize & Scale",
    phase: "MVP",
    color: "from-blue-500 to-cyan-600",
    bgGradient: "from-blue-500/10 to-cyan-600/10",
  },
  {
    icon: Wand2,
    title: "Built on Lovable or Cursor?",
    description:
      "Take your AI-generated prototype to production with real engineering and support.",
    cta: "Go to Production",
    phase: "App",
    color: "from-emerald-500 to-green-600",
    bgGradient: "from-emerald-500/10 to-green-600/10",
  },
  {
    icon: Code2,
    title: "Have an existing app?",
    description:
      "Need compliance, scaling, or modernization? We help you reach the next level.",
    cta: "Level Up",
    phase: "Compliance / Enterprise",
    color: "from-amber-500 to-orange-600",
    bgGradient: "from-amber-500/10 to-orange-600/10",
  },
];

export function EntryPoints() {
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
            Start Anywhere
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Where Are You Today?
          </motion.h2>
          <motion.p
            className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            No matter where you are in your product journey, we have a path
            forward for you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {entryPoints.map((entry, index) => {
            const Icon = entry.icon;

            return (
              <motion.div
                key={entry.title}
                className={`relative p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-gradient-to-br ${entry.bgGradient} overflow-hidden group`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Background decoration */}
                <div className="absolute -right-8 -top-8 w-32 h-32 bg-gradient-to-br opacity-20 rounded-full blur-2xl" />

                <div className="relative">
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${entry.color} flex items-center justify-center mb-6`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-2">
                    {entry.title}
                  </h3>
                  <p className="text-zinc-600 dark:text-zinc-400 mb-6">
                    {entry.description}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center justify-between">
                    <Button
                      variant="ghost"
                      className="group/btn p-0 h-auto font-semibold text-zinc-900 dark:text-white hover:bg-transparent"
                    >
                      {entry.cta}
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </Button>
                    <span className="text-xs font-medium text-zinc-500 dark:text-zinc-500 px-3 py-1 bg-white/50 dark:bg-zinc-800/50 rounded-full">
                      {entry.phase}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
