import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import BreadCrumbs from "../../../../components/breadcrumbs";

export interface ViewMenuProps {
  children: ReactNode;
}

const ViewMenu = (props: ViewMenuProps) => {
  const { children } = props;
  return (
    <>
      <BreadCrumbs />
      {children || <Outlet />}
    </>
  );
};

export default ViewMenu;
