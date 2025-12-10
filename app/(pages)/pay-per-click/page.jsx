import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'
export const metadata = {
  title: "Pay Per Click | FAJ IT SOLUTIONS",
  description: "Pay Per Click faj IT solutions",
  alternates: {
    canonical: "/pay-per-click",
  },
  openGraph: {
    title: "Pay Per Click | FAJ IT SOLUTIONS",
    description:
      "Pay Per Click faj IT solutions",
    url: "/pay-per-click",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pay Per Click",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pay Per Click | FAJ IT SOLUTIONS",
    description:
      "Pay Per Click faj IT solutions",
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