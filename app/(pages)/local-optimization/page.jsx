import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'
export const metadata = {
  title: "Local Optimization | FAJ IT SOLUTIONS",
  description: "Local Optimization faj IT solutions",
  alternates: {
    canonical: "/local-optimization",
  },
  openGraph: {
    title: "Local Optimization | FAJ IT SOLUTIONS",
    description:
      "Local Optimization faj IT solutions",
    url: "/local-optimization",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Local Optimization",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Local Optimization | FAJ IT SOLUTIONS",
    description:
      "Local Optimization faj IT solutions",
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