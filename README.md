# VoltX Electric

A futuristic, immersive 3D website for an electrical services company, built with Next.js 15, React Three Fiber, GSAP, Framer Motion, and Lenis smooth scroll.

## Tech stack
- Next.js 15 (App Router) + React 19 + TypeScript
- TailwindCSS design system (electric blue / neon cyan / energy purple)
- Three.js + React Three Fiber + Drei (3D hero scene)
- GSAP ScrollTrigger (scroll-driven storytelling)
- Framer Motion (micro-interactions, count-up stats)
- Lenis (smooth scroll)

## Getting started
```bash
npm install
npm run dev      # http://localhost:3000
```

## Build
```bash
npm run build && npm run start
```

## Notes
All source files live flat inside `app/`. The 3D hero is loaded client-only and disabled on mobile (gradient fallback) for performance. `prefers-reduced-motion` is respected globally.
