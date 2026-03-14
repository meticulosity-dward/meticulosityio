"use client";

import { motion } from "framer-motion";
import { catalogCta } from "@/content/automation-catalog";
import { fadeUp } from "@/lib/animations";
import Button from "@/components/ui/button";

export default function CatalogCta() {
  return (
    <section className="relative bg-[#F9F2FD] py-20 md:py-28">
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#190F2E] leading-tight"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          {catalogCta.headline}
        </motion.h2>

        <motion.p
          className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {catalogCta.body}
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <Button size="lg">{catalogCta.primaryCta}</Button>
          <motion.a
            href="#contact"
            className="inline-flex items-center justify-center rounded-lg font-heading font-semibold transition-all duration-300 px-9 py-4 text-lg border-2 border-[#552769]/30 text-[#552769] hover:bg-[#552769]/5 hover:border-[#552769]/50"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            {catalogCta.secondaryCta}
          </motion.a>
        </motion.div>

        <motion.p
          className="mt-6 text-sm text-gray-400"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {catalogCta.finePrint}
        </motion.p>
      </div>
    </section>
  );
}
