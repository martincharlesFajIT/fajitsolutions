// WhyChooseFAJ IT Solutions.jsx
import './css/WhyChooseLaravel.css';

const WhyChooseLaravel = () => {
  const reasons = [
    {
      id: 1,
      title: "Skilled Laravel Development Team",
      description: "Our skilled team of developers at FAJ IT Solutions is committed to providing Laravel website development services that are specifically tailored to your company's requirements. Whether developing a large-scale enterprise platform or a dynamic online application, our proficiency with PHP, LAMP architecture, and API integration guarantees that your project is executed precisely."
    },
    {
      id: 2,
      title: "Flexible Engagement Options",
      description: "We are aware that each project has a unique set of specifications and financial constraints. We provide a range of interaction models to meet your specific requirements. To ensure you get the most out of your Laravel development services, FAJ IT Solutions, a Laravel development company in the USA offers customizable choices for both short- and long-term support."
    },
    {
      id: 3,
      title: "Client-Centered Development Methodology",
      description: "The foundation of our process is communication. Whether you prefer daily, weekly, or monthly updates, we provide you with regular information to keep you updated at every stage. This methodology guarantees consistency between your vision and the progress."
    },
    {
      id: 4,
      title: "Online Project Management",
      description: "Every project with FAJ IT Solutions includes a professional project manager at no additional cost. This individual manages the entire Laravel framework development, making sure that all deadlines are met and your Laravel project remains on course."
    },
    {
      id: 5,
      title: "High-quality, affordable solutions",
      description: "We take great satisfaction in providing high-caliber, reasonably priced Laravel web development services. We guarantee reasonable prices without sacrificing quality thanks to our open pricing procedure. To ensure that you receive the best return on your investment, we collaborate closely with you to provide the finest option within your financial constraints."
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

export default WhyChooseLaravel;