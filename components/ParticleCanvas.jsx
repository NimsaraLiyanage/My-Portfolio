"use client";

import { useEffect, useRef } from "react";
import { hexToRgb } from "@/lib/theme";
import { ACCENT } from "@/lib/data";

// Connected-dot particle field, ported from the original design's canvas logic.
// Dots drift, respond subtly to the pointer, and link when close together.
export default function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv) return;
    const ctx = cv.getContext("2d");
    const [r, g, b] = hexToRgb(ACCENT);

    let dots = [];
    let raf = 0;
    let running = true;
    const mouse = { x: 0, y: 0 };

    const sizeCanvas = () => {
      const rect = cv.getBoundingClientRect();
      cv.width = rect.width;
      cv.height = rect.height;
    };

    const initDots = () => {
      const n = Math.min(80, Math.round((cv.width * cv.height) / 22000));
      dots = Array.from({ length: n }, () => ({
        x: Math.random() * cv.width,
        y: Math.random() * cv.height,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        s: 1 + Math.random() * 1.6,
      }));
    };

    const draw = () => {
      const W = cv.width;
      const H = cv.height;
      ctx.clearRect(0, 0, W, H);
      for (const d of dots) {
        d.x += d.vx + mouse.x * 0.3;
        d.y += d.vy + mouse.y * 0.3;
        if (d.x < 0) d.x = W;
        if (d.x > W) d.x = 0;
        if (d.y < 0) d.y = H;
        if (d.y > H) d.y = 0;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.s, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${r},${g},${b},.45)`;
        ctx.fill();
      }
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = dx * dx + dy * dy;
          if (dist < 16900) {
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.strokeStyle = `rgba(${r},${g},${b},${
              0.14 * (1 - dist / 16900)
            })`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
    };

    const tick = () => {
      if (!running) return;
      draw();
      raf = requestAnimationFrame(tick);
    };

    const onResize = () => {
      sizeCanvas();
      initDots();
    };
    const onMouse = (e) => {
      mouse.x = e.clientX / window.innerWidth - 0.5;
      mouse.y = e.clientY / window.innerHeight - 0.5;
    };

    sizeCanvas();
    initDots();
    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouse);
    raf = requestAnimationFrame(tick);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
}
