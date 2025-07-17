"use client"
import React from 'react'

const HeroService = ({ 
  imageSrc = "/images/building.jpg",
  imageAlt = "Hero Image",
  badge = "Services",
  title = "Helping Brands to Grow with Digital Products and Solutions",
  highlightWords = ["Brands", "Digital"],
  showGlowEffects = true
}) => {

  const renderTitle = () => {
    let titleParts = title.split(' ');
    
    return titleParts.map((word, index) => {
      const cleanWord = word.replace(/[.,!?]/g, '');
      const punctuation = word.match(/[.,!?]/g) ? word.match(/[.,!?]/g)[0] : '';
      
      if (highlightWords.includes(cleanWord)) {
        return (
          <React.Fragment key={index}>
            <span className="gradient-text">{cleanWord}</span>{punctuation}{' '}
          </React.Fragment>
        );
      }
      return <React.Fragment key={index}>{word} </React.Fragment>;
    });
  };

  return (
    <>

      <div className="hero-section">
        <img className="hero-image" src={imageSrc} alt={imageAlt} />
 
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            {badge}
          </div>
          <h1 className="hero-title">
            {renderTitle()}
          </h1>
        </div>
      </div>

      {showGlowEffects && (
        <div className="main-content">
          <div className="glow-effect glow-large"></div>
          <div className="glow-effect glow-medium"></div>
          <div className="glow-effect glow-small"></div>
        </div>
      )}
    </>
  )
}

export default HeroService