import { ReactNode } from "react";
import SidebarMenuTitle from "../SidebarTitle";
export interface MenuContainerProps {
  title: string;
  children: ReactNode;
}
const MenuContainer = (props: MenuContainerProps) => {
  const { children, title } = props;
  return (
    <div className="flex flex-col gap-4">
      <SidebarMenuTitle>{title}</SidebarMenuTitle>
      {children}
    </div>
  );
};

export default MenuContainer;
