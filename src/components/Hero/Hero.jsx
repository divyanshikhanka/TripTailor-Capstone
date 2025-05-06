import { useState, useEffect } from 'react';
import './Hero.css';

const backgrounds = [
  "https://images.pexels.com/photos/3155666/pexels-photo-3155666.jpeg",
  "https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg",
  "https://images.pexels.com/photos/1271619/pexels-photo-1271619.jpeg",
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % backgrounds.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="hero-section">
      <div className="hero-background">
        {backgrounds.map((bg, index) => (
          <div 
            key={index}
            className={`hero-bg-image ${index === activeIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${bg})` }}
          ></div>
        ))}
        <div className="hero-overlay"></div>
      </div>
      
      <div className="container hero-content">
        <h1 className="hero-title">Find Your Perfect Getaway ~ Tailored Just for You</h1>
        <p className="hero-subtitle">Discover destinations that match your vibe, budget, and adventure style</p>
        <a href="#destinations" className="btn btn-primary hero-cta">Get Started</a>
      </div>
      
      <div className="hero-scroll-indicator">
        <div className="scroll-arrow"></div>
      </div>
    </section>
  );
};

export default Hero;