"use client";

import { motion } from "framer-motion";
import { toolsGrid } from "@/content/what-is-meticulosity-io";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function ToolsGridSection() {
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#190F2E]">
            {toolsGrid.headline}
          </h2>
          <p className="mt-5 text-lg text-gray-500">{toolsGrid.intro}</p>
        </motion.div>

        {/* Category grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
          variants={staggerContainer}
        >
          {toolsGrid.categories.map((cat) => (
            <motion.div
              key={cat.name}
              className="bg-[#F9F2FD] rounded-xl p-5 border border-[rgba(85,39,105,0.08)] hover:shadow-md transition-shadow duration-300"
              variants={fadeUp}
            >
              <h3 className="text-sm font-heading font-semibold text-[#552769] uppercase tracking-wider mb-3">
                {cat.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.tools.map((tool) => (
                  <span
                    key={tool}
                    className="inline-block px-3 py-1.5 rounded-md text-xs font-medium bg-white text-gray-600 border border-[rgba(85,39,105,0.08)] shadow-[0_1px_2px_rgba(0,0,0,0.03)]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
