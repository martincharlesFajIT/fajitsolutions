import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'
export const metadata = {
  title: "Storyboard Creation | FAJ IT SOLUTIONS",
  description: "Storyboard Creation faj IT solutions",
  alternates: {
    canonical: "/storyboard-creation",
  },
  openGraph: {
    title: "Storyboard Creation | FAJ IT SOLUTIONS",
    description:
      "Storyboard Creation faj IT solutions",
    url: "/storyboard-creation",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Storyboard Creation",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Storyboard Creation | FAJ IT SOLUTIONS",
    description:
      "Storyboard Creation faj IT solutions",
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