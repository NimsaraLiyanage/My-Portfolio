"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CONTACT } from "@/lib/data";

// ── Delivery ────────────────────────────────────────────────────────────
// Paste your free Web3Forms access key here to receive messages by email
// without any backend (get one at https://web3forms.com — takes 30s).
// If left empty, the terminal falls back to opening the visitor's mail app.
const WEB3FORMS_ACCESS_KEY = "0798246b-a5b2-4278-8e03-a003c49887a4";

async function deliver({ name, email, message }) {
  if (WEB3FORMS_ACCESS_KEY) {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        access_key: WEB3FORMS_ACCESS_KEY,
        subject: `Portfolio message from ${name}`,
        from_name: "Portfolio Contact Terminal",
        name,
        email,
        message,
      }),
    });
    const data = await res.json();
    if (!data.success) throw new Error(data.message || "Delivery failed");
    return "web3forms";
  }
  // Fallback — open the visitor's mail client pre-filled.
  const subject = encodeURIComponent(`Portfolio message from ${name}`);
  const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
  window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
  return "mailto";
}

const STEPS = [
  { key: "name", prompt: "Enter your name", placeholder: "Ada Lovelace" },
  { key: "email", prompt: "Enter your email", placeholder: "you@domain.com" },
  { key: "message", prompt: "Type your message", placeholder: "Hey Nimsara, ..." },
];

const isEmail = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());

export default function ContactTerminal({ open, onClose }) {
  const [step, setStep] = useState(0);
  const [data, setData] = useState({ name: "", email: "", message: "" });
  const [input, setInput] = useState("");
  const [status, setStatus] = useState("idle"); // idle | sending | done | error
  const [error, setError] = useState("");
  const inputRef = useRef(null);
  const bodyRef = useRef(null);

  // reset each time it opens, and focus the input
  useEffect(() => {
    if (open) {
      setStep(0);
      setData({ name: "", email: "", message: "" });
      setInput("");
      setStatus("idle");
      setError("");
      const t = setTimeout(() => inputRef.current?.focus(), 350);
      return () => clearTimeout(t);
    }
  }, [open]);

  // keep the scroll pinned to the newest line
  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight });
  }, [step, status]);

  // close on Escape
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const submitLine = async () => {
    const value = input.trim();
    if (!value) return;
    const cur = STEPS[step];

    if (cur.key === "email" && !isEmail(value)) {
      setError("✗ That doesn't look like a valid email. Try again.");
      return;
    }
    setError("");
    const next = { ...data, [cur.key]: value };
    setData(next);
    setInput("");

    if (step < STEPS.length - 1) {
      setStep(step + 1);
      return;
    }

    // last step — send it
    setStatus("sending");
    try {
      const via = await deliver(next);
      setStatus("done");
      if (via === "mailto") {
        setError("");
      }
    } catch (err) {
      setStatus("error");
      setError(`✗ ${err.message}. Email me directly at ${CONTACT.email}`);
    }
  };

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      submitLine();
    }
  };

  const dot = (c) => (
    <span
      style={{
        width: 12,
        height: 12,
        borderRadius: "50%",
        background: c,
        display: "inline-block",
      }}
    />
  );

  const answered = STEPS.slice(0, step);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{
              position: "fixed",
              inset: 0,
              background: "rgba(3,7,14,.55)",
              backdropFilter: "blur(2px)",
              zIndex: 90,
            }}
          />

          {/* terminal panel */}
          <motion.div
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            exit={{ y: "110%" }}
            transition={{ type: "spring", stiffness: 260, damping: 30 }}
            role="dialog"
            aria-label="Contact terminal"
            style={{
              position: "fixed",
              left: 0,
              right: 0,
              bottom: 0,
              width: "min(680px, 94vw)",
              zIndex: 91,
              margin: "0 auto 22px",
              borderRadius: 14,
              overflow: "hidden",
              border: "1px solid rgba(148,184,255,.18)",
              background: "#0A121F",
              boxShadow: "0 24px 70px rgba(0,0,0,.6)",
              fontFamily: "var(--font-mono)",
            }}
          >
            {/* title bar */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "12px 16px",
                background: "#0E1A2B",
                borderBottom: "1px solid rgba(148,184,255,.12)",
              }}
            >
              {dot("#FF5F56")}
              {dot("#FFBD2E")}
              {dot("#27C93F")}
              <span
                style={{
                  marginLeft: 10,
                  fontSize: 12,
                  color: "#8FA3BF",
                  letterSpacing: ".08em",
                }}
              >
                visitor@nimsara:~/say-hello
              </span>
              <button
                onClick={onClose}
                aria-label="Close terminal"
                style={{
                  marginLeft: "auto",
                  color: "#8FA3BF",
                  background: "transparent",
                  border: "none",
                  cursor: "pointer",
                  fontSize: 14,
                  lineHeight: 1,
                }}
              >
                ✕
              </button>
            </div>

            {/* body */}
            <div
              ref={bodyRef}
              onClick={() => inputRef.current?.focus()}
              style={{
                padding: "18px 18px 20px",
                minHeight: 220,
                maxHeight: "48vh",
                overflowY: "auto",
                fontSize: 14,
                lineHeight: 1.7,
                color: "#CBD8EF",
              }}
            >
              <div style={{ color: "#8FA3BF", marginBottom: 12 }}>
                {"// Say hello — I'll get back to you. (Enter to submit each line)"}
              </div>

              {/* answered lines */}
              {answered.map((s) => (
                <div key={s.key}>
                  <span style={{ color: "var(--ac, #22D3EE)" }}>➜ </span>
                  <span style={{ color: "#8FA3BF" }}>{s.prompt}: </span>
                  <span style={{ color: "#E6EEF9" }}>{data[s.key]}</span>
                </div>
              ))}

              {/* active prompt */}
              {status !== "done" && status !== "sending" && (
                <div style={{ display: "flex", alignItems: "baseline" }}>
                  <span style={{ color: "var(--ac, #22D3EE)", flex: "none" }}>
                    ➜{" "}
                  </span>
                  <span style={{ color: "#8FA3BF", flex: "none" }}>
                    {STEPS[step].prompt}:&nbsp;
                  </span>
                  <input
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={onKeyDown}
                    placeholder={STEPS[step].placeholder}
                    spellCheck={false}
                    autoComplete="off"
                    style={{
                      flex: 1,
                      minWidth: 0,
                      background: "transparent",
                      border: "none",
                      outline: "none",
                      color: "#E6EEF9",
                      fontFamily: "inherit",
                      fontSize: 14,
                      caretColor: "var(--ac, #22D3EE)",
                    }}
                  />
                </div>
              )}

              {status === "sending" && (
                <div style={{ color: "var(--ac, #22D3EE)", marginTop: 6 }}>
                  ↻ sending…
                </div>
              )}

              {status === "done" && (
                <div style={{ marginTop: 10 }}>
                  <div style={{ color: "#27C93F" }}>
                    ✓ Message delivered. Thanks, {data.name.split(" ")[0]}!
                  </div>
                  <div style={{ color: "#8FA3BF", marginTop: 4 }}>
                    {WEB3FORMS_ACCESS_KEY
                      ? "I'll get back to you soon."
                      : "Your mail app should have opened — hit send and it reaches me."}
                  </div>
                </div>
              )}

              {error && (
                <div style={{ color: "#FF6B6B", marginTop: 8 }}>{error}</div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
