import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'
export const metadata = {
  title: "Content Creation & Marketing | FAJ IT SOLUTIONS",
  description: "Content Creation & Marketing faj IT solutions",
  alternates: {
    canonical: "/content-creation-&-marketing",
  },
  openGraph: {
    title: "Content Creation & Marketing | FAJ IT SOLUTIONS",
    description:
      "Content Creation & Marketing faj IT solutions",
    url: "/content-creation-&-marketing",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Content Creation & Marketing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Content Creation & Marketing | FAJ IT SOLUTIONS",
    description:
      "Content Creation & Marketing faj IT solutions",
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