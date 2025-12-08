'use client';

import React from 'react';
import '../../home/css/PartnersRecognition.css';

const ShopifyPartner = () => {
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

  const topRowDuplicated = [...topRowPartners, ...topRowPartners];

  return (
    <section className="partners-section">
      <div className="partners-container">
        <div className="header-wrapper">
          <div className="title-wrapper">
            <div className="partners-dot"></div>
            <h2 className="partners-title">Trusted by the Top Brands</h2>
          </div>
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

      <div className="gradient-left"></div>
    </section>
  );
};

export default ShopifyPartner;