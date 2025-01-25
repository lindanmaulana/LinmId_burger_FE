import SAlert from "../alert";
import LayoutContainer from "../layouts/LayoutContainer";
import LayoutSection from "../layouts/LayoutSection";
import STitleSection from "../title/titleSection";
import BookReservation from "./BookReservation";
import LocationReservation from "./LocationReservation";

const SReservation = () => {
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

export default SReservation;
