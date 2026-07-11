"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const GITHUB_USER = "NimsaraLiyanage";

// GitHub's dark-theme green scale, level 0 → 4
const LEVEL_COLORS = [
  "rgba(148,184,255,.07)",
  "#0e4429",
  "#006d32",
  "#26a641",
  "#39d353",
];

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
];

export default function ContributionGraph() {
  const [days, setDays] = useState(null);
  const [total, setTotal] = useState(null);

  useEffect(() => {
    fetch(
      `https://github-contributions-api.jogruber.de/v4/${GITHUB_USER}?y=last`
    )
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => {
        if (j?.contributions?.length) {
          setDays(j.contributions);
          setTotal(j.total?.lastYear ?? null);
        }
      })
      .catch(() => {});
  }, []);

  if (!days) return null; // graph appears once live data arrives

  // group days into GitHub-style week columns (Sun → Sat)
  const weeks = [];
  let week = new Array(new Date(days[0].date + "T00:00:00").getDay()).fill(
    null
  );
  for (const d of days) {
    week.push(d);
    if (week.length === 7) {
      weeks.push(week);
      week = [];
    }
  }
  if (week.length) weeks.push(week);

  // month label for a column when the month changes at its first day
  const monthLabels = weeks.map((w, i) => {
    const first = w.find(Boolean);
    if (!first) return "";
    const m = new Date(first.date + "T00:00:00").getMonth();
    if (i === 0) return MONTHS[m];
    const prevFirst = weeks[i - 1].find(Boolean);
    const pm = prevFirst
      ? new Date(prevFirst.date + "T00:00:00").getMonth()
      : -1;
    return m !== pm ? MONTHS[m] : "";
  });

  const CELL = 11;
  const GAP = 3;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "0 48px 64px",
      }}
    >
      <div
        style={{
          textAlign: "center",
          fontFamily: "var(--font-mono)",
          fontSize: 12,
          letterSpacing: ".2em",
          color: "#8FA3BF",
          marginBottom: 22,
        }}
      >
        <span style={{ color: "var(--ac, #22D3EE)" }}>
          {total?.toLocaleString()}
        </span>{" "}
        CONTRIBUTIONS IN THE LAST YEAR
      </div>

      <div style={{ overflowX: "auto", paddingBottom: 6 }}>
        <div style={{ width: "max-content", margin: "0 auto" }}>
          {/* month labels */}
          <div
            style={{
              display: "flex",
              gap: GAP,
              marginLeft: 34,
              marginBottom: 6,
            }}
          >
            {monthLabels.map((m, i) => (
              <div
                key={i}
                style={{
                  width: CELL,
                  fontFamily: "var(--font-mono)",
                  fontSize: 10,
                  color: "#54688A",
                  overflow: "visible",
                  whiteSpace: "nowrap",
                }}
              >
                {m}
              </div>
            ))}
          </div>

          <div style={{ display: "flex", gap: 8 }}>
            {/* day labels */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: GAP,
                width: 26,
                flex: "none",
              }}
            >
              {["", "Mon", "", "Wed", "", "Fri", ""].map((d, i) => (
                <div
                  key={i}
                  style={{
                    height: CELL,
                    fontFamily: "var(--font-mono)",
                    fontSize: 9,
                    lineHeight: `${CELL}px`,
                    color: "#54688A",
                  }}
                >
                  {d}
                </div>
              ))}
            </div>

            {/* weeks grid */}
            <div style={{ display: "flex", gap: GAP }}>
              {weeks.map((w, wi) => (
                <div
                  key={wi}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: GAP,
                  }}
                >
                  {Array.from({ length: 7 }, (_, di) => {
                    const d = w[di];
                    return (
                      <div
                        key={di}
                        title={
                          d
                            ? `${d.count} contribution${
                                d.count === 1 ? "" : "s"
                              } on ${d.date}`
                            : undefined
                        }
                        style={{
                          width: CELL,
                          height: CELL,
                          borderRadius: 3,
                          background: d
                            ? LEVEL_COLORS[d.level]
                            : "transparent",
                        }}
                      />
                    );
                  })}
                </div>
              ))}
            </div>
          </div>

          {/* legend */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              gap: 5,
              marginTop: 10,
              fontFamily: "var(--font-mono)",
              fontSize: 10,
              color: "#54688A",
            }}
          >
            Less
            {LEVEL_COLORS.map((c, i) => (
              <span
                key={i}
                style={{
                  width: CELL,
                  height: CELL,
                  borderRadius: 3,
                  background: c,
                  display: "inline-block",
                }}
              />
            ))}
            More
          </div>
        </div>
      </div>
    </motion.div>
  );
}
