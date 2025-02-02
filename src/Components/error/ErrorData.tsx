import { ReactNode } from "react";

export interface SErrorDataProps {
  children: ReactNode;
}
const SErrorData = (props: SErrorDataProps) => {
  const { children } = props;
  return (
    <p className="text-sm text-red-600">
       {children}
    </p>
  );
};

export default SErrorData;
