import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'
export const metadata = {
  title: "Psd to Html | FAJ IT SOLUTIONS",
  description: "Psd to Html faj IT solutions",
  alternates: {
    canonical: "/psd-to-html",
  },
  openGraph: {
    title: "Psd to Html | FAJ IT SOLUTIONS",
    description:
      "Psd to Html faj IT solutions",
    url: "/psd-to-html",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Psd to Html",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Psd to Html | FAJ IT SOLUTIONS",
    description:
      "Psd to Html faj IT solutions",
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