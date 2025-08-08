import React from 'react';
import styles from './css/Ourservices.module.css';
import { MdOutlineScreenSearchDesktop } from "react-icons/md";
import { HiLink } from "react-icons/hi";
import { SiAmazonwebservices } from "react-icons/si";
import { GrDocumentText } from "react-icons/gr";
import { MdOutlineSettings } from "react-icons/md";
import { AiOutlineBorderOuter } from "react-icons/ai";
import { GrDocumentUser } from "react-icons/gr";
import { FaShopify } from "react-icons/fa";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { BiSolidBookContent } from "react-icons/bi";
import { IoSpeedometerSharp } from "react-icons/io5";

const OurServices = () => {
  const services = [
    {
      title: 'Keyword Research & Strategy',
      description: 'We analyze search trends and competition to develop targeted keyword strategies that drive qualified traffic to your site.',
      icon: <MdOutlineScreenSearchDesktop />
    },
    {
      title: 'On-Page SEO',
      description: 'We optimize your website content, meta tags, and structure to improve search rankings and user experience.',
      icon: <GrDocumentText />
    },
    {
      title: 'Amazon SEO',
      description: 'Specialized optimization for Amazon product listings to improve visibility and sales on the platform.',
      icon: <SiAmazonwebservices />
    },
    {
      title: 'Link Building',
      description: 'We build high-quality backlinks from authoritative sources to boost your site credibility and rankings.',
      icon: <HiLink />
      
    },
    {
      title: 'Technical SEO',
      description: 'We fix technical issues that prevent search engines from properly crawling and indexing your website.',
      icon: <MdOutlineSettings />
    },
    {
      title: 'Local SEO',
      description: 'Optimize your online presence to attract more customers from local searches and Google Maps.',
      icon: <AiOutlineBorderOuter />
    },
    {
      title: 'Franchise SEO',
      description: 'Custom SEO solutions for franchise businesses to maintain brand consistency while optimizing local pages.',
      icon: <GrDocumentUser />
    },
    {
      title: 'Shopify SEO',
      description: 'Specialized SEO for Shopify stores to improve product visibility and e-commerce conversions.',
      icon: <FaShopify />
    },
    {
      title: 'Commerce SEO',
      description: 'E-commerce optimization strategies to improve product rankings and drive more sales.',
      icon: <MdOutlineLocalGroceryStore />
    },
    {
      title: 'Content Writing',
      description: 'High-quality, SEO-optimized content that engages readers and ranks well in search engines.',
      icon: <BiSolidBookContent />
    },
    {
      title: 'Conversion Rate Optimization (CRO)',
      description: 'Improve your website to convert more visitors into customers through data-driven optimizations.',
      icon: <IoSpeedometerSharp />
    }
  ];

  return (
    <section className={styles.seoServices}>
      <div className={styles.container}>
        <h2 className={styles.sectionTitle}>Our SEO Services</h2>
        <p className={styles.sectionSubtitle}>
          We offer all-inclusive SEO packages to help you boost your online traffic and achieve organic and lasting results.
        </p>
        
        <div className={styles.servicesGrid}>
          {services.map((service, index) => (
            <div key={index} className={styles.serviceCard}>
                <h2 className={styles.serviceIcon}>{service.icon}</h2>
              <h3 className={styles.serviceTitle}>{service.title}</h3>
              <p className={styles.serviceDescription}>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;