import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'
export const metadata = {
  title: "Responsive Web Desing | FAJ IT SOLUTIONS",
  description: "Responsive Web Desing faj IT solutions",
  alternates: {
    canonical: "/responsive-webdesign",
  },
  openGraph: {
    title: "Responsive Web Desing | FAJ IT SOLUTIONS",
    description:
      "Responsive Web Desing faj IT solutions",
    url: "/responsive-webdesign",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Responsive Web Desing",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Responsive Web Desing | FAJ IT SOLUTIONS",
    description:
      "Responsive Web Desing faj IT solutions",
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