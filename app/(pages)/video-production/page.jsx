import ServiceOffer from '@/components/advertising/video-production/ServiceOffer'
import VideoEditingServices from '@/components/advertising/video-production/VideoEditingService'
import VideoServicesGrid from '@/components/advertising/video-production/VideoServicesGrid'
import HeroServiceDetail from '@/components/HeroServiceDetail'
import React from 'react'

const page = () => {
  return (
    <div>
        <HeroServiceDetail 
          title="Building Scalable & User-Friendly Video Production"
          description="Bring your ideas to life with our end-to-end Video Production services. Figma Design, Wireframing, and Prototyping. We build robust and scalable applications that deliver outstanding performance and user satisfaction."
        />
        <ServiceOffer />
        <VideoServicesGrid />
        <VideoEditingServices />
    </div>
  )
}

export default page