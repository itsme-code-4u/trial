export default function Emergency() {
  return (
    <section className="relative my-20 px-6">
      <div className="mx-auto max-w-5xl rounded-3xl border border-red-500/40 bg-red-950/20 p-12 text-center backdrop-blur-xl animate-pulseGlow">
        <p className="font-display text-xs uppercase tracking-[0.3em] text-red-400">24/7 Rapid Response</p>
        <h2 className="mt-4 font-display text-3xl font-black text-white md:text-5xl">Electrical Emergency?</h2>
        <p className="mx-auto mt-3 max-w-lg text-red-100/70">Power outage, sparks, or hazard — our emergency electricians are on call right now.</p>
        <a href="tel:+18005551234" className="mt-8 inline-block">
          <span className="inline-block rounded-full bg-red-500 px-10 py-4 font-display font-bold text-white shadow-[0_0_40px_rgba(255,40,60,.7)] transition hover:scale-105">
            Call Emergency Electrician
          </span>
        </a>
      </div>
    </section>
  );
}
