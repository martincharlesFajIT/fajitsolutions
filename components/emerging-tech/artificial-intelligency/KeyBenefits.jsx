// components/KeyBenefits.jsx
import React from 'react';
import './css/ArtificialIntelligence.css';

const KeyBenefits = () => {
  const benefits = [
    {
      id: 1,
      icon: "⚙️",
      title: "Operational Efficiency",
      description: "AI enhances competitive business environments by automating tasks, optimizing processes, and improving decision-making. This allows your team to focus on strategic initiatives that drive growth and innovation."
    },
    {
      id: 2,
      icon: "💰",
      title: "Reduced Costs",
      description: "Achieving efficiency while controlling expenses is a major business priority. AI optimizes resource allocation, reduces manual labor costs, and minimizes operational waste through intelligent process automation."
    },
    {
      id: 3,
      icon: "👥",
      title: "Empower Your Team To Creative Innovation",
      description: "Empower your team with AI solutions that automate routine tasks and streamline operations, by freeing up time for strategic thinking and creative problem-solving, your workforce becomes more innovative and productive."
    },
    {
      id: 4,
      icon: "🧠",
      title: "Enhanced Decision-Making",
      description: "AI processes complex data at speed, providing real-time insights and predictive analytics. This gives your leadership team the information they need to make data-driven decisions with confidence and capitalize on new opportunities with precision."
    },
    {
      id: 5,
      icon: "🔮",
      title: "Ensure Your Business Is Future-Ready",
      description: "Integrating AI into your business strategy positions you for long-term success. As technology evolves, having AI systems in place ensures your company can adapt quickly to market changes and stay competitive."
    },
    {
      id: 6,
      icon: "📈",
      title: "Scalability",
      description: "AI processes complex data at speed, providing real-time insights and predictive analytics. This gives your leadership team the information they need to make data-driven decisions with confidence and capitalize on new opportunities with precision."
    }
  ];

  return (
    <section className="key-benefits-section">
      <div className="benefits-container">
        <div className="benefits-header">
          <h2 className="benefits-title">
            Key Benefits Of Artificial Intelligence
          </h2>
          <p className="benefits-subtitle">
            Artificial Intelligence can transform your business, driving innovation, efficiency, and growth. Here are the key ways AI can benefit your organization, enhancing your competitive advantage and creating lasting value in today's digital landscape.
          </p>
        </div>

        <div className="benefits-grid">
          {benefits.map((benefit) => (
            <div key={benefit.id} className="benefit-card">
              <div className="benefit-icon">
                <span className="icon">{benefit.icon}</span>
              </div>
              <div className="benefit-content">
                <h3 className="benefit-title">{benefit.title}</h3>
                <p className="benefit-description">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyBenefits;