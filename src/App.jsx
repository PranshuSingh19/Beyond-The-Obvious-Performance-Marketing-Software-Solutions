import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import About from './components/About';
import Services from './components/Services';
import Clients from './components/Clients';
import FAQ from './components/FAQ';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <About />
        <Services />
        <Clients />
        <FAQ />
        {/* <Partners /> */}
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
