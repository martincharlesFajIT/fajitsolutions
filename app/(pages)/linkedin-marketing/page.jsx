import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'
export const metadata = {
  title: "Linkedin Marketing | FAJ IT SOLUTIONS",
  description: "Linkedin Marketing faj IT solutions",
  alternates: {
    canonical: "/linkedin-marketing",
  },
  openGraph: {
    title: "Linkedin Marketing | FAJ IT SOLUTIONS",
    description:
      "Linkedin Marketing faj IT solutions",
    url: "/linkedin-marketing",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Linkedin Marketing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Linkedin Marketing | FAJ IT SOLUTIONS",
    description:
      "Linkedin Marketing faj IT solutions",
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