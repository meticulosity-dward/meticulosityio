"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Layers, Link2, Brain, BarChart3 } from "lucide-react";
import { dataLayerDeep } from "@/content/what-is-meticulosity-io";
import { fadeUp, staggerContainer } from "@/lib/animations";

const featureIcons = [BarChart3, Layers, Link2, Brain];

export default function DataLayerDeep() {
  return (
    <section id="data-layer" className="bg-white py-20 md:py-28">
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
            {dataLayerDeep.headline}
          </h2>
          <p className="mt-5 text-lg text-gray-500">
            {dataLayerDeep.subheadline}
          </p>
        </motion.div>

        {/* The Problem You Already Have */}
        <motion.div
          className="max-w-4xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
        >
          <motion.div
            className="flex items-center gap-3 mb-6"
            variants={fadeUp}
          >
            <div className="w-10 h-10 rounded-lg bg-[#D25657]/10 flex items-center justify-center">
              <AlertTriangle size={20} className="text-[#D25657]" />
            </div>
            <h3 className="text-xl font-heading font-semibold text-[#190F2E]">
              The Problem You Already Have
            </h3>
          </motion.div>

          <motion.p
            className="text-gray-600 leading-relaxed mb-6"
            variants={fadeUp}
          >
            {dataLayerDeep.problemIntro}
          </motion.p>

          {/* Pull quote */}
          <motion.blockquote
            className="text-2xl md:text-3xl font-heading font-bold text-[#552769] italic my-8 pl-6 border-l-4 border-[#552769]"
            variants={fadeUp}
          >
            &ldquo;{dataLayerDeep.pullQuote}&rdquo;
          </motion.blockquote>

          <motion.p
            className="text-gray-500 leading-relaxed mb-6"
            variants={fadeUp}
          >
            {dataLayerDeep.problemBody}
          </motion.p>

          {/* Crisis story */}
          <motion.div
            className="bg-[#D25657]/5 rounded-xl p-6 border border-[#D25657]/15 mb-4"
            variants={fadeUp}
          >
            <p className="text-gray-600 leading-relaxed">
              {dataLayerDeep.crisisStory}
            </p>
          </motion.div>

          <motion.p
            className="text-lg font-heading font-semibold text-[#190F2E]"
            variants={fadeUp}
          >
            {dataLayerDeep.crisisConclusion}
          </motion.p>
        </motion.div>

        {/* What the Data Layer Actually Does */}
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          variants={staggerContainer}
        >
          <motion.h3
            className="text-2xl font-heading font-bold text-[#190F2E] mb-4 text-center"
            variants={fadeUp}
          >
            What the Data Layer Actually Does
          </motion.h3>
          <motion.p
            className="text-gray-500 leading-relaxed text-center max-w-3xl mx-auto mb-10"
            variants={fadeUp}
          >
            {dataLayerDeep.whatItDoes}
          </motion.p>

          {/* Feature grid */}
          <motion.div
            className="grid md:grid-cols-2 gap-6"
            variants={staggerContainer}
          >
            {dataLayerDeep.features.map((feature, i) => {
              const Icon = featureIcons[i];
              return (
                <motion.div
                  key={feature.title}
                  className="bg-[#F9F2FD] rounded-xl p-6 border border-[rgba(85,39,105,0.1)] hover:shadow-md transition-shadow duration-300"
                  variants={fadeUp}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-[#552769]/10 flex items-center justify-center">
                      <Icon size={20} className="text-[#552769]" />
                    </div>
                    <h4 className="font-heading font-semibold text-[#190F2E]">
                      {feature.title}
                    </h4>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>

        {/* How It All Connects */}
        <motion.div
          className="max-w-4xl mx-auto mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h3
            className="text-2xl font-heading font-bold text-[#190F2E] mb-4"
            variants={fadeUp}
          >
            How It All Connects
          </motion.h3>
          <motion.p
            className="text-gray-500 leading-relaxed mb-4"
            variants={fadeUp}
          >
            {dataLayerDeep.howItConnectsIntro}
          </motion.p>
          <motion.p
            className="text-gray-600 leading-relaxed"
            variants={fadeUp}
          >
            {dataLayerDeep.howItConnects}
          </motion.p>
        </motion.div>

        {/* Connection Diagram */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <DataFlowDiagram />
        </motion.div>

        {/* Built for AI + At Scale */}
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
          <motion.div
            className="bg-[#190F2E] rounded-xl p-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="font-heading font-semibold text-white mb-3">
              Built for AI
            </h4>
            <p className="text-sm text-white/60 leading-relaxed">
              {dataLayerDeep.builtForAi}
            </p>
          </motion.div>

          <motion.div
            className="bg-[#190F2E] rounded-xl p-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h4 className="font-heading font-semibold text-white mb-3">
              At Scale
            </h4>
            <p className="text-sm text-white/60 leading-relaxed">
              {dataLayerDeep.atScale}
            </p>
          </motion.div>
        </div>

        {/* Final callout */}
        <motion.div
          className="bg-[#552769] rounded-2xl p-8 text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-white/90 leading-relaxed text-lg font-medium">
            {dataLayerDeep.callout}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function DataFlowDiagram() {
  const layers = [
    { label: "PM Tool", color: "#7B68EE" },
    { label: "Accounting", color: "#FF7A59" },
    { label: "CRM", color: "#2CA01C" },
    { label: "Communications", color: "#4A154B" },
  ];

  return (
    <div className="bg-[#190F2E] rounded-2xl p-8 max-w-3xl mx-auto overflow-hidden">
      <div className="grid grid-cols-[1fr_auto_1fr] gap-6 items-center">
        {/* Left: Sources */}
        <div className="flex flex-col gap-3">
          {layers.map((layer, i) => (
            <motion.div
              key={layer.label}
              className="px-4 py-3 rounded-lg text-sm font-medium text-white/80 border whitespace-nowrap text-center"
              style={{
                borderColor: `${layer.color}40`,
                backgroundColor: `${layer.color}15`,
              }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.1 }}
            >
              {layer.label}
            </motion.div>
          ))}
        </div>

        {/* Center: Data Layer */}
        <motion.div
          className="rounded-xl p-6 border border-[#552769]/40 text-center flex flex-col items-center justify-center min-h-[180px]"
          style={{
            background:
              "linear-gradient(135deg, rgba(85,39,105,0.25) 0%, rgba(107,63,160,0.15) 100%)",
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
          <p className="text-xs font-heading font-bold text-[#552769] uppercase tracking-wider mb-3">
            Unified Data Layer
          </p>
          <div className="flex justify-center gap-0.5">
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.div
                key={i}
                className="w-0.5 rounded-full bg-[#552769]/40"
                animate={{ height: [6, 14, 6] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.08,
                }}
              />
            ))}
          </div>
          <p className="text-[10px] text-white/40 mt-3">
            Single Source of Truth
          </p>
        </motion.div>

        {/* Right: Outputs */}
        <div className="flex flex-col gap-3">
          {["Burn Reports", "Budget Alerts", "Utilization", "AI Workflows"].map(
            (output, i) => (
              <motion.div
                key={output}
                className="px-4 py-3 rounded-lg text-sm font-medium text-white/80 bg-[#5ABA48]/10 border border-[#5ABA48]/30 whitespace-nowrap text-center"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 + i * 0.1 }}
              >
                {output}
              </motion.div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
