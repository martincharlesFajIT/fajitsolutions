import HeroServiceDetail from '@/components/HeroServiceDetail'
import ReactPartner from '@/components/mobileapplication/android-app/React-Partner'
import React from 'react'
import IosBenefit from '@/components/mobileapplication/ios-app/ios-benefit'
import IosServices from '@/components/mobileapplication/ios-app/Ios-Service'
import IosExpertise from '@/components/mobileapplication/ios-app/Ios-Expertise'
import IosMostDemand from '@/components/mobileapplication/ios-app/Ios-Most-Demand'
import IosBannerCta from '@/components/mobileapplication/ios-app/Ios-Banner-Cta'
import FaqsIos from '@/components/mobileapplication/ios-app/Ios-Faqs'

const page = () => {
  return (
    <div>
           <HeroServiceDetail 
        title="Building Scalable & User-Friendly IOS Application"
        description="Bring your ideas to life with our end-to-end IOS Application services. From concept and strategy to design and deployment, we build robust and scalable applications that deliver outstanding performance and user satisfaction."
        />
        <ReactPartner />
        <IosServices />
        <IosBenefit />
        <IosExpertise />
        <IosMostDemand />
        <IosBannerCta />
        <FaqsIos />
    </div>
  )
}

export default page