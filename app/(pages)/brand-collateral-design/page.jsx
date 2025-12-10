import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'

export const metadata = {
  title: "Brand Collateral Design | FAJ IT SOLUTIONS",
  description: "Brand Collateral Design faj IT solutions",
  alternates: {
    canonical: "/brand-collateral-design",
  },
  openGraph: {
    title: "Brand Collateral Design | FAJ IT SOLUTIONS",
    description:
      "Brand Collateral Design faj IT solutions",
    url: "/brand-collateral-design",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Brand Collateral Design",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Brand Collateral Design | FAJ IT SOLUTIONS",
    description:
      "Brand Collateral Design faj IT solutions",
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