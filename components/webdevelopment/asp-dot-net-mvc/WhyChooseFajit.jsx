// components/WhyChooseTechWize.jsx
import './css/AspDotNetMvc.css';

const WhyChooseFajIt = () => {
  const features = [
    {
      id: 1,
      title: "Enable Tech Upgradations",
      position: "position-1"
    },
    {
      id: 2,
      title: "Enable Integrations & Migrations",
      position: "position-2"
    },
    {
      id: 3,
      title: "Sustain Data Security Measures",
      position: "position-3"
    },

    {
      id: 5,
      title: "On-time Project Delivery",
      position: "position-5"
    },
    {
      id: 6,
      title: "Develop Scalable .NET Apps",
      position: "position-6"
    },
    {
      id: 7,
      title: "Experienced ASP.NET Teams",
      position: "position-7"
    },
    {
      id: 8,
      title: "Excellent Customer Support",
      position: "position-8"
    },
    {
      id: 9,
      title: "Perform In-Depth QA & Testing",
      position: "position-9"
    },
  ];

  return (
    <section className="fajit-partner-section">
      <div className="why-main-container">
        <div className="why-content-header">
          <h2 className="why-main-heading">
            Why Choose Faj IT Solutions as an ASP.NET Development and Technology Partner?
          </h2>
          <p className="primary-description">
            We have a highly skilled and certified team of ASP.NET project development experts specializing in ASP.NET development services, ASP.NET migration services, and ASP.NET integration services.
          </p>
          <p className="secondary-description">
            Our technology teams even have proficiency in ASP.NET CMS development services and Custom .Net development services.
          </p>
        </div>

        <div className="why-features-diagram">
          <div className="why-central-logo">
            <div className="why-logo-container">
              <div className="why-logo-inner">
                <span className="why-brand-text">ASP.NET</span>
              </div>
            </div>
          </div>

          <div className="why-features-wrapper">
            {features.map((feature, index) => (
              <div key={feature.id} className={`service-feature service-${feature.position}`}>
                <div className="why-feature-badge">
                  <div className="why-badge-indicator"></div>
                  <span className="why-badge-label">{feature.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseFajIt;