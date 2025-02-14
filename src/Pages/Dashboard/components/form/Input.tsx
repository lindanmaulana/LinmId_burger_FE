import { FieldValues, UseFormRegister } from "react-hook-form";
import { FormInputType } from "../../../../types/type-form";

interface InputProps<T extends FieldValues> {
  type: FormInputType;
  id: string;
  classNameInput?: string;
  register: ReturnType<UseFormRegister<T>>;
}
const Input = <T extends FieldValues>(props: InputProps<T>) => {
  const { id, type, classNameInput, register } = props;
  return (
    <input
      type={type}
      id={id}
      {...register}
      className={`${classNameInput} w-full px-3 py-2 border border-green-500 rounded`}
    />
  );
};

export default Input;
