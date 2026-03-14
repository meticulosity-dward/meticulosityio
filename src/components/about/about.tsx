"use client";

import { motion } from "framer-motion";
import { Award, Calendar, Briefcase, Users, Trophy, Star } from "lucide-react";
import { about } from "@/content/homepage";
import { fadeUp, staggerContainer, slideFromRight } from "@/lib/animations";

const iconMap: Record<string, React.ElementType> = {
  Award,
  Calendar,
  Briefcase,
  Users,
  Trophy,
  Star,
};

export default function About() {
  return (
    <section id="about" className="bg-[#F9F2FD] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#190F2E] text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          {about.headline}
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: narrative */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {about.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                className="text-gray-600 leading-relaxed text-lg"
                variants={fadeUp}
              >
                {p}
              </motion.p>
            ))}
          </motion.div>

          {/* Right: credentials */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            {about.credentials.map((cred) => {
              const Icon = iconMap[cred.icon];
              return (
                <motion.div
                  key={cred.label}
                  className="bg-white rounded-xl p-5 shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.06)] border border-[rgba(85,39,105,0.1)] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                  variants={slideFromRight}
                >
                  <div className="w-10 h-10 rounded-lg bg-[#552769]/10 flex items-center justify-center mb-3">
                    <Icon size={20} className="text-[#552769]" />
                  </div>
                  <p className="text-sm font-heading font-semibold text-[#190F2E]">
                    {cred.label}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
