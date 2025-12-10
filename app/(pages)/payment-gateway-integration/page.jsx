import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'
export const metadata = {
  title: "Payment Getway Integration | FAJ IT SOLUTIONS",
  description: "Payment Getway Integration faj IT solutions",
  alternates: {
    canonical: "/payment-gateway-integration",
  },
  openGraph: {
    title: "Payment Getway Integration | FAJ IT SOLUTIONS",
    description:
      "Payment Getway Integration faj IT solutions",
    url: "/payment-gateway-integration",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Payment Getway Integration",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Payment Getway Integration | FAJ IT SOLUTIONS",
    description:
      "Payment Getway Integration faj IT solutions",
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