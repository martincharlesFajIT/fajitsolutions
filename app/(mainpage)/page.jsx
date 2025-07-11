 
import React from 'react'

import '../globals.css'
import StickySocialBar from '@/components/home/StickySocialBar'
import WebCtaSection from '@/components/home/Webcta'
import HireDeveloperSection from '@/components/home/HireDeveloperSection'
import PortfolioSection from '@/components/home/PortfolioSection'
import CustomerReviews from '@/components/home/CustomerReviews'
import ServicesSection from '@/components/home/ServicesSection'
import FAQSection from '@/components/home/FAQSection'
import Footer from '@/components/Footer'
import Brandstack from '@/components/home/Brandstack'
import WebDevelopmentProcess from '@/components/home/WebDevelopmentProcess'

export const metadata = {
  title: 'FAJ IT Solutions | Web & IT Services',
  description: 'We provide expert web development, branding, SEO, and IT solutions tailored to your business needs.',
  openGraph: {
    title: 'FAJ IT Solutions',
    description: 'Your trusted partner for all web and IT services.',
    url: 'https://www.fajitsolutions.com',
    siteName: 'FAJ IT Solutions',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FAJ IT Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const Home = () => {

  return (
    <div>
 
      <StickySocialBar />

      <section>
        <Brandstack />
      </section>

      <section>
        <ServicesSection />
      </section>

      <section>
        <WebDevelopmentProcess />
      </section>

      <section>
        <CustomerReviews />
      </section>

      <section>
        <PortfolioSection />
      </section>

      <WebCtaSection />

      <section>
        <HireDeveloperSection />
      </section>

      <section>
        <FAQSection />
      </section>






    </div>
  )
}

export default Home