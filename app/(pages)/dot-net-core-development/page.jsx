import HeroServiceDetail from '@/components/HeroServiceDetail'
import FaqsDotNetCore from '@/components/webdevelopment/net-core-development/FaqsDotNetCore'
import GameChangeNetCore from '@/components/webdevelopment/net-core-development/GameChangerNetCore'
import HeroNetCore from '@/components/webdevelopment/net-core-development/HeroNetCore'
import NetCoreServices from '@/components/webdevelopment/net-core-development/NetCoreServices'
import QuickSupportCoreNet from '@/components/webdevelopment/net-core-development/QuickSupportBanner'
import WhyChooseDotNet from '@/components/webdevelopment/net-core-development/WhyChooseDotNet'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroServiceDetail 
      title="Building Scalable & .Net Core Development"
      description="Bring your ideas to life with our end-to-end .Net Core Development services. From concept and strategy to design and deployment, we build robust and scalable applications that deliver outstanding performance and user satisfaction."
      />
      <HeroNetCore />
      <NetCoreServices />
      <WhyChooseDotNet />
      <QuickSupportCoreNet />
      <GameChangeNetCore />
      <FaqsDotNetCore />
    </div>
  )
}

export default page
