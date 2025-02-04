import React, { useState } from "react";
import {
  dataPayment,
  dataPaymentStatus,
  payment,
  paymentStatus,
} from "../../../../../types/type-payments";
import PaymentTable from "./PaymentTable";
import { FaSortDown, FaSortUp } from "react-icons/fa";
import { helperFormatDate } from "../../../../../utils/helpers/formatDate";

export interface PaymentFilterProps {
  data: dataPayment[];
  handleActionPayment: (
    id: string,
    message: string,
    status: paymentStatus
  ) => void;
}
const PaymentFilter = (props: PaymentFilterProps) => {
  const { data, handleActionPayment } = props;

  const [dataPayments, setDataPayments] = useState<dataPayment[]>(data);
  const [isSortTotalPrice, setIsSortTotalPrice] = useState<boolean>();

  const handleFilterStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const status = e.target.value;

    if (status === "") {
      setDataPayments(data);
    } else {
      const payments = data.filter(
        (payment: dataPayment) => payment.status === status
      );
      setDataPayments(payments);
    }

    setIsSortTotalPrice(false);
  };

  const handleFilterTotalPrice = () => {
    setIsSortTotalPrice(!isSortTotalPrice);

    if (isSortTotalPrice) {
      const sortData = [...dataPayments].sort((a, b) => a.amount - b.amount);
      setDataPayments(sortData);
    } else {
      const sortData = [...dataPayments].sort((a, b) => b.amount - a.amount);
      setDataPayments(sortData);
    }
  };

  const handleFilterDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const filter = e.target.value;

    if (!filter) {
      setDataPayments([...dataPayments]);
    }

    const filterDate = data.filter((payment: payment) => {
      const orderPayment = helperFormatDate(payment.payment_date).split(",")[0];

      return orderPayment === filter;
    });

    setDataPayments(filterDate);
    setIsSortTotalPrice(false);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center justify-between">
        <button
          className="px-2 text-sm text-white rounded bg-devRed"
          onClick={() => setDataPayments(data)}
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
              onChange={handleFilterStatus}
              className="text-sm cursor-pointer"
            >
              <option value="">--status--</option>
              {dataPaymentStatus?.map((status: paymentStatus) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>
      <PaymentTable
        data={dataPayments}
        handleActionPayment={handleActionPayment}
      />
    </div>
  );
};

export default PaymentFilter;
