// LaravelServices.jsx
import './css/LaravelServices.css';
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

const LaravelServices = () => {
  const services = [
    {
      id: 1,
      title: "Laravel Mobile App Development",
      icon: FaMobile
    },
    {
      id: 2,
      title: "Laravel E-commerce Development",
      icon: FaShoppingCart
    },
    {
      id: 3,
      title: "Maintenance and Support",
      icon: FaHeadset
    },
    {
      id: 4,
      title: "Customized Laravel Development Services",
      icon: FaCogs
    },
    {
      id: 5,
      title: "Laravel Enterprise Solutions",
      icon: FaBuilding
    },
    {
      id: 6,
      title: "Laravel Extension Development",
      icon: FaCode
    },
    {
      id: 7,
      title: "Laravel Consulting & Strategy",
      icon: FaChartLine
    },
    {
      id: 8,
      title: "Website Migration Using Laravel",
      icon: FaExchangeAlt
    }
  ];

  return (
    <div className="laravel-container">
      <div className="laravel-header">
        <h1 className="main-title">Professional Laravel Development Company You Can Trust</h1>
        
        <div className="help-section">
          <div className="help-badge">
            <span className="help-icon">✓</span>
            <span className="help-text">We Help You Win</span>
          </div>
          <p className="help-description">
            We break the norms with our guaranteed Laravel development services, embracing strong brand presence with feature-packed web applications.
          </p>
          <p className="help-description">
            Developing a great design is certainly a big aspect, however the beauty of integrating it properly with backend functions and ensuring its performance is a must. Our adroit Laravel developers do it with excellence. In view of this, we are known as the most coveted Laravel Development Company.
          </p>
        </div>
      </div>

      <div className="services-section">
        <div className="services-header">
          <h2 className="services-title">Laravel Development Services</h2>
          <h3 className="services-subtitle">
            <span className="next-gen">Next-Gen</span> Laravel Development Beside <span className="professional">Professional Excellence</span>
          </h3>
        </div>

        <div className="services-grid">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div key={service.id} className="service-card">
                <div className="service-icon">
                  <IconComponent />
                </div>
                <h4 className="service-title">{service.title}</h4>
                <div className="service-line"></div>
              </div>
            );
          })}
        </div>

        <div className="cta-section">
          <button className="inquire-btn">
            Inquire Now
            <span className="btn-arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LaravelServices;