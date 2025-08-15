import './css/WebServicesSection.css';
import Link from 'next/link';

const WebServicesSection = () => {
  const services = [
    {
      name: "Adobe Experience Manager Sitecore Development",
      link: "/services/adobe-experience-manager"
    },
    {
      name: "Sitecore Development",
      link: "/services/sitecore-development"
    },
    {
      name: "Episerver (Optimizely)",
      link: "/services/episerver-optimizely"
    },
    {
      name: "Ibexa DXP Development",
      link: "/services/ibexa-dxp"
    },
    {
      name: "Sharepoint Development",
      link: "/services/sharepoint-development"
    }
  ];

  return (
    <section className="services-section">
      <div className="background-grid"></div>
      <div className="floating-elements">
        <div className="floating-dot"></div>
        <div className="floating-dot"></div>
        <div className="floating-dot"></div>
      </div>
      
      <div className="container">
        <div className="section-content">
          <div className="left-content">
            <h1>
              <span>The Best Website</span>
              <span>& Web Application</span>
              <span>Development</span>
              <span>Company In Dubai</span>
            </h1>
          </div>

          <div className="right-content">
            <ul className="services-list">
              {services.map((service, index) => (
                <li key={index} className="service-item">
                  <Link href={service.link} className="service-link">
                    <h3>{service.name}</h3>
                    <div className="service-arrow"></div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebServicesSection;