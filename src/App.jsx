import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
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
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Careers from './components/Careers';
import JobDetail from './components/JobDetail';
import CareersNavbar from './components/CareersNavbar';

gsap.registerPlugin(ScrollTrigger);

// ── Main (home) page with Lenis smooth scroll ─────────────────
function HomePage() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    lenis.on('scroll', ScrollTrigger.update);

    function onTick(time) {
      lenis.raf(time * 1000);
    }
    gsap.ticker.add(onTick);
    gsap.ticker.lagSmoothing(0);
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
        <Team />
        <Services />
        <SoftwareTech />
        <GrowthMarketing />
        <BrandingCreative />
        <WorkforceStaffing />
        {/* <Clients /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

// ── Careers layout wrapper ────────────────────────────────────
function CareersLayout({ children }) {
  return (
    <div className="min-h-screen" style={{ background: '#F8F7FF' }}>
      <CareersNavbar />
      {children}
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/careers"
        element={
          <CareersLayout>
            <Careers />
          </CareersLayout>
        }
      />
      <Route
        path="/careers/:id"
        element={
          <CareersLayout>
            <JobDetail />
          </CareersLayout>
        }
      />
    </Routes>
  );
}

export default App;
