import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'
export const metadata = {
  title: "Info Graphics | FAJ IT SOLUTIONS",
  description: "Info Graphics faj IT solutions",
  alternates: {
    canonical: "/info-graphics",
  },
  openGraph: {
    title: "Info Graphics | FAJ IT SOLUTIONS",
    description:
      "Info Graphics faj IT solutions",
    url: "/info-graphics",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Info Graphics",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Info Graphics | FAJ IT SOLUTIONS",
    description:
      "Info Graphics faj IT solutions",
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