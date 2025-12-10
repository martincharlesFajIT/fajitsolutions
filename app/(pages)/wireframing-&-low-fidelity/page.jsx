import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'
export const metadata = {
  title: "Wireframing and Low Fidelity | FAJ IT SOLUTIONS",
  description: "Wireframing and Low Fidelity faj IT solutions",
  alternates: {
    canonical: "/wireframing-&-low-fidelity",
  },
  openGraph: {
    title: "Wireframing and Low Fidelity | FAJ IT SOLUTIONS",
    description:
      "Wireframing and Low Fidelity faj IT solutions",
    url: "/wireframing-&-low-fidelity",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Wireframing and Low Fidelity",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Wireframing and Low Fidelity | FAJ IT SOLUTIONS",
    description:
      "Wireframing and Low Fidelity faj IT solutions",
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