import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'
export const metadata = {
  title: "Online Reputation Management | FAJ IT SOLUTIONS",
  description: "Online Reputation Management faj IT solutions",
  alternates: {
    canonical: "/online-reputation-management",
  },
  openGraph: {
    title: "Online Reputation Management | FAJ IT SOLUTIONS",
    description:
      "Online Reputation Management faj IT solutions",
    url: "/online-reputation-management",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Online Reputation Management",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Online Reputation Management | FAJ IT SOLUTIONS",
    description:
      "Online Reputation Management faj IT solutions",
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