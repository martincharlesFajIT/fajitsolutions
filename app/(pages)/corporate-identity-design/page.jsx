import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'
export const metadata = {
  title: "Corporate Identity Optimization | FAJ IT SOLUTIONS",
  description: "Corporate Identity Optimization faj IT solutions",
  alternates: {
    canonical: "/corporate-identity-design",
  },
  openGraph: {
    title: "Corporate Identity Optimization | FAJ IT SOLUTIONS",
    description:
      "Corporate Identity Optimization faj IT solutions",
    url: "/corporate-identity-design",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Corporate Identity Optimization",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Corporate Identity Optimization | FAJ IT SOLUTIONS",
    description:
      "Corporate Identity Optimization faj IT solutions",
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