import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TestSection from "./components/Deals";
import OurBestProduct from "./components/OurBestProduct";
import Athletes from "./components/Athletes";
//xl:max-w-[1200px] w-full sm:px-16 px-6
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TestSection />
      <OurBestProduct />
      <Athletes />
    </>
  );
}

export default App;
