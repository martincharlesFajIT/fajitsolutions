import ServiceOffer from '@/components/advertising/video-production/ServiceOffer'
import VideoEditingServices from '@/components/advertising/video-production/VideoEditingService'
import VideoServicesGrid from '@/components/advertising/video-production/VideoServicesGrid'
import HeroServiceDetail from '@/components/HeroServiceDetail'
import React from 'react'

const page = () => {
  return (
    <div>
        <HeroServiceDetail 

        />
        <ServiceOffer />
        <VideoServicesGrid />
        <VideoEditingServices />
    </div>
  )
}

export default page