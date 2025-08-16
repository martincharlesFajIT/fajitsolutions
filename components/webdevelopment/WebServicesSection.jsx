import './css/WebServicesSection.css';
import Link from 'next/link';

const WebServicesSection = () => {
  const services = [
    {
      name: "Laravel Development",
      link: "/laravel-development"
    },
    {
      name: "Node JS Deevelopment",
      link: "/node-js-development"
    },
    {
      name: "Django(Python) Development",
      link: "/django-development"
    },
    {
      name: "PHP Development",
      link: "/php-development"
    },
    {
      name: "WordPress Design/Development",
      link: "/wordpress-development"
    },
    {
      name: "Angular Development",
      link: "/angular-development"
    },
    {
      name: "CMS Development",
      link: "/cms-development"
    },
    {
      name: "Drupal Development",
      link: "/drupal-development"
    },
    {
      name: "Enterprise Development",
      link: "/enterprise-development"
    },
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