"use client";

import { useRef, useState } from "react";
import { PROJECTS } from "@/lib/data";
import { Reveal, KineticHeading } from "./shared";

function LinkedInIcon({ size = 16 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
    </svg>
  );
}

function GitHubIcon({ size = 16 }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.69 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.74.8 1.19 1.83 1.19 3.09 0 4.42-2.69 5.39-5.25 5.68.41.36.78 1.06.78 2.14 0 1.55-.01 2.8-.01 3.18 0 .31.21.68.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.73 18.27.5 12 .5z" />
    </svg>
  );
}

function NavArrow({ dir, onClick }) {
  const isLeft = dir === "left";
  return (
    <button
      type="button"
      aria-label={isLeft ? "Previous projects" : "Next projects"}
      onClick={onClick}
      className="work-nav-btn"
      style={{
        position: "absolute",
        top: "50%",
        [isLeft ? "left" : "right"]: -56,
        transform: "translateY(-50%)",
        zIndex: 5,
        width: 44,
        height: 44,
        borderRadius: 999,
        display: "grid",
        placeItems: "center",
        cursor: "pointer",
        color: "#CBD8EF",
        background: "rgba(11,22,38,.72)",
        border: "1px solid rgba(148,184,255,.18)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        transition: "color .25s ease, border-color .25s ease, background .25s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = "var(--ac, #22D3EE)";
        e.currentTarget.style.borderColor = "var(--acb, rgba(34,211,238,.4))";
        e.currentTarget.style.background = "rgba(11,22,38,.92)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = "#CBD8EF";
        e.currentTarget.style.borderColor = "rgba(148,184,255,.18)";
        e.currentTarget.style.background = "rgba(11,22,38,.72)";
      }}
    >
      <svg viewBox="0 0 24 24" width={20} height={20} fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
        {isLeft ? <polyline points="15 18 9 12 15 6" /> : <polyline points="9 18 15 12 9 6" />}
      </svg>
    </button>
  );
}

