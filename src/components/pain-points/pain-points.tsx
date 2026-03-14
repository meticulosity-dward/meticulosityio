"use client";

import { motion } from "framer-motion";
import {
  Clock,
  UserX,
  AlertTriangle,
  Calculator,
  Brain,
  TrendingDown,
} from "lucide-react";
import { painPoints } from "@/content/homepage";
import { staggerContainer, fadeUp } from "@/lib/animations";

const iconMap: Record<string, React.ElementType> = {
  Clock,
  UserX,
  AlertTriangle,
  Calculator,
  Brain,
  TrendingDown,
};

export default function PainPoints() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#190F2E]">
            {painPoints.headline}
          </h2>
          <p className="mt-5 text-lg text-gray-500">{painPoints.subheadline}</p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {painPoints.cards.map((card) => {
            const Icon = iconMap[card.icon];
            return (
              <motion.div
                key={card.title}
                className="group relative bg-white rounded-xl p-6 border border-gray-100 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.06)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                variants={fadeUp}
              >
                {/* Red left border */}
                <motion.div
                  className="absolute left-0 top-4 bottom-4 w-1 rounded-full bg-[#D25657]/30"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                />

                <div className="pl-4">
                  <div className="w-10 h-10 rounded-lg bg-[#D25657]/10 flex items-center justify-center mb-4">
                    <Icon size={20} className="text-[#D25657]" />
                  </div>
                  <h3 className="text-lg font-heading font-semibold text-[#190F2E] mb-2">
                    {card.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
