import { ReactNode } from "react";
import SidebarMenuLink from "../SidebarLink";
export interface MenuListProps {
  to: string;
  className: string;
  children: ReactNode;
}
const MenuList = (props: MenuListProps) => {
  const { children, className, to } = props;
  return (
    <li>
      <SidebarMenuLink to={to} className={`${className}`}>
        {children}
      </SidebarMenuLink>
    </li>
  );
};

export default MenuList;
