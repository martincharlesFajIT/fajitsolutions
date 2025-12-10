import ServiceOffer from '@/components/advertising/video-production/ServiceOffer'
import VideoEditingServices from '@/components/advertising/video-production/VideoEditingService'
import VideoServicesGrid from '@/components/advertising/video-production/VideoServicesGrid'
import HeroServiceDetail from '@/components/HeroServiceDetail'
import React from 'react'

export const metadata = {
  title: "Video Production | FAJ IT SOLUTIONS",
  description: "Video Production faj IT solutions",
  alternates: {
    canonical: "/video-production",
  },
  openGraph: {
    title: "Video Production | FAJ IT SOLUTIONS",
    description:
      "Video Production faj IT solutions",
    url: "/video-production",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Video Production",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Video Production | FAJ IT SOLUTIONS",
    description:
      "Video Production faj IT solutions",
    images: ["/og-image.jpg"],
  },
};

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