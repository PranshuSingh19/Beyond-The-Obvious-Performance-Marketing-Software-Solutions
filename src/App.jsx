import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import SoftwareTech from './components/SoftwareTech';
import GrowthMarketing from './components/GrowthMarketing';
import BrandingCreative from './components/BrandingCreative';
import WorkforceStaffing from './components/WorkforceStaffing';
import Clients from './components/Clients';
import Contact from './components/Contact';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // ── Lenis instance ────────────────────────────────────────
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // ── Bridge: Lenis scroll → ScrollTrigger update ───────────
    // Without this, ScrollTrigger reads native scroll position
    // while Lenis controls the actual scroll — pins never fire.
    lenis.on('scroll', ScrollTrigger.update);

    // ── Drive Lenis inside GSAP ticker ────────────────────────
    // Named function so we can remove it cleanly on unmount
    function onTick(time) {
      lenis.raf(time * 1000); // GSAP time = seconds, Lenis expects ms
    }
    gsap.ticker.add(onTick);

    // Prevent GSAP lag-smoothing from fighting Lenis timing
    gsap.ticker.lagSmoothing(0);

    // Tell ScrollTrigger not to touch native scroll behaviour
    ScrollTrigger.normalizeScroll(false);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(onTick);
    };
  }, []);

  return (
    <div className="min-h-screen bg-obsidian">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <SoftwareTech />
        <GrowthMarketing />
        <BrandingCreative />
        <WorkforceStaffing />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
