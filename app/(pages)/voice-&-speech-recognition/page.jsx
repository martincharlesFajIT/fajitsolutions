import ComingSoon from '@/components/commingsoon/ComingSoon'
import React from 'react'
export const metadata = {
  title: "Voice and Speech Recognition | FAJ IT SOLUTIONS",
  description: "Voice and Speech Recognition faj IT solutions",
  alternates: {
    canonical: "/voice-&-speech-recognition",
  },
  openGraph: {
    title: "Voice and Speech Recognition | FAJ IT SOLUTIONS",
    description:
      "Voice and Speech Recognition faj IT solutions",
    url: "/voice-&-speech-recognition",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Voice and Speech Recognition",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Voice and Speech Recognition | FAJ IT SOLUTIONS",
    description:
      "Voice and Speech Recognition faj IT solutions",
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