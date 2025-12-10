import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'
export const metadata = {
  title: "Instagram Marketing | FAJ IT SOLUTIONS",
  description: "Instagram Marketing faj IT solutions",
  alternates: {
    canonical: "/instagram-marketing",
  },
  openGraph: {
    title: "Instagram Marketing | FAJ IT SOLUTIONS",
    description:
      "Instagram Marketing faj IT solutions",
    url: "/instagram-marketing",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Instagram Marketing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Instagram Marketing | FAJ IT SOLUTIONS",
    description:
      "Instagram Marketing faj IT solutions",
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