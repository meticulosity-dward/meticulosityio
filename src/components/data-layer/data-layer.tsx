"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { dataLayer } from "@/content/homepage";
import { fadeUp, staggerContainer, slideFromLeft, slideFromRight } from "@/lib/animations";

export default function DataLayer() {
  return (
    <section id="data-layer" className="bg-[#F9F2FD] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-[#190F2E]">
            {dataLayer.headline}
          </h2>
          <p className="mt-5 text-lg text-gray-500">{dataLayer.subheadline}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: text */}
          <motion.div
            className="space-y-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={staggerContainer}
          >
            <motion.p className="text-gray-600 leading-relaxed text-lg" variants={fadeUp}>
              {dataLayer.paragraphs[0]}
            </motion.p>

            {/* Pull quote */}
            <motion.blockquote
              className="text-2xl md:text-3xl font-heading font-bold text-[#552769] italic my-8 pl-6 border-l-4 border-[#552769]"
              variants={fadeUp}
            >
              &ldquo;{dataLayer.pullQuote}&rdquo;
            </motion.blockquote>

            <motion.p className="text-gray-600 leading-relaxed" variants={fadeUp}>
              {dataLayer.paragraphs[1]}
            </motion.p>
            <motion.p className="text-gray-600 leading-relaxed" variants={fadeUp}>
              {dataLayer.paragraphs[2]}
            </motion.p>
            <motion.p className="text-gray-600 leading-relaxed" variants={fadeUp}>
              {dataLayer.paragraphs[3]}
            </motion.p>
          </motion.div>

          {/* Right: architecture diagram */}
          <ArchitectureDiagram />
        </div>

        {/* Stats row */}
        <motion.div
          className="grid grid-cols-3 gap-6 mt-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {dataLayer.stats.map((stat) => (
            <motion.div
              key={stat.label}
              className="bg-white rounded-xl p-6 text-center shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.06)] border border-[rgba(85,39,105,0.1)]"
              variants={fadeUp}
            >
              <CountUpStat value={stat.value} />
              <p className="text-sm text-gray-500 mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CountUpStat({ value }: { value: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <div ref={ref}>
      <motion.p
        className="text-3xl font-heading font-bold text-[#552769]"
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6 }}
      >
        {value}
      </motion.p>
    </div>
  );
}

function ArchitectureDiagram() {
  const inputColors = ["#7B68EE", "#FF7A59", "#2CA01C", "#4A154B"];

  return (
    <motion.div
      className="relative bg-[#190F2E] rounded-2xl p-8 overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      aria-label="Architecture diagram showing data flowing from input sources through the unified data layer to outputs"
    >
      <div className="grid grid-cols-[auto_2rem_1fr_2rem_auto] items-center gap-2">
        {/* Left: inputs */}
        <div className="flex flex-col gap-2">
          {dataLayer.inputs.map((input, i) => (
            <motion.div
              key={input}
              className="px-3 py-2 rounded-lg text-[11px] font-medium text-white/80 border whitespace-nowrap"
              style={{
                borderColor: `${inputColors[i]}40`,
                backgroundColor: `${inputColors[i]}15`,
              }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.15 }}
            >
              {input}
            </motion.div>
          ))}
        </div>

        {/* Connection lines left */}
        <div className="flex flex-col items-center justify-center gap-2 relative h-full">
          {[0, 1, 2, 3].map((i) => (
            <motion.div
              key={`line-left-${i}`}
              className="w-full h-px bg-gradient-to-r from-transparent via-[#552769]/40 to-[#552769]/60"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + i * 0.1 }}
            />
          ))}
          {/* Data dots */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={`dot-l-${i}`}
              className="absolute w-1.5 h-1.5 rounded-full bg-[#6B3FA0]"
              style={{ top: `${20 + i * 30}%` }}
              animate={{ x: [-20, 20], opacity: [0, 1, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            />
          ))}
        </div>

        {/* Center: unified data layer */}
        <motion.div
          className="rounded-xl p-5 border border-[#552769]/40 text-center min-h-[140px] flex flex-col items-center justify-center"
          style={{
            background: "linear-gradient(135deg, rgba(85,39,105,0.2) 0%, rgba(107,63,160,0.15) 100%)",
          }}
          animate={{
            boxShadow: [
              "0 0 20px rgba(85,39,105,0.1)",
              "0 0 40px rgba(85,39,105,0.3)",
              "0 0 20px rgba(85,39,105,0.1)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          <p className="text-sm font-heading font-bold text-[#552769] uppercase tracking-wider">
            Unified Data Layer
          </p>
          <div className="flex justify-center gap-0.5 mt-3">
            {Array.from({ length: 16 }).map((_, i) => (
              <motion.div
                key={i}
                className="w-0.5 rounded-full bg-[#552769]/40"
                animate={{ height: [6, 14, 6] }}
                transition={{ duration: 1.2, repeat: Infinity, delay: i * 0.08 }}
              />
            ))}
          </div>
        </motion.div>

        {/* Connection lines right */}
        <div className="flex flex-col items-center justify-center gap-4 relative h-full">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={`line-right-${i}`}
              className="w-full h-px bg-gradient-to-r from-[#552769]/60 via-[#552769]/40 to-transparent"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9 + i * 0.1 }}
            />
          ))}
          {[0, 1].map((i) => (
            <motion.div
              key={`dot-r-${i}`}
              className="absolute w-1.5 h-1.5 rounded-full bg-[#5ABA48]"
              style={{ top: `${25 + i * 40}%` }}
              animate={{ x: [-20, 20], opacity: [0, 1, 0] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: 0.8 + i * 0.6,
              }}
            />
          ))}
        </div>

        {/* Right: outputs */}
        <div className="flex flex-col gap-2">
          {dataLayer.outputs.map((output, i) => (
            <motion.div
              key={output}
              className="px-3 py-2 rounded-lg text-[11px] font-medium text-white/80 bg-[#5ABA48]/10 border border-[#5ABA48]/30 whitespace-nowrap"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 1 + i * 0.15 }}
            >
              {output}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
