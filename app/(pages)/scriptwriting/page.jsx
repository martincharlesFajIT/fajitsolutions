import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'
export const metadata = {
  title: "Script Wrting | FAJ IT SOLUTIONS",
  description: "Script Wrting faj IT solutions",
  alternates: {
    canonical: "/scriptwriting",
  },
  openGraph: {
    title: "Script Wrting | FAJ IT SOLUTIONS",
    description:
      "Script Wrting faj IT solutions",
    url: "/scriptwriting",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Script Wrting",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Script Wrting | FAJ IT SOLUTIONS",
    description:
      "Script Wrting faj IT solutions",
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