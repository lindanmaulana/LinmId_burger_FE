import SAlert from "../../../../../components/alert";
import LayoutContainer from "../../../../../components/layouts/LayoutContainer";
import LayoutSection from "../../../../../components/layouts/LayoutSection";
import STitleSection from "../../../../../components/title/titleSection";
import BookReservation from "./BookReservation";
import LocationReservation from "./LocationReservation";

const Reservation = () => {
  return (
    <LayoutSection className="py-20">
      <LayoutContainer className="max-w-6xl">
        <STitleSection className="mb-6">Reservation Table</STitleSection>
        <div className="grid grid-cols-2 gap-12">
          <BookReservation />
          <LocationReservation />
        </div>
        <SAlert />
      </LayoutContainer>
    </LayoutSection>
  );
};

export default Reservation;
