import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'

export const metadata = {
  title: "Affiliate Marketing | FAJ IT SOLUTIONS",
  description: "Affiliate Marketing faj IT solutions",
  alternates: {
    canonical: "/affiliate-marketing",
  },
  openGraph: {
    title: "Affiliate Marketing | FAJ IT SOLUTIONS",
    description:
      "Affiliate Marketing FAJ IT SOLUTIONS faj IT solutions",
    url: "/affiliate-marketing",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "affiliate-marketing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Affiliate Marketing | FAJ IT SOLUTIONS",
    description:
      "Affiliate Marketing FAJ IT SOLUTIONS faj IT solutions",
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