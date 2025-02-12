import ButtonLink from "../../../../../components/button/ButtonLink";
import LayoutContainer from "../../../../../components/layouts/LayoutContainer";
import LayoutSection from "../../../../../components/layouts/LayoutSection";
import useQueryProductDiscounts from "../../../../../hooks/query/productDiscount/useQueryProductDIscounts";
import CardOffer from "./CardOffer";
import OfferSkeleton from "./OfferSkeleton";

const Offer = () => {
  const { dataProductDiscount, loadingProductDiscount, errorProductDiscount, error } = useQueryProductDiscounts()

  return (
    <LayoutSection className="pt-20 pb-10">
      <LayoutContainer className="max-w-6xl">
        <div className="grid grid-cols-2 gap-8 mb-8">
          {loadingProductDiscount ? (
            <>
            <OfferSkeleton />
            <OfferSkeleton />
            </>
          ) : errorProductDiscount ? (
            <p>{error?.message}</p>
          ) : (
            <CardOffer data={dataProductDiscount.data} />
          )}
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
