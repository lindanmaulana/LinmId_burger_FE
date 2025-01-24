import { useQuery } from "@tanstack/react-query";
import ButtonLink from "../../../../../components/button/ButtonLink";
import LayoutContainer from "../../../../../components/layouts/LayoutContainer";
import LayoutSection from "../../../../../components/layouts/LayoutSection";
import { ServiceDiscountsGetAll } from "../../../../../utils/discounts";
import CardOffer from "./CardOffer";

const Offer = () => {
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
          <CardOffer data={data.data} />
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

export default Offer;
