import React, { useState } from "react";
import {
  dataOrder,
  dataOrderStatus,
  order,
  statusOrder,
} from "../../../../../types/type-orders";
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
    const [dataOrder, setDataOrder] = useState<dataOrder[] | []>(data)
    const [isSortTotalPrice, setIsSortTotalPrice] = useState<boolean>(false)

  const handleFilterStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const filter = e.target.value
    
    if(filter === "") {
        setDataOrder(data)
        
    } else {
        const orders = data.filter((order: order) => order.status === filter)
        setDataOrder(orders)
    }
  }

  const handleFilterTotalPrice = () => {
    setIsSortTotalPrice(!isSortTotalPrice)

    if(isSortTotalPrice) {
        const sortData = data.sort((a, b) => a.total_price - b.total_price)
        setDataOrder(sortData)
        
    } else {
        const sortData = data.sort((a, b) => b.total_price - a.total_price)
        setDataOrder(sortData)
    }
  }


  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-end">
        <label htmlFor="" className="flex items-center overflow-hidden border rounded border-devBlack/20">
          <select name="" id="" onChange={(e) => handleFilterStatus(e)} className="text-sm cursor-pointer font-open-sans-regular">
            <option value="">--status--</option>
            {dataOrderStatus.map((order: statusOrder) => (
              <option key={order} value={order}>
                {order}
              </option>
            ))}
          </select>
          <span className="text-sm"></span>
        </label>
        <label htmlFor="">
            
        </label>
      </div>
      <OrderTable data={dataOrder} handleActionOrder={handleActionOrder} />
    </div>
  );
};

export default OrderFilter;
