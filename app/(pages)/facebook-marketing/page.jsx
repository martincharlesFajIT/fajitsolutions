import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'
export const metadata = {
  title: "Facebook Marketing | FAJ IT SOLUTIONS",
  description: "Facebook Marketing faj IT solutions",
  alternates: {
    canonical: "/facebook-marketing",
  },
  openGraph: {
    title: "Facebook Marketing | FAJ IT SOLUTIONS",
    description:
      "Facebook Marketing faj IT solutions",
    url: "/facebook-marketing",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Facebook Marketing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Facebook Marketing | FAJ IT SOLUTIONS",
    description:
      "Facebook Marketing faj IT solutions",
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