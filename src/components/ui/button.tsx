"use client";

import { motion } from "framer-motion";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "inverted";
  href?: string;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function Button({
  children,
  variant = "primary",
  href = "#contact",
  className = "",
  size = "md",
}: ButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-base",
    lg: "px-9 py-4 text-lg",
  };

  const variantClasses = {
    primary:
      "bg-gradient-to-r from-[#552769] to-[#6B3FA0] text-white shadow-lg shadow-purple-900/20 hover:shadow-xl hover:shadow-purple-900/30",
    secondary:
      "border-2 border-white/30 text-white hover:bg-white/10 hover:border-white/50",
    inverted:
      "bg-white text-[#552769] shadow-lg hover:shadow-xl hover:shadow-purple-900/20",
  };

  return (
    <motion.a
      href={href}
      className={`inline-flex items-center justify-center rounded-lg font-heading font-semibold transition-all duration-300 ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.a>
  );
}
