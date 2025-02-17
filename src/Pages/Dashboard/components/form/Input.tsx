import { FieldValues, UseFormRegister } from "react-hook-form";
import { FormInputType } from "../../../../types/type-form";

interface InputProps<T extends FieldValues> {
  type: FormInputType;
  id: string;
  classNameInput?: string;
  register?: ReturnType<UseFormRegister<T>>;
  isEdited?: boolean
  defaultValue?: string | number
}
const Input = <T extends FieldValues>(props: InputProps<T>) => {
  const { id, type, classNameInput, register, isEdited = false, defaultValue = "" } = props;
  return (
    <input
      type={type}
      id={id}
      {...register}
      className={`${classNameInput} ${isEdited && "border-green-500"} w-full px-3 py-2 border-2  rounded`}
      disabled={!isEdited}
      defaultValue={defaultValue}
    />
  );
};

export default Input;
