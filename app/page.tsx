import Navbar from "./Navbar";
import Hero from "./Hero";
import Services from "./Services";
import SmartDashboard from "./SmartDashboard";
import WhyChooseUs from "./WhyChooseUs";
import ProcessTimeline from "./ProcessTimeline";
import Portfolio from "./Portfolio";
import Testimonials from "./Testimonials";
import Emergency from "./Emergency";
import Contact from "./Contact";
import Footer from "./Footer";

export default function Home() {
  return (
    <main className="relative bg-ink">
      <Navbar />
      <Hero />
      <Services />
      <SmartDashboard />
      <WhyChooseUs />
      <ProcessTimeline />
      <Portfolio />
      <Testimonials />
      <Emergency />
      <Contact />
      <Footer />
    </main>
  );
}
