export default function SmartDashboard() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 py-32">
      <h2 className="mb-12 text-center font-display text-3xl font-black neon-text md:text-5xl">Smart Technology</h2>
      <div className="glass grid grid-cols-1 gap-6 rounded-3xl p-8 md:grid-cols-3">
        {["Live Monitoring", "Energy Consumption", "Predictive Maintenance"].map((t) => (
          <div key={t} className="rounded-xl border border-white/10 p-6">
            <p className="text-sm text-cyan/70">{t}</p>
            <div className="mt-4 h-24 rounded-lg bg-gradient-to-tr from-electric/30 to-energy/20" />
          </div>
        ))}
      </div>
    </section>
  );
}
