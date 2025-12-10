import HeroServiceDetail from '@/components/HeroServiceDetail'
import AspIndustry from '@/components/webdevelopment/asp-dot-net-mvc/AspIndustry'
import AspNetServices from '@/components/webdevelopment/asp-dot-net-mvc/AspNetServcies'
import HeroAspDotNet from '@/components/webdevelopment/asp-dot-net-mvc/HeroAspDotNet'
import QuickSupportBanner from '@/components/webdevelopment/asp-dot-net-mvc/QuickSupportBanner'
import GameChangeAspDotNet from '@/components/webdevelopment/asp-dot-net-mvc/GameChangeAspDotNet'
import FaqsAspDotNet from '@/components/webdevelopment/asp-dot-net-mvc/FaqsAspDotNet'

export const metadata = {
  title: "ASP .NET MVC | FAJ IT SOLUTIONS",
  description: "ASP .NET MVC faj IT solutions",
  alternates: {
    canonical: "/artificial-intelligence",
  },
  openGraph: {
    title: "ASP .NET MVC | FAJ IT SOLUTIONS",
    description:
      "ASP .NET MVC faj IT solutions",
    url: "/artificial-intelligence",
    siteName: "FAJ IT Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "ASP .NET MVC",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ASP .NET MVC | FAJ IT SOLUTIONS",
    description:
      "ASP .NET MVC faj IT solutions",
    images: ["/og-image.jpg"],
  },
};
const page = () => {
  return (
    <div>
      <HeroServiceDetail
        title="Asp.Net (MVC)"
        description="Bring your ideas to life with our end-to-end E-commerce services. From concept and strategy to design and deployment, we build robust and scalable applications that deliver outstanding performance and user satisfaction."
      />
      <HeroAspDotNet />
      <AspNetServices />
      <QuickSupportBanner />
      <GameChangeAspDotNet />
      <AspIndustry />
      <FaqsAspDotNet />
    </div>
  )
}

export default page
