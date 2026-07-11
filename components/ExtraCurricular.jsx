"use client";

import { useRef, useState } from "react";
import { EXTRACURRICULAR } from "@/lib/data";
import { Reveal, KineticHeading } from "./shared";

function NavArrow({ dir, onClick }) {
  const isLeft = dir === "left";
  return (
    <button
      type="button"
      aria-label={isLeft ? "Previous" : "Next"}
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

function AchievementCard({ a }) {
  const [imgOk, setImgOk] = useState(Boolean(a.img));
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
      {/* Thumbnail — image if available, else gradient + emoji fallback */}
      <div
        className="extra-thumb"
        style={{
          position: "relative",
          height: 260,
          flex: "none",
          overflow: "hidden",
          background:
            "radial-gradient(120% 120% at 70% 20%, var(--acs, rgba(34,211,238,.18)), #0B1626 60%)",
          borderBottom: "1px solid rgba(148,184,255,.1)",
          display: "grid",
          placeItems: "center",
        }}
      >
        {imgOk ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={a.img}
            alt={a.title}
            draggable={false}
            onError={() => setImgOk(false)}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: a.fit || "cover",
              objectPosition: "center 25%",
            }}
          />
        ) : (
          <span style={{ fontSize: 64, lineHeight: 1, filter: "drop-shadow(0 4px 16px rgba(0,0,0,.4))" }}>
            {a.icon}
          </span>
        )}
      </div>

      {/* Content panel */}
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
          <span style={{ color: "var(--ac, #22D3EE)" }}>{a.cat}</span>
          <span style={{ color: "#8FA3BF" }}>{a.meta}</span>
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
          {a.title}
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
          {a.desc}
        </p>
      </div>
    </div>
  );
}

export default function ExtraCurricular() {
  const scrollerRef = useRef(null);
  const drag = useRef({ down: false, startX: 0, startLeft: 0, moved: false });

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
  const onClickCapture = (e) => {
    if (drag.current.moved) {
      e.preventDefault();
      e.stopPropagation();
      drag.current.moved = false;
    }
  };

  const scrollByCards = (dir) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector(".work-card");
    const step = card ? card.getBoundingClientRect().width + 24 : el.clientWidth * 0.8;
    el.scrollBy({ left: dir * step, behavior: "smooth" });
  };

  return (
    <section
      id="extra"
      data-screen-label="Extra-Curricular"
      style={{ position: "relative", padding: "80px 0 120px", zIndex: 1 }}
    >
      <KineticHeading
        text="BEYOND CODE — BEYOND CODE"
        speed={-0.12}
        style={{ position: "absolute", top: 60, right: 0, fontSize: "16vw" }}
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
              05 — BEYOND CODE
            </div>
            <h2
              style={{
                margin: 0,
                fontSize: "clamp(32px, 3.4vw, 52px)",
                fontWeight: 600,
                letterSpacing: "-.01em",
              }}
            >
              Extra-Curricular
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
            {EXTRACURRICULAR.map((a) => (
              <AchievementCard key={a.title} a={a} />
            ))}
          </div>

          <NavArrow dir="left" onClick={() => scrollByCards(-1)} />
          <NavArrow dir="right" onClick={() => scrollByCards(1)} />
        </div>
      </div>
    </section>
  );
}
