import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'
export const metadata = {
  title: "Email Marketing | FAJ IT SOLUTIONS",
  description: "Email Marketing faj IT solutions",
  alternates: {
    canonical: "/email-marketing",
  },
  openGraph: {
    title: "Email Marketing | FAJ IT SOLUTIONS",
    description:
      "Email Marketing faj IT solutions",
    url: "/email-marketing",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Email Marketing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Email Marketing | FAJ IT SOLUTIONS",
    description:
      "Email Marketing faj IT solutions",
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