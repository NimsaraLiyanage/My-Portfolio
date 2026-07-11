"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, animate } from "framer-motion";
import ContributionGraph from "./ContributionGraph";

const GITHUB_USER = "NimsaraLiyanage";
const CODING_START_YEAR = 2021; // years-of-coding auto-increments from this

// Static fallbacks — every value is refreshed live on page load:
//  - repos    → api.github.com (official, no auth needed)
//  - contrib  → github-contributions-api.jogruber.de (public mirror of the
//               GitHub contribution graph, no token needed)
//  - years    → computed from CODING_START_YEAR, increments automatically
const BASE_STATS = [
  { key: "contrib", value: 1170, suffix: "+", label: "GITHUB CONTRIBUTIONS" },
  { key: "repos", value: 30, suffix: "+", label: "PUBLIC REPOSITORIES" },
  { key: "year", value: 900, suffix: "+", label: "COMMITS IN LAST YEAR" },
  {
    key: "years",
    value: Math.max(1, new Date().getFullYear() - CODING_START_YEAR),
    suffix: "+",
    label: "YEARS OF CODING",
  },
];

function CountUp({ value, suffix }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(0, value, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        if (ref.current)
          ref.current.textContent = Math.round(v).toLocaleString() + suffix;
      },
    });
    return () => controls.stop();
  }, [inView, value, suffix]);

  return <span ref={ref}>0{suffix}</span>;
}

export default function GitHubStats() {
  const [stats, setStats] = useState(BASE_STATS);

  // refresh everything live from GitHub on every page load
  useEffect(() => {
    const patch = (key, value) =>
      setStats((s) => s.map((st) => (st.key === key ? { ...st, value } : st)));

    // repo count — official GitHub REST API
    fetch(`https://api.github.com/users/${GITHUB_USER}`)
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => {
        if (j?.public_repos) patch("repos", j.public_repos);
      })
      .catch(() => {});

    // all-time contributions — public contribution-graph API
    fetch(
      `https://github-contributions-api.jogruber.de/v4/${GITHUB_USER}?y=all`
    )
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => {
        if (j?.total) {
          const sum = Object.values(j.total).reduce((a, b) => a + b, 0);
          if (sum > 0) patch("contrib", sum);
        }
      })
      .catch(() => {});

    // rolling last-365-days contributions
    fetch(
      `https://github-contributions-api.jogruber.de/v4/${GITHUB_USER}?y=last`
    )
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => {
        if (j?.total?.lastYear > 0) patch("year", j.total.lastYear);
      })
      .catch(() => {});
  }, []);

  return (
    <section
      data-screen-label="Stats"
      style={{
        position: "relative",
        zIndex: 1,
        borderTop: "1px solid rgba(148,184,255,.07)",
        borderBottom: "1px solid rgba(148,184,255,.07)",
        background: "rgba(11,22,38,.35)",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        className="stats-grid"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "64px 48px",
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
        }}
      >
        {stats.map((s, i) => (
          <a
            key={s.key}
            href={`https://github.com/${GITHUB_USER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="stat-cell"
            style={{
              textAlign: "center",
              padding: "8px 20px",
              borderLeft:
                i > 0 ? "1px solid rgba(148,184,255,.12)" : "none",
              textDecoration: "none",
            }}
          >
            <div
              style={{
                fontSize: "clamp(30px, 3vw, 44px)",
                fontWeight: 700,
                letterSpacing: "-.01em",
                color: "var(--ac, #22D3EE)",
                textShadow: "0 0 30px var(--acg, rgba(34,211,238,.35))",
                marginBottom: 10,
                fontVariantNumeric: "tabular-nums",
              }}
            >
              <CountUp value={s.value} suffix={s.suffix} />
            </div>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: ".2em",
                color: "#8FA3BF",
              }}
            >
              {s.label}
            </div>
          </a>
        ))}
      </motion.div>
      <ContributionGraph />
    </section>
  );
}
