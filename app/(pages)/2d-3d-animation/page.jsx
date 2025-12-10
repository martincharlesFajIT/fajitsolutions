import ServiceOffer from '@/components/advertising/video-production/ServiceOffer'
import VideoServicesGrid from '@/components/advertising/video-production/VideoServicesGrid'
import HeroServiceDetail from '@/components/HeroServiceDetail'
import React from 'react'


export const metadata = {
  title: "2D 3D Animation | FAJ IT SOLUTIONS",
  description: "2D 3D Animation faj IT solutions",
  alternates: {
    canonical: "2d-3d-animation",
  },
  openGraph: {
    title: "2D 3D Animation | FAJ IT SOLUTIONS",
    description:
      "2D 3D Animation faj IT solutions",
    url: "/3d-characters-design",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "2D 3D Animation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "2D 3D Animation | FAJ IT SOLUTIONS",
    description:
      "2D 3D Animation faj IT solutions",
    images: ["/og-image.jpg"],
  },
};

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