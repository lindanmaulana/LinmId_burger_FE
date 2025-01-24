import About from "./section/about";
import Food from "./section/food";
import HeroBanner from "./section/heroBanner";
import Offer from "./section/offer";
import Reservation from "./section/reservation";

const PageHome = () => {
  return (
    <>
      <HeroBanner />
      <Offer />
      <Food />
      <About />
      <Reservation />
    </>
  );
};

export default PageHome;
