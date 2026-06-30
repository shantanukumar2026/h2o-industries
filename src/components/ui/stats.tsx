"use client";

import * as React from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface StatItem {
  label: string;
  value: string;
}

interface StatsProps extends React.HTMLAttributes<HTMLDivElement> {
  items: StatItem[];
  animate?: boolean;
}

export function Stats({ items, animate = true, className, ...props }: StatsProps) {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } },
  };

  return (
    <motion.div
      variants={animate ? containerVariants : undefined}
      initial={animate ? "hidden" : undefined}
      whileInView={animate ? "visible" : undefined}
      viewport={{ once: true, margin: "-50px" }}
      className={cn("grid grid-cols-2 gap-4", className)}
      {...(props as any)}
    >
      {items.map((stat) => (
        <motion.div
          key={stat.label}
          variants={animate ? itemVariants : undefined}
          className="glass-card p-6 rounded-lg flex flex-col justify-center bg-white/60 dark:bg-card/60 hover:bg-white/90 dark:hover:bg-card/90"
        >
          <span className="text-4xl font-extrabold text-primary mb-1 tracking-tight">
            {stat.value}
          </span>
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
            {stat.label}
          </span>
        </motion.div>
      ))}
    </motion.div>
  );
}
