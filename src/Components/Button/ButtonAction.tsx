import { ReactNode } from "react";

export interface buttonActionProps {
  className: string;
  onClick?: () => void;
  children: ReactNode;
  type?: "submit" | "button" | "reset";
  disabled?: boolean;
}
const ButtonAction = (props: buttonActionProps) => {
  const { className, onClick, children, type, disabled } = props;
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${className} px-5 py-2 text-sm text-white rounded-full bg-devOrange`}
    >
      {children}
    </button>
  );
};

export default ButtonAction;
