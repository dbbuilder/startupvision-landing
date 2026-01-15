"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Users,
  Zap,
  CheckCircle2,
  XCircle,
  Sparkles,
} from "lucide-react";

const humanTasks = [
  "Strategic product decisions",
  "User experience design",
  "Architecture planning",
  "Code review & quality",
  "Security auditing",
  "Deployment & DevOps",
  "Customer communication",
  "Problem solving",
];

const aiTasks = [
  "Rapid prototyping",
  "Boilerplate generation",
  "Documentation drafting",
  "Test case generation",
  "Code formatting",
  "Repetitive tasks",
  "Initial scaffolding",
  "Pattern recognition",
];

export function HumanPlusAI() {
  return (
    <section className="py-24 px-6 bg-zinc-50 dark:bg-zinc-900/50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <motion.span
            className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border border-violet-500/20 rounded-full text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Users className="w-4 h-4" />
            <span>+</span>
            <Brain className="w-4 h-4" />
            Our Approach
          </motion.span>
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Human Expertise. AI Speed.
          </motion.h2>
          <motion.p
            className="text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            AI handles the tedious. Humans handle the critical. The best of both
            worlds.
          </motion.p>
        </div>

        {/* Comparison Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {/* Humans Do */}
          <motion.div
            className="p-8 rounded-3xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500 to-green-600 flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                  Humans Handle
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  The critical decisions
                </p>
              </div>
            </div>
            <ul className="space-y-3">
              {humanTasks.map((task, i) => (
                <motion.li
                  key={task}
                  className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0" />
                  {task}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* AI Does */}
          <motion.div
            className="p-8 rounded-3xl bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                  AI Accelerates
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400">
                  The repetitive work
                </p>
              </div>
            </div>
            <ul className="space-y-3">
              {aiTasks.map((task, i) => (
                <motion.li
                  key={task}
                  className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300"
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Zap className="w-5 h-5 text-violet-500 flex-shrink-0" />
                  {task}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* What We Don't Do */}
        <motion.div
          className="p-8 rounded-3xl bg-gradient-to-br from-rose-500/5 to-orange-500/5 border border-rose-500/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold text-zinc-900 dark:text-white mb-4 flex items-center gap-2">
            <XCircle className="w-5 h-5 text-rose-500" />
            What We Don't Do
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-zinc-600 dark:text-zinc-400">
              <span className="font-medium text-zinc-800 dark:text-zinc-200">
                No AI-only code.
              </span>{" "}
              Every line is reviewed by experienced engineers.
            </div>
            <div className="text-zinc-600 dark:text-zinc-400">
              <span className="font-medium text-zinc-800 dark:text-zinc-200">
                No black boxes.
              </span>{" "}
              You own your code and understand what it does.
            </div>
            <div className="text-zinc-600 dark:text-zinc-400">
              <span className="font-medium text-zinc-800 dark:text-zinc-200">
                No abandonment.
              </span>{" "}
              We support you from prototype to enterprise.
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
