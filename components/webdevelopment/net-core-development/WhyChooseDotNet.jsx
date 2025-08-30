// WhyChooseFAJ IT Solutions.jsx
import './css/WhyChooseDotNet.css';

const WhyChooseDotNet = () => {
  const reasons = [
    {
      id: 1,
      title: "Expert .NET Development Team",
      description: "Our dedicated team of .NET Core development for hire are specialized in providing feature-rich .NET development solutions for various businesses. Our bespoke ASP.NET software development solutions are tailored to provide high performance by applying cutting-edge technologies and industry-standard practices."
    },
    {
      id: 2,
      title: "Personalized.NET Development Services",
      description: "We are aware that every company has unique difficulties and objectives. For this reason, we provide bespoke .NET development services that are tailored to your requirements. Our approach to development is adaptable and scalable, so as your company expands, your software can too, allowing for quicker iterations and MVP releases."
    },
    {
      id: 3,
      title: "Agile and Open-Source Development",
      description: "Our standard aligns the software development process at FAJ IT Solutions. It defines high efficiency and scalability. Throughout the whole project execution, our dedicated .NET team maintains open-door communication in close work collaboration with esteemed clients. We ensure that the ongoing .NET application development project is accessible and visible to suggest any required modifications with ongoing regular updates and standard project milestones."
    },
    {
      id: 4,
      title: "Timely Delivery",
      description: "We place a high priority on meeting deadlines and following a planned schedule that ensures timely delivery without compromising quality. We guarantee on-time delivery of our .NET Services, which means your business activities will function efficiently."
    },
    {
      id: 5,
      title: "Complete Development of ASP.NET Core",
      description: "FAJ IT Solutions offers complete .NET Core application development services from design to implementation. Our comprehensive approach guarantees that your application is designed to satisfy present requirements as well as future ones, providing you with a scalable, long-term solution."
    }
  ];

  return (
    <div className="why-choose-container">
      <div className="why-choose-content">
        <h2 className="main-title">Why Choose FAJ IT Solutions for Laravel Development Services?</h2>
        
        <div className="reasons-list">
          {reasons.map((reason) => (
            <div key={reason.id} className="reason-item">
              <div className="reason-header">
                <span className="reason-bullet">•</span>
                <h3 className="reason-title">{reason.title}</h3>
              </div>
              <p className="reason-description">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className="cta-section">
          <button className="share-requirements-btn">
            Share Your Requirements
            <span className="btn-arrow">→</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseDotNet;