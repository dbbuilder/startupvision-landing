"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function ConsultingHero() {
  return (
    <section className="relative min-h-screen flex items-center px-6 bg-white dark:bg-zinc-950">
      {/* Minimal accent */}
      <div className="absolute top-0 left-0 w-1 h-32 bg-violet-600" />

      <div className="max-w-7xl mx-auto w-full py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Main content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-sm font-medium tracking-widest text-zinc-500 dark:text-zinc-500 uppercase mb-8">
              Technology Partnership
            </p>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-light text-zinc-900 dark:text-white mb-8 leading-[1.1]">
              Your startup's
              <br />
              <span className="font-semibold">technology team.</span>
            </h1>

            <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-12 max-w-lg leading-relaxed">
              We partner with founders to build, scale, and lead technology organizations.
              From first prototype to successful exit.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-100 h-14 px-8 text-base font-medium"
                asChild
              >
                <Link href="#contact">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </motion.div>

          {/* Right: Key stats */}
          <motion.div
            className="lg:pl-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="space-y-12">
              <div className="border-l-2 border-zinc-200 dark:border-zinc-800 pl-8">
                <p className="text-5xl font-light text-zinc-900 dark:text-white mb-2">20+</p>
                <p className="text-zinc-600 dark:text-zinc-400">Years average experience per team member</p>
              </div>
              <div className="border-l-2 border-zinc-200 dark:border-zinc-800 pl-8">
                <p className="text-5xl font-light text-zinc-900 dark:text-white mb-2">100%</p>
                <p className="text-zinc-600 dark:text-zinc-400">US-based senior engineers and designers</p>
              </div>
              <div className="border-l-2 border-zinc-200 dark:border-zinc-800 pl-8">
                <p className="text-5xl font-light text-zinc-900 dark:text-white mb-2">Exit</p>
                <p className="text-zinc-600 dark:text-zinc-400">Founders with SaaS acquisition experience</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
