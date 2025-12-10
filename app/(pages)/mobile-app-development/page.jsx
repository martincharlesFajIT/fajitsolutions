import HeroServiceDetail from '@/components/HeroServiceDetail'
import AboutMobileApp from '@/components/mobileapplication/AboutMobileApp'
import AppDevelopmentProcess from '@/components/mobileapplication/AppDevelopmentProcess'
import AppServices from '@/components/mobileapplication/AppService'
import WhyWorkWithSection from '@/components/mobileapplication/WhyWorkWithSection'
import IndustryExpertiseSection from '@/components/mobileapplication/IndustriesExpertiseSection'
import React from 'react'
import TechExpertiseSection from '@/components/mobileapplication/TechExpertiseSection'
import MobileAppFaqs from '@/components/mobileapplication/MobileAppFaqs'
export const metadata = {
  title: "Mobile App Development | FAJ IT SOLUTIONS",
  description: "Mobile App Development faj IT solutions",
  alternates: {
    canonical: "/mobile-app-development",
  },
  openGraph: {
    title: "Mobile App Development | FAJ IT SOLUTIONS",
    description:
      "Mobile App Development faj IT solutions",
    url: "/mobile-app-development",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Mobile App Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mobile App Development | FAJ IT SOLUTIONS",
    description:
      "Mobile App Development faj IT solutions",
    images: ["/og-image.jpg"],
  },
};
const page = () => {
  return (
    <div>
      <HeroServiceDetail
        title="Building Scalable & User-Friendly Mobile Applications"
        description="Bring your ideas to life with our end-to-end mobile app development services. From concept and strategy to design and deployment, we build robust and scalable applications that deliver outstanding performance and user satisfaction."
      />
        <AboutMobileApp />
        <AppServices />
        <AppDevelopmentProcess />
        <WhyWorkWithSection />
        <IndustryExpertiseSection />
        <TechExpertiseSection />
        <MobileAppFaqs />
    
    </div>
  )
}

export default page
