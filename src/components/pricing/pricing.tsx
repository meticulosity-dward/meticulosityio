"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { pricing } from "@/content/homepage";
import { fadeUp, staggerContainer } from "@/lib/animations";
import Button from "@/components/ui/button";

export default function Pricing() {
  return (
    <section id="pricing" className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#190F2E]">
            {pricing.headline}
          </h2>
          <p className="mt-5 text-lg text-gray-500">{pricing.subheadline}</p>
        </motion.div>

        {/* Pricing cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          {pricing.tiers.map((tier) => (
            <motion.div
              key={tier.name}
              className={`relative rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1 ${
                tier.highlighted
                  ? "bg-[#190F2E] border-[#552769] shadow-2xl shadow-purple-900/20 md:-my-4 md:py-12 z-10"
                  : "bg-white border-[rgba(85,39,105,0.15)] shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.06)]"
              }`}
              variants={fadeUp}
            >
              {/* Badge */}
              {tier.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 rounded-full bg-[#5ABA48] text-white text-xs font-heading font-semibold shadow-lg">
                    {tier.badge}
                  </span>
                </div>
              )}

              <p
                className={`text-sm font-heading font-semibold uppercase tracking-wider mb-2 ${
                  tier.highlighted ? "text-[#6B7DB2]" : "text-[#552769]"
                }`}
              >
                {tier.name}
              </p>

              <p
                className={`text-sm mb-4 ${
                  tier.highlighted ? "text-white/50" : "text-gray-400"
                }`}
              >
                {tier.hours}
              </p>

              <div className="flex items-baseline gap-1 mb-2">
                <span
                  className={`text-5xl font-heading font-bold ${
                    tier.highlighted ? "text-white" : "text-[#190F2E]"
                  }`}
                >
                  {tier.price}
                </span>
                <span
                  className={`text-lg ${
                    tier.highlighted ? "text-white/50" : "text-gray-400"
                  }`}
                >
                  {tier.unit}
                </span>
              </div>

              <p
                className={`text-sm mb-6 ${
                  tier.highlighted ? "text-white/40" : "text-gray-400"
                }`}
              >
                {tier.minimum}
              </p>

              <p
                className={`text-sm mb-8 ${
                  tier.highlighted ? "text-white/70" : "text-gray-500"
                }`}
              >
                {tier.description}
              </p>

              <div className="space-y-3 mb-8">
                {tier.features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <Check
                      size={16}
                      className={
                        tier.highlighted ? "text-[#5ABA48]" : "text-[#5ABA48]"
                      }
                    />
                    <span
                      className={`text-sm ${
                        tier.highlighted ? "text-white/70" : "text-gray-500"
                      }`}
                    >
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Button
                variant={tier.highlighted ? "inverted" : "primary"}
                className="w-full justify-center"
              >
                {tier.cta}
              </Button>
            </motion.div>
          ))}
        </motion.div>

        {/* How pricing works */}
        <motion.div
          className="max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h3 className="text-xl font-heading font-semibold text-[#190F2E] mb-4 text-center">
            How Pricing Works
          </h3>
          <p className="text-gray-500 leading-relaxed text-center">
            {pricing.explanation}
          </p>
        </motion.div>

        {/* ROI table */}
        <motion.div
          className="overflow-x-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <div className="bg-[#190F2E] rounded-2xl p-6 md:p-8 min-w-[600px]">
            <table className="w-full">
              <thead>
                <tr>
                  {pricing.roi.headers.map((h, i) => (
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
                {pricing.roi.rows.map((row, rowIdx) => (
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
        </motion.div>
      </div>
    </section>
  );
}
