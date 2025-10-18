import React from 'react';
import '../../css/Webinnerpages.css';
import { GrUserExpert } from "react-icons/gr";
import { BiCustomize } from "react-icons/bi";
import { GrServices } from "react-icons/gr";
const GameChangeLaravel = () => {
  const features = [
    {
      id: 1,
      icon: (
        <GrUserExpert className='innerpages-gr-icon'/>
      ),
      title: "Flexibility to your needs",
      description: "With 10+ years of experience, we've expert over a decade refining the art of digital marketing. Our team focuses on crafting impactful results-driven campaigns that engage your target audiences and drive measurable business growth."
    },
    {
      id: 2,
      icon: (
       <BiCustomize className='innerpages-gr-icon' />
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
    <section className="innerpages-game-changer">
      <div className="innerpages-game-changer-container">
        <div className="innerpages-game-changer-section-header">
          <h2 className="innerpages-game-changer-section-title">
            A Game-Changing Framework
          </h2>
          <p className="innerpages-game-changersection-description">
            In today’s fast-paced digital world, static websites often fail to engage users. Laravel development brings your web ideas to life with dynamic features, interactive elements, and seamless performance that connect with your audience. Whether it’s building scalable applications, integrating complex functionalities, or enhancing user experience, Laravel-powered websites make your digital presence more engaging, reliable, and impactful.
          </p>
        </div>
        
        <div className="innerpages-game-changer-features-grid">
          {features.map((feature) => (
            <div key={feature.id} className="innerpages-game-changer-feature-card">
              <div className="innerpages-game-changer-feature-icon">
                {feature.icon}
              </div>
              <h3 className="innerpages-game-changer-feature-title">{feature.title}</h3>
              <p className="innerpages-game-changer-feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GameChangeLaravel;