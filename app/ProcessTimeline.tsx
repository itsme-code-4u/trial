"use client";
import { useRef, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const STEPS = ["Consultation", "Inspection", "Design", "Installation", "Testing", "Maintenance"];

export default function ProcessTimeline() {
  const root = useRef<HTMLDivElement>(null);
  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".pipeline-fill", {
        scaleY: 1, ease: "none",
        scrollTrigger: { trigger: root.current, start: "top 70%", end: "bottom 60%", scrub: true },
      });
      gsap.from(".step-node", {
        opacity: 0, x: -40, stagger: 0.2,
        scrollTrigger: { trigger: root.current, start: "top 70%", end: "bottom 70%", scrub: true },
      });
    }, root);
    return () => ctx.revert();
  }, []);
  return (
    <section ref={root} className="relative mx-auto max-w-3xl px-6 py-32">
      <h2 className="mb-16 text-center font-display text-3xl font-black neon-text md:text-5xl">Our Process</h2>
      <div className="relative pl-10">
        <div className="absolute left-3 top-0 h-full w-px bg-white/10" />
        <div className="pipeline-fill energy-line absolute left-[10px] top-0 h-full w-[3px] origin-top scale-y-0" />
        {STEPS.map((s, i) => (
          <div key={s} className="step-node relative mb-12">
            <div className="absolute -left-[34px] top-1 h-4 w-4 rounded-full bg-electric shadow-glow" />
            <h3 className="font-display text-xl text-white">{String(i + 1).padStart(2, "0")} — {s}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}
