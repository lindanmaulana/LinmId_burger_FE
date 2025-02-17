import { ReactNode } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import { FormInputType } from "../../../../types/type-form";
import Input from "./Input";
import Label from "./Label";

interface InputFieldProps<T extends FieldValues> {
  isTitle?: boolean;
  isEdited?: boolean
  title?: string;
  id: string;
  classNameLabel?: string;
  classNameInput?: string;
  classNameSelect?: string;
  type: FormInputType;
  register?: ReturnType<UseFormRegister<T>>;
  children?: ReactNode;
  defaultValue?: string | number
}

const InputField = <T extends FieldValues>(props: InputFieldProps<T>) => {
  const {
    id,
    isTitle = false,
    register,
    type,
    classNameInput,
    classNameLabel,
    title,
    isEdited = false,
    defaultValue = ""
  } = props;

  return (
    <Label id={id} classNameLabel={classNameLabel}>
      {isTitle && <span>{title}</span>}
        <Input
          id={id}
          register={register}
          type={type}
          isEdited={isEdited}
          classNameInput={classNameInput}
          defaultValue={defaultValue}
        />
      
    </Label>
  );
};

export default InputField;
