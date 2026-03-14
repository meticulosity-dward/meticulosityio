"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { stats } from "@/content/homepage";
import { fadeUp, staggerContainer } from "@/lib/animations";

const colorMap: Record<string, string> = {
  green: "#5ABA48",
  purple: "#552769",
  "blue-gray": "#6B7DB2",
};

export default function Stats() {
  return (
    <section className="bg-[#190F2E] py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white">
            {stats.headline}
          </h2>
          <p className="mt-5 text-lg text-[#6B7DB2]">{stats.subheadline}</p>
        </motion.div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-5 gap-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={staggerContainer}
        >
          {stats.items.map((item) => (
            <motion.div
              key={item.label}
              className="bg-[#1E1535] rounded-xl p-6 text-center border border-[rgba(85,39,105,0.2)]"
              variants={fadeUp}
            >
              <CountUpNumber
                value={item.value}
                prefix={item.prefix}
                suffix={item.suffix}
                color={colorMap[item.color]}
              />
              <p className="text-sm text-white/50 mt-3">{item.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function CountUpNumber({
  value,
  prefix = "",
  suffix = "",
  color,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  color: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = 1500;
    const steps = 40;
    const increment = value / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      const eased = 1 - Math.pow(1 - progress, 3);
      current = value * eased;
      setDisplay(current);

      if (step >= steps) {
        setDisplay(value);
        clearInterval(timer);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [inView, value]);

  const formatted = Number.isInteger(value)
    ? Math.round(display).toString()
    : display.toFixed(1);

  return (
    <div ref={ref}>
      <span
        className="text-4xl md:text-5xl font-heading font-bold"
        style={{ color }}
      >
        {prefix}
        {formatted}
        {suffix}
      </span>
    </div>
  );
}
