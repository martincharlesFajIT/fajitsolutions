import AboutDigital from '@/components/digital-marketing/AboutDigital'
import DiscoverySlider from '@/components/digital-marketing/DiscoverySlider'
import FaqsDigital from '@/components/digital-marketing/FaqsDigital'
import OurApproach from '@/components/digital-marketing/OurApproach'
import WorkflowSection from '@/components/digital-marketing/WorkflowSection'
import HeroServiceDetail from '@/components/HeroServiceDetail'
import React from 'react'

const page = () => {
  return (
    <div>
        <HeroServiceDetail
        title="Digital Marketing"
        description="Bring your ideas to life with our end-to-end E-commerce services. From concept and strategy to design and deployment, we build robust and scalable applications that deliver outstanding performance and user satisfaction."
        />
        <AboutDigital />
        <OurApproach />
        <WorkflowSection />
        <DiscoverySlider /> 
        <FaqsDigital />
        
    </div>
  )
}

export default page
