import { RiArrowRightSLine } from "react-icons/ri";
import SidebarMenuAction from "../SidebarAction";
import { ReactNode } from "react";

export interface MenuTitleProps {
  onClick: () => void;
  children: ReactNode;
  condition: boolean;
}

const MenuTitle = (props: MenuTitleProps) => {
  const { children, onClick, condition } = props;
  return (
    <SidebarMenuAction
      className="flex items-center justify-between"
      onClick={onClick}
    >
      <div className="flex items-center gap-2">{children}</div>
      <RiArrowRightSLine
        className={`${
          condition ? "rotate-90" : "rotate-0"
        } text-xl text-white/50 transition-global`}
      />
    </SidebarMenuAction>
  );
};

export default MenuTitle;
