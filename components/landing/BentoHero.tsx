"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function BentoHero() {
  return (
    <section className="relative min-h-[90vh] flex items-center px-6 py-24 bg-white dark:bg-zinc-950 overflow-hidden">
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8882_1px,transparent_1px),linear-gradient(to_bottom,#8882_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="relative max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-sm font-medium text-zinc-600 dark:text-zinc-400 mb-6">
              <Sparkles className="w-4 h-4 text-violet-500" />
              Your Full-Service Product Partner
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-zinc-900 dark:text-white mb-6">
              From Idea to{" "}
              <span className="bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Enterprise
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-lg">
              Human-powered, AI-accelerated product development. We build at every stage—prototype to production to scale.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-100 h-12 px-6"
                asChild
              >
                <Link href="#contact">
                  Start Your Journey
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="h-12 px-6 border-zinc-300 dark:border-zinc-700"
                asChild
              >
                <Link href="#journey">See How It Works</Link>
              </Button>
            </div>

            {/* Trust badges */}
            <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
              <p className="text-sm text-zinc-500 dark:text-zinc-500 mb-3">
                Trusted by innovative teams
              </p>
              <div className="flex flex-wrap gap-6">
                {[
                  { name: "Remote2Me", url: "https://remote2me.com" },
                  { name: "Fireproof", url: "https://fireproofapp.com" },
                  { name: "AnalyzeMyCloud", url: "https://analyzemycloud.com" },
                  { name: "Code Review", url: "#" },
                ].map((client) => (
                  <a
                    key={client.name}
                    href={client.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
                  >
                    {client.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Bento Preview Grid */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Large card - Prototype */}
              <div className="col-span-2 p-6 rounded-2xl bg-gradient-to-br from-violet-500 to-purple-600 text-white">
                <div className="text-sm font-medium opacity-80 mb-2">Start Here</div>
                <div className="text-2xl font-bold mb-1">Prototype</div>
                <div className="text-sm opacity-80">Working demo in minutes</div>
                <div className="mt-4 text-3xl font-bold">Free - $99</div>
              </div>

              {/* MVP card */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-600 text-white">
                <div className="text-xl font-bold mb-1">MVP</div>
                <div className="text-sm opacity-80">6-8 weeks</div>
                <div className="mt-3 text-lg font-semibold">$15k+</div>
              </div>

              {/* App card */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-emerald-500 to-green-600 text-white">
                <div className="text-xl font-bold mb-1">App</div>
                <div className="text-sm opacity-80">iOS & Android</div>
                <div className="mt-3 text-lg font-semibold">$35k+</div>
              </div>

              {/* Bottom row */}
              <div className="p-4 rounded-xl bg-zinc-100 dark:bg-zinc-800">
                <div className="text-sm font-semibold text-zinc-900 dark:text-white">Code Review</div>
                <div className="text-xs text-zinc-500">$2.5k+</div>
              </div>
              <div className="p-4 rounded-xl bg-zinc-100 dark:bg-zinc-800">
                <div className="text-sm font-semibold text-zinc-900 dark:text-white">Compliance</div>
                <div className="text-xs text-zinc-500">$5k+</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
