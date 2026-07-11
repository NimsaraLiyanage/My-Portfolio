// Derives the accent CSS variables (--ac, --acd, --acs, --acb, --acg) from a hex.
// Mirrors the applyTheme() logic from the original design.

export function hexToRgb(hex) {
  let h = (hex || "#22D3EE").replace("#", "");
  if (h.length === 3)
    h = h
      .split("")
      .map((c) => c + c)
      .join("");
  const n = parseInt(h, 16);
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

export function accentVars(accent = "#22D3EE") {
  const [r, g, b] = hexToRgb(accent);
  const lighten = (v) => Math.min(255, Math.round(v + (255 - v) * 0.35));
  return {
    "--ac": accent,
    "--acd": `rgb(${lighten(r)},${lighten(g)},${lighten(b)})`,
    "--acs": `rgba(${r},${g},${b},.12)`,
    "--acb": `rgba(${r},${g},${b},.4)`,
    "--acg": `rgba(${r},${g},${b},.4)`,
  };
}
