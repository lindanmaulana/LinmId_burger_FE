import SAbout from "../../../components/about";
import SReservation from "../../../components/reservation";
import CustomerReviews from "./section/customerReviews";
import Food from "./section/food";
import HeroBanner from "./section/heroBanner";
import Offer from "./section/offer";

const PageHome = () => {
  return (
    <>
      <HeroBanner />
      <Offer />
      <Food />
      <SAbout />
      <SReservation />
      <CustomerReviews />
    </>
  );
};

export default PageHome;
