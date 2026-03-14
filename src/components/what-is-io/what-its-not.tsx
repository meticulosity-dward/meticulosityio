"use client";

import { motion } from "framer-motion";
import { X } from "lucide-react";
import { whatItsNot } from "@/content/what-is-meticulosity-io";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function WhatItsNot() {
  return (
    <section className="bg-[#F9F2FD] py-20 md:py-28">
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
            {whatItsNot.headline}
          </h2>
          <p className="mt-5 text-lg text-gray-500">{whatItsNot.intro}</p>
        </motion.div>

        {/* Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {whatItsNot.cards.map((card) => (
            <motion.div
              key={card.title}
              className="bg-white rounded-2xl p-8 border border-[rgba(85,39,105,0.12)] shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.06)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              variants={fadeUp}
            >
              <div className="w-10 h-10 rounded-full bg-[#D25657]/10 flex items-center justify-center mb-5">
                <X size={20} className="text-[#D25657]" />
              </div>

              <h3 className="text-lg font-heading font-bold text-[#190F2E] mb-3">
                {card.title}
              </h3>

              <p className="text-gray-500 leading-relaxed">{card.body}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
