import React from 'react';
import './css/ContentWriting.css'; // Import the dedicated CSS file

const ContentWriting = () => {
  return (
    <section className="content-writing-section">
      <div className="container">
        <h2 className="section-title">STAND-OUT CONTENT THAT FUELS GROWTH</h2>
        <p className="section-description">
          Quickly scale your company's ability to publish SEO-optimized content. Tap a team of expert
          writers, editors, and SEO pros for everything from strategy to topic creation to content
          production and publishing.
        </p>

        <div className="features-grid">
          <div className="feature-item feature-item-1">
            <div className="feature-number">1</div>
            <p className="feature-text">
              We help content professionals and marketing execs publish rank-worthy content. Scale is our
              speciality and we work fast.
            </p>
          </div>

          <div className="feature-item feature-item-2">
            <div className="feature-number">2</div>
            <p className="feature-text">
              Grow your sales funnel without growing your team. Every aspect of content marketing can be
              out<span className="nowrap">sourced to us.</span>
            </p>
          </div>

          <div className="feature-item feature-item-3">
            <div className="feature-number">3</div>
            <p className="feature-text">
              On-shore writer talent, scalability, and API integrations set us apart. Join thousands of
              businesses growing with FAJ IT Solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentWriting;