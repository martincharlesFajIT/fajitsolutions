import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'

export const metadata = {
  title: "3D Characters Design | FAJ IT SOLUTIONS",
  description: "3D Characters Design faj IT solutions",
  alternates: {
    canonical: "/3d-characters-design",
  },
  openGraph: {
    title: "3D Characters Design | FAJ IT SOLUTIONS",
    description:
      "3D Characters Design faj IT solutions",
    url: "/3d-characters-design",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "3D Characters Design",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "3D Characters Design | FAJ IT SOLUTIONS",
    description:
      "3D Characters Design faj IT solutions",
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