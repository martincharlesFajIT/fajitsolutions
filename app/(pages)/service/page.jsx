
import React from 'react'
import '../../globals.css'
import ModernDevelopment from '@/components/services/ModernDevelopment'
import AdvertisingSection from '@/components/services/AdvertisingSection'
import DigitalMarketingSection from '@/components/services/DigitalMarketingSection'
import EmergingTech from '@/components/services/EmergingTech'
import HeroService from '@/components/services/HeroService'

export const metadata = {
  title: "Services | FAJ IT SOLUTIONS",
  description: "Services faj IT solutions",
  alternates: {
    canonical: "/service",
  },
  openGraph: {
    title: "Services | FAJ IT SOLUTIONS",
    description:
      "Services faj IT solutions",
    url: "/service",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | FAJ IT SOLUTIONS",
    description:
      "Services faj IT solutions",
    images: ["/og-image.jpg"],
  },
};

const Page = () => {
  return (
    <div>
      <HeroService />
      <ModernDevelopment />
      <AdvertisingSection />
      <EmergingTech />
      <DigitalMarketingSection />
    </div>
  )
}

export default Page
