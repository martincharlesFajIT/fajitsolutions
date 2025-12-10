import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'
export const metadata = {
  title: "Penetration Testing | FAJ IT SOLUTIONS",
  description: "Penetration Testing faj IT solutions",
  alternates: {
    canonical: "/penetration-testing",
  },
  openGraph: {
    title: "Penetration Testing | FAJ IT SOLUTIONS",
    description:
      "Penetration Testing faj IT solutions",
    url: "/penetration-testing",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Penetration Testing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Penetration Testing | FAJ IT SOLUTIONS",
    description:
      "Penetration Testing faj IT solutions",
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