import HeroServiceDetail from '@/components/HeroServiceDetail'
import FAQsMG from '@/components/advertising/2d-&-3d-animation/motion-grahics/FAQsMG'
import MotionGraphics from '@/components/advertising/2d-&-3d-animation/motion-grahics/MotionGraphics'
import MotionGraphicsProcess from '@/components/advertising/2d-&-3d-animation/motion-grahics/MotionGraphicsProcess'
import MotionServices from '@/components/advertising/2d-&-3d-animation/motion-grahics/MotionServices'
import MotionCtaBanner from '@/components/advertising/2d-&-3d-animation/motion-grahics/MotionctaBanner'
import TechBehindGM from '@/components/advertising/2d-&-3d-animation/motion-grahics/TechBehindMG'
import WhyChooseMG from '@/components/advertising/2d-&-3d-animation/motion-grahics/WhyChooseMG'

const page = () => {
  return (
    <div>
      <HeroServiceDetail 
      title="Motion Graphics"
        description="Bring your ideas to life with our end-to-end mobile app development services. From concept and strategy to design and deployment, we build robust and scalable applications that deliver outstanding performance and user satisfaction."
      />
      <MotionGraphics />
      <MotionServices />
      <MotionCtaBanner />
      <WhyChooseMG />
      <MotionGraphicsProcess />
      <TechBehindGM />
      <FAQsMG />
    </div>
  )
}

export default page
