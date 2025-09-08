// components/CoreTechnologies.js
import React from 'react';
import './css/ArtificialIntelligence.css'; 

const AiCoreTechnologies = () => {
  const technologies = [
    {
      id: 1,
      icon: "🧠",
      title: "Machine Learning",
      description: "Advanced algorithms for predictive analytics and pattern recognition"
    },
    {
      id: 2,
      icon: "🔗",
      title: "Deep Learning",
      description: "Neural networks for complex data processing and automation"
    },
    {
      id: 3,
      icon: "💬",
      title: "NLP",
      description: "Natural Language Processing for text analysis and understanding"
    },
    {
      id: 4,
      icon: "📊",
      title: "Data Science",
      description: "Statistical analysis and data-driven insights for business decisions"
    },
    {
      id: 5,
      icon: "👁️",
      title: "Computer Vision",
      description: "Image and video analysis for automated visual recognition"
    }
  ];

  return (
    <section className="core-technologies-section">
      {/* Core Technologies Section */}
      <div className="technologies-container">
        <div className="technologies-header">
          <h2 className="technologies-title">
            Core Technologies That Power Our
            <br />
            AI Enterprise Solutions
          </h2>
          <p className="technologies-subtitle">
            Our AI solutions are built on a foundation of robust technologies that drive automation 
            and innovation. We combine complexity with precision to meet enterprise-scale demands.
          </p>
        </div>

        <div className="technologies-grid">
          {technologies.map((tech) => (
            <div key={tech.id} className="technology-card">
              <div className="tech-icon-wrapper">
                <div className="tech-icon">
                  <span className="tech-emoji">{tech.icon}</span>
                </div>
              </div>
              <h3 className="tech-title">{tech.title}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="cta-section">
        <div className="cta-container">
          <h3 className="cta-question">Have a Project To Discuss?</h3>
          <h2 className="cta-answer">We're ready!</h2>
          <button className="cta-button">
            LET'S CONNECT
          </button>
        </div>
      </div>
    </section>
  );
};

export default AiCoreTechnologies;