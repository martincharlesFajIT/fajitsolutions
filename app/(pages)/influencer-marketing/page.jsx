import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'
export const metadata = {
  title: "Influencer Maketing | FAJ IT SOLUTIONS",
  description: "Influencer Maketing faj IT solutions",
  alternates: {
    canonical: "/influencer-marketing",
  },
  openGraph: {
    title: "Influencer Maketing | FAJ IT SOLUTIONS",
    description:
      "Influencer Maketing faj IT solutions",
    url: "/influencer-marketing",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Influencer Maketing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Influencer Maketing | FAJ IT SOLUTIONS",
    description:
      "Influencer Maketing faj IT solutions",
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