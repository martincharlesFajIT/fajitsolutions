import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'

export const metadata = {
  title: "Ai for Ecommerce & Insights | FAJ IT SOLUTIONS",
  description: "Ai for Ecommerce & Insights faj IT solutions",
  alternates: {
    canonical: "/ai-for-ecommerce",
  },
  openGraph: {
    title: "Ai for Ecommerce & Insights | FAJ IT SOLUTIONS",
    description:
      "Ai for Ecommerce & Insights faj IT solutions",
    url: "/ai-for-ecommerce",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ai for Ecommerce & Insights",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ai for Ecommerce & Insights | FAJ IT SOLUTIONS",
    description:
      "Ai for Ecommerce & Insights faj IT solutions",
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