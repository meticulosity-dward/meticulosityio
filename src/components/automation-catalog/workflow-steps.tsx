"use client";

import { motion } from "framer-motion";
import type { WorkflowStep, StepType } from "@/content/automation-catalog";

const stepStyles: Record<
  StepType,
  { bg: string; border: string; dot: string; text: string }
> = {
  trigger: {
    bg: "bg-rose-50",
    border: "border-rose-200",
    dot: "bg-rose-400",
    text: "text-rose-700",
  },
  ai: {
    bg: "bg-blue-50",
    border: "border-blue-200",
    dot: "bg-blue-500",
    text: "text-blue-700",
  },
  slack: {
    bg: "bg-[#190F2E]/5",
    border: "border-[#190F2E]/20",
    dot: "bg-[#190F2E]",
    text: "text-[#190F2E]",
  },
  human: {
    bg: "bg-amber-50",
    border: "border-amber-200",
    dot: "bg-amber-500",
    text: "text-amber-700",
  },
  action: {
    bg: "bg-purple-50",
    border: "border-purple-200",
    dot: "bg-[#7B68EE]",
    text: "text-purple-700",
  },
  data: {
    bg: "bg-amber-50/60",
    border: "border-amber-100",
    dot: "bg-amber-400",
    text: "text-amber-700",
  },
  success: {
    bg: "bg-green-50",
    border: "border-green-200",
    dot: "bg-[#5ABA48]",
    text: "text-green-700",
  },
};

export default function WorkflowSteps({
  steps,
}: {
  steps: WorkflowStep[];
}) {
  return (
    <div className="relative pl-6">
      {/* Connecting line */}
      <div className="absolute left-[9px] top-3 bottom-3 w-px bg-gradient-to-b from-rose-300 via-purple-300 to-purple-400" />

      <div className="space-y-2">
        {steps.map((step, i) => {
          const style = stepStyles[step.type];
          return (
            <motion.div
              key={i}
              className="relative flex items-center gap-3"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              {/* Dot */}
              <div
                className={`absolute -left-6 w-[18px] h-[18px] rounded-full ${style.dot} ring-2 ring-white flex-shrink-0`}
              />

              {/* Step label */}
              <div
                className={`${style.bg} ${style.border} border rounded-lg px-3 py-2 text-sm ${style.text} font-medium leading-snug`}
              >
                {step.label}
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export function WorkflowLegend() {
  return (
    <div className="flex flex-wrap gap-3 text-xs">
      {Object.entries(stepStyles)
        .filter(([key]) => key !== "success")
        .map(([key, style]) => (
          <div key={key} className="flex items-center gap-1.5">
            <div className={`w-2.5 h-2.5 rounded-full ${style.dot}`} />
            <span className="text-gray-500 capitalize">
              {key === "ai"
                ? "AI Processing"
                : key === "slack"
                  ? "Slack"
                  : key === "human"
                    ? "Human Review"
                    : key === "action"
                      ? "Action Taken"
                      : key === "data"
                        ? "Data Operation"
                        : "Trigger"}
            </span>
          </div>
        ))}
    </div>
  );
}
