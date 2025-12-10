import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'
export const metadata = {
  title: "Ecommerce Optimization | FAJ IT SOLUTIONS",
  description: "Ecommerce Optimization faj IT solutions",
  alternates: {
    canonical: "/ecommerce-optimization",
  },
  openGraph: {
    title: "Ecommerce Optimization | FAJ IT SOLUTIONS",
    description:
      "Ecommerce Optimization faj IT solutions",
    url: "/ecommerce-optimization",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ecommerce Optimization",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ecommerce Optimization | FAJ IT SOLUTIONS",
    description:
      "Ecommerce Optimization faj IT solutions",
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