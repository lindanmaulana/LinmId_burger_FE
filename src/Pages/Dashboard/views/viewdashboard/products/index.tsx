import useQueryProducts from "../../../../../hooks/query/products/useQueryProducts";
import PageDataLayout from "../layouts/PageDataLayout";

const ViewDashboardProducts = () => {
  const { dataProduct, loadingProduct, errorProduct } = useQueryProducts();
  if (loadingProduct) return <p> Loading.. </p>;

  if (errorProduct) return <p>Errorr..</p>;

  return (
    <PageDataLayout>
      Products
    </PageDataLayout>
  );
};

export default ViewDashboardProducts;
