"use client";

import { useRef } from "react";
import { useScroll, useSpring, motion } from "framer-motion";
import { ACCENT } from "@/lib/data";
import { accentVars } from "@/lib/theme";

import AmbientOrbs from "./AmbientOrbs";
import Nav from "./Nav";
import Hero from "./Hero";
import About from "./About";
import Work from "./Work";
import Skills from "./Skills";
import Journey from "./Journey";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Portfolio() {
  const rootRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div
      ref={rootRef}
      style={{
        ...accentVars(ACCENT),
        background: "#050B16",
        color: "#E6EEF9",
        overflowX: "clip",
        minHeight: "100vh",
        position: "relative",
      }}
    >
      <AmbientOrbs />

      {/* scroll progress bar */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 2,
          background: "var(--ac, #22D3EE)",
          transformOrigin: "0% 50%",
          scaleX: progress,
          zIndex: 60,
          boxShadow: "0 0 12px var(--acg, rgba(34,211,238,.5))",
        }}
      />

      <Nav />
      <Hero />
      <About />
      <Journey />
      <Work />
      <Skills />
      <Contact />
      <Footer />
    </div>
  );
}
