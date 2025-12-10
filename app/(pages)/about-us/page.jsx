import AboutSection from '@/components/aboutus/AboutSection'
import CTASection from '@/components/aboutus/CTASection'
import DigitalGrowthSection from '@/components/aboutus/DigitalGrowthSection'
import ImpactSection from '@/components/aboutus/ImpactSection'
import MoreSection from '@/components/aboutus/MoreSection'
import ValuesSection from '@/components/aboutus/ValuesSection'
import React from 'react'

export const metadata = {
  title: "About Us | FAJ IT SOLUTIONS",
  description: "About us faj IT solutions",
  alternates: {
    canonical: "/about-us",
  },
  openGraph: {
    title: "About Us | FAJ IT SOLUTIONS",
    description:
      "About us faj IT solutions",
    url: "/about-us",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "about-us",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | FAJ IT SOLUTIONS",
    description:
      "About us faj IT solutions",
    images: ["/og-image.jpg"],
  },
};


const pages = () => {
  return (
    <div>
      <AboutSection />
      <MoreSection />
      <DigitalGrowthSection />
      <ImpactSection />
      <ValuesSection />
      <CTASection />
    </div>
  )
}

export default pages
