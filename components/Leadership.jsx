"use client";

import { motion } from "framer-motion";
import { LEADERSHIP } from "@/lib/data";
import { Reveal, KineticHeading } from "./shared";

const EASE = [0.16, 1, 0.3, 1];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const card = {
  hidden: { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

function LeadershipCard({ group }) {
  return (
    <motion.div
      variants={card}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="leadership-card"
      style={{
        position: "relative",
        borderRadius: 20,
        padding: "30px 32px",
        background: "#0B1626",
        border: "1px solid rgba(148,184,255,.12)",
        overflow: "hidden",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.borderColor = "var(--acb, rgba(34,211,238,.4))")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.borderColor = "rgba(148,184,255,.12)")
      }
    >
      {/* accent glow corner */}
      <div
        style={{
          position: "absolute",
          top: -60,
          right: -60,
          width: 160,
          height: 160,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, var(--acs, rgba(34,211,238,.18)), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 14,
          marginBottom: 26,
        }}
      >
        <span
          style={{
            width: 46,
            height: 46,
            flex: "none",
            display: "grid",
            placeItems: "center",
            fontSize: 24,
            borderRadius: 12,
            background: "var(--acs, rgba(34,211,238,.12))",
            border: "1px solid var(--acb, rgba(34,211,238,.25))",
          }}
        >
          {group.icon}
        </span>
        <h3
          style={{
            margin: 0,
            fontSize: 20,
            fontWeight: 600,
            lineHeight: 1.25,
            color: "#fff",
          }}
        >
          {group.org}
        </h3>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
        {group.roles.map((r) => (
          <div key={r.title} style={{ display: "flex", gap: 14 }}>
            <span
              style={{
                marginTop: 7,
                width: 8,
                height: 8,
                flex: "none",
                borderRadius: "50%",
                background: "var(--ac, #22D3EE)",
                boxShadow: "0 0 10px var(--acg, rgba(34,211,238,.6))",
              }}
            />
            <div>
              <div
                style={{
                  fontSize: 16,
                  fontWeight: 500,
                  color: "#E6EEF9",
                  lineHeight: 1.4,
                }}
              >
                {r.title}
              </div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  letterSpacing: ".14em",
                  color: "var(--ac, #22D3EE)",
                  marginTop: 6,
                }}
              >
                {r.period}
              </div>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

export default function Leadership() {
  return (
    <section
      id="leadership"
      data-screen-label="Leadership"
      style={{ position: "relative", padding: "80px 48px 100px", zIndex: 1 }}
    >
      <KineticHeading
        text="LEAD — LEAD — LEAD"
        speed={0.12}
        style={{ position: "absolute", top: 40, left: 0, fontSize: "16vw" }}
      />
      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative" }}>
        <Reveal style={{ marginBottom: 48 }}>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              letterSpacing: ".28em",
              color: "var(--ac, #22D3EE)",
              marginBottom: 14,
            }}
          >
            06 — LEADERSHIP
          </div>
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(32px, 3.4vw, 52px)",
              fontWeight: 600,
              letterSpacing: "-.01em",
            }}
          >
            Leadership
          </h2>
        </Reveal>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
            gap: 24,
          }}
        >
          {LEADERSHIP.map((group) => (
            <LeadershipCard key={group.org} group={group} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
