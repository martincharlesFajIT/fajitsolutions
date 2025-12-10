import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'
export const metadata = {
  title: "Data Encryption and Projection | FAJ IT SOLUTIONS",
  description: "Data Encryption and Projection faj IT solutions",
  alternates: {
    canonical: "/data-encryption-&-protection",
  },
  openGraph: {
    title: "Data Encryption and Projection | FAJ IT SOLUTIONS",
    description:
      "Data Encryption and Projection faj IT solutions",
    url: "/data-encryption-&-protection",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Data Encryption and Projection",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Data Encryption and Projection | FAJ IT SOLUTIONS",
    description:
      "Data Encryption and Projection faj IT solutions",
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