import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'

export const metadata = {
  title: "3D Modeling & Rendering | FAJ IT SOLUTIONS",
  description:
    "High-quality 3D modeling, character design, and rendering services to elevate your branding, products, and visual presentations.",
  alternates: {
    canonical: "/3d-modeling-and-rendering",
  },
  openGraph: {
    title: "3D Modeling & Rendering | FAJ IT SOLUTIONS",
    description:
      "Professional 3D modeling, character design, and rendering services.",
    url: "/3d-modeling-and-rendering",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "3D Modeling & Rendering",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "3D Modeling & Rendering | FAJ IT SOLUTIONS",
    description:
      "Professional 3D modeling, character design, and rendering services.",
    images: ["/og-image.jpg"],
  },
};
const page = () => {
  return (
    <div>
        <ComingSoon />
    </div>
  )
}

export default page