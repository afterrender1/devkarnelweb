import CustomCursor from "./components/layout/CustomCursor";
import Hnsanimation from "./components/layout/Hnsanimation";
import Navbar from "./components/layout/Navbar";
import Portfolio from "./components/layout/Portfolio";
import Testimonials from "./components/layout/Testimonials";

export default function Home() {
  return (
    <>
      <Navbar />


      <Hnsanimation />
      <CustomCursor />
      <Portfolio />
      <Testimonials />

    </>
  );
}
