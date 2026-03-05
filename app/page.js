import About from "./components/layout/About";
import Contact from "./components/layout/Contact";
import CustomCursor from "./components/layout/CustomCursor";
import Footer from "./components/layout/Footer";
import Hnsanimation from "./components/layout/Hnsanimation";
import Navbar from "./components/layout/Navbar";
import Portfolio from "./components/layout/Portfolio";
import Testimonials from "./components/layout/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />


      <Hnsanimation />
      <Testimonials />
      <About />
      <CustomCursor />
      <Portfolio />
      <Contact />
      <Footer />

    </>
  );
}
