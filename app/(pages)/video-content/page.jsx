import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'
export const metadata = {
  title: "Video Content | FAJ IT SOLUTIONS",
  description: "Video Content faj IT solutions",
  alternates: {
    canonical: "/video-content",
  },
  openGraph: {
    title: "Video Content | FAJ IT SOLUTIONS",
    description:
      "Video Content faj IT solutions",
    url: "/video-content",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Video Content",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Video Content | FAJ IT SOLUTIONS",
    description:
      "Video Content faj IT solutions",
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