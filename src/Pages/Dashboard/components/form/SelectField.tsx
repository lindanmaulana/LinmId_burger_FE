import { ReactNode } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import Label from "./Label";
import SelectOption from "./SelectOption";

interface InputFieldProps<T extends FieldValues> {
  isTitle: boolean;
  title?: string;
  id: string;
  classNameLabel?: string;
  classNameSelect?: string;
  register?: ReturnType<UseFormRegister<T>>;
  children?: ReactNode;
}

const SelectField = <T extends FieldValues>(props: InputFieldProps<T>) => {
  const {
    id,
    isTitle,
    register,
    classNameLabel,
    classNameSelect,
    title,
    children
  } = props;
  return (
    <Label id={id} classNameLabel={classNameLabel}>
      {isTitle && <span>{title}</span>}
       <SelectOption id={id} register={register} classNameSelect={classNameSelect}>
        {children}
       </SelectOption>
    </Label>
  );
};

export default SelectField;
