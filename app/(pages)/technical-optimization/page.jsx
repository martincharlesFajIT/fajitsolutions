import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'
export const metadata = {
  title: "Technical Optimization | FAJ IT SOLUTIONS",
  description: "Technical Optimization faj IT solutions",
  alternates: {
    canonical: "/technical-optimization",
  },
  openGraph: {
    title: "Technical Optimization | FAJ IT SOLUTIONS",
    description:
      "Technical Optimization faj IT solutions",
    url: "/technical-optimization",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Technical Optimization",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Technical Optimization | FAJ IT SOLUTIONS",
    description:
      "Technical Optimization faj IT solutions",
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