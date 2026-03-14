"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { faq } from "@/content/what-is-meticulosity-io";
import { fadeUp, staggerContainer } from "@/lib/animations";

export default function FaqSection() {
  return (
    <section id="faq" className="bg-[#F9F2FD] py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#190F2E] text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          {faq.headline}
        </motion.h2>

        {/* Accordion */}
        <motion.div
          className="space-y-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          {faq.items.map((item) => (
            <FaqItem key={item.id} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FaqItem({
  item,
}: {
  item: { id: string; question: string; answer: string };
}) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      id={`faq-${item.id}`}
      className="bg-white rounded-xl border border-[rgba(85,39,105,0.1)] shadow-[0_1px_3px_rgba(0,0,0,0.04)] overflow-hidden"
      variants={fadeUp}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-6 text-left hover:bg-[#F9F2FD]/50 transition-colors"
        aria-expanded={open}
        aria-controls={`faq-answer-${item.id}`}
      >
        <span className="font-heading font-semibold text-[#190F2E]">
          {item.question}
        </span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <ChevronDown size={20} className="text-[#552769]" />
        </motion.div>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            id={`faq-answer-${item.id}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <div className="px-6 pb-6 pt-0">
              <p className="text-gray-500 leading-relaxed">{item.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
