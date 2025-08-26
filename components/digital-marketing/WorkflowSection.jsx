// components/WorkflowSection.js
"use client";
import React from 'react';
import './css/WorkflowSection.css'

const WorkflowSection = () => {
  return (
    <section className="workflow-section">
      <div className="workflow-container">
        <div className="workflow-intro">
          <p className="workflow-description">
            We follow a streamlined digital marketing workflow that transforms ideas into impactful campaigns. Beginning with 
            research and strategy, we design creative content, activate targeted campaigns, and continuously monitor performance. 
            With ongoing optimization, we drive measurable growth, higher engagement, and long-term brand success
          </p>
        </div>
        
        <div className="workflow-cards">
          <div className="workflow-card dark-card">
            <div className="card-icon">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                <polygon points="22,12 18,12 15,15 18,18 22,18 22,12" />
              </svg>
            </div>
            <h3 className="card-title">Proven Expertise</h3>
            <p className="card-description">
              With 10+ years of experience, we've spent over a decade refining the art of digital marketing. Our team focuses on building powerful, results-driven campaigns that strengthen brands, connect with audiences, and drive measurable business growth
            </p>
          </div>

          <div className="workflow-card bordered-card">
            <div className="card-icon">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="3" />
                <circle cx="12" cy="3" r="1" />
                <circle cx="12" cy="21" r="1" />
                <circle cx="4.22" cy="10.22" r="1" />
                <circle cx="19.78" cy="13.78" r="1" />
                <circle cx="10.22" cy="19.78" r="1" />
                <circle cx="13.78" cy="4.22" r="1" />
                <circle cx="4.22" cy="13.78" r="1" />
                <circle cx="19.78" cy="10.22" r="1" />
              </svg>
            </div>
            <h3 className="card-title">Customize Solutions</h3>
            <p className="card-description">
              We don't believe in one-size-fits-all strategies. Our team designs customized digital marketing solutions that fit your unique goals, and audience. From boosting brand visibility to driving long-term growth, every campaign is built to deliver measurable impact
            </p>
          </div>

          <div className="workflow-card bordered-card">
            <div className="card-icon">
              <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="8" r="6" />
                <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
              </svg>
            </div>
            <h3 className="card-title">End-to-End Services</h3>
            <p className="card-description">
              From initial strategy and creative design to execution, monitoring, and optimization, we provide complete digital marketing solutions under one roof. Our end-to-end services ensure consistency, and measurable results at every stage of your growth journey
            </p>
          </div>
        </div>
        
        <div className="activate-windows">
          <span>Activate Windows</span>
        </div>
      </div>
    </section>
  );
};

export default WorkflowSection;