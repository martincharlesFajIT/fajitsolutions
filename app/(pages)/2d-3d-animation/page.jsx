import ServiceOffer from '@/components/advertising/video-production/ServiceOffer'
import VideoServicesGrid from '@/components/advertising/video-production/VideoServicesGrid'
import HeroServiceDetail from '@/components/HeroServiceDetail'
import React from 'react'

const page = () => {
  return (
    <div>
      <HeroServiceDetail
      title="2D & 3D Animation"
      description="Bring your ideas to life with our end-to-end E-commerce services. From concept and strategy to design and deployment, we build robust and scalable applications that deliver outstanding performance and user satisfaction."
      />
        <ServiceOffer />
        <VideoServicesGrid />
    </div>
  )
}

export default page