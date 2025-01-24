import { ReactNode } from "react";

export interface HomeErrorFormProps {
  children: ReactNode;
}
const HomeErrorForm = (props: HomeErrorFormProps) => {
  const { children } = props;
  return <p className="text-sm text-red-500">{children}</p>;
};

export default HomeErrorForm;
