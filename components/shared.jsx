"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const EASE = [0.16, 1, 0.3, 1];

/**
 * Reveal — fades + slides its children up when scrolled into view (once).
 * Mirrors the original [data-reveal] IntersectionObserver behaviour.
 */
export function Reveal({ children, delay = 0, as = "div", style, ...rest }) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.9, ease: EASE, delay }}
      style={style}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

/**
 * KineticHeading — the giant translucent outline word that drifts sideways
 * as the section scrolls through the viewport. [data-kinetic] in the original.
 */
export function KineticHeading({ text, speed = 0.15, style }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // range scaled off the viewport so the drift feels like the original px math
  const range =
    typeof window !== "undefined" ? window.innerHeight * speed * 1.6 : 240;
  const x = useTransform(scrollYProgress, [0, 1], [range, -range]);

  return (
    <motion.div
      ref={ref}
      aria-hidden="true"
      style={{
        x,
        fontWeight: 700,
        letterSpacing: "-.02em",
        color: "transparent",
        WebkitTextStroke: "1px rgba(148,184,255,.08)",
        whiteSpace: "nowrap",
        pointerEvents: "none",
        userSelect: "none",
        willChange: "transform",
        ...style,
      }}
    >
      {text}
    </motion.div>
  );
}

/**
 * TiltGroup — gently rotates its contents on the X axis based on where the
 * block sits relative to the viewport centre. [data-tilt] in the original.
 */
export function TiltGroup({ children, style, className }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const rotateX = useTransform(scrollYProgress, [0, 0.5, 1], [9, 0, -9]);

  return (
    <div style={{ perspective: 1400 }}>
      <motion.div
        ref={ref}
        className={className}
        style={{
          rotateX,
          transformStyle: "preserve-3d",
          willChange: "transform",
          ...style,
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
