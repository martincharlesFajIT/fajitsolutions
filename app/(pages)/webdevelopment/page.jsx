import FastLoadingSection from '@/components/webdevelopment/FastLoadingSection';
import CosmicHeroSection from '@/components/webdevelopment/HeroServiceDetails';
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
      <CosmicHeroSection />
      <TrustedBySection />
      <WhyChooseSection />
      <FastLoadingSection />
    </div>
  )
}

export default page
