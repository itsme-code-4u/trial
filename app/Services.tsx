"use client";
import { motion } from "framer-motion";

const SERVICES = [
  "Residential Wiring", "Commercial Electrical", "Smart Home Installation", "Solar Integration",
  "EV Charger Installation", "Emergency Repairs", "Industrial Systems", "Maintenance Services",
];

export default function Services() {
  return (
    <section id="services" className="relative mx-auto max-w-6xl px-6 py-32">
      <h2 className="mb-16 text-center font-display text-3xl font-black neon-text md:text-5xl">Our Services</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((s, i) => (
          <motion.div key={s}
            initial= opacity: 0, y: 30  whileInView= opacity: 1, y: 0 
            viewport= once: true  transition= delay: i * 0.05 
            whileHover= y: -6 
            className="glass group rounded-2xl p-6 transition-shadow hover:shadow-glow">
            <div className="mb-4 h-10 w-10 rounded-lg bg-electric/20 shadow-glow" />
            <h3 className="font-display text-lg text-white">{s}</h3>
            <p className="mt-2 text-sm text-cyan/60">Engineered, certified, future-ready.</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
