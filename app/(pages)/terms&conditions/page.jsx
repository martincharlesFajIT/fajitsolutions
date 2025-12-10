import TermsConditions from '@/components/terms&conditions/TermsConditions'
import React from 'react'
export const metadata = {
  title: "Terms & Conditions | FAJ IT SOLUTIONS",
  description: "Terms & Conditions faj IT solutions",
  alternates: {
    canonical: "/terms&conditions",
  },
  openGraph: {
    title: "Terms & Conditions | FAJ IT SOLUTIONS",
    description:
      "Terms & Conditions faj IT solutions",
    url: "/terms&conditions",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Terms & Conditions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms & Conditions | FAJ IT SOLUTIONS",
    description:
      "Terms & Conditions faj IT solutions",
    images: ["/og-image.jpg"],
  },
};
const page = () => {
  return (
    <div>
      <TermsConditions />
    </div>
  )
}

export default page
