"use client";

import { motion } from "framer-motion";
import { Brain, ClipboardList, Mic, FileText, Map, Info } from "lucide-react";
import { aiSection } from "@/content/what-is-meticulosity-io";
import { fadeUp, staggerContainer } from "@/lib/animations";

const exampleIcons = [ClipboardList, Mic, FileText, Map];

export default function AiSection() {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-[#552769]/10 mb-6">
            <Brain size={28} className="text-[#552769]" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#190F2E]">
            {aiSection.headline}
          </h2>
        </motion.div>

        {/* Intro */}
        <motion.div
          className="max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.p
            className="text-gray-500 leading-relaxed text-lg mb-4"
            variants={fadeUp}
          >
            {aiSection.intro}
          </motion.p>
          <motion.p
            className="text-lg font-heading font-semibold text-[#552769]"
            variants={fadeUp}
          >
            {aiSection.introFollowup}
          </motion.p>
        </motion.div>

        {/* How We Use AI Differently */}
        <motion.div
          className="max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h3
            className="text-xl font-heading font-semibold text-[#190F2E] mb-4"
            variants={fadeUp}
          >
            How We Use AI Differently
          </motion.h3>
          <motion.p
            className="text-gray-600 leading-relaxed mb-4"
            variants={fadeUp}
          >
            {aiSection.howDifferent}
          </motion.p>
          <motion.p
            className="text-gray-500 leading-relaxed"
            variants={fadeUp}
          >
            {aiSection.howDifferentFollowup}
          </motion.p>
        </motion.div>

        {/* AI Examples Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {aiSection.examples.map((example, i) => {
            const Icon = exampleIcons[i];
            return (
              <motion.div
                key={example.title}
                className="bg-[#190F2E] rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
                variants={fadeUp}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-[#552769]/30 flex items-center justify-center">
                    <Icon size={20} className="text-[#5ABA48]" />
                  </div>
                  <h4 className="font-heading font-semibold text-white">
                    {example.title}
                  </h4>
                </div>
                <p className="text-sm text-white/60 leading-relaxed">
                  {example.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Callout */}
        <motion.div
          className="max-w-3xl mx-auto bg-[#F9F2FD] rounded-2xl p-8 border border-[#552769]/10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex items-start gap-3">
            <Info
              size={20}
              className="text-[#552769] flex-shrink-0 mt-0.5"
            />
            <p className="text-[#552769] leading-relaxed font-medium">
              {aiSection.callout}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
