"use client";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 hidden md:block"><HeroScene /></div>
      <div className="absolute inset-0 md:hidden bg-[radial-gradient(60%_60%_at_50%_30%,#0a2540,#050505)]" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.h1 initial= opacity: 0, y: 30  animate= opacity: 1, y: 0  transition= duration: 0.9, ease: [0.16, 0.84, 0.44, 1] 
          className="font-display text-4xl font-black tracking-tight neon-text md:text-7xl">
          Powering Tomorrow's World
        </motion.h1>
        <motion.p initial= opacity: 0  animate= opacity: 1  transition= delay: 0.4, duration: 1 
          className="mt-6 max-w-xl text-base text-cyan/80 md:text-xl">
          Advanced electrical solutions engineered for the future.
        </motion.p>
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton variant="primary">Get Instant Quote</MagneticButton>
          <MagneticButton variant="ghost">Explore Services</MagneticButton>
        </div>
      </div>
    </section>
  );
}
