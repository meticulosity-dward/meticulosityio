"use client";

import { motion } from "framer-motion";
import { howItWorks } from "@/content/homepage";
import { fadeUp } from "@/lib/animations";
import StepVisual from "./step-visual";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#190F2E] text-center mb-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          {howItWorks.headline}
        </motion.h2>

        <div className="space-y-24">
          {howItWorks.steps.map((step, i) => (
            <motion.div
              key={step.number}
              className="grid lg:grid-cols-2 gap-12 items-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={fadeUp}
            >
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative">
                  {/* Faded step number */}
                  <motion.span
                    className="absolute -top-8 -left-4 text-[120px] font-heading font-bold text-[#552769]/[0.07] leading-none select-none"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  >
                    {step.number}
                  </motion.span>

                  <h3 className="relative text-2xl md:text-3xl font-heading font-bold text-[#190F2E] mb-6">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 leading-relaxed text-lg">
                    {step.description}
                  </p>
                </div>
              </div>

              <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                <StepVisual stepIndex={i} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
