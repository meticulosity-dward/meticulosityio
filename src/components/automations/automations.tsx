"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Cpu, ArrowRight } from "lucide-react";
import {
  automationShowcase,
  type AutomationCategory,
  type AutomationCard,
} from "@/content/homepage";
import { fadeUp, staggerContainerFast } from "@/lib/animations";

export default function Automations() {
  const [activeCategory, setActiveCategory] =
    useState<AutomationCategory>("All");

  const filtered =
    activeCategory === "All"
      ? automationShowcase.cards
      : automationShowcase.cards.filter((c) => c.category === activeCategory);

  return (
    <section id="automations" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#190F2E]">
            {automationShowcase.headline}
          </h2>
          <p className="mt-5 text-lg text-gray-500">
            {automationShowcase.subheadline}
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          {automationShowcase.categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-[#552769] text-white shadow-md"
                  : "bg-[#F9F2FD] text-[#552769] hover:bg-[#552769]/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Cards grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={staggerContainerFast}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((card) => (
              <AutomationCardComponent key={card.name} card={card} />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* See all link */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-[#552769] font-heading font-semibold hover:gap-3 transition-all"
          >
            See All 50+ Automations
            <ArrowRight size={18} />
          </a>
        </motion.div>

        {/* Summary bar */}
        <motion.div
          className="mt-16 bg-[#552769] rounded-2xl p-6 md:p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 text-sm text-white/80">
            {automationShowcase.summaryBar.items.map((item, i) => (
              <span key={item.label} className="flex items-center gap-2">
                {i > 0 && (
                  <span className="text-white/30 hidden md:inline">|</span>
                )}
                <span className="text-white/60">{item.label}:</span>
                <span className="font-heading font-semibold text-white">
                  {item.value}
                </span>
              </span>
            ))}
            <span className="basis-full text-center mt-2 md:mt-0 md:basis-auto md:ml-2">
              <span className="font-heading font-bold text-lg text-[#5ABA48]">
                Total: {automationShowcase.summaryBar.total}
              </span>
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function AutomationCardComponent({ card }: { card: AutomationCard }) {
  return (
    <motion.div
      className="group bg-white rounded-xl p-6 border border-[rgba(85,39,105,0.1)] shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.06)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
      variants={fadeUp}
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
    >
      {/* Category badge */}
      <span className="inline-block px-2.5 py-1 rounded-full text-[10px] font-medium bg-[#F9F2FD] text-[#552769] mb-4">
        {card.category}
      </span>

      <h3 className="text-lg font-heading font-semibold text-[#190F2E] mb-2">
        {card.name}
      </h3>

      <p className="text-sm text-gray-500 leading-relaxed mb-4">
        {card.description}
      </p>

      <div className="flex items-center justify-between">
        {/* Hours saved */}
        <span className="text-sm font-heading font-bold text-[#5ABA48]">
          {card.hoursSaved}
        </span>

        {/* Tags */}
        <div className="flex gap-1.5">
          {card.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[9px] font-medium bg-[#552769]/10 text-[#552769]"
            >
              {tag === "AI-Powered" ? (
                <Sparkles size={10} />
              ) : (
                <Cpu size={10} />
              )}
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
