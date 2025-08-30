import HeroServiceDetail from '@/components/HeroServiceDetail'
import FaqsLaravel from '@/components/webdevelopment/laravel-development/FaqsLaravel'
import LaravelServices from '@/components/webdevelopment/laravel-development/LaravelServices'
import QuickSupportBanner from '@/components/webdevelopment/laravel-development/QuickSupportBanner'
import WhyChooseLaravel from '@/components/webdevelopment/laravel-development/WhyChooseLaravel'

const page = () => {
  return (
    <div>
      <HeroServiceDetail 
      title="ERP Software: Where Dreams Become Reality"
        description="Faj IT Solutions is not just a service provider; we are an invaluable extension of your marketing team, bringing a powerful combination of strategic thinking, expertise, and flawless execution to the areas where you need it the most."
      />
      <LaravelServices />
      <WhyChooseLaravel />
      <QuickSupportBanner />
      <FaqsLaravel />
    </div>
  )
}

export default page
