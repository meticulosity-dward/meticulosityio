"use client";

import { motion } from "framer-motion";
import { fadeUp } from "@/lib/animations";

interface SectionWrapperProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  lavender?: boolean;
}

export default function SectionWrapper({
  id,
  children,
  className = "",
  dark,
  lavender,
}: SectionWrapperProps) {
  let bg = "bg-white";
  if (dark) bg = "bg-[#190F2E]";
  else if (lavender) bg = "bg-[#F9F2FD]";

  return (
    <section id={id} className={`${bg} ${className}`}>
      <motion.div
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-28"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
        variants={fadeUp}
      >
        {children}
      </motion.div>
    </section>
  );
}
