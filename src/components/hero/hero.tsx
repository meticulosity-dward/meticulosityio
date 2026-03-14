"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { hero } from "@/content/homepage";
import Button from "@/components/ui/button";
import AutomationStackVisual from "./automation-stack";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#190F2E] overflow-hidden">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Purple radial glow */}
      <div
        className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[800px] h-[800px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(85,39,105,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 pb-20 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center w-full">
          {/* Left column (text) - 3/5 */}
          <div className="lg:col-span-3">
            {/* Eyebrow badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#552769]/40 bg-[#552769]/10 text-sm font-medium text-white/90">
                <Zap size={14} className="text-[#5ABA48]" />
                {hero.eyebrow}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {hero.headline}
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="mt-6 text-lg text-[#6B7DB2] leading-relaxed max-w-2xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              {hero.subheadline}
            </motion.p>

            {/* CTAs */}
            <motion.div
              className="mt-10 flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.7 }}
            >
              <Button size="lg">{hero.primaryCta}</Button>
              <Button variant="secondary" href="#how-it-works" size="lg">
                {hero.secondaryCta}
              </Button>
            </motion.div>

            {/* Proof line */}
            <motion.div
              className="mt-8 flex items-center gap-3 text-sm text-white/60"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.9 }}
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#5ABA48] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#5ABA48]" />
              </span>
              {hero.proofLine}
            </motion.div>
          </div>

          {/* Right column (visual) - 2/5 */}
          <motion.div
            className="lg:col-span-2 hidden lg:block"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <AutomationStackVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
