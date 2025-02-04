import React, { useState } from "react";
import { FaSortDown, FaSortUp } from "react-icons/fa";
import {
  dataOrder,
  dataOrderStatus,
  order,
  statusOrder,
} from "../../../../../types/type-orders";
import OrderTable from "./OrderTable";
import { helperFormatDate } from "../../../../../utils/helpers/formatDate";

export interface OrderFilterProps {
  data: dataOrder[];
  handleActionOrder: (id: string, message: string, status: statusOrder) => void;
}

export interface OrderFilterState {
  status: statusOrder | "";
}

const OrderFilter = (props: OrderFilterProps) => {
  const { data, handleActionOrder } = props;
  const [dataOrder, setDataOrder] = useState<dataOrder[] | []>(data);
  const [isSortTotalPrice, setIsSortTotalPrice] = useState<boolean>(false);

  // filter by status
  const handleFilterStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const filter = e.target.value;

    if (filter === "") {
      setDataOrder(data);
    } else {
      const orders = data.filter((order: order) => order.status === filter);
      setDataOrder(orders);
    }

    setIsSortTotalPrice(false);
  };

  // filter by totalPrice
  const handleFilterTotalPrice = () => {
    setIsSortTotalPrice(!isSortTotalPrice);

    if (isSortTotalPrice) {
      const sortData = [...dataOrder].sort(
        (a, b) => a.total_price - b.total_price
      );
      setDataOrder(sortData);
    } else {
      const sortData = [...dataOrder].sort(
        (a, b) => b.total_price - a.total_price
      );
      setDataOrder(sortData);
    }
  };

  // filter by date
  const handleFilterDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filter = e.target.value;

    if (!filter) {
      setDataOrder([...dataOrder]);
    }

    const filterDataOrders = data.filter((order: dataOrder) => {
      const orderDate = helperFormatDate(order.createdAt).split(",")[0];

      return orderDate === filter;
    });

    setDataOrder(filterDataOrders);
    setIsSortTotalPrice(false);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between gap-4 font-open-sans-regular">
        <button className="px-2 text-sm text-white rounded bg-devRed" onClick={() => setDataOrder(data)}>Reset</button>
        <div className="flex items-center gap-4">
          <label
            htmlFor="filterDate"
            className="px-1 overflow-hidden text-sm border rounded border-devBlack/20"
          >
            <input type="date" id="filterDate" onChange={handleFilterDate} className="cursor-pointer" />
          </label>

          <button
            onClick={handleFilterTotalPrice}
            className="flex items-center gap-px px-1 text-sm border rounded border-devBlack/20"
          >
            Filter
            {isSortTotalPrice ? <FaSortUp /> : <FaSortDown />}
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
              {dataOrderStatus.map((order: statusOrder) => (
                <option key={order} value={order}>
                  {order}
                </option>
              ))}
            </select>
            <span className="text-sm"></span>
          </label>
        </div>
      </div>
      <OrderTable data={dataOrder} handleActionOrder={handleActionOrder} />
    </div>
  );
};

export default OrderFilter;
