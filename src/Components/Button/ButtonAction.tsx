import { ReactNode } from "react";

export interface buttonActionProps {
  className: string;
  onClick: () => void;
  children: ReactNode;
}
const ButtonAction = (props: buttonActionProps) => {
  const { className, onClick, children } = props;
  return (
    <button
      onClick={onClick}
      className={`${className} px-5 py-2 text-sm text-white rounded-full bg-devOrange`}
    >
      {children}
    </button>
  );
};

export default ButtonAction;
