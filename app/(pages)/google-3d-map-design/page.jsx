import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'
export const metadata = {
  title: "Google 3D Map Design | FAJ IT SOLUTIONS",
  description: "Google 3D Map Design faj IT solutions",
  alternates: {
    canonical: "/google-3d-map-design",
  },
  openGraph: {
    title: "Google 3D Map Design | FAJ IT SOLUTIONS",
    description:
      "Google 3D Map Design faj IT solutions",
    url: "/google-3d-map-design",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Google 3D Map Design",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Google 3D Map Design | FAJ IT SOLUTIONS",
    description:
      "Google 3D Map Design faj IT solutions",
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