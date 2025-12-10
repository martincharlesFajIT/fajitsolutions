import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'
export const metadata = {
  title: "Brand Strategy & Identity | FAJ IT SOLUTIONS",
  description: "Brand Strategy & Identity faj IT solutions",
  alternates: {
    canonical: "/brand-strategy-&-identity",
  },
  openGraph: {
    title: "Brand Strategy & Identity | FAJ IT SOLUTIONS",
    description:
      "Brand Strategy faj IT solutions",
    url: "/brand-strategy-&-identity",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Brand Strategy & Identity",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brand Strategy & Identity | FAJ IT SOLUTIONS",
    description:
      "Brand Strategy & Identity faj IT solutions",
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