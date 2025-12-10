import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'
export const metadata = {
  title: "Graphic Design | FAJ IT SOLUTIONS",
  description: "Graphic Design faj IT solutions",
  alternates: {
    canonical: "/graphic-design",
  },
  openGraph: {
    title: "Graphic Design | FAJ IT SOLUTIONS",
    description:
      "Graphic Design faj IT solutions",
    url: "/graphic-design",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Graphic Design",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Graphic Design | FAJ IT SOLUTIONS",
    description:
      "Graphic Design faj IT solutions",
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