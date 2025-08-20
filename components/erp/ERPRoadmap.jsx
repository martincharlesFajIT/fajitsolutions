import React from 'react';
import './css/ERPRoadmap.css';
import { FaArrowRight, FaCheck } from 'react-icons/fa';

const ERPRoadmap = () => {
  const roadmapSteps = [
    {
      id: 1,
      step: "1",
      title: "Analysis",
      description: "To ensure the successful implementation of ERP software, our ERP consultants start with an in-depth analysis of your business functions, workflows, and technology environment, including current and strategic business plans, and user roles and requirements to define requirements for the initial stage."
    },
    {
      id: 2,
      step: "2", 
      title: "Design & technology selection",
      description: "Based on the detailed requirements, the solution team implements the ERP solution best design for architecture, defines an integration scope and assists with choosing the best ERP software and technology stack."
    },
    {
      id: 3,
      step: "3",
      title: "Planning",
      description: "After defining the initial scope of the ERP system with the stakeholders, our expert team outlines project timeframes and budget deliverables at every essential step, detailed resources, and a risk management strategy."
    },
    {
      id: 4,
      step: "4",
      title: "Customization/Development", 
      description: "Following the DevOps approach, our team builds tailored ERP software or configures/customizes an existing or off-the-shelf ERP suite. After that, our specialists integrate the platform with other business applications."
    },
    {
      id: 5,
      step: "5",
      title: "Testing",
      description: "Our QA engineers perform rigorous testing to ensure the solution meets both functional and non-functional requirements and operates without system malfunctions, UX/UI bugs, and data integrity issues."
    },
    {
      id: 6,
      step: "6",
      title: "Deployment",
      description: "Our ERP team deploys a new ERP system to production and performs data migration from corporate systems and apps to the new business management software."
    },
    {
      id: 7,
      step: "7",
      title: "Go-live",
      description: "Our ERP consultants carry out user acceptance training, UAT testing to validate any technical circumstances as well as conduct user training and onboarding to drive change management and increase ERP adoption."
    },
    {
      id: 8,
      step: "8",
      title: "Post-launch support",
      description: "Once the ERP solution is rolled out, our ERP support specialists fine-tune the system, manage performance issues and troubleshoot bugs if any, and perform security and system updates on request."
    }
  ];

  return (
    <div className="erp-roadmap-section">
      <div className="roadmap-container">
        <div className="roadmap-header">
          <h2 className="roadmap-title">Our ERP implementation roadmap</h2>
          <div className="title-arrow">
            <FaArrowRight />
          </div>
        </div>
        
        <div className="timeline-container">
          <div className="timeline-line"></div>
          {roadmapSteps.map((step, index) => (
            <div key={step.id} className={`timeline-step ${index % 2 === 0 ? 'left' : 'right'}`}>
              <div className="timeline-connector">
                <div className="timeline-dot">
                  <span className="step-number">{step.step}</span>
                </div>
              </div>
              <div className="timeline-card">
                <div className="card-header">
                  <h3 className="step-title">{step.title}</h3>
                  <div className="step-icon">
                    <FaCheck />
                  </div>
                </div>
                <div className="step-description">
                  {step.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ERPRoadmap;