"use client";

import { motion } from "framer-motion";
import { Monitor, BookOpen, Settings } from "lucide-react";
import { threeThings } from "@/content/what-is-meticulosity-io";
import { fadeUp, staggerContainer } from "@/lib/animations";

const icons = [Monitor, BookOpen, Settings];

export default function ThreeThings() {
  return (
    <section id="three-things" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <motion.p
          className="text-center text-lg text-gray-500 max-w-3xl mx-auto mb-16 leading-relaxed"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          {threeThings.intro}
        </motion.p>

        {/* Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {threeThings.cards.map((card, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={card.title}
                className="relative bg-white rounded-2xl p-8 border border-[rgba(85,39,105,0.12)] shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.06)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                variants={fadeUp}
              >
                {/* Number badge */}
                <div className="absolute -top-4 left-8">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-[#552769] text-white text-xs font-heading font-bold shadow-lg">
                    {card.number}
                  </span>
                </div>

                <div className="w-12 h-12 rounded-xl bg-[#F9F2FD] flex items-center justify-center mb-5 mt-2">
                  <Icon size={24} className="text-[#552769]" />
                </div>

                <h3 className="text-xl font-heading font-bold text-[#190F2E] mb-2">
                  {card.title}
                </h3>

                <p className="text-sm font-heading font-semibold text-[#552769] mb-4">
                  {card.subtitle}
                </p>

                <p className="text-gray-500 leading-relaxed">{card.body}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
