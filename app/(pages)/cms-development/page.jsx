import HeroServiceDetail from '@/components/HeroServiceDetail'
import CmsServices from '@/components/webdevelopment/cms-development/CmsServcie'
import FaqsCms from '@/components/webdevelopment/cms-development/FaqsCms'
import GameChangeCms from '@/components/webdevelopment/cms-development/GameChangeCms'
import QuickSupportCms from '@/components/webdevelopment/cms-development/QuickSupportCms'
import WhyChooseCms from '@/components/webdevelopment/cms-development/WhyChooseCms'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroServiceDetail 
      title="Building Scalable & User-Friendly CMS Development"
      description="Bring your ideas to life with our end-to-end CMS Development. From concept and strategy to design and deployment, we build robust and scalable applications that deliver outstanding performance and user satisfaction."
      />
      <CmsServices />
      <WhyChooseCms />
      <QuickSupportCms />
      <GameChangeCms />
      <FaqsCms />
    </div>
  )
}

export default page
