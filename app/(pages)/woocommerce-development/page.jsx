import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'
export const metadata = {
  title: "Woocommerce Development | FAJ IT SOLUTIONS",
  description: "Woocommerce Development faj IT solutions",
  alternates: {
    canonical: "/woocommerce-development",
  },
  openGraph: {
    title: "Woocommerce Development | FAJ IT SOLUTIONS",
    description:
      "Woocommerce Development faj IT solutions",
    url: "/woocommerce-development",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Woocommerce Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Woocommerce Development | FAJ IT SOLUTIONS",
    description:
      "Woocommerce Development faj IT solutions",
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