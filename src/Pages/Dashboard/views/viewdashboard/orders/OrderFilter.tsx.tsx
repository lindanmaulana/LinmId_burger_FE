import React, { useCallback, useState } from "react";
import { FaSortDown, FaSortUp } from "react-icons/fa";
import {
  dataOrder,
  dataOrderStatus,
  statusOrder,
} from "../../../../../types/type-orders";
import {
  filterDate,
  FilterStatus,
  FilterTotalPrice,
} from "../../../../../utils/helpers/filterData";
import OrderTable from "./OrderTable";

export interface OrderFilterProps {
  data: dataOrder[];
  handleActionOrder: (id: string, message: string, status: statusOrder) => void;
}

export interface OrderFilterState {
  status: statusOrder | "";
}

const OrderFilter = (props: OrderFilterProps) => {
  const { data, handleActionOrder } = props;
  const [dataOrders, setDataOrders] = useState<dataOrder[] | []>(data);
  const [isSortTotalPrice, setIsSortTotalPrice] = useState<boolean>(false);

  const handleReset = () => {
    setDataOrders(data);
    setIsSortTotalPrice(false);
  };
  // filter by status
  const handleFilterStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    FilterStatus({
      event: e,
      data,
      setData: setDataOrders,
      keyToFilter: "status",
      valReset: false,
      setReset: setIsSortTotalPrice,
    });
  };

  // filter by totalPrice
  const handleFilterTotalPrice = useCallback(() => {
    FilterTotalPrice({
      dataFilter: dataOrders,
      isSort: isSortTotalPrice,
      keyFilter: "total_price",
      setData: setDataOrders,
      setSort: setIsSortTotalPrice,
    });
  }, [dataOrders, isSortTotalPrice]);

  // filter by date
  const handleFilterDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    filterDate({
      data,
      dataFilter: dataOrders,
      event: e,
      isSort: isSortTotalPrice,
      keyFilter: "createdAt",
      setData: setDataOrders,
      setSort: setIsSortTotalPrice,
    });
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
      <OrderTable data={dataOrders} handleActionOrder={handleActionOrder} />
    </div>
  );
};

export default OrderFilter;
