"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/lib/data";
import { Reveal, KineticHeading, TiltGroup } from "./shared";

export default function Skills() {
  return (
    <section
      id="skills"
      data-screen-label="Skills"
      style={{ position: "relative", padding: "180px 48px", zIndex: 1 }}
    >
      <KineticHeading
        text="STACK — STACK — STACK"
        speed={-0.14}
        style={{ position: "absolute", top: 30, right: 0, fontSize: "16vw" }}
      />
      <div
        style={{
          perspective: 1400,
          maxWidth: 1200,
          margin: "0 auto",
          position: "relative",
        }}
      >
        <TiltGroup
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1.3fr",
            gap: 80,
            alignItems: "start",
          }}
          className="two-col"
        >
          <Reveal>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                letterSpacing: ".28em",
                color: "var(--ac, #22D3EE)",
                marginBottom: 20,
              }}
            >
              05 — CAPABILITIES
            </div>
            <h2
              style={{
                margin: "0 0 24px",
                fontSize: "clamp(32px, 3.4vw, 52px)",
                fontWeight: 600,
                lineHeight: 1.15,
                letterSpacing: "-.01em",
              }}
            >
              Skills &amp; Expertise
            </h2>
            <p
              style={{
                margin: 0,
                fontSize: 17,
                fontWeight: 300,
                lineHeight: 1.8,
                color: "#8FA3BF",
              }}
            >
              From pixel-level frontend craft to training deep-learning models —
              a full-spectrum engineering toolkit.
            </p>
          </Reveal>

          <Reveal
            delay={0.15}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 26,
            }}
          >
            {SKILLS.map((s) => (
              <div key={s.name}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "baseline",
                    marginBottom: 10,
                  }}
                >
                  <span
                    style={{ fontSize: 16, fontWeight: 500, color: "#E6EEF9" }}
                  >
                    {s.name}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 13,
                      color: "var(--ac, #22D3EE)",
                    }}
                  >
                    {s.pct}
                  </span>
                </div>
                <div
                  style={{
                    height: 5,
                    background: "rgba(148,184,255,.1)",
                    borderRadius: 99,
                    overflow: "hidden",
                  }}
                >
                  <motion.div
                    initial={{ width: "0%" }}
                    whileInView={{ width: `${s.level}%` }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{
                      duration: 1.4,
                      ease: [0.16, 1, 0.3, 1],
                      delay: 0.2,
                    }}
                    style={{
                      height: "100%",
                      borderRadius: 99,
                      background:
                        "linear-gradient(90deg, var(--ac, #22D3EE), var(--acd, #67E8F9))",
                      boxShadow: "0 0 12px var(--acg, rgba(34,211,238,.5))",
                    }}
                  />
                </div>
              </div>
            ))}
          </Reveal>
        </TiltGroup>
      </div>
    </section>
  );
}
