import './AboutUs.css';

const AboutUs = () => {
  return (
    <section id="about" className="about-section section">
      <div className="container">
        <div className="section-title">
          <h2>About Us</h2>
        </div>
        
        <div className="about-content">
          <div className="about-image">
            <img 
              src="https://images.pexels.com/photos/2325446/pexels-photo-2325446.jpeg" 
              alt="Travel planning" 
            />
          </div>
          
          <div className="about-text">
            <h3>At Trip Tailor, we believe that every traveller deserves a journey that is uniquely theirs.</h3>
            
            <p>Whether you are dreaming of sun-kissed beaches, bustling cityscapes, or serene mountain retreats, our platform helps you discover destinations that perfectly match your vibe, budget, and adventure style.</p>
            
            <p>We go beyond typical travel searches — our smart filters and personalized recommendations make planning your next escape effortless and exciting. From hidden gems to world-famous spots, we are here to guide you toward your perfect getaway.</p>
            
            <p>Start exploring with us and turn your travel dreams into unforgettable memories.</p>
            
            <div className="about-stats">
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Destinations</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10k+</span>
                <span className="stat-label">Happy Travelers</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">100%</span>
                <span className="stat-label">Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;