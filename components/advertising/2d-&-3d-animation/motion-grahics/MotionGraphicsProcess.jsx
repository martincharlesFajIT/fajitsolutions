// components/MotionGraphicsProcess.jsx
"use client";

import { useState } from 'react';
import './css/MotionGraphics.css'

const MotionGraphicsProcess = () => {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      number: 1,
      title: "Concept & Briefing",
      description: "We start by understanding your brand, goals, and message. A creative brief is prepared to align ideas with your vision."
    },
    {
      number: 2,
      title: "Script & Storyboard",
      description: "Our team develops an engaging script and storyboard that outline the flow, visuals, and key messages."
    },
    {
      number: 3,
      title: "Design & Animation",
      description: "We design custom graphics, illustrations, and bring them to life with smooth animations and transitions."
    },
    {
      number: 4,
      title: "Delivery & Revisions",
      description: "The final video is delivered in your required format, with revisions included to ensure perfection."
    }
  ];

  const handleStepHover = (stepIndex) => {
    setActiveStep(stepIndex);
  };

  const handleStepLeave = () => {
    setActiveStep(0);
  };

  return (
    <div className="mg-process-container">
      <div className="process-wrapper">
        {/* Header */}
        <div className="process-header">
          <h2 className="process-title">How Our Motion Graphics Work</h2>
          <div className="title-underline"></div>
        </div>

        {/* Process Steps */}
        <div className="process-steps">
          {/* Connection Line */}
          <div className="connection-line"></div>
          {/* Animated Progress Line */}
          <div 
            className="progress-line" 
            style={{ 
              width: `${(activeStep) * 25 + 12.5}%` 
            }}
          ></div>
          
          {processSteps.map((step, index) => (
            <div 
              key={step.number} 
              className="process-step"
              onMouseEnter={() => handleStepHover(index)}
              onMouseLeave={handleStepLeave}
            >
              <div className="step-circle">
                <span className="step-number">{step.number}</span>
              </div>
              <div className="step-content">
                <h3 className="step-title">{step.title}</h3>
                <p className="step-description">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MotionGraphicsProcess;