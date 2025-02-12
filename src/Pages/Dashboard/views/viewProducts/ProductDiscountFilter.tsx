import { useState } from "react";
import ProductDiscountTable from "./ProductDiscountTable";
import { dataStatusDiscount, discount } from "../../../../types/type-discounts";
import { FaSortDown, FaSortUp } from "react-icons/fa";
import { helperFormatDate } from "../../../../utils/helpers/formatDate";
import { statusDiscount } from "../../../../types/type-product";

interface ProductDiscountFilterProps {
  data: discount[];
}
const ProductDiscountFilter = (props: ProductDiscountFilterProps) => {
  const { data } = props;
  const [dataProductDiscount, setDataProductDiscount] =
    useState<discount[]>(data);
  const [sortDiscount, setSortDiscount] = useState<boolean>(false);

  const handleReset = () => {
    setDataProductDiscount(data);
    setSortDiscount(false);
  };

  // filter by status
  const handleFilterStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const filter = e.target.value;

    if (filter === "") {
      setDataProductDiscount(data);
    } else {
      const discount = data.filter(
        (discount: discount) => discount.status === filter
      );
      setDataProductDiscount(discount);
    }

    setSortDiscount(false);
  };

  // filter by totalPrice
  const handleFilterTotalPrice = () => {
    setSortDiscount(!sortDiscount);

    if (sortDiscount) {
      const sortData = [...dataProductDiscount].sort(
        (a, b) => a.discount_percentage - b.discount_percentage
      );
      setDataProductDiscount(sortData);
    } else {
      const sortData = [...dataProductDiscount].sort(
        (a, b) => b.discount_percentage - a.discount_percentage
      );
      setDataProductDiscount(sortData);
    }
  };

  // filter by date
  const handleFilterDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filter = e.target.value;

    if (!filter) {
      setDataProductDiscount([...dataProductDiscount]);
    }

    const filterDataOrders = data.filter((order: discount) => {
      const orderDate = helperFormatDate(order.createdAt).split(",")[0];

      return orderDate === filter;
    });

    setDataProductDiscount(filterDataOrders);
    setSortDiscount(false);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between gap-4 font-open-sans-regular">
        <button
          className="px-2 text-sm text-white rounded bg-devRed"
          onClick={handleReset}
        >
          Reset
        </button>
        <div className="flex items-center gap-4">
          <label
            htmlFor="filterDate"
            className="px-1 overflow-hidden text-sm border rounded border-devBlack/20"
          >
            <input
              type="date"
              id="filterDate"
              onChange={handleFilterDate}
              className="cursor-pointer"
            />
          </label>

          <button
            onClick={handleFilterTotalPrice}
            className="flex items-center gap-px px-1 text-sm border rounded border-devBlack/20"
          >
            Filter Discount
            {sortDiscount ? <FaSortUp /> : <FaSortDown />}
          </button>

          <label
            htmlFor="filterStatus"
            className="flex items-center overflow-hidden border rounded border-devBlack/20"
          >
            <select
              id="filterStatus"
              onChange={(e) => handleFilterStatus(e)}
              className="text-sm cursor-pointer"
            >
              <option value="">--status--</option>
              {dataStatusDiscount.map((order: statusDiscount) => (
                <option key={order} value={order}>
                  {order}
                </option>
              ))}
            </select>
            <span className="text-sm"></span>
          </label>
        </div>
      </div>
      <ProductDiscountTable
        data={dataProductDiscount}
        // handleActionOrder={handleActionOrder}
      />
    </div>
  );
};

export default ProductDiscountFilter;
