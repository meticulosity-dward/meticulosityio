"use client";

import { motion } from "framer-motion";
import { numbers } from "@/content/what-is-meticulosity-io";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function NumbersSection() {
  return (
    <section id="numbers" className="bg-[#190F2E] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white">
            {numbers.headline}
          </h2>
          <p className="mt-5 text-lg text-[#6B7DB2]">{numbers.intro}</p>
        </motion.div>

        {/* Time Savings Table */}
        <motion.div
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h3 className="text-xl font-heading font-semibold text-white mb-6">
            Time Savings by Category
          </h3>
          <div className="overflow-x-auto">
            <div className="bg-[#1E1535] rounded-2xl p-6 md:p-8 min-w-[500px]">
              <table className="w-full">
                <thead>
                  <tr>
                    {numbers.timeSavings.headers.map((h, i) => (
                      <th
                        key={h}
                        className={`text-left pb-4 text-sm font-heading font-semibold ${
                          i === 0 ? "text-white/40" : "text-white/70"
                        }`}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {numbers.timeSavings.rows.map((row, rowIdx) => (
                    <motion.tr
                      key={row.category}
                      className="border-t border-white/5"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * rowIdx }}
                    >
                      <td className="py-4 text-sm text-white/50">
                        {row.category}
                      </td>
                      <td className="py-4 text-sm font-heading font-semibold text-[#5ABA48]">
                        {row.hours}
                      </td>
                      <td className="py-4 text-sm text-white/60">
                        {row.drivers}
                      </td>
                    </motion.tr>
                  ))}
                  {/* Total row */}
                  <tr className="border-t-2 border-[#552769]/40">
                    <td className="py-4 text-sm font-heading font-bold text-white">
                      Total
                    </td>
                    <td className="py-4 text-lg font-heading font-bold text-[#5ABA48]">
                      {numbers.timeSavings.total.hours}
                    </td>
                    <td className="py-4 text-sm font-heading font-semibold text-white/70">
                      {numbers.timeSavings.total.label}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* ROI Table */}
        <motion.div
          className="mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h3 className="text-xl font-heading font-semibold text-white mb-6">
            ROI by Agency Size
          </h3>
          <div className="overflow-x-auto">
            <div className="bg-[#1E1535] rounded-2xl p-6 md:p-8 min-w-[600px]">
              <table className="w-full">
                <thead>
                  <tr>
                    {numbers.roi.headers.map((h, i) => (
                      <th
                        key={h || "label"}
                        className={`text-left pb-4 text-sm font-heading font-semibold ${
                          i === 0 ? "text-white/40" : "text-white/70"
                        }`}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {numbers.roi.rows.map((row, rowIdx) => (
                    <motion.tr
                      key={row.label}
                      className="border-t border-white/5"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * rowIdx }}
                    >
                      <td className="py-4 text-sm text-white/50">
                        {row.label}
                      </td>
                      {row.values.map((val, i) => (
                        <td
                          key={`${row.label}-${i}`}
                          className={`py-4 text-sm font-medium ${
                            row.highlight
                              ? "text-[#5ABA48] font-heading font-bold text-lg"
                              : "text-white/80"
                          }`}
                        >
                          {val}
                        </td>
                      ))}
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>

        {/* Scale Callout */}
        <motion.div
          className="bg-gradient-to-r from-[#552769]/30 to-[#6B3FA0]/20 rounded-2xl p-8 md:p-10 border border-[#552769]/30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h4 className="font-heading font-semibold text-white mb-3">
            The Scale Argument
          </h4>
          <p className="text-white/70 leading-relaxed">
            {numbers.scaleCallout}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
