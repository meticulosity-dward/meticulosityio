"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Clock, Zap, Info } from "lucide-react";
import {
  categories,
  catalogOrientation,
  type Category,
  type Automation,
} from "@/content/automation-catalog";
import { fadeUp, staggerContainer } from "@/lib/animations";
import WorkflowSteps, { WorkflowLegend } from "./workflow-steps";

const ALL_FILTER = "all";
const AGENTIC_FILTER = "agentic";

const filterTabs = [
  { id: ALL_FILTER, label: "All" },
  ...categories.map((c) => ({ id: c.id, label: c.name })),
  { id: AGENTIC_FILTER, label: "Agentic" },
];

export default function CatalogContent() {
  const [activeFilter, setActiveFilter] = useState(ALL_FILTER);

  const filteredCategories = categories
    .map((cat) => {
      if (activeFilter === ALL_FILTER) return cat;
      if (activeFilter === AGENTIC_FILTER) {
        const agentic = cat.automations.filter((a) =>
          a.tags.includes("Agentic")
        );
        if (agentic.length === 0) return null;
        return { ...cat, automations: agentic };
      }
      if (activeFilter === cat.id) return cat;
      return null;
    })
    .filter(Boolean) as Category[];

  return (
    <section className="bg-white">
      {/* Orientation bar */}
      <div className="bg-[#F9F2FD] border-b border-[rgba(85,39,105,0.08)]">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex gap-3 items-start">
            <Info
              size={18}
              className="text-[#552769] mt-0.5 flex-shrink-0"
            />
            <p className="text-sm text-gray-600 leading-relaxed">
              {catalogOrientation}
            </p>
          </div>
        </div>
      </div>

      {/* Filter tabs */}
      <div className="sticky top-20 z-30 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 py-3 overflow-x-auto scrollbar-hide">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id)}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeFilter === tab.id
                    ? tab.id === AGENTIC_FILTER
                      ? "bg-[#5ABA48] text-white shadow-md"
                      : "bg-[#552769] text-white shadow-md"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                {tab.id === AGENTIC_FILTER && (
                  <Zap size={12} className="inline mr-1 -mt-0.5" />
                )}
                {tab.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Workflow legend */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-6">
        <WorkflowLegend />
      </div>

      {/* Category sections */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeFilter}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {filteredCategories.map((cat) => (
            <CategorySection key={cat.id} category={cat} />
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}

function CategorySection({ category }: { category: Category }) {
  const featured = category.automations.filter((a) => a.featured);
  const standard = category.automations.filter((a) => !a.featured);

  return (
    <section id={category.id} className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Category header */}
        <motion.div
          className="mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-heading font-bold text-[#190F2E] mb-3">
            {category.name}
          </h2>
          <p className="text-gray-500 leading-relaxed max-w-3xl">
            {category.intro}
          </p>
        </motion.div>

        {/* Featured cards */}
        {featured.length > 0 && (
          <motion.div
            className="space-y-8 mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={staggerContainer}
          >
            {featured.map((automation) => (
              <FeaturedCard key={automation.id} automation={automation} />
            ))}
          </motion.div>
        )}

        {/* Standard cards */}
        {standard.length > 0 && (
          <motion.div
            className="grid md:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
            variants={staggerContainer}
          >
            {standard.map((automation) => (
              <StandardCard key={automation.id} automation={automation} />
            ))}
          </motion.div>
        )}
      </div>

      {/* Category divider */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mt-16">
        <div className="h-px bg-gradient-to-r from-transparent via-[#552769]/10 to-transparent" />
      </div>
    </section>
  );
}

function FeaturedCard({ automation }: { automation: Automation }) {
  return (
    <motion.div
      id={automation.id}
      className="bg-white rounded-2xl p-8 md:p-10 border border-[rgba(85,39,105,0.1)] shadow-[0_1px_3px_rgba(0,0,0,0.04),0_4px_12px_rgba(0,0,0,0.06)] hover:shadow-lg transition-shadow duration-300"
      variants={fadeUp}
    >
      {/* Top row: tags + stat */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div className="flex flex-wrap gap-2">
          {automation.tags.map((tag) => (
            <span
              key={tag}
              className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                tag === "Agentic"
                  ? "bg-[#5ABA48]/10 text-[#5ABA48]"
                  : "bg-[#552769]/10 text-[#552769]"
              }`}
            >
              {tag === "Agentic" ? (
                <Zap size={12} />
              ) : (
                <Sparkles size={12} />
              )}
              {tag}
            </span>
          ))}
        </div>
        {automation.stat && (
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#5ABA48]/10 border border-[#5ABA48]/20">
            <Clock size={14} className="text-[#5ABA48]" />
            <span className="text-sm font-heading font-bold text-[#5ABA48]">
              {automation.stat}
            </span>
          </span>
        )}
      </div>

      <h3 className="text-xl md:text-2xl font-heading font-bold text-[#190F2E] mb-4">
        {automation.name}
      </h3>

      <p className="text-gray-600 leading-relaxed mb-6">{automation.body}</p>

      {/* Pain + scale */}
      {(automation.pain || automation.scale) && (
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {automation.pain && (
            <div className="bg-[#F9F2FD] rounded-xl p-5">
              <p className="text-xs font-heading font-semibold text-[#552769] uppercase tracking-wider mb-2">
                The pain it solves
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                {automation.pain}
              </p>
            </div>
          )}
          {automation.scale && (
            <div className="bg-[#F9F2FD] rounded-xl p-5">
              <p className="text-xs font-heading font-semibold text-[#5ABA48] uppercase tracking-wider mb-2">
                Scale math
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">
                {automation.scale}
              </p>
            </div>
          )}
        </div>
      )}

      {/* Workflow + Systems */}
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-xs font-heading font-semibold text-gray-400 uppercase tracking-wider mb-4">
            Workflow
          </p>
          <WorkflowSteps steps={automation.workflow} />
        </div>
        <div>
          <p className="text-xs font-heading font-semibold text-gray-400 uppercase tracking-wider mb-4">
            Systems
          </p>
          <div className="flex flex-wrap gap-2">
            {automation.systems.map((sys) => (
              <span
                key={sys}
                className="px-3 py-1.5 rounded-lg bg-gray-50 border border-gray-100 text-sm text-gray-600 font-medium"
              >
                {sys}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function StandardCard({ automation }: { automation: Automation }) {
  return (
    <motion.div
      id={automation.id}
      className="bg-white rounded-2xl p-6 md:p-8 border border-[rgba(85,39,105,0.1)] shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-md transition-shadow duration-300 flex flex-col"
      variants={fadeUp}
    >
      {/* Tags + stat */}
      <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
        <div className="flex flex-wrap gap-1.5">
          {automation.tags.map((tag) => (
            <span
              key={tag}
              className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                tag === "Agentic"
                  ? "bg-[#5ABA48]/10 text-[#5ABA48]"
                  : "bg-[#552769]/10 text-[#552769]"
              }`}
            >
              {tag === "Agentic" && <Zap size={10} />}
              {tag}
            </span>
          ))}
        </div>
        {automation.stat && (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#5ABA48]/10 border border-[#5ABA48]/20">
            <Clock size={12} className="text-[#5ABA48]" />
            <span className="text-xs font-heading font-bold text-[#5ABA48]">
              {automation.stat}
            </span>
          </span>
        )}
      </div>

      <h3 className="text-lg font-heading font-bold text-[#190F2E] mb-3">
        {automation.name}
      </h3>

      <p className="text-sm text-gray-500 leading-relaxed mb-6 flex-1">
        {automation.body}
      </p>

      {/* Workflow */}
      <div className="mb-5">
        <p className="text-xs font-heading font-semibold text-gray-400 uppercase tracking-wider mb-3">
          Workflow
        </p>
        <WorkflowSteps steps={automation.workflow} />
      </div>

      {/* Systems */}
      <div>
        <p className="text-xs font-heading font-semibold text-gray-400 uppercase tracking-wider mb-3">
          Systems
        </p>
        <div className="flex flex-wrap gap-1.5">
          {automation.systems.map((sys) => (
            <span
              key={sys}
              className="px-2.5 py-1 rounded-md bg-gray-50 border border-gray-100 text-xs text-gray-500 font-medium"
            >
              {sys}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
