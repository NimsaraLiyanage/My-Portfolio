export default function Footer() {
  return (
    <footer
      className="site-footer"
      style={{
        position: "relative",
        zIndex: 1,
        borderTop: "1px solid rgba(148,184,255,.08)",
        padding: "28px 48px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 12,
        fontFamily: "var(--font-mono)",
        fontSize: 11,
        letterSpacing: ".16em",
        color: "#54688A",
      }}
    >
      <span>© 2026 NIMSARA LIYANAGE</span>
      <span>DESIGNED &amp; BUILT WITH INTENT</span>
    </footer>
  );
}
