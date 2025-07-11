
import React from 'react'
import '../../globals.css'
import ModernDevelopment from '@/components/services/ModernDevelopment'
import AdvertisingSection from '@/components/services/AdvertisingSection'
import DigitalMarketingSection from '@/components/services/DigitalMarketingSection'
import StickySocialBar from '@/components/home/StickySocialBar'
import EmergingTech from '@/components/services/EmergingTech'

export const metadata = {
  title: 'Web & IT Services',
  description: 'We provide expert web development, branding, SEO, and IT solutions tailored to your business needs.',
  openGraph: {
    title: 'FAJ IT Solutions',
    description: 'Your trusted partner for all web and IT services.',
    url: 'https://www.fajitsolutions.com',
    siteName: 'Services - FAJ IT Solutions',
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

const Page = () => {
  return (
    <div>
      <ModernDevelopment />
      <AdvertisingSection />
      <EmergingTech />
      <DigitalMarketingSection />

    </div>
  )
}

export default Page
