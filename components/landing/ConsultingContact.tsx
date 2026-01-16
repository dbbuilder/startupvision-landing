"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ConsultingContact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          projectType: "Consultation Request",
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        if (typeof window !== "undefined" && (window as any).gtag) {
          (window as any).gtag("event", "generate_lead", {
            event_category: "contact",
            event_label: "consultation",
          });
        }
      }
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-32 px-6 bg-white dark:bg-zinc-950">
        <motion.div
          className="max-w-xl mx-auto text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto mb-6" />
          <h3 className="text-3xl font-light text-zinc-900 dark:text-white mb-4">
            Thank you
          </h3>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg">
            We'll be in touch within 24 hours to schedule your consultation.
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-32 px-6 bg-white dark:bg-zinc-950">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm font-medium tracking-widest text-violet-600 dark:text-violet-400 uppercase mb-4">
              Get Started
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-zinc-900 dark:text-white mb-6 leading-tight">
              Let's discuss
              <br />
              <span className="font-semibold">your project</span>
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-12 max-w-md leading-relaxed">
              Schedule a consultation to explore how we can help you build,
              scale, and succeed.
            </p>

            <div className="space-y-8 text-zinc-600 dark:text-zinc-400">
              <div>
                <p className="font-medium text-zinc-900 dark:text-white mb-1">Email</p>
                <a
                  href="mailto:hello@startupvision.net"
                  className="hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
                >
                  hello@startupvision.net
                </a>
              </div>
              <div>
                <p className="font-medium text-zinc-900 dark:text-white mb-1">Response Time</p>
                <p>Within 24 hours</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-zinc-900 dark:text-white mb-2">
                    Name
                  </label>
                  <Input
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="h-12 border-zinc-300 dark:border-zinc-700"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-zinc-900 dark:text-white mb-2">
                    Email
                  </label>
                  <Input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="h-12 border-zinc-300 dark:border-zinc-700"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-900 dark:text-white mb-2">
                  Company
                </label>
                <Input
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="h-12 border-zinc-300 dark:border-zinc-700"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-zinc-900 dark:text-white mb-2">
                  How can we help?
                </label>
                <Textarea
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="min-h-[150px] border-zinc-300 dark:border-zinc-700"
                  placeholder="Tell us about your project, challenges, or questions..."
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting || !formData.name || !formData.email}
                className="w-full h-14 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-100 text-base font-medium"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Schedule Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
