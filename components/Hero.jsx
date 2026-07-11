"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { CONTACT } from "@/lib/data";
import ParticleCanvas from "./ParticleCanvas";

const EASE = [0.16, 1, 0.3, 1];

// letter reveal, mirroring @keyframes letterIn
const letterVariants = {
  hidden: { y: "115%", rotate: 7, opacity: 0 },
  show: { y: "0%", rotate: 0, opacity: 1 },
};

function AnimatedWord({ text, baseDelay, glow }) {
  return (
    <span
      style={{
        display: "block",
        overflow: "hidden",
        paddingBottom: glow ? ".08em" : ".06em",
        color: glow ? "var(--ac, #22D3EE)" : undefined,
        textShadow: glow ? "0 0 60px var(--acg, rgba(34,211,238,.35))" : undefined,
      }}
    >
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          variants={letterVariants}
          initial="hidden"
          animate="show"
          transition={{
            duration: 0.8,
            ease: EASE,
            delay: baseDelay + i * 0.05,
          }}
          style={{ display: "inline-block" }}
        >
          {ch}
        </motion.span>
      ))}
    </span>
  );
}

const socials = [
  { label: "GH", href: CONTACT.github, title: "GitHub" },
  { label: "IN", href: CONTACT.linkedin, title: "LinkedIn" },
  { label: "@", href: `mailto:${CONTACT.email}`, title: "Email" },
];

export default function Hero() {
  // pointer-driven 3D tilt for the photo
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateY = useSpring(useTransform(mx, (v) => v * 14), {
    stiffness: 120,
    damping: 18,
  });
  const rotateX = useSpring(useTransform(my, (v) => v * -10), {
    stiffness: 120,
    damping: 18,
  });

  useEffect(() => {
    const onMove = (e) => {
      mx.set(e.clientX / window.innerWidth - 0.5);
      my.set(e.clientY / window.innerHeight - 0.5);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section
      id="hero"
      data-screen-label="Hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        zIndex: 1,
      }}
    >
      <ParticleCanvas />
      <div
        className="hero-inner two-col-flex"
        style={{
          position: "relative",
          maxWidth: 1440,
          margin: "0 auto",
          padding: "140px 48px 80px",
          display: "flex",
          alignItems: "center",
          gap: 64,
          width: "100%",
        }}
      >
        <div style={{ flex: 1.25, minWidth: 0 }}>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 13,
              letterSpacing: ".28em",
              color: "var(--ac, #22D3EE)",
              marginBottom: 28,
            }}
          >
            SOFTWARE ENGINEER · AI / ML
          </motion.div>

          <h1
            style={{
              margin: 0,
              fontWeight: 700,
              fontSize: "clamp(56px, 8.2vw, 132px)",
              lineHeight: 0.95,
              letterSpacing: "-.02em",
            }}
          >
            <AnimatedWord text="NIMSARA" baseDelay={0.05} />
            <AnimatedWord text="LIYANAGE" baseDelay={0.45} glow />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 1 }}
            style={{
              maxWidth: 520,
              margin: "32px 0 0",
              fontSize: 18,
              fontWeight: 300,
              lineHeight: 1.7,
              color: "#8FA3BF",
            }}
          >
            Turning ideas into impactful solutions through code and innovation.
            A BSc (Hons) Computer Engineering graduate, now working as an
            Associate Software Engineer specializing in software engineering,
            AI, machine learning &amp; deep learning.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 1.15 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginTop: 40,
              flexWrap: "wrap",
            }}
          >
            <a
              href="#work"
              style={{
                background: "var(--ac, #22D3EE)",
                color: "#04121C",
                fontWeight: 600,
                fontSize: 15,
                textDecoration: "none",
                padding: "15px 32px",
                borderRadius: 99,
                boxShadow: "0 0 32px var(--acg, rgba(34,211,238,.35))",
                transition: "transform .25s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "translateY(-2px)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "translateY(0)")
              }
            >
              View Work
            </a>
            <a
              href="#contact"
              style={{
                border: "1px solid rgba(148,184,255,.25)",
                color: "#E6EEF9",
                fontWeight: 500,
                fontSize: 15,
                textDecoration: "none",
                padding: "15px 32px",
                borderRadius: 99,
                transition: "border-color .25s ease, color .25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "var(--ac, #22D3EE)";
                e.currentTarget.style.color = "var(--ac, #22D3EE)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(148,184,255,.25)";
                e.currentTarget.style.color = "#E6EEF9";
              }}
            >
              Contact Me
            </a>
            <div style={{ display: "flex", gap: 8, marginLeft: 12 }}>
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.title}
                  style={{
                    width: 44,
                    height: 44,
                    borderRadius: "50%",
                    border: "1px solid rgba(148,184,255,.2)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#8FA3BF",
                    textDecoration: "none",
                    fontFamily: "var(--font-mono)",
                    fontSize: 12,
                    transition: "color .25s ease, border-color .25s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "var(--ac, #22D3EE)";
                    e.currentTarget.style.borderColor = "var(--ac, #22D3EE)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#8FA3BF";
                    e.currentTarget.style.borderColor = "rgba(148,184,255,.2)";
                  }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE, delay: 0.7 }}
          className="hero-photo"
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "center",
            perspective: 900,
          }}
        >
          <motion.div
            style={{
              position: "relative",
              width: "min(380px, 30vw)",
              aspectRatio: "1",
              willChange: "transform",
              rotateY,
              rotateX,
              transformStyle: "preserve-3d",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                animation: "floaty 7s ease-in-out infinite",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  inset: -2,
                  borderRadius: "50%",
                  background:
                    "conic-gradient(from 0deg, var(--ac, #22D3EE), transparent 30%, transparent 55%, var(--ac, #22D3EE) 85%, var(--ac, #22D3EE))",
                  animation: "spinSlow 9s linear infinite",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: -40,
                  borderRadius: "50%",
                  border: "1px dashed var(--acb, rgba(34,211,238,.25))",
                  animation: "spinSlow 40s linear infinite",
                }}
              />
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/Nimsara.png"
                alt="Nimsara Liyanage"
                onError={(e) => {
                  e.currentTarget.style.visibility = "hidden";
                }}
                style={{
                  position: "absolute",
                  inset: 8,
                  width: "calc(100% - 16px)",
                  height: "calc(100% - 16px)",
                  borderRadius: "50%",
                  objectFit: "cover",
                  background: "#0B1626",
                  boxShadow:
                    "0 20px 80px rgba(0,0,0,.6), 0 0 60px var(--acg, rgba(34,211,238,.25))",
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.6 }}
        style={{
          position: "absolute",
          bottom: 32,
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 10,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 10,
            letterSpacing: ".3em",
            color: "#8FA3BF",
          }}
        >
          SCROLL
        </span>
        <div
          style={{
            width: 22,
            height: 36,
            border: "1px solid rgba(148,184,255,.3)",
            borderRadius: 12,
            display: "flex",
            justifyContent: "center",
            paddingTop: 7,
          }}
        >
          <div
            style={{
              width: 3,
              height: 8,
              borderRadius: 2,
              background: "var(--ac, #22D3EE)",
              animation: "scrollDot 1.8s ease-in-out infinite",
            }}
          />
        </div>
      </motion.div>
    </section>
  );
}
