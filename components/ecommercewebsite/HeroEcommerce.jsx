import './css/Ecom-website.css';

const HeroEcommerce = () => {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-content">
          <div className="text-content">
            <h1 className="hero-title">
              Ecommerce Website Design Agency in UAE
            </h1>
            
            <p className="hero-description">
              For almost a decade, ClickSlice has been at the forefront of helping small, medium, and large e-commerce brands build their perfect e-commerce store. As a result of our excellent work and dedication to each and every project we get to work on, we've built a reputation we couldn't be more proud of.
            </p>
            
            <p className="hero-description">
              As a result of that, the demand for our services has been exponentially growing. So, if you don't want to be left behind or make any compromises and give your e-commerce company the best chance to succeed, let's have a chat and see what we can do for you today!
            </p>
            
            <button className="cta-button">
              BOOK A CALL
            </button>
          </div>
          
          <div className="image-content">
            <div className="browser-mockup">
              <div className="browser-header">
                <div className="browser-logo"></div>
                <div className="browser-nav">
                  <span>Home</span>
                  <span>Collection</span>
                  <span>FAQ</span>
                  <span>About Us</span>
                </div>
                <div className="browser-actions">
                  <div className="search-icon"></div>
                  <div className="user-icon"></div>
                  <div className="cart-icon"></div>
                </div>
              </div>
              
              <div className="browser-content">
                <div className="plant-section">
                  <h2 className="feel-fresh">FEEL FRESH</h2>
                  <p className="tagline">HEALTHY LIVING</p>
                  <p className="subtitle">Make your home feel homey</p>
                  <p className="shop-button">SHOP NOW</p>
                  <img 
                    src="https://images.unsplash.com/photo-1509423350716-97f9360b4e09?w=400&h=600&fit=crop" 
                    alt="Plant in pot" 
                    className="plant-image"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroEcommerce;