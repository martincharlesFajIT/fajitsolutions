'use client';

import React from 'react';
import './css/PartnersRecognition.css';
import ShinyText from '../ShinyText';

const PartnersRecognition = () => {
  const topRowPartners = [
    { name: 'Meta Business Partner', logo: '/images/partnericons/facebook-meta-business-partner.avif' },
    { name: 'Zendesk', logo: '/images/partnericons/zendesk.avif' },
    { name: 'Inc 5000', logo: '/images/partnericons/inc5000.avif' },
    { name: 'Google Partner', logo: '/images/partnericons/google-partner.avif' },
    { name: 'CNBC', logo: '/images/partnericons/cnbc.avif' },
    { name: 'Clutch', logo: '/images/partnericons/clutch.avif' },
    { name: 'Marketing Partners', logo: '/images/partnericons/snapchat-marketing-partner.avif' },
    { name: 'Forbes', logo: '/images/partnericons/forbes.avif' },
  ];

  const bottomRowPartners = [
    { name: 'preffered', logo: '/images/partnericons/preferred.avif' },
    { name: 'Snapchat', logo: '/images/partnericons/facebook-marketing-partners.avif' },
    { name: 'Tiktok Partner', logo: '/images/partnericons/tiktok-marketing-partner.avif' },
    { name: 'NPR', logo: '/images/partnericons/npr.avif' },
    { name: 'Microsoft', logo: '/images/partnericons/microsoft-advertising-select-partner.avif' },
    { name: 'HubSpot Partner', logo: '/images/partnericons/hubspot.avif' },
  ];

  const topRowDuplicated = [...topRowPartners, ...topRowPartners];
  const bottomRowDuplicated = [...bottomRowPartners, ...bottomRowPartners];

  return (
    <section className="partners-section">
      <div className="partners-container">
        <div className="header-wrapper">
          <div className="title-wrapper">
            <div className="partners-dot"></div>
            <h2 className="partners-title">Partners & Recognition</h2>
          </div>
          <ShinyText
            text="Trusted by leading brands and recognized for excellence in digital innovation"
            disabled={false}
            speed={3}
            className='custom-class'
          />
        </div>
      </div>

      <div className="scroll-container">
        <div className="partners-row scroll-left">
          {topRowDuplicated.map((partner, index) => (
            <div key={`top-${index}`} className="partner-card">
              <img
                src={partner.logo}
                alt={partner.name}
                className="partner-logo"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="scroll-container">
        <div className="partners-row scroll-right">
          {bottomRowDuplicated.map((partner, index) => (
            <div key={`bottom-${index}`} className="partner-card">
              <img
                src={partner.logo}
                alt={partner.name}
                className="partner-logo"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="gradient-left"></div>
      <div className="gradient-right"></div>
    </section>
  );
};

export default PartnersRecognition;