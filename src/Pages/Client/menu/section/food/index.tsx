import SFoodMenu from "../../../../../components/foodMenu";
import LayoutContainer from "../../../../../components/layouts/LayoutContainer";
import LayoutSection from "../../../../../components/layouts/LayoutSection";

const MenuFood = () => {
  return (
    <LayoutSection className="">
      <LayoutContainer className="max-w-6xl">
        <div className="flex flex-col py-20">
          <SFoodMenu />
        </div>
      </LayoutContainer>
    </LayoutSection>
  );
};

export default MenuFood;
