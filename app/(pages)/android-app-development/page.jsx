import HeroServiceDetail from '@/components/HeroServiceDetail'
import ReactBannerCta from '@/components/mobileapplication/android-app/React-Banner-Cta'
import ReactBenefit from '@/components/mobileapplication/android-app/React-benefit'
import ReactExpertise from '@/components/mobileapplication/android-app/React-Expertise'
import FaqsReact from '@/components/mobileapplication/android-app/React-Faqs'
import ReactPartner from '@/components/mobileapplication/android-app/React-Partner'
import ReactNativeServices from '@/components/mobileapplication/android-app/React-Service'
import React from 'react'

const page = () => {
  return (
    <div>
            <div>
        <HeroServiceDetail 
        title="Building Scalable & User-Friendly React Native Application"
        description="Bring your ideas to life with our end-to-end React Native Application services. From concept and strategy to design and deployment, we build robust and scalable applications that deliver outstanding performance and user satisfaction."
        />
        <ReactPartner />
        <ReactNativeServices />
        <ReactBannerCta />
        <ReactExpertise />
        <ReactBenefit />
        <FaqsReact />
    </div>
    </div>
  )
}

export default page