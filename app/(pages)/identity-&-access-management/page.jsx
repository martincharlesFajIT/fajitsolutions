import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'
export const metadata = {
  title: "Identity and Access Management | FAJ IT SOLUTIONS",
  description: "Identity and Access Management faj IT solutions",
  alternates: {
    canonical: "/identity-&-access-management",
  },
  openGraph: {
    title: "Identity and Access Management | FAJ IT SOLUTIONS",
    description:
      "Identity and Access Management faj IT solutions",
    url: "/identity-&-access-management",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Identity and Access Management",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Identity and Access Management | FAJ IT SOLUTIONS",
    description:
      "Identity and Access Management faj IT solutions",
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