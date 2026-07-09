"use client";
import { useEffect, useRef } from "react";
import { useMotionValue, useSpring, motion } from "motion/react";

export default function CursorGlow() {
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);
  const isTouch = useRef(false);

  // Smooth spring following with slight lag for premium feel
  const springConfig = { damping: 25, stiffness: 150, mass: 0.5 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Check for touch device
    if (typeof window !== "undefined") {
      isTouch.current = window.matchMedia("(hover: none)").matches;
      if (isTouch.current) return;

      // Check prefers-reduced-motion
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - 200); // offset by half of glow size (400/2)
      mouseY.set(e.clientY - 200);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Don't render on touch/mobile
  if (typeof window !== "undefined" && window.matchMedia("(hover: none)").matches) {
    return null;
  }

  return (
    <motion.div
      className="cursor-glow hidden md:block"
      style={{
        x: smoothX,
        y: smoothY,
      }}
      aria-hidden="true"
    />
  );
}
