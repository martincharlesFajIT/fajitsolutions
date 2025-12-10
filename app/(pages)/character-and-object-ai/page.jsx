import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'

export const metadata = {
  title: "Character & Object | FAJ IT SOLUTIONS",
  description: "Character & Object faj IT solutions",
  alternates: {
    canonical: "/character-and-object-ai",
  },
  openGraph: {
    title: "Character & Object | FAJ IT SOLUTIONS",
    description:
      "Character & Object faj IT solutions",
    url: "/character-and-object-ai",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Character & Object",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Character & Object | FAJ IT SOLUTIONS",
    description:
      "Character & Object faj IT solutions",
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