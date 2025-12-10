import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'
export const metadata = {
  title: "Firewall Intrusion Prevention | FAJ IT SOLUTIONS",
  description: "Firewall Intrusion Prevention faj IT solutions",
  alternates: {
    canonical: "/firewall-&-intrusion-prevention",
  },
  openGraph: {
    title: "Firewall Intrusion Prevention | FAJ IT SOLUTIONS",
    description:
      "Firewall Intrusion Prevention faj IT solutions",
    url: "/firewall-&-intrusion-prevention",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Firewall Intrusion Prevention",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Firewall Intrusion Prevention | FAJ IT SOLUTIONS",
    description:
      "Firewall Intrusion Prevention faj IT solutions",
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