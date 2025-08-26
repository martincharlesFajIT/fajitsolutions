// components/OurApproach.js
"use client";
import React from 'react';

import './css/OurApproach.css'

const OurApproach = () => {
  return (
    <section className="approach-section">
      <div className="approach-container">
        <h2 className="approach-title">Our Approach</h2>
        
        <div className="approach-cards">
          <div className="approach-card">
            <div className="card-icon">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M3 3v18h18" />
                <path d="m19 9-5 5-4-4-3 3" />
              </svg>
            </div>
            <h3 className="card-title">Understand your data & audience</h3>
            <p className="card-description">
              Gain deep insights into your digital performance to identify strengths, fix gaps, and explore new growth opportunities
            </p>
          </div>

          <div className="approach-card">
            <div className="card-icon">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 20h9" />
                <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
              </svg>
            </div>
            <h3 className="card-title">Bespoke Activation Plan</h3>
            <p className="card-description">
              Get a tailored strategy built around your goals. Together, we activate campaigns with full clarity and alignment
            </p>
          </div>

          <div className="approach-card">
            <div className="card-icon">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="3" />
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1 1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z" />
              </svg>
            </div>
            <h3 className="card-title">Data That Speaks to Your Goals</h3>
            <p className="card-description">
              We provide clear, actionable reports focused on metrics that matter most. From performance tracking to audience insights, drive data-driven decisions
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurApproach;