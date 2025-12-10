import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'
export const metadata = {
  title: "Product Packing Design | FAJ IT SOLUTIONS",
  description: "Product Packing Design faj IT solutions",
  alternates: {
    canonical: "/product-packaging-design",
  },
  openGraph: {
    title: "Product Packing Design | FAJ IT SOLUTIONS",
    description:
      "Product Packing Design faj IT solutions",
    url: "/product-packaging-design",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Product Packing Design",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Product Packing Design | FAJ IT SOLUTIONS",
    description:
      "Product Packing Design faj IT solutions",
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