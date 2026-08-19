import CTASection from '@/app/components/web-components/CTASection'
import DevskarnelSection from '@/app/components/web-components/DevskarnelSection'
import ServicesSection from '@/app/components/web-components/ServicesSection'
import VideoTestimonials from '@/app/components/web-components/VideoTestimonials'
import WebHero from '@/app/components/web-components/WebHero'
import React from 'react'

const page = () => {
  return (
    <>
      <WebHero />
      <ServicesSection />
      <DevskarnelSection />
      <VideoTestimonials />
      <CTASection />
    </>
  )
}

export default page