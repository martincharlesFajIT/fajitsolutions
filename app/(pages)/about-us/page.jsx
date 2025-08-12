import AboutSection from '@/components/aboutus/AboutSection'
import CTASection from '@/components/aboutus/CTASection'
import DigitalGrowthSection from '@/components/aboutus/DigitalGrowthSection'
import ImpactSection from '@/components/aboutus/ImpactSection'
import MoreSection from '@/components/aboutus/MoreSection'
import ValuesSection from '@/components/aboutus/ValuesSection'
import React from 'react'

const pages = () => {
  return (
    <div>
      <AboutSection />
      <MoreSection />
      <DigitalGrowthSection />
      <ImpactSection />
      <ValuesSection />
      <CTASection />
    </div>
  )
}

export default pages
