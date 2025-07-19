import HeroServiceDetail from '@/components/HeroServiceDetail';
import PartnersRecognition from '@/components/home/PartnersRecognition';
import DynamicWebsiteSection from '@/components/webdevelopment/DynamicWebsiteSection';
import FastLoadingSection from '@/components/webdevelopment/FastLoadingSection';
import TrustedBySection from '@/components/webdevelopment/TrustedBySection';
import WhyChooseSection from '@/components/webdevelopment/WhyChooseSection';
import React from 'react'

export const metadata = {
  metadataBase: new URL('https://www.fajitsolutions.com/webdevelopment'),
  title: 'Web & IT Services',
  description: 'We provide expert web development, branding, SEO, and IT solutions tailored to your business needs.',
  openGraph: {
    title: 'Web Development',
    description: 'Your trusted partner for all web and IT services.',
    url: 'https://www.fajitsolutions.com',
    siteName: 'Web Development - FAJ IT Solutions',
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

const page = () => {
  return (
    <div>
      <HeroServiceDetail
        title="Smart, Scalable and SEO-Friendly Web Development Services"
        description="Our expert web development team transforms your ideas into dynamic, high-performance websites. Leveraging the latest technologies, we build custom solutions that support your business objectives and engage your audience effectively."
      />
      <TrustedBySection />
      <WhyChooseSection />
      <FastLoadingSection />
      <PartnersRecognition />
      <DynamicWebsiteSection />
    </div>
  )
}

export default page
