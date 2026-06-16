import MagneticButton from "./MagneticButton";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <span className="font-display text-xl font-black text-white neon-text">VoltX</span>
        <div className="hidden gap-8 text-sm text-cyan/70 md:flex">
          <a href="#services" className="hover:text-white">Services</a>
          <a href="#process" className="hover:text-white">Process</a>
          <a href="#portfolio" className="hover:text-white">Portfolio</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </div>
        <MagneticButton variant="ghost">Get Quote</MagneticButton>
      </nav>
    </header>
  );
}
