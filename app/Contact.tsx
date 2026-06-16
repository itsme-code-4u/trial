"use client";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <section id="contact" className="relative mx-auto max-w-3xl px-6 py-32">
      <h2 className="mb-12 text-center font-display text-3xl font-black neon-text md:text-5xl">Get In Touch</h2>
      <form
        onSubmit={(e) => { e.preventDefault(); setSent(true); }}
        className="glass space-y-4 rounded-3xl p-8">
        <input required placeholder="Name" className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 outline-none focus:border-electric" />
        <input required type="email" placeholder="Email" className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 outline-none focus:border-electric" />
        <textarea required placeholder="How can we help?" rows={4} className="w-full rounded-lg border border-white/10 bg-black/40 px-4 py-3 outline-none focus:border-electric" />
        <button className="w-full rounded-full bg-electric py-3 font-display font-bold text-ink shadow-glow transition hover:shadow-glow-lg">
          {sent ? "\u2713 Request Sent" : "Request Quote"}
        </button>
      </form>
    </section>
  );
}
