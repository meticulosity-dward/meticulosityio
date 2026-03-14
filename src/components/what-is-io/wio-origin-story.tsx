"use client";

import { motion } from "framer-motion";
import { Award, Calendar, Briefcase, Trophy, Star } from "lucide-react";
import { wioOriginStory } from "@/content/what-is-meticulosity-io";
import { fadeUp, staggerContainer } from "@/lib/animations";

const badgeIcons = [Award, Calendar, Briefcase, Trophy, Star];

export default function WioOriginStory() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#190F2E] text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          {wioOriginStory.headline}
        </motion.h2>

        {/* Narrative */}
        <motion.div
          className="max-w-3xl mx-auto space-y-6 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {wioOriginStory.body.map((p, i) => (
            <motion.p
              key={i}
              className={`leading-relaxed ${
                i === 0
                  ? "text-xl font-heading font-semibold text-[#552769]"
                  : "text-gray-600 text-lg"
              }`}
              variants={fadeUp}
            >
              {p}
            </motion.p>
          ))}
        </motion.div>

        {/* Trust badges */}
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {wioOriginStory.badges.map((badge, i) => {
            const Icon = badgeIcons[i % badgeIcons.length];
            return (
              <motion.div
                key={badge}
                className="flex items-center gap-2 px-5 py-3 rounded-lg bg-[#F9F2FD] border border-[rgba(85,39,105,0.1)]"
                variants={fadeUp}
              >
                <Icon size={16} className="text-[#552769]" />
                <span className="text-sm font-heading font-semibold text-[#190F2E]">
                  {badge}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
