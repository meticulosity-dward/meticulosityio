"use client";

import { motion } from "framer-motion";
import { catalogSummary } from "@/content/automation-catalog";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function CatalogSummary() {
  return (
    <section className="bg-[#190F2E] py-20 md:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center mb-14"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-5">
            {catalogSummary.headline}
          </h2>
          <p className="text-lg text-[#6B7DB2] leading-relaxed max-w-3xl mx-auto">
            {catalogSummary.intro}
          </p>
        </motion.div>

        {/* Summary grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {catalogSummary.table.map((row) => (
            <motion.div
              key={row.category}
              className="bg-[#1E1535] rounded-xl p-5 border border-[rgba(85,39,105,0.2)]"
              variants={fadeUp}
            >
              <div className="flex items-baseline justify-between mb-3">
                <h3 className="text-sm font-heading font-semibold text-white">
                  {row.category}
                </h3>
                <span className="text-lg font-heading font-bold text-[#5ABA48]">
                  {row.count}
                </span>
              </div>
              <p className="text-xs text-[#6B7DB2] leading-relaxed">
                {row.capabilities}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Total bar */}
        <motion.div
          className="bg-gradient-to-r from-[#552769]/30 to-[#552769]/10 rounded-xl p-6 border border-[#552769]/30 text-center mb-14"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-4">
            <span className="text-4xl font-heading font-bold text-[#5ABA48]">
              {catalogSummary.total.count}
            </span>
            <span className="text-lg text-white/80 font-heading">
              Automations
            </span>
            <span className="text-white/30 mx-2">|</span>
            <span className="text-lg text-[#5ABA48] font-heading font-semibold">
              {catalogSummary.total.label}
            </span>
          </div>
        </motion.div>

        {/* Benchmark callout */}
        <motion.div
          className="bg-[#1E1535] rounded-2xl p-8 md:p-10 border border-[rgba(85,39,105,0.2)]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-xs font-heading font-semibold text-[#5ABA48] uppercase tracking-wider mb-3">
            The Meticulosity Benchmark
          </p>
          <p className="text-[#6B7DB2] leading-relaxed text-lg">
            {catalogSummary.benchmark}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
