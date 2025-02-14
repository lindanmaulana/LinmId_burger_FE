import { ReactNode } from "react";

interface LabelProps {
    children: ReactNode
    id: string
    classNameLabel?: string
}
const Label = (props: LabelProps) => {
  const {children, id, classNameLabel} = props;
  return (
    <label
      htmlFor={id}
      className={`${classNameLabel} flex flex-col items-start w-full gap-2 text-sm`}
    >
    {children}
    </label>
  );
};

export default Label;
