// components/WhyAIDeserves.js
import React from 'react';
import './css/ArtificialIntelligence.css';

const AiOurValue = () => {
  return (
    <section className="why-ai-deserves-section">
      <div className="aisection-header">
        <h2 className="aisection-title">
          Your Business Deserves AI
          <span className="animated-line-small"></span>
        </h2>
        <h3 className="aisection-subtitle">That Works Smarter</h3>
        <p className="aisection-description">
          Generic AI offers limited solutions, but your business needs more than standard
          automation. With tailored AI integration, we design intelligent systems that adapt
          to your unique goals, streamline operations, and deliver measurable results. Our
          approach ensures that AI works for your business not the other way around.
        </p>
      </div>

      <div className="aicards-container">
        {/* Core Challenges Card */}
        <div className="aicard challenges-card">
          <h4 className="aicard-title">Core Challenges</h4>
          <ul className="card-list">
            <li>Wasting valuable hours on repetitive, manual tasks</li>
            <li>Holding vast amounts of data without turning it into useful insights</li>
            <li>Unsure how to begin with AI or what solutions are practical</li>
            <li>Spending on AI tools that fail to deliver results or ROI</li>
            <li>Facing worries around data security, compliance, and ethical use of AI</li>
          </ul>
        </div>

        {/* Our Value to Your Business Card */}
        <div className="aicard aivalue-card">
          <h4 className="aicard-title">Our Value to Your Business</h4>
          <ul className="aicard-list value-list">
            <li>
              <strong>Clear AI Roadmaps:</strong> We guide you in choosing the right use cases
              and building an AI strategy that delivers measurable business impact
            </li>
            <li>
              <strong>Tailored Model Development:</strong> From design to deployment, we
              create AI models built for your unique needs and scalable for future growth
            </li>
            <li>
              <strong>Data You Can Trust:</strong> We set up strong data pipelines and MLOps
              practices to keep your systems reliable, accurate, and improving over time
            </li>
            <li>
              <strong>Responsible AI Practices:</strong> Every solution is designed with
              transparency, compliance, and ethical standards at its core
            </li>
            <li>
              <strong>You Stay in Control:</strong> All code, data, and models belong to you
              ensuring full ownership without hidden dependencies
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default AiOurValue;