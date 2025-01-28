import { ReactNode } from "react";

export interface SidebarActionProps {
  onClick: () => void;
  className: string;
  children: ReactNode;
}

const SidebarAction = (props: SidebarActionProps) => {
  const { children, className, onClick } = props;
  return (
    <button
      onClick={onClick}
      className={`${className} flex items-center gap-1 text-devWhiteGrey/50`}
    >
      {children}
    </button>
  );
};

export default SidebarAction;
