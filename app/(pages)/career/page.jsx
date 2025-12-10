import JobsFaj from '@/components/career/JobsFaj'
import HeroServiceDetail from '@/components/HeroServiceDetail'
import React from 'react'
export const metadata = {
  title: "Career | FAJ IT SOLUTIONS",
  description: "Career faj IT solutions",
  alternates: {
    canonical: "/career",
  },
  openGraph: {
    title: "Career | FAJ IT SOLUTIONS",
    description:
      "Career faj IT solutions",
    url: "/career",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Career",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Career | FAJ IT SOLUTIONS",
    description:
      "Career faj IT solutions",
    images: ["/og-image.jpg"],
  },
};
const page = () => {
  return (
    <div>
        <HeroServiceDetail 
        title="FAJ IT TALENT"
        description="Bring your ideas to life with our end-to-end E-commerce services. From concept and strategy to design and deployment, we build robust and scalable applications that deliver outstanding performance and user satisfaction."
      />
        <JobsFaj />
    </div>
  )
}

export default page