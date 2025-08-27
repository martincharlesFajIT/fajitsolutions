import CTASection from '@/components/cyber-security/CTASection'
import CyberFAQs from '@/components/cyber-security/CyberFAQs'
import CyberSecurityHire from '@/components/cyber-security/CyberSecurityHire'
import CybersecurityServices from '@/components/cyber-security/CybersecurityServices'
import CyberThreats from '@/components/cyber-security/CyberThreats'
import HeroServiceDetail from '@/components/HeroServiceDetail'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroServiceDetail
      title="Cyber Security"
        description="Bring your ideas to life with our end-to-end E-commerce services. From concept and strategy to design and deployment, we build robust and scalable applications that deliver outstanding performance and user satisfaction."
      />
      <CybersecurityServices />
      <CyberThreats />
      <CTASection />
      <CyberSecurityHire />
      <CyberFAQs />

    </div>
  )
}

export default page
