import FreeProposal from '@/components/ecommercewebsite/FreeProposal'
import WhyChoose from '@/components/ecommercewebsite/WhychoiceEcommerce'
import HeroServiceDetail from '@/components/HeroServiceDetail'
import React from 'react'
import ToolsSection from '@/components/ecommercewebsite/ServicesSection'
import EcommerceLanding from '@/components/ecommercewebsite/CtaEcom'
import EcomFAQs from '@/components/ecommercewebsite/EcomFAQs'
import WhychoiceEcommerce from '@/components/ecommercewebsite/WhychoiceEcommerce'
import ServicesSection from '@/components/ecommercewebsite/ServicesSection'
import CtaEcom from '@/components/ecommercewebsite/CtaEcom'

const page = () => {
  return (
    <div>
      <HeroServiceDetail 
      title="Building Scalable & User-Friendly E-commerce Services"
      description="Bring your ideas to life with our end-to-end E-commerce services. From concept and strategy to design and deployment, we build robust and scalable applications that deliver outstanding performance and user satisfaction."
      />
      <FreeProposal />
      <WhychoiceEcommerce />
      <ServicesSection />
      <CtaEcom />
      <EcomFAQs />
    </div>
  )
}

export default page
