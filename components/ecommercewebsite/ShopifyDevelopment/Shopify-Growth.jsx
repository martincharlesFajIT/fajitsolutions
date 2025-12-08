import React from 'react';
import Link from 'next/link';
import './DesignSupport.css';

const DesignSupport = () => {
  return (
    <section className="design-support-section">
      <div className="design-support-container">
        {/* Left Content */}
        <div className="design-support-content">
          <h2 className="design-support-title">Design, Support & Growth</h2>

          <div className="design-support-text-wrapper">
            <p className="design-support-paragraph">
              If you require creative, unique and engaging designs before entering into build phases our dedicated in-house 
              designers are on hand to support your business. We have a wealth of experience in designing both custom 
              bespoke themes and customising pre-built template themes. Alternatively, we can support with ad-hoc design 
              tasks such as landing pages, new features and emails. Our in-house team of Shopify designers have decades of 
              experience designing unique designs that are both converting and memorable. Our design team keep your brand 
              identity at the core whilst delivering a frictionless shopping experience.
            </p>

            <p className="design-support-paragraph">
              We also offer a wide range of ongoing support, maintenance and growth services. Our monthly support retainer 
              packages provide an expert ecommerce team to Shopify and Shopify Plus store owners to help them grow whilst 
              providing support, information, updates & consultation month after month. Every membership is equipped with 
              flexible hours that can be used across all of our services & resources including development, design, technical 
              support and strategic consultancy.
            </p>

            <p className="design-support-paragraph">
              Leverage your Charle Membership for strategic conversion rate optimisation (CRO) services keeping growth at the 
              core of your design and development workflow. Our team will audit, research and deploy a thorough and data-led 
              CRO roadmap to help your brand grow, maximise sales, and hit KPI targets and metrics including conversion rate, 
              average order value and lifetime value. We work hard to deliver positive outcomes with our growth-centric on-site 
              strategies. Learning from how customers react to your new store can shape your future roadmap of improvements 
              and iteration.
            </p>
          </div>

          <Link href="/design-services" className="design-support-btn">
            Explore design services
            <svg 
              className="design-support-btn-arrow" 
              width="20" 
              height="20" 
              viewBox="0 0 20 20" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M7.5 15L12.5 10L7.5 5" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>

        {/* Right Images */}
        <div className="design-support-images">
          <div className="design-support-image-item design-support-img-1"></div>
          <div className="design-support-image-item design-support-img-2"></div>
          <div className="design-support-image-item design-support-img-3"></div>
          <div className="design-support-image-item design-support-img-4"></div>
        </div>
      </div>
    </section>
  );
};

export default DesignSupport;
