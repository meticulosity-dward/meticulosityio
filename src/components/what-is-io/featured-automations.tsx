"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Clock } from "lucide-react";
import { featuredAutomations } from "@/content/what-is-meticulosity-io";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function FeaturedAutomations() {
  return (
    <section
      id="featured-automations"
      className="bg-[#F9F2FD] py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#190F2E]">
            {featuredAutomations.headline}
          </h2>
          <p className="mt-5 text-lg text-gray-500">
            {featuredAutomations.intro}
          </p>
        </motion.div>

        {/* Automation cards */}
        <motion.div
          className="space-y-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={staggerContainer}
        >
          {featuredAutomations.automations.map((automation) => (
            <motion.div
              key={automation.name}
              className="bg-white rounded-2xl p-8 md:p-10 border border-[rgba(85,39,105,0.1)] shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.06)] hover:shadow-lg transition-shadow duration-300"
              variants={fadeUp}
            >
              {/* Top row: tags + stat */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                <div className="flex flex-wrap gap-2">
                  {automation.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-[#552769]/10 text-[#552769]"
                    >
                      <Sparkles size={12} />
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#5ABA48]/10 border border-[#5ABA48]/20">
                  <Clock size={14} className="text-[#5ABA48]" />
                  <span className="text-sm font-heading font-bold text-[#5ABA48]">
                    {automation.stat}
                  </span>
                </span>
              </div>

              <h3 className="text-xl md:text-2xl font-heading font-bold text-[#190F2E] mb-4">
                {automation.name}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-6">
                {automation.body}
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Pain it solves */}
                <div className="bg-[#F9F2FD] rounded-xl p-5">
                  <p className="text-xs font-heading font-semibold text-[#552769] uppercase tracking-wider mb-2">
                    The pain it solves
                  </p>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {automation.pain}
                  </p>
                </div>

                {/* Scale math */}
                {automation.scale && (
                  <div className="bg-[#F9F2FD] rounded-xl p-5">
                    <p className="text-xs font-heading font-semibold text-[#5ABA48] uppercase tracking-wider mb-2">
                      Scale math
                    </p>
                    <p className="text-sm text-gray-500 leading-relaxed">
                      {automation.scale}
                    </p>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* See full catalog */}
        <motion.div
          className="mt-12 bg-white rounded-2xl p-8 md:p-10 border border-[rgba(85,39,105,0.1)] shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.06)] text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 leading-relaxed max-w-2xl mx-auto mb-6">
            {featuredAutomations.catalogCta.body}
          </p>
          <a
            href="/automation-catalog"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-gradient-to-r from-[#552769] to-[#6B3FA0] text-white font-heading font-semibold shadow-lg shadow-purple-900/20 hover:shadow-xl hover:shadow-purple-900/30 transition-all duration-300 hover:gap-3"
          >
            {featuredAutomations.catalogCta.label}
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
