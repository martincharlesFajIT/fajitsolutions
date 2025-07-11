"use client"
import React from 'react'
import '../../globals.css'
import ModernDevelopment from '@/components/services/ModernDevelopment'
import AdvertisingSection from '@/components/services/AdvertisingSection'
import DigitalMarketingSection from '@/components/services/DigitalMarketingSection'
import StickySocialBar from '@/components/home/StickySocialBar'
const Page = () => {
  return (
    <div>
       <StickySocialBar />
      <ModernDevelopment />
      <AdvertisingSection />
      <DigitalMarketingSection />
    </div>
  )
}

export default Page
