import ComingSoon from '@/components/commingsoon/ComingSoon'
import HeroServiceDetail from '@/components/HeroServiceDetail'
import DrupalService from '@/components/webdevelopment/drupal-development/DrupalServices'
import FaqsDrupal from '@/components/webdevelopment/drupal-development/FaqsDrupal'
import GameChangeDrupal from '@/components/webdevelopment/drupal-development/GameChangeDrupal'
import HeroDrupal from '@/components/webdevelopment/drupal-development/HeroDrupal'
import HowWeWorkDrupal from '@/components/webdevelopment/drupal-development/HowWeWorkDrupal'
import QuickSupportDrupal from '@/components/webdevelopment/drupal-development/QuickSupportBanner'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroServiceDetail 
      title="Building Scalable & User-Friendly Django Application"
      description="Bring your ideas to life with our end-to-end Django Application services. From concept and strategy to design and deployment, we build robust and scalable applications that deliver outstanding performance and user satisfaction."
      />
      <HeroDrupal />
      <DrupalService />
      <HowWeWorkDrupal />
      <GameChangeDrupal />
      <QuickSupportDrupal />
      <FaqsDrupal />
    </div>
  )
}

export default page
