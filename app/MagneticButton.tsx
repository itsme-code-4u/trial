"use client";
import { useRef } from "react";
import { motion } from "framer-motion";
import clsx from "clsx";

export default function MagneticButton({
  children, variant = "primary",
}: { children: React.ReactNode; variant?: "primary" | "ghost" }) {
  const ref = useRef<HTMLButtonElement>(null);
  const onMove = (e: React.MouseEvent) => {
    const el = ref.current!; const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${x * 0.25}px, ${y * 0.35}px)`;
  };
  const reset = () => { if (ref.current) ref.current.style.transform = "translate(0,0)"; };
  return (
    <motion.button
      ref={ref} onMouseMove={onMove} onMouseLeave={reset} whileTap= scale: 0.96 
      className={clsx(
        "rounded-full px-8 py-4 font-display text-sm font-bold transition-shadow duration-300",
        variant === "primary"
          ? "bg-electric text-ink shadow-glow hover:shadow-glow-lg"
          : "glass text-cyan hover:shadow-glow"
      )}
    >
      {children}
    </motion.button>
  );
}