function ProjectCard({ p }) {
  const [imgOk, setImgOk] = useState(true);
  return (
    <div
      className="work-card"
      style={{
        position: "relative",
        width: "clamp(280px, 30vw, 400px)",
        height: 480,
        borderRadius: 20,
        overflow: "hidden",
        border: "1px solid rgba(148,184,255,.12)",
        background: "#0B1626",
        flex: "none",
        scrollSnapAlign: "start",
        display: "flex",
        flexDirection: "column",
        transition: "border-color .3s ease, transform .3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = "var(--acb, rgba(34,211,238,.4))";
        e.currentTarget.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "rgba(148,184,255,.12)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {/* Thumbnail */}
      <div
        style={{
          position: "relative",
          height: 190,
          flex: "none",
          overflow: "hidden",
          background:
            "radial-gradient(120% 120% at 70% 20%, var(--acs, rgba(34,211,238,.18)), #0B1626 60%)",
          borderBottom: "1px solid rgba(148,184,255,.1)",
        }}
      >
        {imgOk && (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={p.img}
            alt={p.title}
            draggable={false}
            onError={() => setImgOk(false)}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        )}
      </div>

      {/* Content panel below the image */}
      <div
        style={{
          flex: 1,
          minHeight: 0,
          padding: "20px 24px 22px",
          display: "flex",
          flexDirection: "column",
          gap: 10,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontFamily: "var(--font-mono)",
            fontSize: 11,
            letterSpacing: ".2em",
          }}
        >
          <span style={{ color: "var(--ac, #22D3EE)" }}>{p.num}</span>
          <span style={{ color: "#8FA3BF" }}>{p.cat}</span>
        </div>
        <h3
          style={{
            margin: 0,
            fontSize: 21,
            fontWeight: 600,
            lineHeight: 1.2,
            letterSpacing: "-.01em",
            color: "#fff",
          }}
        >
          {p.title}
        </h3>
        <p
          className="desc-scroll"
          style={{
            margin: 0,
            fontSize: 14,
            fontWeight: 300,
            lineHeight: 1.6,
            color: "#8FA3BF",
            flex: 1,
            minHeight: 0,
            overflowY: "auto",
            paddingRight: 6,
          }}
        >
          {p.desc}
        </p>

        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 2 }}>
          {p.tech.map((t) => (
            <span
              key={t}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 10,
                letterSpacing: ".08em",
                color: "var(--acd, #67E8F9)",
                background: "var(--acs, rgba(34,211,238,.12))",
                border: "1px solid var(--acb, rgba(34,211,238,.25))",
                padding: "5px 10px",
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
            marginTop: "auto",
            alignSelf: "flex-start",
            display: "inline-flex",
            alignItems: "center",
            gap: 9,
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            letterSpacing: ".12em",
            color: "#8FA3BF",
            textDecoration: "none",
            transition: "color .25s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.color = "var(--ac, #22D3EE)")
          }
          onMouseLeave={(e) => (e.currentTarget.style.color = "#8FA3BF")}
        >
          {p.linkType === "linkedin" ? (
            <>
              <LinkedInIcon size={16} />
              View ↗
            </>
          ) : (
            <>
              <GitHubIcon size={17} />
              Code ↗
            </>
          )}
        </a>
      </div>
    </div>
  );
}

export default function Work() {
  const scrollerRef = useRef(null);
  const drag = useRef({ down: false, startX: 0, startLeft: 0, moved: false });

  // click-and-drag to pan the row with a mouse.
  // NOTE: the pointer is only captured once a real drag starts (>6px) —
  // capturing on pointerdown would swallow normal clicks on the CODE links.
  const onPointerDown = (e) => {
    const el = scrollerRef.current;
    if (!el || e.pointerType !== "mouse") return;
    drag.current = {
      down: true,
      startX: e.clientX,
      startLeft: el.scrollLeft,
      moved: false,
    };
  };
  const onPointerMove = (e) => {
    const el = scrollerRef.current;
    if (!el || !drag.current.down) return;
    const dx = e.clientX - drag.current.startX;
    if (!drag.current.moved && Math.abs(dx) > 6) {
      drag.current.moved = true;
      el.setPointerCapture?.(e.pointerId);
    }
    if (drag.current.moved) el.scrollLeft = drag.current.startLeft - dx;
  };
  const endDrag = (e) => {
    const el = scrollerRef.current;
    drag.current.down = false;
    if (drag.current.moved) el?.releasePointerCapture?.(e.pointerId);
  };
  // block accidental link clicks that happen right after a drag
  const onClickCapture = (e) => {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      drag.current.moved = false;
    }
  };

  // arrow-button navigation — scroll by roughly one card + gap.
  const scrollByCards = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector(".work-card");
    const step = card ? card.getBoundingClientRect().width + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section
      id="work"
      data-screen-label="Projects"
      style={{ position: "relative", padding: "80px 0 120px", zIndex: 1 }}
    >
      <KineticHeading
        text="SELECTED WORK — SELECTED WORK"
        speed={0.12}
        style={{ position: "absolute", top: 60, left: 0, fontSize: "16vw" }}
      />
      <div
        className="work-wrap"
        style={{
          position: "relative",
          maxWidth: 1440,
          margin: "0 auto",
          padding: "0 48px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "baseline",
            justifyContent: "space-between",
            marginBottom: 40,
            flexWrap: "wrap",
            gap: 16,
          }}
        >
          <Reveal>
            <div
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                letterSpacing: ".28em",
                color: "var(--ac, #22D3EE)",
                marginBottom: 14,
              }}
            >
              04 — SELECTED WORK
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
          </Reveal>
          <div
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              color: "#8FA3BF",
            }}
          >
            DRAG / SCROLL →
          </div>
        </div>

        <div style={{ position: "relative" }}>
          <div
            ref={scrollerRef}
            className="work-scroller"
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            onClickCapture={onClickCapture}
            style={{
              display: "flex",
              gap: 24,
              padding: "6px 0 28px",
              overflowX: "auto",
              overflowY: "hidden",
              scrollSnapType: "x proximity",
              cursor: "grab",
            }}
          >
            {PROJECTS.map((p) => (
              <ProjectCard key={p.num} p={p} />
            ))}
          </div>

          <NavArrow dir="left" onClick={() => scrollByCards(-1)} />
          <NavArrow dir="right" onClick={() => scrollByCards(1)} />
        </div>
      </div>
    </section>
  );
}
