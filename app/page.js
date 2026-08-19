import dynamic from "next/dynamic";
import Hero from "./components/Hero";
import Services from "./components/Services";

const Testimonials = dynamic(() => import("./components/Testimonials"));
const Contact = dynamic(() => import("./components/Contact"));
const FAQ = dynamic(() => import("./components/FAQ"));

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Testimonials />
      <Contact />
      <FAQ />
    </>
  );
}
