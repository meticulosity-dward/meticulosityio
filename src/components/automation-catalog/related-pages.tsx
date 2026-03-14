"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { relatedPages } from "@/content/automation-catalog";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function RelatedPages() {
  return (
    <section className="bg-white py-16 md:py-20 border-t border-gray-100">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.h3
          className="text-lg font-heading font-semibold text-gray-400 uppercase tracking-wider text-center mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Related Pages
        </motion.h3>

        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {relatedPages.map((page) => (
            <motion.a
              key={page.href}
              href={page.href}
              className="group rounded-xl p-5 border border-gray-100 hover:border-[#552769]/20 hover:bg-[#F9F2FD]/30 transition-all duration-200"
              variants={fadeUp}
            >
              <h4 className="font-heading font-semibold text-[#190F2E] mb-1 group-hover:text-[#552769] transition-colors">
                {page.title}
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed mb-3">
                {page.description}
              </p>
              <span className="inline-flex items-center gap-1 text-sm text-[#552769] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more
                <ArrowRight size={14} />
              </span>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
