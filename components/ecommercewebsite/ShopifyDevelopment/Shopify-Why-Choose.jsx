import React from 'react';
import '../../css/ecominnerpages.css';

const ShopifyWhyChoose = () => {
  const features = [
    {
      id: '01',
      title: 'Enhanced User Experience',
      description: 'Deliver a smooth and intuitive shopping journey, increasing customer satisfaction and loyalty.'
    },
    {
      id: '02',
      title: 'Higher Conversion Rates',
      description: 'Optimize every element to turn visitors into buyers, maximizing your revenue.'
    },
    {
      id: '03',
      title: 'Efficient Inventory Management',
      description: 'Integrate smart systems for real-time inventory tracking and management.'
    },
    {
      id: '04',
      title: 'Advanced SEO Strategies',
      description: 'Drive organic traffic with targeted SEO techniques, boosting your online visibility.'
    },
    {
      id: '05',
      title: 'Fast Load Times',
      description: 'Ensure quick page loads to keep customers engaged and reduce bounce rates.'
    },
    {
      id: '06',
      title: 'Personalized Shopping',
      description: 'Implement AI-driven recommendations to enhance the shopping experience.'
    },
    {
      id: '07',
      title: 'Seamless Integrations',
      description: 'Easily connect with third-party tools and services for a comprehensive eCommerce solution.'
    },
    {
      id: '08',
      title: 'Recover Abandoned Sales',
      description: 'Reduce cart abandonment and recover lost sales to boost your revenue potential.'
    }
  ];

  return (
    <section className="whyChooseSection">
      <div className="container">
        <h1 className='choose-title'>Why Choose Us</h1>
        <div className="grid">
          {features.map((feature) => (
            <div key={feature.id} className="featureCard">
              <span className="featureNumber">{feature.id}</span>
              <h3 className="featureTitle">{feature.title}</h3>
              <p className="featureDescription">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShopifyWhyChoose;