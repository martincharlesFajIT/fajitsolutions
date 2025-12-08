import React from 'react';
import Link from 'next/link';
import '../../css/ecominnerpages.css';

const ShopifyExpert = () => {
  return (
    <section className="shopify-expert-section">
      {/* Background Images */}
      <div className="shopify-expert-background">
        <div className="shopify-expert-bg-image shopify-expert-left-img"></div>
        <div className="shopify-expert-bg-image shopify-expert-right-img"></div>
        <div className="shopify-expert-bg-image shopify-expert-top-img"></div>
      </div>

      {/* Overlay */}
      <div className="shopify-expert-overlay"></div>

      {/* Content */}
      <div className="shopify-expert-content">
        <span className="shopify-expert-badge">Shopify experts</span>
        
        <h1 className="shopify-expert-heading">
          Let's talk ecommerce, Shopify &<br />
          Shopify Plus solutions.
        </h1>

        <p className="shopify-expert-text">
          We are an accredited expert Shopify agency we partner with brands to design,
          develop, launch, support and grow Shopify & Shopify Plus stores. We are a Shopify
          agency, ready when you are. Talk to our team about your project.
        </p>

        <Link href="/contactus" className="shopify-expert-btn">
          Get in touch
          <svg 
            className="shopify-expert-arrow" 
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
    </section>
  );
};

export default ShopifyExpert;