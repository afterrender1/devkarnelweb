import CaseStudies from '@/app/components/CaseStudies'
import Contact from '@/app/components/Contact'
import ServicesSection from '@/app/components/web-components/ServicesSection'
import WebHero from '@/app/components/web-components/WebHero'
import React from 'react'

const page = () => {
  return (
    <>
    <WebHero/>
    <ServicesSection/>
    <CaseStudies/>
    <Contact/>
    
    </>
  )
}

export default page