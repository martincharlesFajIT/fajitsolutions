import BrandingSection from '@/components/advertising/Digital-Brand-Creative/BrandingShapes'
import CreativeObjective from '@/components/advertising/Digital-Brand-Creative/CreativeObjective'
import DbrOurProcess from '@/components/advertising/Digital-Brand-Creative/Dbr-Our-Proccess'
import DbrFaqs from '@/components/advertising/Digital-Brand-Creative/DbrFaqs'
import InnovativeBranding from '@/components/advertising/Digital-Brand-Creative/InnovativeBranding'
import HeroServiceDetail from '@/components/HeroServiceDetail'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroServiceDetail 
        title="Digital Brand & Creative"
        description="Bring your ideas to life with our end-to-end E-commerce services. From concept and strategy to design and deployment, we build robust and scalable applications that deliver outstanding performance and user satisfaction."
      />
        <InnovativeBranding />
        <BrandingSection />
        <CreativeObjective />
        <DbrOurProcess />
        <DbrFaqs />
    </div>
  )
}

export default page