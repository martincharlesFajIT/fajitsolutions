'use client';

import React from 'react';

const PartnersRecognition = () => {
  const topRowPartners = [
    { name: 'Meta Business Partner', logo: '/images/partners/meta.png' },
    { name: 'Zendesk', logo: '/images/partners/zendesk.png' },
    { name: 'Inc 5000', logo: '/images/partners/inc5000.png' },
    { name: 'Google Partner', logo: '/images/partners/google-partner.png' },
    { name: 'CNBC', logo: '/images/partners/cnbc.png' },
    { name: 'Clutch', logo: '/images/partners/clutch.png' },
    { name: 'Marketing Partners', logo: '/images/partners/marketing-partners.png' },
    { name: 'Forbes', logo: '/images/partners/forbes.png' },
  ];

  const bottomRowPartners = [
    { name: 'Award 1', logo: '/images/partners/excellence-award.png' },
    { name: 'Snapchat', logo: '/images/partners/snapchat.png' },
    { name: 'Search Awards', logo: '/images/partners/search-awards.png' },
    { name: 'Digital Awards', logo: '/images/partners/digital-awards.png' },
    { name: 'MENA Search Awards', logo: '/images/partners/mena-awards.png' },
    { name: 'Search Awards Winner', logo: '/images/partners/search-winner.png' },
    { name: 'Best Agency', logo: '/images/partners/best-agency.png' },
    { name: 'HubSpot Partner', logo: '/images/partners/hubspot.png' },
  ];

  const topRowDuplicated = [...topRowPartners, ...topRowPartners];
  const bottomRowDuplicated = [...bottomRowPartners, ...bottomRowPartners];

  return (
    <section className="partners-section">
      <style jsx>{`
        .partners-section {
          width: 100%;
          background-color: #000;
          padding: 64px 0;
          overflow: hidden;
          position: relative;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 20px;
          margin-bottom: 48px;
        }

        .header-wrapper {
          text-align: center;
        }

        .title-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          margin-bottom: 16px;
        }

        .dot {
          width: 8px;
          height: 8px;
          background-color: #8b5cf6;
          border-radius: 50%;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.2);
          }
        }

        .section-title {
          font-size: 36px;
          font-weight: bold;
          color: white;
          margin: 0;
        }

        .section-subtitle {
          color: #9ca3af;
          max-width: 600px;
          margin: 0 auto;
          font-size: 16px;
          line-height: 1.6;
        }

        .scroll-container {
          position: relative;
          margin-bottom: 32px;
        }

        .partners-row {
          display: flex;
          gap: 24px;
        }

        .scroll-left {
          animation: scrollLeft 30s linear infinite;
        }

        .scroll-right {
          animation: scrollRight 30s linear infinite;
        }

        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .partner-card {
          min-width: 200px;
          height: 120px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 16px;
          padding: 24px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 12px;
          cursor: pointer;
          transition: all 0.3s ease;
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
        }

        .partner-card:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: scale(1.05);
          border-color: rgba(139, 92, 246, 0.5);
          box-shadow: 0 0 20px rgba(139, 92, 246, 0.3);
        }

        .partner-logo {
          width: 80px;
          height: 40px;
          object-fit: contain;
          filter: brightness(0) invert(1);
          transition: filter 0.3s ease;
        }

        .partner-card:hover .partner-logo {
          filter: brightness(1) invert(0);
        }

        .partner-name {
          color: white;
          font-size: 14px;
          font-weight: 500;
          text-align: center;
          white-space: nowrap;
        }

        .gradient-left {
          position: absolute;
          left: 0;
          top: 0;
          bottom: 0;
          width: 128px;
          background: linear-gradient(to right, #1a1a1a, transparent);
          pointer-events: none;
          z-index: 10;
        }

        .gradient-right {
          position: absolute;
          right: 0;
          top: 0;
          bottom: 0;
          width: 128px;
          background: linear-gradient(to left, #1a1a1a, transparent);
          pointer-events: none;
          z-index: 10;
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 28px;
          }
          
          .section-subtitle {
            font-size: 14px;
          }
          
          .partner-card {
            min-width: 160px;
            height: 100px;
            padding: 24px;
          }
          
          .partner-logo {
            font-size: 16px;
          }
        }
      `}</style>

      <div className="container">
        <div className="header-wrapper">
          <div className="title-wrapper">
            <div className="dot"></div>
            <h2 className="section-title">Partners & Recognition</h2>
          </div>
          <p className="section-subtitle">
            Trusted by leading brands and recognized for excellence in digital innovation
          </p>
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