import BreadCrumbs from "../../../../components/breadcrumbs"
import useQueryProductDiscounts from "../../../../hooks/query/productDiscount/useQueryProductDIscounts"
import PageDataLayout from "../viewdashboard/layouts/PageDataLayout"
import ProductDiscountFilter from "./ProductDiscountFilter"
import ProductDiscountTable from "./ProductDiscountTable"


const ViewProductDiscount = () => {
    const {dataProductDiscount, error, errorProductDiscount, loadingProductDiscount} = useQueryProductDiscounts()

    if(loadingProductDiscount) return <p>Loading...</p>

    if(errorProductDiscount) return <p>Error...</p>
    return (
        <>
        <BreadCrumbs />
        <PageDataLayout title="Product Discount">
            <ProductDiscountFilter data={dataProductDiscount.data} />
        </PageDataLayout>
        </>
    )
}

export default ViewProductDiscount