import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TestSection from "./components/Deals";
import OurBestProduct from "./components/OurBestProduct";
import Athletes from "./components/Athletes";
import Innovation from "./components/Innovation";
import DumbleWithWater from "./components/DumbleWithWater";
import Instagram from "./components/Instagram";
import FooterSec from "./components/FooterSec";
//sm:py-16 py-6 xl:max-w-[1200px] w-full xl:px-0 sm:px-16 px-6 m-auto
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TestSection />
      <OurBestProduct />
      <Athletes />
      <Innovation />
      <DumbleWithWater />
      <Instagram />
      <FooterSec />
    </>
  );
}

export default App;
