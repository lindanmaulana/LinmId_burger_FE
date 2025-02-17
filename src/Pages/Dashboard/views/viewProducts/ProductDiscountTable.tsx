import { Link } from "react-router-dom";
import { discount } from "../../../../types/type-discounts";
import { helperFormatDate } from "../../../../utils/helpers/formatDate";
import Table from "../../components/table";
import TbodyItem from "../../components/table/TbodyTd";
import TbodyTr from "../../components/table/TbodyTr";
import Thead from "../../components/table/Thead";

interface ProductDiscountTableProps {
  data: discount[];
}
const ProductDiscountTable = (props: ProductDiscountTableProps) => {
  const { data } = props;

  console.log({ dataDiscount: data });
  return (
    <Table>
      <Thead
        titleHeading={[
          "No",
          "Product",
          "Category",
          "Price",
          "Status",
          "Name Discount",
          "Discount",
          "ValidFrom",
          "Expired",
          "",
        ]}
      />
      {data.length > 0 ? (
        data.map((discount: discount, index: number) => {
          const discountStartDate = helperFormatDate(discount.start_date);
          const discountEndDate = helperFormatDate(discount.end_date);
          return (
            <TbodyTr key={discount._id}>
              <TbodyItem>{index + 1}</TbodyItem>
              <TbodyItem>{discount.id_product.name}</TbodyItem>
              <TbodyItem>{discount.id_product.id_categorie.name}</TbodyItem>
              <TbodyItem>{discount.id_product.price}</TbodyItem>
              <TbodyItem>
                <span
                  className={`${
                    discount.status === "upcoming"
                      ? "bg-orange-500"
                      : discount.status === "expired"
                      ? "bg-red-500"
                      : discount.status === "active"
                      ? "bg-blue-500"
                      : ""
                  } rounded text-white text-xs px-2 py-1 `}
                >
                  {discount.status}
                </span>
              </TbodyItem>
              <TbodyItem>{discount.name_discount}</TbodyItem>
              <TbodyItem>{discount.discount_percentage}%</TbodyItem>
              <TbodyItem>{discountStartDate}</TbodyItem>
              <TbodyItem>{discountEndDate}</TbodyItem>
              <TbodyItem>
                <Link to={`/dashboard/product-discount/${discount._id}`} className="px-3 py-1 text-xs text-white rounded bg-devGreen">Update</Link>
              </TbodyItem>
            </TbodyTr>
          );
        })
      ) : (
        <TbodyTr>
          <TbodyItem colSpan={11} className="text-center">
            <p className="text-sm text-red-500">Not found</p>
          </TbodyItem>
        </TbodyTr>
      )}
    </Table>
  );
};

export default ProductDiscountTable;
