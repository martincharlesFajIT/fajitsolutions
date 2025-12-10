import HeroServiceDetail from '@/components/HeroServiceDetail'
import FaqsLaravel from '@/components/webdevelopment/laravel-development/FaqsLaravel'
import GameChangeLaravel from '@/components/webdevelopment/laravel-development/GameChangeLaravel'
import HeroLaravel from '@/components/webdevelopment/laravel-development/HeroLaravel'
import LaravelServices from '@/components/webdevelopment/laravel-development/LaravelServices'
import QuickSupportBanner from '@/components/webdevelopment/laravel-development/QuickSupportBanner'
import WhyChooseLaravel from '@/components/webdevelopment/laravel-development/WhyChooseLaravel'
export const metadata = {
  title: "Laravel Development | FAJ IT SOLUTIONS",
  description: "Laravel Development faj IT solutions",
  alternates: {
    canonical: "/laravel-development",
  },
  openGraph: {
    title: "Laravel Development | FAJ IT SOLUTIONS",
    description:
      "Laravel Development faj IT solutions",
    url: "/laravel-development",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Laravel Development",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Laravel Development | FAJ IT SOLUTIONS",
    description:
      "Laravel Development faj IT solutions",
    images: ["/og-image.jpg"],
  },
};
const page = () => {
  return (
    <div>
      <HeroServiceDetail 
      title="ERP Software: Where Dreams Become Reality"
      description="Faj IT Solutions is not just a service provider; we are an invaluable extension of your marketing team, bringing a powerful combination of strategic thinking, expertise, and flawless execution to the areas where you need it the most."
      />
      <HeroLaravel />
      <LaravelServices />
      <WhyChooseLaravel />
      <QuickSupportBanner />
      <GameChangeLaravel />
      <FaqsLaravel />
    </div>
  )
}

export default page
