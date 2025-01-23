import { ReactNode } from "react";

export interface STitleSectionProps {
  children: ReactNode;
  className: string;
}

const STitleSection = (props: STitleSectionProps) => {
  const { children, className } = props;
  return (
    <h2 className={`${className} text-4xl font-dancing-script-bold`}>
      {children}
    </h2>
  );
};

export default STitleSection;
