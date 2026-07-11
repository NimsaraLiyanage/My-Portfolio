"use client";

import { useScroll, useTransform, motion } from "framer-motion";

// Two blurred radial "orbs" fixed behind everything, drifting on scroll (parallax).
export default function AmbientOrbs() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, (v) => v * -0.15);
  const y2 = useTransform(scrollY, (v) => v * 0.1);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          top: "8%",
          left: "-10%",
          width: 640,
          height: 640,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, var(--acs, rgba(34,211,238,.10)) 0%, transparent 65%)",
          filter: "blur(10px)",
          y: y1,
        }}
      />
      <motion.div
        style={{
          position: "absolute",
          top: "55%",
          right: "-12%",
          width: 720,
          height: 720,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(59,90,255,.08) 0%, transparent 65%)",
          y: y2,
        }}
      />
    </div>
  );
}
