import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'
export const metadata = {
  title: "Cloud Security | FAJ IT SOLUTIONS",
  description: "Cloud Security faj IT solutions",
  alternates: {
    canonical: "/cloud-security-services",
  },
  openGraph: {
    title: "Cloud Security | FAJ IT SOLUTIONS",
    description:
      "Cloud Security faj IT solutions",
    url: "/cloud-security-services",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cloud Security",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ASP .NET MVC | FAJ IT SOLUTIONS",
    description:
      "Cloud Security faj IT solutions",
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