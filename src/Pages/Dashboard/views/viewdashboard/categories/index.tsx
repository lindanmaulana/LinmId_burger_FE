import useQueryCategories from "../../../../../hooks/query/services/useQueryCategories";
import PageDataLayout from "../layouts/PageDataLayout";

const ViewDashboardCategories = () => {
    const {dataCategorie, loadingCategorie, errorCategorie} = useQueryCategories()

    if(loadingCategorie) return <p>Loading...</p>

    if(errorCategorie) return <p>Error...</p>

    console.log(dataCategorie)
  return <PageDataLayout>Categories</PageDataLayout>;
};

export default ViewDashboardCategories;
