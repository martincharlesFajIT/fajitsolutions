import HeroServiceDetail from '@/components/HeroServiceDetail'
import DjangoServices from '@/components/webdevelopment/django-development/DjangoService'
import FaqsDjango from '@/components/webdevelopment/django-development/FaqsDjango'
import GameChangeDjango from '@/components/webdevelopment/django-development/GameChangeDjango'
import DjangoHero from '@/components/webdevelopment/django-development/Herodjango'
import QuickSupportDjango from '@/components/webdevelopment/django-development/QuickSupportDjango'
import WhyChooseDjango from '@/components/webdevelopment/django-development/WhyChooseDjango'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroServiceDetail 
      title="Building Scalable & User-Friendly Django Application"
      description="Bring your ideas to life with our end-to-end Django Application services. From concept and strategy to design and deployment, we build robust and scalable applications that deliver outstanding performance and user satisfaction."
      />
      <DjangoHero />
      <DjangoServices />
      <WhyChooseDjango />
      <QuickSupportDjango />
      <GameChangeDjango />
      <FaqsDjango />

    </div>
  )
}

export default page
