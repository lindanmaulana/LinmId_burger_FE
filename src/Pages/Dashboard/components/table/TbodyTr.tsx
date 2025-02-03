import { ReactNode } from "react";

export interface TbodyTrProps {
  children: ReactNode;
}
const TbodyTr = (props: TbodyTrProps) => {
  const { children } = props;
  return (
    <tr className="text-sm text-devBlack/80 hover:bg-devBlack/20">
      {children}
    </tr>
  );
};

export default TbodyTr;
