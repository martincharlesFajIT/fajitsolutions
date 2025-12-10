import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'

export const metadata = {
  title: "App Store Optimization | FAJ IT SOLUTIONS",
  description: "App Store Optimization faj IT solutions",
  alternates: {
    canonical: "/app-store-optimization",
  },
  openGraph: {
    title: "App Store Optimization | FAJ IT SOLUTIONS",
    description:
      "App Store Optimization faj IT solutions",
    url: "/app-store-optimization",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "App Store Optimization",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "App Store Optimization | FAJ IT SOLUTIONS",
    description:
      "App Store Optimization faj IT solutions",
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