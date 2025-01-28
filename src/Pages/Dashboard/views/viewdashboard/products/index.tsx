import BreadCrumbs from "../../../../../components/breadcrumbs";
import useQueryProducts from "../../../../../hooks/query/products/useQueryProducts";

const ViewDashboardProducts = () => {
  const { dataProducts, loadingProducts, errorProducts } = useQueryProducts();
  if (loadingProducts) return <p> Loading.. </p>;

  if (errorProducts) return <p>Errorr..</p>;

  console.log(dataProducts)
  return (
    <>
      <BreadCrumbs />
    </>
  );
};

export default ViewDashboardProducts;
