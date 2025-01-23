import { useQuery } from "@tanstack/react-query";
import ButtonLink from "../../../../../Components/Button/ButtonLink";
import LayoutContainer from "../../../../../Components/Layouts/LayoutContainer";
import LayoutSection from "../../../../../Components/Layouts/LayoutSection";
import { ServiceDiscountsGetAll } from "../../../../../utils/discounts";
import CardProductDiscount from "./CardProductDiscount";

const ProductDiscount = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["queryGetAllDiscount"],
    queryFn: () => ServiceDiscountsGetAll(),
  });

  if (isLoading) return <p>Loading..</p>;

  if (isError) return <p>Error </p>;

  return (
    <LayoutSection className="pt-20 pb-10">
      <LayoutContainer className="max-w-6xl">
        <div className="grid grid-cols-2 gap-8 mb-8">
          <CardProductDiscount data={data.data} />
        </div>
        <ButtonLink
          to="/product-discount"
          className="flex items-center justify-center mx-auto text-center max-w-40"
        >
          Read More
        </ButtonLink>
      </LayoutContainer>
    </LayoutSection>
  );
};

export default ProductDiscount;
