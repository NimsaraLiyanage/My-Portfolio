"use client";

import { TIMELINE } from "@/lib/data";
import { Reveal, TiltGroup } from "./shared";

export default function Journey() {
  return (
    <section
      id="journey"
      data-screen-label="Journey"
      style={{ position: "relative", padding: "80px 48px 180px", zIndex: 1 }}
    >
      <div
        style={{
          perspective: 1400,
          maxWidth: 900,
          margin: "0 auto",
          position: "relative",
        }}
      >
        <TiltGroup>
          <Reveal style={{ marginBottom: 64 }}>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                letterSpacing: ".28em",
                color: "var(--ac, #22D3EE)",
                marginBottom: 20,
              }}
            >
              04 — TIMELINE
            </div>
            <h2
              style={{
                margin: 0,
                fontSize: "clamp(32px, 3.4vw, 52px)",
                fontWeight: 600,
                letterSpacing: "-.01em",
              }}
            >
              Education &amp; Experience
            </h2>
          </Reveal>

          <div
            style={{
              position: "relative",
              paddingLeft: 44,
              display: "flex",
              flexDirection: "column",
              gap: 56,
            }}
          >
            <div
              style={{
                position: "absolute",
                left: 11,
                top: 8,
                bottom: 8,
                width: 1,
                background:
                  "linear-gradient(180deg, var(--ac, #22D3EE), rgba(148,184,255,.08))",
              }}
            />
            {TIMELINE.map((t) => (
              <Reveal key={t.title} style={{ position: "relative" }}>
                <div
                  style={{
                    position: "absolute",
                    left: -44,
                    top: 6,
                    width: 23,
                    height: 23,
                    borderRadius: "50%",
                    border: "1px solid var(--acb, rgba(34,211,238,.4))",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      width: 9,
                      height: 9,
                      borderRadius: "50%",
                      background: "var(--ac, #22D3EE)",
                      boxShadow: "0 0 10px var(--acg, rgba(34,211,238,.6))",
                    }}
                  />
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                    letterSpacing: ".2em",
                    color: "var(--ac, #22D3EE)",
                    marginBottom: 10,
                  }}
                >
                  {t.period}
                </div>
                <h3
                  style={{
                    margin: "0 0 10px",
                    fontSize: 24,
                    fontWeight: 600,
                    color: "#fff",
                  }}
                >
                  {t.title}
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: 16,
                    fontWeight: 300,
                    lineHeight: 1.7,
                    color: "#8FA3BF",
                    maxWidth: 640,
                  }}
                >
                  {t.desc}
                </p>
              </Reveal>
            ))}
          </div>
        </TiltGroup>
      </div>
    </section>
  );
}
