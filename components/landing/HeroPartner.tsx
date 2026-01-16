"use client";

import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroPartner() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 bg-zinc-950 overflow-hidden">
      {/* Gradient orbs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-600/30 rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-[128px]" />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.02)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="relative max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Tagline */}
          <p className="text-violet-400 font-medium tracking-wide uppercase text-sm mb-6">
            Your Technology Partner
          </p>

          {/* Main headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
            Build. Scale.{" "}
            <span className="bg-gradient-to-r from-violet-400 via-cyan-400 to-emerald-400 bg-clip-text text-transparent">
              Succeed.
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl sm:text-2xl text-zinc-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            A full-service technology collective for startups ready to move fast.
            From first prototype to enterprise scale—we're your team.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Button
              size="lg"
              className="bg-white text-zinc-900 hover:bg-zinc-100 h-14 px-8 text-lg font-semibold"
              asChild
            >
              <Link href="#contact">
                Let's Talk
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-14 px-8 text-lg border-zinc-700 text-white hover:bg-zinc-800"
              asChild
            >
              <Link href="#services">What We Do</Link>
            </Button>
          </div>

          {/* Trust line */}
          <p className="text-zinc-500 text-sm">
            Trusted by founders building the next generation of products
          </p>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="w-6 h-6 text-zinc-600" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
