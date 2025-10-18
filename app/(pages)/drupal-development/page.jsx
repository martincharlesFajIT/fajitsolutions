import ComingSoon from '@/components/commingsoon/ComingSoon'
import HeroServiceDetail from '@/components/HeroServiceDetail'
import DrupalService from '@/components/webdevelopment/drupal-development/DrupalServices'
import FaqsDrupal from '@/components/webdevelopment/drupal-development/FaqsDrupal'
import GameChangeDrupal from '@/components/webdevelopment/drupal-development/GameChangeDrupal'
import HeroDrupal from '@/components/webdevelopment/drupal-development/HeroDrupal'
import IndustryDrupal from '@/components/webdevelopment/drupal-development/IndustryDrupal'
import QuickSupportDrupal from '@/components/webdevelopment/drupal-development/QuickSupportBanner'
import WhyChooseDrupal from '@/components/webdevelopment/drupal-development/WhyChooseDrupal'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroServiceDetail 
      title="Building Scalable & User-Friendly Drupal Application"
      description="Bring your ideas to life with our end-to-end Drupal Application services. From concept and strategy to design and deployment, we build robust and scalable applications that deliver outstanding performance and user satisfaction."
      />
      <HeroDrupal />
      <DrupalService />
      <WhyChooseDrupal />
      <GameChangeDrupal />
      <QuickSupportDrupal />
      <IndustryDrupal />
      <FaqsDrupal />
    </div>
  )
}

export default page
