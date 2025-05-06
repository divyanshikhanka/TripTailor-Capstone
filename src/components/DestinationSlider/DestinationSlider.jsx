import { useState, useEffect, useRef } from 'react';
import './DestinationSlider.css';

const destinations = [
  {
    id: 1,
    name: 'Santorini, Greece',
    image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg',
    description: 'Iconic white buildings with blue domes overlooking the Aegean Sea'
  },
  {
    id: 2,
    name: 'Kyoto, Japan',
    image: 'https://images.pexels.com/photos/402028/pexels-photo-402028.jpeg',
    description: 'Ancient temples, beautiful gardens, and traditional experiences'
  },
  {
    id: 3,
    name: 'Machu Picchu, Peru',
    image: 'https://images.pexels.com/photos/2356045/pexels-photo-2356045.jpeg',
    description: 'Historic Incan citadel set against a breathtaking mountain backdrop'
  },
  {
    id: 4,
    name: 'Venice, Italy',
    image: 'https://images.pexels.com/photos/1796736/pexels-photo-1796736.jpeg',
    description: 'Romantic canals, historic architecture, and amazing cuisine'
  }
];

const DestinationSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % destinations.length);
    }, 5000);

    return () => {
      resetTimeout();
    };
  }, [activeIndex]);

  const goToSlide = (index) => {
    resetTimeout();
    setActiveIndex(index);
  };

  const nextSlide = () => {
    const newIndex = (activeIndex + 1) % destinations.length;
    setActiveIndex(newIndex);
  };

  const prevSlide = () => {
    const newIndex = activeIndex === 0 ? destinations.length - 1 : activeIndex - 1;
    setActiveIndex(newIndex);
  };

  return (
    <section className="destination-slider-section">
      <div className="container">
        <div className="section-title">
          <h2>Trending Destinations</h2>
        </div>
        
        <div className="destination-slider-container" ref={sliderRef}>
          <div className="destination-slider">
            {destinations.map((destination, index) => (
              <div 
                key={destination.id}
                className={`destination-slide ${index === activeIndex ? 'active' : ''}`}
                style={{ 
                  transform: `translateX(${100 * (index - activeIndex)}%)`,
                  zIndex: index === activeIndex ? 2 : 1 
                }}
              >
                <div className="destination-slide-image-container">
                  <img 
                    src={destination.image} 
                    alt={destination.name} 
                    className="destination-slide-image" 
                  />
                </div>
                <div className="destination-slide-content">
                  <h3>{destination.name}</h3>
                  <p>{destination.description}</p>
                  <a href="#" className="btn btn-primary">Explore Now</a>
                </div>
              </div>
            ))}
          </div>
          
          <button className="slider-arrow prev-arrow" onClick={prevSlide}>
            &lt;
          </button>
          <button className="slider-arrow next-arrow" onClick={nextSlide}>
            &gt;
          </button>
          
          <div className="slider-dots">
            {destinations.map((_, index) => (
              <button 
                key={index} 
                className={`slider-dot ${index === activeIndex ? 'active' : ''}`} 
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DestinationSlider;