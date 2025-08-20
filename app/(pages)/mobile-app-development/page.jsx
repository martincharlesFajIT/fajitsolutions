import HeroServiceDetail from '@/components/HeroServiceDetail'
import AboutMobileApp from '@/components/mobileapplication/AboutMobileApp'
import AppDevelopmentProcess from '@/components/mobileapplication/AppDevelopmentProcess'
import AppServices from '@/components/mobileapplication/AppService'
import WhyWorkWithSection from '@/components/mobileapplication/WhyWorkWithSection'
import IndustryExpertiseSection from '@/components/mobileapplication/IndustriesExpertiseSection'
import React from 'react'
import TechExpertiseSection from '@/components/mobileapplication/TechExpertiseSection'

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
    </div>
  )
}

export default page
