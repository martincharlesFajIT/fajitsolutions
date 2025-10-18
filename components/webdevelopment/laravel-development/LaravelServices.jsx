
"use client";
import { useState, useEffect } from 'react';
import '../../css/Webinnerpages.css';
import { 
  FaMobile,
  FaShoppingCart, 
  FaHeadset, 
  FaCogs, 
  FaBuilding, 
  FaCode, 
  FaChartLine, 
  FaExchangeAlt 
} from 'react-icons/fa';

const LaravelService = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const services = [
    {
      id: 1,
      title: "Custom Laravel Web design",
      des: "Audiences engage far more with animation—making it up to ten times more effective than static images.",
      icon: FaMobile
    },
    {
      id: 2,
      title: "Laravel Web development",
      des: "Audiences engage far more with animation—making it up to ten times more effective than static images.",
      icon: FaShoppingCart
    },
    {
      id: 3,
      title: "Laravel integrations",
      des: "Audiences engage far more with animation—making it up to ten times more effective than static images.",
      icon: FaHeadset
    },
    {
      id: 4,
      title: "Laravel optimisation",
      des: "Audiences engage far more with animation—making it up to ten times more effective than static images.",
      icon: FaCogs
    },
    {
      id: 5,
      title: "CRM Integrations",
      des: "Audiences engage far more with animation—making it up to ten times more effective than static images.",
      icon: FaBuilding
    },
    {
      id: 6,
      title: "Systems & API Integration",
      des: "Audiences engage far more with animation—making it up to ten times more effective than static images.",
      icon: FaCode
    },
    {
      id: 7,
      title: "CRM Integrations",
      des: "Audiences engage far more with animation—making it up to ten times more effective than static images.",
      icon: FaChartLine
    },
    {
      id: 8,
      title: "Application Maintenance",
      des: "Audiences engage far more with animation—making it up to ten times more effective than static images.",
      icon: FaExchangeAlt
    }
  ];

  if (!isClient) {
    return (
      <div className="innerpages-container">
        <div className="innerpages-header">
          <h1 className="innerpages-main-title">Professional Laravel Development Company You Can Trust</h1>
          
          <div className="innerpages-help-section">
            <div className="innerpages-help-badge">
              <span className="innerpages-help-icon">✓</span>
              <span className="innerpages-help-text">We Help You Win</span>
            </div>
            <p className="innerpages-help-description">
              We break the norms with our guaranteed Laravel development services, embracing strong brand presence with feature-packed web applications.
            </p>
            <p className="innerpages-help-description">
              Developing a great design is certainly a big aspect, however the beauty of integrating it properly with backend functions and ensuring its performance is a must. Our adroit Laravel developers do it with excellence. In view of this, we are known as the most coveted Laravel Development Company.
            </p>
          </div>
        </div>

        <div className="innerpages-services-section">
          <div className="innerpages-services-header">
            <h2 className="innerpages-services-title">Laravel Development Services</h2>
            <h3 className="innerpages-services-subtitle">
              <span className="innerpages-next-gen">Next-Gen</span> Laravel Development Beside <span className="professional">Professional Excellence</span>
            </h3>
          </div>

          <div className="innerpages-services-grid">
            {services.map((service) => (
              <div key={service.id} className="innerpages-service-card">
                <div className="innerpages-service-icon">
                  <div style={{ 
                    width: '48px', 
                    height: '48px', 
                    backgroundColor: '#7BE7EA', 
                    borderRadius: '4px',
                    opacity: 0.3
                  }}></div>
                </div>
                <h4 className="innerpages-service-title">{service.title}</h4>
                <div className="innerpages-service-line"></div>
              </div>
            ))}
          </div>

          <div className="innerpages-cta-section">
            <button className="innerpages-inquire-btn">
              Inquire Now
              <span className="innerpages-btn-arrow">→</span>
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="innerpages-container">
      <div className="innerpages-header">
        <h1 className="innerpages-main-title">Professional Laravel Development Company You Can Trust</h1>
        
        <div className="innerpages-help-section">
          <div className="innerpages-help-badge">
            <span className="innerpages-help-icon">✓</span>
            <span className="innerpages-help-text">We Help You Win</span>
          </div>
          <p className="innerpages-help-description">
            We break the norms with our guaranteed Laravel development services, embracing strong brand presence with feature-packed web applications.
          </p>
          <p className="innerpages-help-description">
            Developing a great design is certainly a big aspect, however the beauty of integrating it properly with backend functions and ensuring its performance is a must. Our adroit Laravel developers do it with excellence. In view of this, we are known as the most coveted Laravel Development Company.
          </p>
        </div>
      </div>

      <div className="innerpages-services-section">
        <div className="innerpages-services-header">
          <h2 className="innerpages-services-title">Laravel Development Services</h2>
          <h3 className="innerpages-services-subtitle">
            <span className="innerpages-next-gen">Next-Gen</span> Laravel Development Beside <span className="professional">Professional Excellence</span>
          </h3>
          </div>

        <div className="innerpages-services-grid">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div key={service.id} className="innerpages-service-card">
                <div className="innerpages-service-icon">
                  <IconComponent />
                </div>
                <h4 className="innerpages-service-title">{service.title}</h4>
                <p>{service.des}</p>
                <div className="innerpages-service-line"></div>
              </div>
            );
          })}
        </div>

        <div className="innerpages-cta-section">
          <button className="innerpages-inquire-btn">
            Inquire Now
            <span className="innerpages-btn-arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LaravelService;