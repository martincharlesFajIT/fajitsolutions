// components/VideoServicesGrid.jsx
import './css/videoproduction.css';

const VideoServicesGrid = () => {
  const services = [
    {
      id: 1,
      title: "Product Videos",
      icon: "📹"
    },
    {
      id: 2,
      title: "Animation Service",
      icon: "🎨"
    },
    {
      id: 3,
      title: "Video Editing",
      icon: "✂️"
    },
    {
      id: 4,
      title: "Live Streaming",
      icon: "📡"
    },
    {
      id: 5,
      title: "Video Marketing",
      icon: "📊"
    }
  ];

  return (
    <section className="video-services-grid-section">
      <div className="services-grid-container">
        <h2 className="services-grid-title">
          Services We Provide in Video Production
        </h2>
        
        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-card">
              <div className="service-icon">
                <span className="icon-placeholder">{service.icon}</span>
              </div>
              <h3 className="service-title">{service.title}</h3>
            </div>
          ))}
        </div>
      </div>
      
      {/* Grid Background Pattern */}
      <div className="grid-background">
        {Array.from({ length: 100 }, (_, i) => (
          <div key={i} className="grid-cell"></div>
        ))}
      </div>
    </section>
  );
};

export default VideoServicesGrid;