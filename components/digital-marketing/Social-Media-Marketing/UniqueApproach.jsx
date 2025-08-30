// components/UniqueApproach.jsx
import React from 'react';
import './css/UniqueApproach.css'; // Import the global CSS file

const UniqueApproach = () => {
  return (
    <section className="unique-approach-section">
      <h1>Unique Approach To <span>Social Media</span></h1>
      <p>
        At FAJ IT Solutions, we combine creative storytelling, data-driven insights, and timely
        engagement to deliver a powerful social media strategy.
      </p>
      <p>
        Our approach builds a consistent brand voice, encourages meaningful interactions, and
        positions your business at the center of online conversations—driving growth and
        measurable results.
      </p>

      <div className="approach-pillars">
        <div className="pillar-card">
          <h2>Always On</h2>
          <p>
            We keep your brand top-of-mind with a steady flow of tailored social media content
            across the right platforms. By maintaining a clear and consistent brand voice, we ensure
            your message connects with the right audience. Our social media experts leverage
            platform-specific insights and proven strategies to maximize visibility and
            engagement.
          </p>
        </div>

        <div className="pillar-card">
          <h2>Reactive</h2>
          <p>
            Staying relevant is the key to stronger engagement. Our team builds tailored social
            media calendars that factor in important dates, seasonal shifts, and real-time trends to
            keep your brand in the spotlight. From industry cues like the weather—we ensure your content
            always feels timely and connected.
          </p>
        </div>

        <div className="pillar-card">
          <h2>Proactive</h2>
          <p>
            We act as a natural extension of your brand—actively connecting with potential customers
            and sparking meaningful conversations about your products and services. Our social
            media experts don't wait for engagement to happen; they maximize every platform's
            potential by seizing real-time opportunities with a people-first approach.
          </p>
        </div>
      </div>
    </section>
  );
};

export default UniqueApproach;