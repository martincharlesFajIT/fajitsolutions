import HeroServiceDetail from '@/components/HeroServiceDetail'
import CmsService from '@/components/webdevelopment/cms-development/CmsServices'
import FaqsCms from '@/components/webdevelopment/cms-development/FaqsCms'
import GameChangeCms from '@/components/webdevelopment/cms-development/GameChangeCms'
import HeroCms from '@/components/webdevelopment/cms-development/HeroCms'
import QuickSupportBanner from '@/components/webdevelopment/cms-development/QuickSupportBanner'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroServiceDetail 
      title="Building Scalable & User-Friendly CMS Development"
      description="Bring your ideas to life with our end-to-end CMS Development. From concept and strategy to design and deployment, we build robust and scalable applications that deliver outstanding performance and user satisfaction."
      />
      <HeroCms />
      <CmsService />
      <QuickSupportBanner />
      <GameChangeCms />
      <FaqsCms />
    </div>
  )
}

export default page
