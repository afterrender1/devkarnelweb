import CaseStudies from "./components/CaseStudies";
import Hero from "./components/Hero";
import Contact from "./components/Contact";

import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <CaseStudies/>
      <Services/>
      <Testimonials/>
      <Contact/>
      <Footer/>


    </>
  );
}
