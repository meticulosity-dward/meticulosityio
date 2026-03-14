"use client";

import { motion } from "framer-motion";
import { originStory } from "@/content/homepage";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function OriginStory() {
  return (
    <section className="bg-[#F9F2FD] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#190F2E] text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          {originStory.headline}
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left: narrative */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {originStory.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                className="text-gray-600 leading-relaxed text-lg"
                variants={fadeUp}
              >
                {p}
              </motion.p>
            ))}
          </motion.div>

          {/* Right: timeline */}
          <div className="relative">
            {/* Vertical line */}
            <motion.div
              className="absolute left-6 top-0 bottom-0 w-px bg-[#552769]/20"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              style={{ transformOrigin: "top" }}
            />

            <motion.div
              className="space-y-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              variants={staggerContainer}
            >
              {originStory.timeline.map((item) => (
                <motion.div
                  key={`${item.year}-${item.event}`}
                  className="flex items-start gap-6 relative"
                  variants={fadeUp}
                >
                  {/* Dot on line */}
                  <div className="relative z-10 flex-shrink-0">
                    <motion.div
                      className="w-12 h-12 rounded-full bg-white border-2 border-[#552769]/30 flex items-center justify-center shadow-sm"
                      whileInView={{
                        borderColor: "rgba(85,39,105,0.6)",
                      }}
                      viewport={{ once: true }}
                    >
                      <span className="text-xs font-heading font-bold text-[#552769]">
                        {item.year.slice(-2)}
                      </span>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="pt-2">
                    <span className="text-sm font-heading font-semibold text-[#552769]">
                      {item.year}
                    </span>
                    <p className="text-gray-600 mt-1">{item.event}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
