import ContentWriting from '@/components/content-writing/ContentWriting'
import CtaSection from '@/components/content-writing/CtaSection'
import HowToWorkSection from '@/components/content-writing/HowToWorkSection'
import IntegrationSection from '@/components/content-writing/IntegrationSection'
import HeroServiceDetail from '@/components/HeroServiceDetail'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroServiceDetail 
      title="Content Writing"
        description="Bring your ideas to life with our end-to-end E-commerce services. From concept and strategy to design and deployment, we build robust and scalable applications that deliver outstanding performance and user satisfaction."
      />
      <ContentWriting />
      <IntegrationSection />
      <HowToWorkSection />
      <CtaSection />
    </div>
  )
}

export default page
