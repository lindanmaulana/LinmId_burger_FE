import { ReactNode } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";

interface SelectOptionProps<T extends FieldValues> {
  children: ReactNode;
  id: string;
  register?: ReturnType<UseFormRegister<T>>;
  classNameSelect?: string;
}
const SelectOption = <T extends FieldValues>(props: SelectOptionProps<T>) => {
  const { children, id, register, classNameSelect } = props;
  return (
    <select
      id={id}
      {...register}
      className={`${classNameSelect} w-full px-3 py-2 border border-green-500 rounded`}
    >
      {children}
    </select>
  );
};

export default SelectOption;
