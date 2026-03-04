import CustomCursor from "./components/layout/CustomCursor";
import Hnsanimation from "./components/layout/Hnsanimation";
import Navbar from "./components/layout/Navbar";
import Portfolio from "./components/layout/Portfolio";

export default function Home() {
  return (
    <>
      <Navbar />


      <Hnsanimation />
      <CustomCursor />
      <Portfolio />

    </>
  );
}
