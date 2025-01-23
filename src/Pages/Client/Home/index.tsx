import About from "./Section/About";
import Food from "./Section/Food";
import HeroBanner from "./Section/HeroBanner";
import Offer from "./Section/Offer";

const PageHome = () => {
  return (
    <>
      <HeroBanner />
      <Offer />
      <Food />
      <About />
    </>
  );
};

export default PageHome;
