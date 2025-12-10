import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'
export const metadata = {
  title: "Natural Language | FAJ IT SOLUTIONS",
  description: "Natural Language faj IT solutions",
  alternates: {
    canonical: "/natural-language",
  },
  openGraph: {
    title: "Natural Language | FAJ IT SOLUTIONS",
    description:
      "Natural Language faj IT solutions",
    url: "/natural-language",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Natural Language",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Natural Language | FAJ IT SOLUTIONS",
    description:
      "Natural Language faj IT solutions",
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