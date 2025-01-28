import { ReactNode } from "react";
import { Link } from "react-router-dom";

export interface SidebarLinkProps {
  children: ReactNode;
  to: string
  className: string
}
const SidebarLink = (props: SidebarLinkProps) => {
  const { children, to, className } = props;
  return (
    <Link to={to} className={`${className} flex items-center gap-1 text-devWhiteGrey/50`}>
      {children}
    </Link>
  );
};

export default SidebarLink;
