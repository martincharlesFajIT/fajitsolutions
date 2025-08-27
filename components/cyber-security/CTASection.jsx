// CTASection.jsx
import './css/CTASection.css';

const CTASection = () => {
  return (
    <div className="cta-container">
      <div className="cta-content">
        <h2 className="cta-title">Stop threats before they strike</h2>
        <p className="cta-description">
          With Sophos, you don't have to sacrifice peace of mind to embrace growth. You get innovative AI that evolves with every 
          threat and expert threat hunters who don't miss a move. Find out how these solutions can keep your business safe.
        </p>
        <div className="cta-buttons">
          <button className="btn-primary">Contact sales</button>
          <button className="btn-secondary">Book a meeting</button>
        </div>
      </div>
    </div>
  );
};

export default CTASection;