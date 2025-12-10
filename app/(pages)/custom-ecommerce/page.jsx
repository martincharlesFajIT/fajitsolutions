import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'
export const metadata = {
  title: "Custom Ecommerce | FAJ IT SOLUTIONS",
  description: "Custom Ecommerce faj IT solutions",
  alternates: {
    canonical: "/custom-ecommerce",
  },
  openGraph: {
    title: "Custom Ecommerce | FAJ IT SOLUTIONS",
    description:
      "Custom Ecommerce faj IT solutions",
    url: "/custom-ecommerce",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Custom Ecommerce",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Custom Ecommerce | FAJ IT SOLUTIONS",
    description:
      "Custom Ecommerce faj IT solutions",
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