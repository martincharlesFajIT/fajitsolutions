import HeroServiceDetail from '@/components/HeroServiceDetail'
import DjangoService from '@/components/webdevelopment/django-development/DjangoService'
import FaqsDjango from '@/components/webdevelopment/django-development/FaqsDjango'
import GameChangeDjango from '@/components/webdevelopment/django-development/GameChangeDjango'
import DjangoHero from '@/components/webdevelopment/django-development/Herodjango'
import HowWeWork from '@/components/webdevelopment/django-development/HowWeWorkDjango'
import QuickSupportDjango from '@/components/webdevelopment/django-development/QuickSupportDjango'
import WhyChooseDjango from '@/components/webdevelopment/django-development/WhyChooseDjango'
import React from 'react'

const Page = () => {
  return (
    <div>
      <HeroServiceDetail 
        title="Building Scalable & User-Friendly Django Application"
        description="Bring your ideas to life with our end-to-end Django Application services. From concept and strategy to design and deployment, we build robust and scalable applications that deliver outstanding performance and user satisfaction."
      />
      <DjangoHero />
      <DjangoService />
      <HowWeWork />
      <WhyChooseDjango />
      <QuickSupportDjango />
      <GameChangeDjango />
      <FaqsDjango />
    </div>
  )
}

export default Page;