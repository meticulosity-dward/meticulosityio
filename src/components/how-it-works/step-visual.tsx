"use client";

import { motion } from "framer-motion";
import {
  CheckSquare,
  BarChart3,
  DollarSign,
  MessageSquare,
  Activity,
  Shield,
  Zap,
} from "lucide-react";

interface StepVisualProps {
  stepIndex: number;
}

export default function StepVisual({ stepIndex }: StepVisualProps) {
  if (stepIndex === 0) return <ConnectToolsVisual />;
  if (stepIndex === 1) return <DeployAutomationsVisual />;
  return <RunEverythingVisual />;
}

function ConnectToolsVisual() {
  const tools = [
    { name: "ClickUp", icon: CheckSquare, color: "#7B68EE" },
    { name: "HubSpot", icon: BarChart3, color: "#FF7A59" },
    { name: "QuickBooks", icon: DollarSign, color: "#2CA01C" },
    { name: "Slack", icon: MessageSquare, color: "#4A154B" },
  ];

  return (
    <div className="relative bg-[#190F2E] rounded-2xl p-8 overflow-hidden" aria-label="Tools connecting to a unified data layer">
      {/* Tools on left */}
      <div className="flex flex-col gap-3 mb-8">
        {tools.map((tool, i) => (
          <motion.div
            key={tool.name}
            className="flex items-center gap-3 bg-[#1E1535] rounded-lg p-3 border border-[#552769]/20"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.15 }}
          >
            <tool.icon size={18} color={tool.color} />
            <span className="text-sm text-white/70">{tool.name}</span>
            {/* Animated connection dot */}
            <motion.div
              className="ml-auto w-2 h-2 rounded-full"
              style={{ backgroundColor: tool.color }}
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
            />
          </motion.div>
        ))}
      </div>

      {/* Central data layer */}
      <motion.div
        className="bg-gradient-to-r from-[#552769]/20 to-[#6B3FA0]/20 rounded-xl p-4 border border-[#552769]/30 text-center"
        animate={{
          boxShadow: [
            "0 0 15px rgba(85,39,105,0.1)",
            "0 0 30px rgba(85,39,105,0.25)",
            "0 0 15px rgba(85,39,105,0.1)",
          ],
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <p className="text-xs font-heading font-semibold text-[#552769] uppercase tracking-wider">
          Unified Data Layer
        </p>
        <div className="flex justify-center gap-1 mt-2">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-0.5 h-3 rounded-full bg-[#552769]/50"
              animate={{ height: [8, 16, 8] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}

function DeployAutomationsVisual() {
  const automations = [
    { name: "Burn Reports", delay: 0 },
    { name: "Client Onboarding", delay: 0.15 },
    { name: "AI Task Triage", delay: 0.3 },
    { name: "Quote-to-Invoice", delay: 0.45 },
    { name: "SOP Enforcement", delay: 0.6 },
    { name: "Budget Alerts", delay: 0.75 },
  ];

  return (
    <div className="bg-[#190F2E] rounded-2xl p-8" aria-label="Grid of automation cards activating one by one">
      <div className="grid grid-cols-2 gap-3">
        {automations.map((auto) => (
          <motion.div
            key={auto.name}
            className="bg-[#1E1535] rounded-lg p-4 border border-[#552769]/20"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + auto.delay }}
          >
            <p className="text-sm font-medium text-white/80 mb-2">
              {auto.name}
            </p>
            <motion.div
              className="flex items-center gap-1.5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + auto.delay }}
            >
              <motion.span
                className="w-2 h-2 rounded-full bg-[#5ABA48]"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="text-xs text-[#5ABA48]">Active</span>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function RunEverythingVisual() {
  const metrics = [
    { label: "Uptime", value: "99.9%", color: "#5ABA48" },
    { label: "Last 7 days", value: "847 runs", color: "#552769" },
    { label: "Avg response", value: "1.2s", color: "#6B7DB2" },
  ];

  return (
    <div className="bg-[#190F2E] rounded-2xl p-8" aria-label="Monitoring dashboard showing green status indicators and automation execution count">
      {/* Status indicators */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-xs text-white/40 uppercase tracking-wider font-heading">
          System Status
        </span>
        <div className="flex gap-1.5 ml-auto">
          {Array.from({ length: 7 }).map((_, i) => (
            <motion.div
              key={i}
              className="w-6 h-4 rounded bg-[#5ABA48]/20"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i }}
            >
              <motion.div
                className="w-full h-full rounded bg-[#5ABA48]"
                style={{ transformOrigin: "bottom" }}
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: [0.3, 0.8, 0.5, 1, 0.7][i % 5] }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 + 0.1 * i }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Metrics cards */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {metrics.map((m, i) => (
          <motion.div
            key={m.label}
            className="bg-[#1E1535] rounded-lg p-3 text-center border border-[#552769]/15"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.15 }}
          >
            <p className="text-lg font-heading font-bold" style={{ color: m.color }}>
              {m.value}
            </p>
            <p className="text-[10px] text-white/40 mt-1">{m.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Activity feed */}
      <div className="space-y-2">
        {["Burn report sent to Acme Corp", "Budget alert: TechStart at 85%", "Nightly sync completed"].map(
          (msg, i) => (
            <motion.div
              key={msg}
              className="flex items-center gap-2 text-xs"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + i * 0.15 }}
            >
              <Activity size={10} className="text-[#5ABA48] flex-shrink-0" />
              <span className="text-white/50">{msg}</span>
            </motion.div>
          )
        )}
      </div>
    </div>
  );
}
