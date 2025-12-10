import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'
export const metadata = {
  title: "Brand Logo | FAJ IT SOLUTIONS",
  description: "Brand Logo faj IT solutions",
  alternates: {
    canonical: "/brand-logo",
  },
  openGraph: {
    title: "Brand Logo | FAJ IT SOLUTIONS",
    description:
      "Brand Logo faj IT solutions",
    url: "/brand-logo",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Brand Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brand Logo | FAJ IT SOLUTIONS",
    description:
      "Brand Logo faj IT solutions",
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