import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'
export const metadata = {
  title: "Computer Vision Solutions | FAJ IT SOLUTIONS",
  description: "Computer Vision Solutions faj IT solutions",
  alternates: {
    canonical: "/computer-vision-solutions",
  },
  openGraph: {
    title: "Computer Vision Solutions | FAJ IT SOLUTIONS",
    description:
      "Computer Vision Solutions faj IT solutions",
    url: "/computer-vision-solutions",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ASP .NET MVC",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Computer Vision Solutions | FAJ IT SOLUTIONS",
    description:
      "Computer Vision Solutions faj IT solutions",
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