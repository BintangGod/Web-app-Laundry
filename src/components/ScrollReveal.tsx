"use client";
import { motion, useReducedMotion } from "motion/react";
import { ReactNode } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  direction?: "up" | "left" | "right" | "fade";
  delay?: number;
  className?: string;
  once?: boolean;
}

export default function ScrollReveal({
  children,
  direction = "up",
  delay = 0,
  className = "",
  once = false,
}: ScrollRevealProps) {
  const reduce = useReducedMotion();

  const getInitial = () => {
    if (reduce) return false;
    switch (direction) {
      case "up":
        return { opacity: 0, y: 40 };
      case "left":
        return { opacity: 0, x: -40 };
      case "right":
        return { opacity: 0, x: 40 };
      case "fade":
        return { opacity: 0 };
      default:
        return { opacity: 0, y: 40 };
    }
  };

  return (
    <motion.div
      className={className}
      initial={getInitial()}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
