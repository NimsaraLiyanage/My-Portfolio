# Nimsara Liyanage — Portfolio

A dark, cinematic single-page portfolio built with **Next.js (App Router)** and
**Framer Motion**, ported from the Claude Design source.

## Features

- Animated letter-by-letter hero title + connected-particle canvas
- Pointer-driven 3D photo tilt with orbiting rings
- Scroll progress bar and parallax ambient orbs
- Horizontal, scroll-pinned project showcase
- Scroll-reveal sections with subtle 3D tilt + kinetic outline headings
- Animated skill meters, timeline, and copy-to-clipboard contact
- Fully responsive, theme accent driven by a single variable

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Customising

- **Content** — edit [`lib/data.js`](lib/data.js) (projects, skills, timeline, contact).
- **Accent colour** — change `ACCENT` in [`lib/data.js`](lib/data.js)
  (`#22D3EE`, `#A78BFA`, `#FB923C`, `#34D399`). It re-themes the whole site.
- **Images** — drop your assets into [`public/images/`](public/images/)
  (see the README there for expected filenames).

## Build

```bash
npm run build && npm start
```
