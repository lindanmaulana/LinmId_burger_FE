import React from "react";
import { helperFormatDate } from "./formatDate";

// filter by status
interface filterStatusProps<T> {
  event: React.ChangeEvent<HTMLSelectElement>;
  data: T[];
  setData: (data: T[]) => void;
  keyToFilter: keyof T; // Supaya bisa filter berdasarkan key apa pun
  setReset?: (val: boolean) => void;
  valReset: boolean;
}

export const FilterStatus = <T>({
  event,
  data,
  setData,
  keyToFilter,
  setReset,
  valReset,
}: filterStatusProps<T>) => {
  const filterValue = event.target.value;

  if (!filterValue) {
    setData(data);
  } else {
    const filteredData = data.filter(
      (item) => String(item[keyToFilter]) === filterValue
    );
    setData(filteredData);
  }

  setReset?.(valReset);
};

interface filterTotalPrice<T> {
  dataFilter: T[];
  setData: (data: T[]) => void;
  setSort: (sort: boolean) => void;
  keyFilter: keyof T;
  isSort: boolean;
}
//   // filter by totalPrice
export const FilterTotalPrice = <T>({
  dataFilter,
  isSort,
  setData,
  setSort,
  keyFilter,
}: filterTotalPrice<T>) => {
  setSort(!isSort);

  if (isSort) {
    const sortData = [...dataFilter].sort((a, b) => {
      const valA = a[keyFilter];
      const valB = b[keyFilter];

      if (typeof valA === "number" && typeof valB === "number") {
        return valA - valB;
      }

      return 0;
    });
    setData(sortData);
  } else {
    const sortData = [...dataFilter].sort((a, b) => {
      const valA = a[keyFilter];
      const valB = b[keyFilter];

      if (typeof valA === "number" && typeof valB === "number") {
        return valB - valA;
      }

      return 0;
    });
    setData(sortData);
  }
};

interface filterDateProps<T> {
  event: React.ChangeEvent<HTMLInputElement>;
  data: T[];
  dataFilter: T[];
  setData: (data: T[]) => void;
  setSort: (sort: boolean) => void;
  isSort: boolean;
  keyFilter: keyof T;
}

export const filterDate = <T>({
  data,
  dataFilter,
  event,
  isSort,
  keyFilter,
  setData,
  setSort,
}: filterDateProps<T>) => {
  const filter = event.target.value;

  if (!filter) {
    setData([...dataFilter]);
  }

  const filterDataOrders = data.filter((order: T) => {
    const orderDate = helperFormatDate(String(order[keyFilter])).split(",")[0];

    return orderDate === filter;
  });

  setData(filterDataOrders);
  setSort(isSort);
};

//   // filter by date
//   const handleFilterDate = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const filter = e.target.value;

//     if (!filter) {
//       setDataProductDiscount([...dataProductDiscount]);
//     }

//     const filterDataOrders = data.filter((order: discount) => {
//       const orderDate = helperFormatDate(order.createdAt).split(",")[0];

//       return orderDate === filter;
//     });

//     setDataProductDiscount(filterDataOrders);
//     setSortDiscount(false);
//   };
