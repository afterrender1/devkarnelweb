import CaseStudies from '@/app/components/CaseStudies'
import CTASection from '@/app/components/web-components/CTASection'
import DevskarnelSection from '@/app/components/web-components/DevskarnelSection'
import ServicesSection from '@/app/components/web-components/ServicesSection'
import WebFAQ from '@/app/components/web-components/WebFAQ'
import WebHero from '@/app/components/web-components/WebHero'
import React from 'react'

const page = () => {
  return (
    <>
    <WebHero/>
    <ServicesSection/>
    <DevskarnelSection/>
    <WebFAQ/>
    <CaseStudies/>
    <CTASection/>
    
    </>
  )
}

export default page