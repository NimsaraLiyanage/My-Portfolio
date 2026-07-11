"use client";

import { useRef, useState } from "react";
import { CONTACT } from "@/lib/data";
import { Reveal, KineticHeading } from "./shared";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const timer = useRef(null);

  const copyEmail = () => {
    const done = () => {
      setCopied(true);
      clearTimeout(timer.current);
      timer.current = setTimeout(() => setCopied(false), 2000);
    };
    const fallback = () => {
      const ta = document.createElement("textarea");
      ta.value = CONTACT.email;
      ta.style.position = "fixed";
      ta.style.opacity = "0";
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand("copy");
        done();
      } catch (e) {}
      document.body.removeChild(ta);
    };
    if (navigator.clipboard?.writeText) {
      navigator.clipboard.writeText(CONTACT.email).then(done, fallback);
    } else {
      fallback();
    }
  };

  return (
    <section
      id="contact"
      data-screen-label="Contact"
      style={{
        position: "relative",
        padding: "160px 48px 100px",
        zIndex: 1,
        overflow: "hidden",
      }}
    >
      <KineticHeading
        text="SAY HELLO — SAY HELLO"
        speed={0.16}
        style={{ position: "absolute", top: 20, left: 0, fontSize: "17vw" }}
      />
      <div
        style={{
          maxWidth: 1000,
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
        }}
      >
        <Reveal
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            letterSpacing: ".28em",
            color: "var(--ac, #22D3EE)",
            marginBottom: 28,
          }}
        >
          05 — GET IN TOUCH
        </Reveal>
        <Reveal
          as="h2"
          delay={0.1}
          style={{
            margin: "0 0 48px",
            fontSize: "clamp(44px, 6vw, 96px)",
            fontWeight: 700,
            lineHeight: 1.02,
            letterSpacing: "-.02em",
          }}
        >
          Let&apos;s build
          <br />
          <span
            style={{
              color: "var(--ac, #22D3EE)",
              textShadow: "0 0 50px var(--acg, rgba(34,211,238,.35))",
            }}
          >
            something.
          </span>
        </Reveal>

        <Reveal
          delay={0.2}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 14,
            flexWrap: "wrap",
            marginBottom: 36,
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "clamp(15px, 1.8vw, 22px)",
              color: "#E6EEF9",
            }}
          >
            {CONTACT.email}
          </span>
          <button
            onClick={copyEmail}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              letterSpacing: ".14em",
              color: "var(--ac, #22D3EE)",
              background: "var(--acs, rgba(34,211,238,.12))",
              border: "1px solid var(--acb, rgba(34,211,238,.4))",
              padding: "12px 22px",
              borderRadius: 99,
              cursor: "pointer",
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
            {copied ? "COPIED ✓" : "COPY MAIL"}
          </button>
          <a
            href={`mailto:${CONTACT.email}`}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              letterSpacing: ".14em",
              color: "#E6EEF9",
              textDecoration: "none",
              border: "1px solid rgba(148,184,255,.3)",
              padding: "12px 22px",
              borderRadius: 99,
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
            SAY HELLO ↗
          </a>
        </Reveal>

        <Reveal
          delay={0.3}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 36,
            flexWrap: "wrap",
            fontFamily: "var(--font-mono)",
            fontSize: 13,
            color: "#8FA3BF",
          }}
        >
          <span>{CONTACT.phone}</span>
          <span style={{ color: "rgba(148,184,255,.3)" }}>/</span>
          <span>{CONTACT.location}</span>
          <span style={{ color: "rgba(148,184,255,.3)" }}>/</span>
          <a
            href={CONTACT.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#8FA3BF", textDecoration: "none" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--ac, #22D3EE)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.color = "#8FA3BF")}
          >
            GITHUB
          </a>
          <a
            href={CONTACT.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#8FA3BF", textDecoration: "none" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--ac, #22D3EE)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.color = "#8FA3BF")}
          >
            LINKEDIN
          </a>
        </Reveal>
      </div>
    </section>
  );
}
