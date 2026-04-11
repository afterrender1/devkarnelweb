import CTASection from '@/app/components/web-components/CTASection'
import DevskarnelSection from '@/app/components/web-components/DevskarnelSection'
import Review from '@/app/components/web-components/Review'
import ServicesSection from '@/app/components/web-components/ServicesSection'
import VideoTestimonials from '@/app/components/web-components/VideoTestimonials'
import WebFAQ from '@/app/components/web-components/WebFAQ'
import WebHero from '@/app/components/web-components/WebHero'
import React from 'react'

const page = () => {
  return (
    <>
    <WebHero/>
    <ServicesSection/>
    <DevskarnelSection/>
    <Review/>
    <VideoTestimonials/>
    <WebFAQ/>
    <CTASection/>
    
    </>
  )
}

export default page