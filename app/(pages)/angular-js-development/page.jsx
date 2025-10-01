import ComingSoon from '@/components/commingsoon/ComingSoon'
import HeroServiceDetail from '@/components/HeroServiceDetail'
import AngularServices from '@/components/webdevelopment/angularjs-development/AngularService'
import FaqsAngular from '@/components/webdevelopment/angularjs-development/FaqsAngular'
import GameChangeAngular from '@/components/webdevelopment/angularjs-development/GameChangeAngular'
import QuickSupportAngular from '@/components/webdevelopment/angularjs-development/QuickSupportAngular'
import WhyChooseAngular from '@/components/webdevelopment/angularjs-development/WhyChooseAngular'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroServiceDetail 
      title="Smart, Scalable and SEO-Friendly Angular Js Development Services"
      description="Our expert Angular Js development team transforms your ideas into dynamic, high-performance websites. Leveraging the latest technologies, we build custom solutions that support your business objectives and engage your audience effectively."
      />
      <AngularServices />
      <WhyChooseAngular />
      <QuickSupportAngular />
      <GameChangeAngular />
      <FaqsAngular />
    </div>
  )
}

export default page
