import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'
export const metadata = {
  title: "Custom 2D 3D Animation | FAJ IT SOLUTIONS",
  description: "Custom 2D 3D Animation faj IT solutions",
  alternates: {
    canonical: "/custom-2d-3d-animation",
  },
  openGraph: {
    title: "Custom 2D 3D Animation | FAJ IT SOLUTIONS",
    description:
      "Custom 2D 3D Animation faj IT solutions",
    url: "/custom-2d-3d-animation",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Custom 2D 3D Animation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom 2D 3D Animation | FAJ IT SOLUTIONS",
    description:
      "Custom 2D 3D Animation faj IT solutions",
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
