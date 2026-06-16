"use client";
import { motion } from "framer-motion";

const REVIEWS = [
  { name: "Sarah M.", role: "Homeowner", quote: "Felt like hiring a tech company. Flawless smart-home wiring." },
  { name: "James C.", role: "Facilities Lead", quote: "Industrial install done ahead of schedule. Incredible team." },
  { name: "Elena R.", role: "Property Manager", quote: "The monitoring dashboard alone is worth it. Highly recommend." },
];

export default function Testimonials() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-32">
      <h2 className="mb-16 text-center font-display text-3xl font-black neon-text md:text-5xl">What Clients Say</h2>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {REVIEWS.map((r, i) => (
          <motion.div key={r.name}
            initial= opacity: 0, scale: 0.9  whileInView= opacity: 1, scale: 1 
            viewport= once: true  transition= delay: i * 0.1 
            className="glass rounded-2xl p-8">
            <p className="text-cyan/90">&ldquo;{r.quote}&rdquo;</p>
            <div className="mt-6 font-display text-white">{r.name}</div>
            <div className="text-sm text-cyan/60">{r.role}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
