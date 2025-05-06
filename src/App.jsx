import { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import DestinationSlider from './components/DestinationSlider/DestinationSlider';
import PopularDestinations from './components/PopularDestinations/PopularDestinations';
import AboutUs from './components/AboutUs/AboutUs';
import ContactSection from './components/ContactSection/ContactSection';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  return (
    <div className="app">
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <DestinationSlider />
        <PopularDestinations />
        <AboutUs />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;