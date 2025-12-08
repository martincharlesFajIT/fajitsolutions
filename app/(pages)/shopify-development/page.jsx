import HeroServiceDetail from '@/components/HeroServiceDetail'
import ShopifyExpert from '@/components/ecommercewebsite/ShopifyDevelopment/Shopify-Expert'
import ShopifyIndustriesExpertise from '@/components/ecommercewebsite/ShopifyDevelopment/Shopify-Industry-Expert'
import ShopifyPartner from '@/components/ecommercewebsite/ShopifyDevelopment/Shopify-Partner'
import ShopifyWhyChoose from '@/components/ecommercewebsite/ShopifyDevelopment/Shopify-Why-Choose'
import ShopifyFAQs from '@/components/ecommercewebsite/ShopifyDevelopment/ShopifyFAQs'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroServiceDetail 
      title="Building Scalable & User-Friendly Shopify E-commerce Services"
      description="Bring your ideas to life with our end-to-end Shopify E-commerce services. From concept and strategy to design and deployment, we build robust and scalable applications that deliver outstanding performance and user satisfaction."
      />
      <ShopifyPartner />
      <ShopifyWhyChoose />
      <ShopifyIndustriesExpertise />
      <ShopifyExpert />
      <ShopifyFAQs />
    </div>
  )
}

export default page