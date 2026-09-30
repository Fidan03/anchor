"use client";

import type { ReactNode } from "react";
import { motion } from "motion/react";

export function HeroCodePanel({ children }: { children: ReactNode }) {
  return (
    <motion.div
      className="min-w-0"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
