import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: { electric: "#00D9FF", cyan: "#00FFF0", energy: "#7A5CFF", ink: "#050505", graphite: "#0B0B0B" },
      fontFamily: { display: ["var(--font-display)", "sans-serif"], body: ["var(--font-body)", "sans-serif"] },
      boxShadow: {
        glow: "0 0 24px rgba(0,217,255,.45)",
        "glow-lg": "0 0 60px rgba(0,217,255,.35)",
        energy: "0 0 40px rgba(122,92,255,.5)",
      },
      keyframes: {
        pulseGlow: {
          "0%,100%": { opacity: "1", boxShadow: "0 0 20px rgba(255,40,60,.6)" },
          "50%": { opacity: ".7", boxShadow: "0 0 60px rgba(255,40,60,.9)" },
        },
        float: { "0%,100%": { transform: "translateY(0)" }, "50%": { transform: "translateY(-12px)" } },
      },
      animation: { pulseGlow: "pulseGlow 1.6s ease-in-out infinite", float: "float 5s ease-in-out infinite" },
    },
  },
  plugins: [],
} satisfies Config;
