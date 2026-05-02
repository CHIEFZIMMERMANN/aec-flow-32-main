// Central theme configuration. All design tokens are exposed via CSS variables in index.css.
// This file mirrors them for use in JS (e.g. framer-motion, charts).

export const theme = {
  colors: {
    background: "hsl(210 30% 6%)",
    foreground: "hsl(210 20% 96%)",
    primary: "hsl(248 70% 62%)",
    primaryGlow: "hsl(258 85% 70%)",
    accent: "hsl(168 85% 55%)",
    accentGlow: "hsl(168 100% 65%)",
    muted: "hsl(215 16% 65%)",
  },
  gradients: {
    primary: "linear-gradient(135deg, hsl(248 70% 62%), hsl(258 85% 70%))",
    accent: "linear-gradient(135deg, hsl(168 85% 55%), hsl(168 100% 65%))",
  },
  motion: {
    ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    duration: { fast: 0.3, base: 0.6, slow: 0.9 },
  },
} as const;
