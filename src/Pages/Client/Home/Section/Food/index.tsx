import SFoodMenu from "../../../../../components/foodMenu";
import LayoutContainer from "../../../../../components/layouts/LayoutContainer";
import LayoutSection from "../../../../../components/layouts/LayoutSection";

const Food = () => {
  return (
    <LayoutSection className="py-10">
      <LayoutContainer className="max-w-6xl ">
          <SFoodMenu />
      </LayoutContainer>
    </LayoutSection>
  );
};

export default Food;
