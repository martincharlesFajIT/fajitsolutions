import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'
export const metadata = {
  title: "Microsoft Dynamics | FAJ IT SOLUTIONS",
  description: "Microsoft Dynamics faj IT solutions",
  alternates: {
    canonical: "/microsoft-dynamics-365",
  },
  openGraph: {
    title: "Microsoft Dynamics | FAJ IT SOLUTIONS",
    description:
      "Microsoft Dynamics faj IT solutions",
    url: "/microsoft-dynamics-365",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Microsoft Dynamics",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Microsoft Dynamics | FAJ IT SOLUTIONS",
    description:
      "Microsoft Dynamics faj IT solutions",
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