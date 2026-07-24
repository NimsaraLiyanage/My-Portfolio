"use client";

import { useEffect } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { CONTACT, EXPERTISE } from "@/lib/data";

const EASE = [0.16, 1, 0.3, 1];
const PHOTO = "/images/Nimsara5.png";

export default function Hero() {
  // subtle pointer parallax
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const photoX = useSpring(useTransform(mx, (v) => v * 18), {
    stiffness: 90,
    damping: 20,
  });
  const photoY = useSpring(useTransform(my, (v) => v * 12), {
    stiffness: 90,
    damping: 20,
  });
  const wordX = useSpring(useTransform(mx, (v) => v * -26), {
    stiffness: 90,
    damping: 20,
  });

  useEffect(() => {
    const onMove = (e) => {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  const marqueeItems = [...EXPERTISE, ...EXPERTISE];

  return (
    <section
      id="hero"
      data-screen-label="Hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        zIndex: 1,
      }}
    >
      {/* soft spotlight behind the subject */}
      <div
        style={{
          position: "absolute",
          top: "42%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: "70vw",
          height: "70vh",
          background:
            "radial-gradient(circle, var(--acs, rgba(34,211,238,.12)) 0%, transparent 62%)",
          pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* skills marquee */}
      <motion.div
        className="hero-marquee"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE }}
        style={{
          position: "absolute",
          top: 92,
          left: 0,
          right: 0,
          zIndex: 4,
          overflow: "hidden",
          maskImage:
            "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            width: "max-content",
            animation: "marquee 32s linear infinite",
          }}
        >
          {marqueeItems.map((it, i) => (
            <span
              key={i}
              style={{
                display: "inline-flex",
                alignItems: "center",
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                letterSpacing: ".22em",
                color: "#8FA3BF",
                whiteSpace: "nowrap",
              }}
            >
              {it.toUpperCase()}
              <span
                style={{ color: "var(--ac, #22D3EE)", margin: "0 22px" }}
              >
                •
              </span>
            </span>
          ))}
        </div>
      </motion.div>

      {/* giant background word */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: EASE, delay: 0.45 }}
          style={{
            alignSelf: "flex-end",
            marginRight: "7vw",
            marginBottom: 14,
            fontFamily: "var(--font-mono)",
            fontSize: "clamp(12px, 1.1vw, 16px)",
            letterSpacing: ".55em",
            color: "#E6EEF9",
          }}
        >
          ASSOCIATE
        </motion.div>
        <motion.h1
          aria-label="Nimsara Liyanage"
          className="hero-giant"
          style={{
            x: wordX,
            margin: 0,
            fontWeight: 700,
            lineHeight: 0.9,
            letterSpacing: "-.02em",
            whiteSpace: "nowrap",
            color: "var(--ac, #22D3EE)",
            textShadow: "0 0 80px var(--acg, rgba(34,211,238,.35))",
            userSelect: "none",
          }}
        >
          <motion.span
            style={{ display: "inline-block" }}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 0.92, scale: 1 }}
            transition={{ duration: 1.1, ease: EASE, delay: 0.15 }}
          >
            SOFTWARE
          </motion.span>
        </motion.h1>
      </div>

      {/* subject photo */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: "50%",
          transform: "translateX(-50%)",
          height: "min(84vh, 760px)",
          aspectRatio: "1",
          zIndex: 2,
          pointerEvents: "none",
        }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1, ease: EASE, delay: 0.25 }}
          style={{ x: photoX, y: photoY, width: "100%", height: "100%", position: "relative" }}
        >
          <Image
            src={PHOTO}
            alt="Nimsara Liyanage"
            fill
            priority
            draggable={false}
            sizes="(max-width: 760px) 84vw, 760px"
            style={{
              objectFit: "cover",
              objectPosition: "top center",
              maskImage:
                "radial-gradient(62% 68% at 50% 44%, #000 52%, transparent 90%)",
              WebkitMaskImage:
                "radial-gradient(62% 68% at 50% 44%, #000 52%, transparent 90%)",
            }}
          />
          {/* darken edges into the background + bottom fade */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(64% 72% at 50% 42%, transparent 44%, #050B16 84%), linear-gradient(180deg, transparent 55%, #050B16 96%)",
            }}
          />
        </motion.div>
      </div>

      {/* name — top left */}
      <motion.div
        className="hero-name"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.3 }}
        style={{ position: "absolute", top: 140, left: 48, zIndex: 4 }}
      >
        <div
          style={{
            fontSize: "clamp(24px, 2.6vw, 40px)",
            fontWeight: 700,
            letterSpacing: "-.01em",
            lineHeight: 1.05,
            color: "#E6EEF9",
          }}
        >
          Nimsara
          <br />
          Liyanage
        </div>
        <div
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            letterSpacing: ".18em",
            color: "var(--ac, #22D3EE)",
            marginTop: 10,
          }}
        >
          Software · AI / ML
        </div>
      </motion.div>

      {/* tagline — top right */}
      <motion.div
        className="hero-tagline"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.4 }}
        style={{
          position: "absolute",
          top: 140,
          right: 48,
          zIndex: 4,
          textAlign: "right",
          fontSize: "clamp(13px, 1vw, 16px)",
          fontWeight: 300,
          lineHeight: 1.6,
          color: "#AEBFD6",
        }}
      >
        Code that scales.
        <br />
        AI that thinks.
      </motion.div>

      {/* role — bottom right */}
      <motion.div
        className="hero-role"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.5 }}
        style={{
          position: "absolute",
          bottom: 128,
          right: 48,
          zIndex: 4,
          textAlign: "right",
        }}
      >
        <div
          className="hero-role"
          style={{
            fontWeight: 700,
            letterSpacing: "-.01em",
            lineHeight: 0.95,
            color: "#E6EEF9",
          }}
        >
          ENGINEER
        </div>
      </motion.div>

      {/* socials — bottom left */}
      <motion.div
        className="hero-social"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.55 }}
        style={{
          position: "absolute",
          bottom: 128,
          left: 48,
          zIndex: 4,
          display: "flex",
          flexDirection: "column",
          gap: 10,
          fontFamily: "var(--font-mono)",
          fontSize: 12,
          letterSpacing: ".08em",
        }}
      >
        {[
          { label: "LinkedIn", href: CONTACT.linkedin, tag: "in" },
          { label: "GitHub", href: CONTACT.github, tag: "GH" },
        ].map((s) => (
          <a
            key={s.tag}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              color: "#8FA3BF",
              textDecoration: "none",
              transition: "color .25s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = "var(--ac, #22D3EE)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.color = "#8FA3BF")}
          >
            <span
              style={{
                width: 26,
                height: 26,
                borderRadius: 7,
                border: "1px solid rgba(148,184,255,.25)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 10,
              }}
            >
              {s.tag}
            </span>
            {s.label}
          </a>
        ))}
      </motion.div>

      {/* intro paragraph — bottom center */}
      <motion.p
        className="hero-para"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.65 }}
        style={{
          position: "absolute",
          bottom: 40,
          left: 0,
          right: 0,
          margin: "0 auto",
          maxWidth: 760,
          padding: "0 48px",
          textAlign: "center",
          fontSize: "clamp(12px, 1vw, 15px)",
          fontWeight: 300,
          lineHeight: 1.7,
          color: "#8FA3BF",
          zIndex: 4,
        }}
      >
        Turning ideas into impactful solutions through code and innovation — an
        Associate Software Engineer specializing in scalable mobile &amp;
        backend software, Agentic AI, LLMs &amp; RAG.
      </motion.p>
    </section>
  );
}
