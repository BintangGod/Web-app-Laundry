"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

const BRAND_TEXT = "BINTANG LAUNDRY";

export default function IntroAnimation() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setIsVisible(false);
      return;
    }

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="intro-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Subtle amber radial backdrop */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.06)_0%,transparent_70%)]" />

          <div className="relative flex flex-col items-center gap-3">
            {/* Letter-by-letter stagger */}
            <div className="flex flex-wrap justify-center" aria-label={BRAND_TEXT}>
              {BRAND_TEXT.split("").map((char, i) => (
                <motion.span
                  key={i}
                  className={`text-4xl sm:text-5xl md:text-7xl font-extrabold tracking-tighter ${
                    char === " " ? "w-4 sm:w-6" : ""
                  } ${
                    // "LAUNDRY" part gets amber color (index 8+)
                    i >= 8 ? "text-primary" : "text-white"
                  }`}
                  initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{
                    duration: 0.5,
                    delay: 0.3 + i * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </div>

            {/* Subtitle fade in after letters */}
            <motion.p
              className="text-text-muted text-sm sm:text-base tracking-[0.3em] uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.8 }}
            >
              Laundry Premium
            </motion.p>

            {/* Loading bar */}
            <motion.div
              className="mt-6 h-[2px] bg-primary/30 rounded-full overflow-hidden w-32"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
            >
              <motion.div
                className="h-full bg-primary rounded-full"
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.4, delay: 1.2, ease: "easeInOut" }}
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
