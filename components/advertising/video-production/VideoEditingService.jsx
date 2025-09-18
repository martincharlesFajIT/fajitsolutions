// components/VideoEditingServices.jsx
import './css/videoproduction.css';

const VideoEditingServices = () => {
  const services = [
    {
      id: 1,
      title: "Branding Project Development",
      icon: "📚",
      description: "Read More"
    },
    {
      id: 2,
      title: "Logos & GIF's Animations",
      icon: "🎬",
      description: "Read More"
    },
    {
      id: 3,
      title: "Commercial & Video Ads",
      icon: "🎯",
      description: "Read More"
    },
    {
      id: 4,
      title: "Infographic Design Product",
      icon: "📊",
      description: "Read More"
    }
  ];

  return (
    <section className="video-editing-services-section">
      <div className="editing-services-container">
        <div className="content-layout">
          <div className="header-content">
            <h2 className="main-service-title">
              High Quality Video
              <br />
              Editing Service
            </h2>
            
            <div className="description-content">
              <p className="service-description">
                Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                veniam, quis nostrud exercitation ullamco.
              </p>
              
              <p className="service-description">
                Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim 
                veniam.
              </p>
            </div>
          </div>
          
          <div className="services-columns">
            {services.map((service, index) => (
              <div key={service.id} className="service-column">
                <div className="service-item">
                  <div className="service-icon-wrapper">
                    <span className="service-icon">{service.icon}</span>
                  </div>
                  
                  <h3 className="service-name">{service.title}</h3>
                  
                  <div className="service-action">
                    <span className="read-more-link">{service.description}</span>
                  </div>
                </div>
                
                {index < services.length - 1 && (
                  <div className="column-divider"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoEditingServices;