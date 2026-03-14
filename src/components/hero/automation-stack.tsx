"use client";

import { motion } from "framer-motion";
import {
  CheckSquare,
  BarChart3,
  MessageSquare,
  Mail,
  DollarSign,
} from "lucide-react";

const tools = [
  { name: "ClickUp", icon: CheckSquare, color: "#7B68EE" },
  { name: "HubSpot", icon: BarChart3, color: "#FF7A59" },
  { name: "QuickBooks", icon: DollarSign, color: "#2CA01C" },
  { name: "Slack", icon: MessageSquare, color: "#4A154B" },
  { name: "Gmail", icon: Mail, color: "#EA4335" },
];

const automations = [
  { name: "Burn Reports", active: true },
  { name: "Client Onboarding", active: true },
  { name: "AI Triage", active: true },
];

export default function AutomationStackVisual() {
  return (
    <div className="relative w-full max-w-md mx-auto" aria-label="Automation stack diagram showing three layers: your existing tools, unified data layer, and automation library">
      {/* Top layer: Automation Library */}
      <motion.div
        className="relative z-30 mb-6"
        animate={{ y: [0, -4, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="bg-[#1E1535] rounded-xl border border-[#552769]/30 p-4">
          <p className="text-xs font-heading font-semibold text-[#6B7DB2] uppercase tracking-wider mb-3">
            Automation Library
          </p>
          <div className="grid grid-cols-3 gap-2">
            {automations.map((auto, i) => (
              <motion.div
                key={auto.name}
                className="bg-[#190F2E] rounded-lg p-2.5 border border-[#552769]/20"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2 + i * 0.15 }}
              >
                <p className="text-[10px] font-medium text-white/80 leading-tight">
                  {auto.name}
                </p>
                <div className="flex items-center gap-1 mt-1.5">
                  <motion.span
                    className="w-1.5 h-1.5 rounded-full bg-[#5ABA48]"
                    animate={{ opacity: [1, 0.4, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.3,
                    }}
                  />
                  <span className="text-[8px] text-[#5ABA48]">Active</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Data flow lines (top to middle) */}
      <div className="absolute left-1/2 top-[105px] -translate-x-1/2 z-20 h-6 flex items-center justify-center gap-6">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={`dot-top-${i}`}
            className="w-1.5 h-1.5 rounded-full bg-[#552769]"
            animate={{ y: [-10, 10], opacity: [0, 1, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              delay: i * 0.4,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Middle layer: Unified Data Layer */}
      <motion.div
        className="relative z-10 mb-6"
        animate={{ y: [0, -2, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
      >
        <motion.div
          className="rounded-xl p-4 border border-[#552769]/40"
          style={{
            background:
              "linear-gradient(135deg, rgba(85,39,105,0.15) 0%, rgba(107,63,160,0.1) 100%)",
          }}
          animate={{
            boxShadow: [
              "0 0 20px rgba(85,39,105,0.1)",
              "0 0 40px rgba(85,39,105,0.25)",
              "0 0 20px rgba(85,39,105,0.1)",
            ],
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <p className="text-xs font-heading font-semibold text-[#552769] uppercase tracking-wider text-center">
            Unified Data Layer
          </p>
          <div className="flex justify-center gap-1 mt-2">
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
              <motion.div
                key={i}
                className="w-1 h-4 rounded-full bg-[#552769]/40"
                animate={{ height: [12, 20, 12] }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  delay: i * 0.15,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Data flow lines (middle to bottom) */}
      <div className="absolute left-1/2 bottom-[95px] -translate-x-1/2 z-5 h-6 flex items-center justify-center gap-4">
        {[0, 1, 2, 3, 4].map((i) => (
          <motion.div
            key={`dot-bottom-${i}`}
            className="w-1 h-1 rounded-full bg-[#6B3FA0]"
            animate={{ y: [10, -10], opacity: [0, 1, 0] }}
            transition={{
              duration: 1.8,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Bottom layer: Your Tools */}
      <motion.div
        animate={{ y: [0, -2, 0] }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      >
        <div className="bg-[#1E1535]/50 rounded-xl border border-white/5 p-4">
          <p className="text-xs font-heading font-semibold text-[#6B7DB2] uppercase tracking-wider mb-3">
            Your Existing Tools
          </p>
          <div className="flex justify-between gap-2">
            {tools.map((tool, i) => (
              <motion.div
                key={tool.name}
                className="flex flex-col items-center gap-1.5 p-2 rounded-lg bg-[#190F2E]/60"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 + i * 0.1 }}
                whileHover={{ y: -2 }}
              >
                <tool.icon size={18} color={tool.color} />
                <span className="text-[8px] text-white/50">{tool.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
