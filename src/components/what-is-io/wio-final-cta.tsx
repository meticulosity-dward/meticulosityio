"use client";

import { motion } from "framer-motion";
import { wioFinalCta } from "@/content/what-is-meticulosity-io";
import { fadeUp } from "@/lib/animations";
import Button from "@/components/ui/button";

export default function WioFinalCta() {
  return (
    <section className="relative bg-[#190F2E] py-24 md:py-32 overflow-hidden">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(85,39,105,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          {wioFinalCta.headline}
        </motion.h2>

        <motion.p
          className="mt-6 text-lg text-[#6B7DB2] max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {wioFinalCta.subheadline}
        </motion.p>

        <motion.div
          className="mt-10"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <motion.div
            animate={{ scale: [1, 1.01, 1] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Button variant="inverted" size="lg">
              {wioFinalCta.cta}
            </Button>
          </motion.div>
        </motion.div>

        <motion.p
          className="mt-6 text-sm text-white/30"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {wioFinalCta.finePrint}
        </motion.p>
      </div>
    </section>
  );
}
