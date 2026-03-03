import CustomCursor from "./components/layout/CustomCursor";
import Hero from "./components/layout/Hero";
import Hnsanimation from "./components/layout/Hnsanimation";
import Navbar from "./components/layout/Navbar";
import Services from "./components/layout/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* <Hero />
      <Services /> */}

      <Hnsanimation />
      <CustomCursor />

    </>
  );
}
