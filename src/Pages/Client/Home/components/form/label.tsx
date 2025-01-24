import { ReactNode } from "react";

export interface HomeLabelProps {
  htmlFor: string;
  className: string;
  children: ReactNode
}

const HomeLabel = (props: HomeLabelProps) => {
  const { className, htmlFor, children } = props;
  return <label htmlFor={htmlFor} className={`${className} w-full`}>{children}</label>;
};

export default HomeLabel;
