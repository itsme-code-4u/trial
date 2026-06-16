export default function Footer() {
  return (
    <footer className="border-t border-white/10 px-6 py-12 text-center text-sm text-cyan/50">
      <p className="font-display text-lg text-white">VoltX Electric</p>
      <p className="mt-2">\u00a9 {new Date().getFullYear()} VoltX Electric. Powering tomorrow's world.</p>
    </footer>
  );
}
