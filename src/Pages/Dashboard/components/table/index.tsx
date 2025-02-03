import { ReactNode } from "react";

export interface TableProps {
  children: ReactNode;
}

const Table = (props: TableProps) => {
  const { children } = props;
  return <table className="w-full font-open-sans-regular">{children}</table>;
};

export default Table;
