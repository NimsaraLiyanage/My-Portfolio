"use client";

import { CONTACT, EXPERTISE } from "@/lib/data";
import { Reveal, KineticHeading, TiltGroup } from "./shared";

export default function About() {
  return (
    <section
      id="about"
      data-screen-label="About"
      style={{ position: "relative", padding: "160px 48px", zIndex: 1 }}
    >
      <KineticHeading
        text="ABOUT — ABOUT"
        speed={0.18}
        style={{
          position: "absolute",
          top: 40,
          left: 0,
          fontSize: "16vw",
        }}
      />
      <div
        style={{
          perspective: 1400,
          maxWidth: 1200,
          margin: "0 auto",
          position: "relative",
        }}
      >
        <TiltGroup>
          <Reveal
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              letterSpacing: ".28em",
              color: "var(--ac, #22D3EE)",
              marginBottom: 20,
            }}
          >
            01 — MY JOURNEY
          </Reveal>
          <div
            className="two-col"
            style={{
              display: "grid",
              gridTemplateColumns: "1.4fr 1fr",
              gap: 80,
              alignItems: "start",
            }}
          >
            <Reveal delay={0.1}>
              <h2
                style={{
                  margin: "0 0 28px",
                  fontSize: "clamp(32px, 3.4vw, 52px)",
                  fontWeight: 600,
                  lineHeight: 1.15,
                  letterSpacing: "-.01em",
                }}
              >
                Building at the intersection of{" "}
                <span style={{ color: "var(--ac, #22D3EE)" }}>software</span>{" "}
                &amp;{" "}
                <span style={{ color: "var(--ac, #22D3EE)" }}>
                  intelligence
                </span>
                .
              </h2>
              <p
                style={{
                  margin: "0 0 20px",
                  fontSize: 17,
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: "#8FA3BF",
                }}
              >
                Computer Engineering undergraduate at the University of Jaffna,
                pursuing a B.Sc. (Eng) Hons with a passion for building
                innovative solutions where software development meets artificial
                intelligence.
              </p>
              <p
                style={{
                  margin: "0 0 36px",
                  fontSize: 17,
                  fontWeight: 300,
                  lineHeight: 1.8,
                  color: "#8FA3BF",
                }}
              >
                With over 2 years of experience in web development, I&apos;ve
                shipped projects across the full stack. My focus: clean,
                efficient, user-friendly solutions.
              </p>
              <a
                href={CONTACT.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 10,
                  background: "var(--acs, rgba(34,211,238,.12))",
                  border: "1px solid var(--acb, rgba(34,211,238,.4))",
                  color: "var(--ac, #22D3EE)",
                  fontWeight: 500,
                  fontSize: 15,
                  textDecoration: "none",
                  padding: "14px 28px",
                  borderRadius: 99,
                  transition: "background .25s ease, color .25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "var(--ac, #22D3EE)";
                  e.currentTarget.style.color = "#04121C";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background =
                    "var(--acs, rgba(34,211,238,.12))";
                  e.currentTarget.style.color = "var(--ac, #22D3EE)";
                }}
              >
                Download Resume ↓
              </a>
            </Reveal>

            <Reveal
              delay={0.25}
              style={{
                background: "rgba(11,22,38,.7)",
                border: "1px solid rgba(148,184,255,.1)",
                borderRadius: 20,
                padding: 36,
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-mono)",
                  fontSize: 11,
                  letterSpacing: ".24em",
                  color: "#8FA3BF",
                  marginBottom: 24,
                }}
              >
                CORE EXPERTISE
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}
              >
                {EXPERTISE.map((x) => (
                  <div
                    key={x}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 14,
                      fontSize: 16,
                      fontWeight: 400,
                      color: "#E6EEF9",
                    }}
                  >
                    <span
                      style={{
                        width: 6,
                        height: 6,
                        borderRadius: 2,
                        background: "var(--ac, #22D3EE)",
                        boxShadow: "0 0 8px var(--acg, rgba(34,211,238,.5))",
                        flex: "none",
                      }}
                    />
                    {x}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </TiltGroup>
      </div>
    </section>
  );
}
