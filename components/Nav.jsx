"use client";

import { motion } from "framer-motion";
import { NAV_LINKS, CONTACT } from "@/lib/data";

const linkBase = {
  fontFamily: "var(--font-mono)",
  fontSize: 11,
  letterSpacing: ".18em",
  color: "#8FA3BF",
  textDecoration: "none",
  transition: "color .25s ease",
};

export default function Nav() {
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
        background: "rgba(5,11,22,.55)",
        borderBottom: "1px solid rgba(148,184,255,.08)",
      }}
    >
      <div
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          padding: "18px 48px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        <a
          href="#hero"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 16,
            fontWeight: 500,
            color: "#E6EEF9",
            textDecoration: "none",
            letterSpacing: ".05em",
          }}
        >
          NL<span style={{ color: "var(--ac, #22D3EE)" }}>·</span>
        </a>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 32,
          }}
        >
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              style={linkBase}
              className="nav-link"
              onMouseEnter={(e) => (e.currentTarget.style.color = "#E6EEF9")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#8FA3BF")}
            >
              {l.label}
            </a>
          ))}
          <a
            href={CONTACT.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 11,
              letterSpacing: ".18em",
              color: "var(--ac, #22D3EE)",
              textDecoration: "none",
              border: "1px solid var(--acb, rgba(34,211,238,.4))",
              padding: "9px 18px",
              borderRadius: 99,
              transition: "background .25s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background =
                "var(--acs, rgba(34,211,238,.12))")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "transparent")
            }
            className="resume-btn"
          >
            RESUME ↓
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
