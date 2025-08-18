import HeroServiceDetail from '@/components/HeroServiceDetail'
import BuildSuccess from '@/components/ui-ux-design/BuildSuccess'
import PotentialSection from '@/components/ui-ux-design/PotentialSection'
import ReadySection from '@/components/ui-ux-design/ReadySection'
import TechSection from '@/components/ui-ux-design/TechSection'
import TimelineSection from '@/components/ui-ux-design/TimelineSection'
import UIUXProcessSection from '@/components/ui-ux-design/UIUXProcessSection'
import UIUXSection from '@/components/ui-ux-design/UIUXSection'
import UniqueSection from '@/components/ui-ux-design/UniqueSection'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroServiceDetail
      title="Building Scalable & User-Friendly UI/UX Design Services"
      description="Bring your ideas to life with our end-to-end UI/UX Design services. Figma Design, Wireframing, and Prototyping. We build robust and scalable applications that deliver outstanding performance and user satisfaction."
      />
      <UIUXSection />
      <BuildSuccess />
      <UIUXProcessSection />
      <TimelineSection />
      <UniqueSection />
      <TechSection />
      <PotentialSection />
      <ReadySection />
    </div>
  )
}

export default page
