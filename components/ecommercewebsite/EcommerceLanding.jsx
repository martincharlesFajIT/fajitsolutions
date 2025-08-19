import './css/EcommerceLanding.css';

const EcommerceLanding = () => {
  return (
    <div className="landing-container">
      <div className="content-wrapper">
        {/* Left Side - Text Content */}
        <div className="text-section">
          <h1 className="main-heading">
            Ready to Take Your Ecommerce Sales to the{' '}
            <span className="highlight">Next Level?</span>
          </h1>
          
          <p className="description">
            Partner with top experts to build a custom eCommerce website that delights your 
            customers, simplifies buyer journeys, and multiplies your sales revenue. Our 
            solutions are secure, scalable, and designed to grow with your business.
          </p>
          
          <button className="cta-button">
            Get Started Now
          </button>
        </div>

        {/* Right Side - Image */}
        <div className="image-section">
          <img 
            src="/ecommerce-image.png" 
            alt="Ecommerce Platform"
            className="hero-image"
          />
        </div>
      </div>
    </div>
  );
};

export default EcommerceLanding;