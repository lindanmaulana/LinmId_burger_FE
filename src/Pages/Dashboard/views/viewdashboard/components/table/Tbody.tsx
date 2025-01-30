import { ReactNode } from "react";

export interface TbodyProps {
  children: ReactNode;
}
const Tbody = (props: TbodyProps) => {
  const { children } = props;
  return <tbody>{children}</tbody>;
};

export default Tbody;
