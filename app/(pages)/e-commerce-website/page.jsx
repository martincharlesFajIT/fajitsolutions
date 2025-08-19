import FreeProposal from '@/components/ecommercewebsite/FreeProposal'
import WhyChoose from '@/components/ecommercewebsite/EcommerceFeatures'
import HeroServiceDetail from '@/components/HeroServiceDetail'
import React from 'react'
import EcommerceFeatures from '@/components/ecommercewebsite/EcommerceFeatures'
import ToolsSection from '@/components/ecommercewebsite/ToolsSection'
import EcommerceLanding from '@/components/ecommercewebsite/EcommerceLanding'

const page = () => {
  return (
    <div>
      <HeroServiceDetail 
      title="Building Scalable & User-Friendly E-commerce Services"
      description="Bring your ideas to life with our end-to-end E-commerce services. From concept and strategy to design and deployment, we build robust and scalable applications that deliver outstanding performance and user satisfaction."
      />
      <FreeProposal />
      <EcommerceFeatures />
      <ToolsSection />
      <EcommerceLanding />
    </div>
  )
}

export default page
