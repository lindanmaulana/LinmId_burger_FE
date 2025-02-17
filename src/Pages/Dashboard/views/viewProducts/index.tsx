import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import BreadCrumbs from "../../../../components/breadcrumbs";

interface ViewProductDiscountProps {
  children: ReactNode;
}
const ViewProductDiscount = (props: ViewProductDiscountProps) => {
  const { children } = props;

  return (
    <>
      <BreadCrumbs />
      {children || <Outlet />}
    </>
  );
};

export default ViewProductDiscount;
