"use client";
import { useInView, motion, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const STATS = [
  { label: "Reliability", value: 99.9, suffix: "%" },
  { label: "Emergency Support", value: 24, suffix: "/7" },
  { label: "Projects Completed", value: 10000, suffix: "+" },
  { label: "Years Experience", value: 15, suffix: "+" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, { duration: 2, ease: "easeOut", onUpdate: (v) => setVal(v) });
    return () => controls.stop();
  }, [inView, to]);
  const display = to % 1 === 0 ? Math.floor(val).toLocaleString() : val.toFixed(1);
  return <span ref={ref}>{display}{suffix}</span>;
}

export default function WhyChooseUs() {
  return (
    <section className="relative py-32">
      <h2 className="mb-16 text-center font-display text-3xl font-black neon-text md:text-5xl">Why Choose VoltX</h2>
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-6 md:grid-cols-4">
        {STATS.map((s, i) => (
          <motion.div key={s.label} initial= opacity: 0, y: 30  whileInView= opacity: 1, y: 0 
            viewport= once: true  transition= delay: i * 0.1 
            className="glass rounded-2xl p-8 text-center">
            <div className="font-display text-3xl font-black text-electric neon-text md:text-4xl">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-2 text-sm text-cyan/70">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
