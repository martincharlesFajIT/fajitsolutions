import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'
export const metadata = {
  title: "Ux design Figma | FAJ IT SOLUTIONS",
  description: "Ux design Figma faj IT solutions",
  alternates: {
    canonical: "/ux-design-figma",
  },
  openGraph: {
    title: "Ux design Figma | FAJ IT SOLUTIONS",
    description:
      "Ux design Figma faj IT solutions",
    url: "/ux-design-figma",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ux design Figma",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ux design Figma | FAJ IT SOLUTIONS",
    description:
      "Ux design Figma faj IT solutions",
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