import { ReactNode } from "react";
import { AiOutlineLoading } from "react-icons/ai";
export interface LoadingDataProps {
  children: ReactNode;
}
const SLoadingData = (props: LoadingDataProps) => {
  const { children } = props;
  return (
    <p className="flex items-center gap-2 text-sm">
      <AiOutlineLoading className="text-orange-500 animate-spin" /> {children}
    </p>
  );
};

export default SLoadingData;
