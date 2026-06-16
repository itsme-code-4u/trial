export default function Portfolio() {
  const items = ["Homes", "Offices", "Factories", "Smart Buildings"];
  return (
    <section id="portfolio" className="relative mx-auto max-w-6xl px-6 py-32">
      <h2 className="mb-12 text-center font-display text-3xl font-black neon-text md:text-5xl">Portfolio</h2>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {items.map((t) => (
          <div key={t} className="glass aspect-[3/4] rounded-2xl p-4 transition-transform hover:-translate-y-2">
            <div className="h-full rounded-xl bg-gradient-to-b from-energy/30 to-electric/10" />
            <p className="mt-3 text-center font-display text-sm text-white">{t}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
