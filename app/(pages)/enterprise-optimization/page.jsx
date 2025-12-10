import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'
export const metadata = {
  title: "Enterprise Optimization | FAJ IT SOLUTIONS",
  description: "Enterprise Optimization faj IT solutions",
  alternates: {
    canonical: "/enterprise-optimization",
  },
  openGraph: {
    title: "Enterprise Optimization | FAJ IT SOLUTIONS",
    description:
      "Enterprise Optimization faj IT solutions",
    url: "/enterprise-optimization",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Enterprise Optimization",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Enterprise Optimization | FAJ IT SOLUTIONS",
    description:
      "Enterprise Optimization faj IT solutions",
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