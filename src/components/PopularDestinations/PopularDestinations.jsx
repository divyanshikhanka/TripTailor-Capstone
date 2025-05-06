import './PopularDestinations.css';

const destinations = [
  {
    id: 1,
    name: 'Bali, Indonesia',
    image: 'https://images.pexels.com/photos/3225531/pexels-photo-3225531.jpeg',
    description: 'A tropical paradise known for beautiful beaches and vibrant culture.',
    tags: ['Tropical', 'Beach', 'Culture']
  },
  {
    id: 2,
    name: 'Tokyo, Japan',
    image: 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg',
    description: 'A bustling metropolis blending ultra-modern and traditional experiences.',
    tags: ['Metropolis', 'City', 'Modern']
  },
  {
    id: 3,
    name: 'Dubai, UAE',
    image: 'https://images.pexels.com/photos/823696/pexels-photo-823696.jpeg',
    description: 'A futuristic cityscape where luxury meets tradition in the heart of the desert.',
    tags: ['Desert', 'City', 'Luxury']
  }
];

const PopularDestinations = () => {
  return (
    <section id="destinations" className="popular-destinations-section section">
      <div className="container">
        <div className="section-title">
          <h2>Explore Popular Destinations</h2>
        </div>
        
        <div className="destinations-grid">
          {destinations.map((destination) => (
            <div key={destination.id} className="destination-card">
              <div className="destination-image-container">
                <img src={destination.image} alt={destination.name} className="destination-image" />
                <div className="destination-overlay">
                  <div className="globe-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="24" height="24">
                      <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-2.29-2.333A17.9 17.9 0 0 1 8.027 13H4.062a8.008 8.008 0 0 0 5.648 6.667zM10.03 13c.151 2.439.848 4.73 1.97 6.752A15.905 15.905 0 0 0 13.97 13h-3.94zm9.908 0h-3.965a17.9 17.9 0 0 1-1.683 6.667A8.008 8.008 0 0 0 19.938 13zM4.062 11h3.965A17.9 17.9 0 0 1 9.71 4.333 8.008 8.008 0 0 0 4.062 11zm5.969 0h3.938A15.905 15.905 0 0 0 12 4.248 15.905 15.905 0 0 0 10.03 11zm4.259-6.667A17.9 17.9 0 0 1 15.973 11h3.965a8.008 8.008 0 0 0-5.648-6.667z"/>
                    </svg>
                  </div>
                  <h3 className="destination-name">{destination.name}</h3>
                </div>
              </div>
              
              <div className="destination-content">
                <p className="destination-description">{destination.description}</p>
                <div className="destination-tags">
                  {destination.tags.map((tag, index) => (
                    <span key={index} className="destination-tag">{tag}</span>
                  ))}
                </div>
                <div className="destination-buttons">
                  <a href="#" className="btn btn-primary explore-btn">Explore All</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDestinations;