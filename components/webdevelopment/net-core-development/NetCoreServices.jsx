// LaravelServices.jsx
import './css/NetCoreServices.css';
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

const NetCoreServices = () => {
  const services = [
    {
      id: 1,
      title: "Custom .NET Core Application Development",
      icon: FaMobile
    },
    {
      id: 2,
      title: "ASP.NET Core Third-Party Integration",
      icon: FaShoppingCart
    },
    {
      id: 3,
      title: ".NET Core MVC System Development",
      icon: FaHeadset
    },
    {
      id: 4,
      title: "Application Maintenance & Support",
      icon: FaCogs
    },
    {
      id: 5,
      title: "Third Party .Net Core Customization",
      icon: FaBuilding
    },
    {
      id: 6,
      title: "ASP.NET Core Migration",
      icon: FaCode
    },
    {
      id: 7,
      title: ".NET Core Enterprise Development",
      icon: FaChartLine
    },
    {
      id: 8,
      title: ".NET Core Consulting",
      icon: FaExchangeAlt
    }
  ];

  return (
    <div className="laravel-container">
      <div className="laravel-header">
        <h1 className="main-title">ASP.NET Core Development Services</h1>
        
        <div className="help-section">
          <div className="help-badge">
            <span className="help-icon">✓</span>
            <span className="help-text">We Help You Win</span>
          </div>
          <p className="help-description">
            Empowering Innovation with Premier .NET Core Development Services
          </p>
          <p className="help-description">
            Developing a great design is certainly a big aspect, however the beauty of integrating it properly with backend functions and ensuring its performance is a must. Our adroit Laravel developers do it with excellence. In view of this, we are known as the most coveted Laravel Development Company.
          </p>
        </div>
      </div>

      <div className="services-section">
        <div className="services-header">
          <h2 className="services-title">ASP.NET Core Development Services</h2>
          <h3 className="services-subtitle">
            <span className="next-gen">.NET Core</span> Empowering Innovation with Premier <span className="professional">Professional Excellence</span>
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

export default NetCoreServices;