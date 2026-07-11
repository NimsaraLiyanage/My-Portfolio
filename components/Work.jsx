"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { PROJECTS } from "@/lib/data";
import { KineticHeading } from "./shared";

function ProjectCard({ p }) {
  const [imgOk, setImgOk] = useState(true);
  return (
    <div
      className="work-card"
      style={{
        position: "relative",
        width: "min(58vw, 840px)",
        height: "58vh",
        minHeight: 420,
        borderRadius: 22,
        overflow: "hidden",
        border: "1px solid rgba(148,184,255,.12)",
        background: "#0B1626",
        flex: "none",
        transition: "border-color .3s ease",
      }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.borderColor = "var(--acb, rgba(34,211,238,.4))")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.borderColor = "rgba(148,184,255,.12)")
      }
    >
      {imgOk ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={p.img}
          alt={p.title}
          onError={() => setImgOk(false)}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "saturate(.85) brightness(.9)",
          }}
        />
      ) : (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(120% 120% at 70% 20%, var(--acs, rgba(34,211,238,.18)), #0B1626 60%)",
          }}
        />
      )}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(180deg, rgba(5,11,22,.15) 0%, rgba(5,11,22,.55) 55%, rgba(5,11,22,.96) 100%)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          padding: "36px 40px",
          display: "flex",
          flexDirection: "column",
          gap: 14,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            letterSpacing: ".2em",
          }}
        >
          <span style={{ color: "var(--ac, #22D3EE)" }}>{p.num}</span>
          <span style={{ color: "#8FA3BF" }}>{p.cat}</span>
        </div>
        <h3
          style={{
            margin: 0,
            fontSize: "clamp(24px, 2.2vw, 34px)",
            fontWeight: 600,
            lineHeight: 1.2,
            letterSpacing: "-.01em",
            color: "#fff",
          }}
        >
          {p.title}
        </h3>
        <p
          style={{
            margin: 0,
            maxWidth: 560,
            fontSize: 15,
            fontWeight: 300,
            lineHeight: 1.65,
            color: "#AEBFD6",
          }}
        >
          {p.desc}
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 16,
            marginTop: 6,
          }}
        >
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {p.tech.map((t) => (
              <span
                key={t}
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: ".08em",
                  color: "var(--acd, #67E8F9)",
                  background: "var(--acs, rgba(34,211,238,.12))",
                  border: "1px solid var(--acb, rgba(34,211,238,.25))",
                  padding: "6px 12px",
                  borderRadius: 99,
                }}
              >
                {t}
              </span>
            ))}
          </div>
          <a
            href={p.gh}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              letterSpacing: ".14em",
              color: "#E6EEF9",
              textDecoration: "none",
              border: "1px solid rgba(148,184,255,.3)",
              padding: "10px 20px",
              borderRadius: 99,
              whiteSpace: "nowrap",
              transition: "border-color .25s ease, color .25s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--ac, #22D3EE)";
              e.currentTarget.style.color = "var(--ac, #22D3EE)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(148,184,255,.3)";
              e.currentTarget.style.color = "#E6EEF9";
            }}
          >
            CODE ↗
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Work() {
  const wrapRef = useRef(null);
  const trackRef = useRef(null);
  const [maxScroll, setMaxScroll] = useState(0);
  const [wrapHeight, setWrapHeight] = useState("100vh");

  const { scrollYProgress } = useScroll({
    target: wrapRef,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 1], [0, -maxScroll]);

  useLayoutEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      const vw = window.innerWidth;
      const extra = Math.max(0, track.scrollWidth - vw);
      // distance the track travels horizontally
      setMaxScroll(Math.max(0, track.scrollWidth - vw + vw * 0.06));
      // total scroll distance for the pinned section
      setWrapHeight(extra + window.innerHeight * 1.35 + "px");
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <section id="work" data-screen-label="Projects" style={{ position: "relative", zIndex: 1 }}>
      <div ref={wrapRef} style={{ position: "relative", height: wrapHeight }}>
        <div
          style={{
            position: "sticky",
            top: 0,
            height: "100vh",
            overflow: "hidden",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <KineticHeading
            text="SELECTED WORK — SELECTED WORK"
            speed={0.12}
            style={{ position: "absolute", top: "6vh", left: 0, fontSize: "17vw" }}
          />
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              justifyContent: "space-between",
              padding: "0 6vw",
              marginBottom: 36,
              position: "relative",
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 12,
                  letterSpacing: ".28em",
                  color: "var(--ac, #22D3EE)",
                  marginBottom: 14,
                }}
              >
                02 — SELECTED WORK
              </div>
              <h2
                style={{
                  margin: 0,
                  fontSize: "clamp(32px, 3.4vw, 52px)",
                  fontWeight: 600,
                  letterSpacing: "-.01em",
                }}
              >
                Featured Projects
              </h2>
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 13,
                color: "#8FA3BF",
              }}
            >
              SCROLL TO EXPLORE →
            </div>
          </div>
          <motion.div
            ref={trackRef}
            style={{
              display: "flex",
              gap: "3.5vw",
              padding: "0 6vw",
              width: "max-content",
              willChange: "transform",
              x,
            }}
          >
            {PROJECTS.map((p) => (
              <ProjectCard key={p.num} p={p} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
