import { ReactNode } from "react";

export interface TitleSidebarProps {
    children: ReactNode
}
const SidebarTitle = (props: TitleSidebarProps) => {
    const {children} = props
  return (
    <h3 className="text-sm text-devWhiteGrey/20 font-open-sans-bold">{children}</h3>
  );
};

export default SidebarTitle;
