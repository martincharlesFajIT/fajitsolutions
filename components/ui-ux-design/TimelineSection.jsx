import React from 'react'
import './css/TimelineSection.css'

const TimelineSection = () => {
  const timelineSteps = [
    {
      id: 1,
      stepNumber: "STEP 1",
      title: "Design Brief",
      description: "The design brief starts with a product scope – either created by us or provided by you with all the user stories, UX personas or list of features and stakeholder analysis.",
      buttonText: "See Product Scope",
      position: "left"
    },
    {
      id: 2,
      stepNumber: "STEP 2",
      title: "Key Screens",
      description: "We start by creating the most important screens for your product. This allows you to see exactly how your product will look and then approve the design.",
      buttonText: "View Key Screens",
      position: "right"
    },
    {
      id: 3,
      stepNumber: "STEP 3",
      title: "Complete Design",
      description: "After approval of key screens, we create the complete design system with all screens, components, and interactions for your product.",
      buttonText: "See Full Design",
      position: "left"
    }
  ]

  return (
    <section className="timeline-section">
      <div className="timeline-container">
        {/* Header */}
        <div className="timeline-header">
          <h2 className="timeline-title">
            How It <span className="timeline-title-underlined">Works</span>
          </h2>
        </div>

        {/* Timeline Wrapper */}
        <div className="timeline-wrapper">
          {/* Timeline Line */}
          <div className="timeline-line"></div>

          {/* Timeline Steps */}
          {timelineSteps.map((step) => (
            <div key={step.id} className={`timeline-step ${step.position}`}>
              {/* Timeline Dot */}
              <div className="timeline-dot"></div>

              {/* Content Card */}
              <div className="timeline-card">
                {/* Arrow pointing to timeline */}
                <div className={`card-arrow ${step.position}`}></div>

                <div className="step-number">
                  {step.stepNumber}
                </div>

                <h3 className="steps-title">
                  {step.title}
                </h3>

                <p className="steps-description">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TimelineSection