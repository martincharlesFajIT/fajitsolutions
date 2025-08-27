import CyberSecurityHire from '@/components/cyber-security/CyberSecurityHire'
import CybersecurityServices from '@/components/cyber-security/CybersecurityServices'
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
      <CyberSecurityHire />
    </div>
  )
}

export default page
