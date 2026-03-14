"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { wioHero } from "@/content/what-is-meticulosity-io";
import Button from "@/components/ui/button";
import { staggerContainer, fadeUp } from "@/lib/animations";

export default function WioHero() {
  return (
    <section className="relative bg-[#190F2E] overflow-hidden pt-32 pb-20 md:pb-28">
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
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(85,39,105,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#552769]/40 bg-[#552769]/10 text-sm font-medium text-white/90">
            <Zap size={14} className="text-[#5ABA48]" />
            {wioHero.eyebrow}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="mt-8 text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {wioHero.headline}
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          className="mt-6 text-lg text-[#6B7DB2] leading-relaxed max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          {wioHero.subheadline}
        </motion.p>

        {/* Stat badges */}
        <motion.div
          className="mt-10 flex flex-wrap justify-center gap-3"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {wioHero.stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#1E1535] border border-[rgba(85,39,105,0.3)]"
              variants={fadeUp}
            >
              <span className="text-lg font-heading font-bold text-[#5ABA48]">
                {stat.value}
              </span>
              <span className="text-sm text-white/60">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-10"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.9 }}
        >
          <Button size="lg">{wioHero.cta}</Button>
        </motion.div>
      </div>
    </section>
  );
}
