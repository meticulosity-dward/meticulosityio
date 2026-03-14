"use client";

import { motion } from "framer-motion";
import { Database, Rocket, Shield, Info } from "lucide-react";
import { wioHowItWorks } from "@/content/what-is-meticulosity-io";
import { fadeUp, staggerContainer } from "@/lib/animations";

const stepIcons = [Database, Rocket, Shield];

export default function WioHowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#F9F2FD] py-20 md:py-28">
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
            {wioHowItWorks.headline}
          </h2>
          <p className="mt-5 text-lg text-gray-500">
            {wioHowItWorks.intro}
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          className="space-y-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {wioHowItWorks.steps.map((step, i) => {
            const Icon = stepIcons[i];
            return (
              <motion.div
                key={step.title}
                className="relative bg-white rounded-2xl p-8 md:p-10 border border-[rgba(85,39,105,0.1)] shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.06)]"
                variants={fadeUp}
              >
                <div className="grid lg:grid-cols-[auto_1fr] gap-8 items-start">
                  {/* Step indicator */}
                  <div className="flex flex-col items-center gap-3">
                    <div className="w-16 h-16 rounded-2xl bg-[#552769]/10 flex items-center justify-center">
                      <Icon size={28} className="text-[#552769]" />
                    </div>
                    <span className="text-5xl font-heading font-bold text-[#552769]/10">
                      {step.number}
                    </span>
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-[#190F2E] mb-4">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {step.body}
                    </p>
                    <p className="text-gray-500 leading-relaxed mb-4">
                      {step.details}
                    </p>
                    {step.extra && (
                      <p className="text-gray-500 leading-relaxed mb-4">
                        {step.extra}
                      </p>
                    )}

                    {/* Callout */}
                    {step.callout && (
                      <div className="mt-6 flex items-start gap-3 bg-[#F9F2FD] rounded-xl p-5 border border-[#552769]/10">
                        <Info
                          size={18}
                          className="text-[#552769] flex-shrink-0 mt-0.5"
                        />
                        <p className="text-sm text-[#552769] font-medium leading-relaxed">
                          {step.callout}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom callout */}
        <motion.div
          className="mt-12 bg-[#190F2E] rounded-2xl p-8 md:p-10 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-white/80 leading-relaxed text-lg max-w-3xl mx-auto">
            {wioHowItWorks.bottomCallout}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
