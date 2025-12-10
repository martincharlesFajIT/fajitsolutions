import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'
export const metadata = {
  title: "Shopify Plus Development | FAJ IT SOLUTIONS",
  description: "Shopify Plus Development faj IT solutions",
  alternates: {
    canonical: "/shopify-plus-development",
  },
  openGraph: {
    title: "Shopify Plus Development | FAJ IT SOLUTIONS",
    description:
      "Shopify Plus Development faj IT solutions",
    url: "/shopify-plus-development",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shopify Plus Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shopify Plus Development | FAJ IT SOLUTIONS",
    description:
      "Shopify Plus Development faj IT solutions",
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