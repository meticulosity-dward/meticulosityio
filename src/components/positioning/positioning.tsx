"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import { positioning } from "@/content/homepage";
import { staggerContainer, fadeUp } from "@/lib/animations";

export default function Positioning() {
  return (
    <section className="bg-[#F9F2FD] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#190F2E] text-center max-w-4xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          {positioning.headline}
        </motion.h2>

        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {positioning.cards.map((card) => (
            <motion.div
              key={card.title}
              className="bg-white rounded-xl p-8 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.06)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-[rgba(85,39,105,0.1)]"
              variants={fadeUp}
            >
              <div
                className={`w-12 h-12 rounded-full flex items-center justify-center mb-6 ${
                  card.type === "positive"
                    ? "bg-[#5ABA48]/10"
                    : "bg-[#D25657]/10"
                }`}
              >
                {card.type === "positive" ? (
                  <Check size={24} className="text-[#5ABA48]" />
                ) : (
                  <X size={24} className="text-[#D25657]" />
                )}
              </div>
              <h3 className="text-xl font-heading font-bold text-[#190F2E] mb-3">
                {card.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Callout box */}
        <motion.div
          className="bg-[#552769] rounded-2xl p-8 md:p-12 text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-lg md:text-xl text-white leading-relaxed max-w-3xl mx-auto">
            {positioning.callout}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
