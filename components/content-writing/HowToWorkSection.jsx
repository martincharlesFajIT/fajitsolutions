import React from 'react';
import './css/HowToWorkSection.css'; // Import the dedicated CSS file

const HowToWorkSection = () => {
  return (
    <section className="how-to-work-section">
      <div className="container">
        <h2 className="section-title">HOW TO WORK WITH US</h2>

        <div className="steps-grid">
          {/* Step 1 */}
          <div className="step-item">
            <div className="step-number">01</div>
            <h3 className="step-heading">INTRO CALL</h3>
            <p className="step-description">
              After the usual "Can you hear me?", we'll ask questions like, "How much
              content do you need? What's your timeline? Any other requirements?"
            </p>
          </div>

          {/* Step 2 */}
          <div className="step-item">
            <div className="step-number">02</div>
            <h3 className="step-heading">SCOPING</h3>
            <p className="step-description">
              We'll hash out fun details like tech requirements, writer expectations,
              and provide 2-3 samples to make sure we can deliver for you.
            </p>
          </div>

          {/* Step 3 */}
          <div className="step-item">
            <div className="step-number">03</div>
            <h3 className="step-heading">2-3 MONTH PILOT</h3>
            <p className="step-description">
              Receive small batches of content that we calibrate based on your
              feedback. Your account manager will handle writers and deadlines.
            </p>
          </div>

          {/* Step 4 */}
          <div className="step-item">
            <div className="step-number">04</div>
            <h3 className="step-heading">SCALE</h3>
            <p className="step-description">
              Send briefs or requests in bulk; we'll turn your orders around on a set
              cadence. We'll continue to ask for feedback to ensure you're happy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToWorkSection;