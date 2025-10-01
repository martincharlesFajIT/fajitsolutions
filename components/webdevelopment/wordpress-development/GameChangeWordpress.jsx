import React from 'react';
import './css/wordpressdev.css';
import { GrUserExpert } from "react-icons/gr";
import { BiCustomize } from "react-icons/bi";
import { GrServices } from "react-icons/gr";
const GameChangeWordpress = () => {
  const features = [
    {
      id: 1,
      icon: (
        <GrUserExpert className='gr-icon'/>
      ),
      title: "Flexibility to your needs",
      description: "With 10+ years of experience, we've expert over a decade refining the art of digital marketing. Our team focuses on crafting impactful results-driven campaigns that engage your target audiences and drive measurable business growth."
    },
    {
      id: 2,
      icon: (
       <BiCustomize className='gr-icon' />
      ),
      title: "Scaleable for Growth",
      description: "We don't believe in one-size-fits-all approach. Our team designs customized digital marketing solutions that fit your unique goals and audience. From strategic planning to execution, every term growth, every campaign is built to deliver measurable ROI."
    },
    {
      id: 3,
      icon: (
        <GrServices className='gr-icon' />
      ),
      title: "Enhanced Performance",
      description: "From initial strategy and creative design to execution, monitoring and optimization, we provide complete digital marketing solutions under one roof. Experience seamless project consultancy, and measurable results at every stage of your project."
    }
  ];

  return (
    <section className="game-changer">
      <div className="game-changer-container">
        <div className="game-changer-section-header">
          <h2 className="game-changer-section-title">
            A Game-Changing Framework
          </h2>
          <p className="game-changer-section-description">
            In today’s fast-paced digital world, static websites often fail to engage users. Laravel development brings your web ideas to life with dynamic features, interactive elements, and seamless performance that connect with your audience. Whether it’s building scalable applications, integrating complex functionalities, or enhancing user experience, Laravel-powered websites make your digital presence more engaging, reliable, and impactful.
          </p>
        </div>
        
        <div className="game-changer-features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="game-changer-feature-card">
              <div className="game-changer-feature-icon">
                {feature.icon}
              </div>
              <h3 className="game-changer-feature-title">{feature.title}</h3>
              <p className="game-changer-feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameChangeWordpress;