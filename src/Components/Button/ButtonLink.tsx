import { ReactNode } from "react";
import { Link } from "react-router-dom";

export interface buttonLinkProps {
  className: string;
  to: string;
  children: ReactNode
}
const ButtonLink = (props: buttonLinkProps) => {
  const { className, to, children } = props;
  return (
    <Link
      to={to}
      className={`${className} px-5 py-2 text-sm text-white rounded-full bg-devOrange`}
    >
      {children}
    </Link>
  );
};

export default ButtonLink;
