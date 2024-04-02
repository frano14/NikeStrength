import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import TestSection from "./components/Deals";
import Test from "./components/Test";
//xl:max-w-[1200px] w-full sm:px-16 px-6h
function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <TestSection />
      <Test />
    </>
  );
}

export default App;
