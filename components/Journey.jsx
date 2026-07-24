"use client";

import Image from "next/image";
import { WORK_EXPERIENCE, EDUCATION } from "@/lib/data";
import { Reveal, TiltGroup } from "./shared";

function TimelineList({ items }) {
  return (
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
      {items.map((t) => (
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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              margin: "0 0 10px",
            }}
          >
            {t.logo && (
              <Image
                src={t.logo}
                alt={t.title}
                width={46}
                height={46}
                loading="lazy"
                draggable={false}
                style={{
                  flex: "none",
                  borderRadius: 12,
                  objectFit: "cover",
                  background: "#fff",
                  padding: 4,
                  border: "1px solid rgba(148,184,255,.15)",
                }}
              />
            )}
            <h3
              style={{
                margin: 0,
                fontSize: 24,
                fontWeight: 600,
                color: "#fff",
              }}
            >
              {t.title}
            </h3>
          </div>
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
  );
}

function TimelineBlock({ label, title, items }) {
  return (
    <>
      <Reveal style={{ marginBottom: 48 }}>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            letterSpacing: ".28em",
            color: "var(--ac, #22D3EE)",
            marginBottom: 20,
          }}
        >
          {label}
        </div>
        <h2
          style={{
            margin: 0,
            fontSize: "clamp(32px, 3.4vw, 52px)",
            fontWeight: 600,
            letterSpacing: "-.01em",
          }}
        >
          {title}
        </h2>
      </Reveal>
      <TimelineList items={items} />
    </>
  );
}

export default function Journey() {
  return (
    <section
      id="journey"
      data-screen-label="Journey"
      style={{ position: "relative", padding: "20px 48px 60px", zIndex: 1 }}
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
          <TimelineBlock
            label="02 — EXPERIENCE"
            title="Work Experience"
            items={WORK_EXPERIENCE}
          />

          <div style={{ height: 96 }} />

          <TimelineBlock
            label="03 — EDUCATION"
            title="Education"
            items={EDUCATION}
          />
        </TiltGroup>
      </div>
    </section>
  );
}
