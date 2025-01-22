import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { z } from "zod";
import SForm from "../../../Components/Form";
import ErrorFieldMessage from "../../../Components/Form/ErrorFieldMessage";
import { handleSetAlert } from "../../../redux/slices/alertMessage";
import { errorMessage } from "../../../redux/slices/errorMessage";
import {
  handlePrivacy,
  SET_PRIVACY,
} from "../../../redux/slices/privacyPolicy";
import { AppDispatch, RootState } from "../../../redux/store";
import { IRegister, ServiceAuthRegister } from "../../../utils/auth";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { useState } from "react";
import {
  CLEAR_LOADING,
  handleIsLoading,
  SET_LOADING,
} from "../../../redux/slices/isLoading";
import { IoReload } from "react-icons/io5";

const schema = z.object({
  username: z
    .string()
    .min(3, "Username minimal 3 karakter")
    .max(50, "Username maksimal 50 karakter"),
  password: z
    .string()
    .min(8, "Password minimal 8 karakter")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/, {
      message: "Password harus mengandung huruf kecil, besar dan angka.",
    }),
  confirmPassword: z
    .string()
    .min(8, "Password minimal 8 karakter")
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/, {
      message: "Password harus mengandung huruf kecil, besar dan angka.",
    }),
});

type schemaRegister = z.infer<typeof schema>;

const PageAuthRegister = () => {
  const dispatch = useDispatch<AppDispatch>();
  const selectorPrivacy = useSelector(
    (state: RootState) => state.privacyPolicy
  );
  const selectorLoading = useSelector((state: RootState) => state.isLoading);

  const [isPassword, setIsPassword] = useState<{
    passwordActive: boolean;
    confirmPasswordActive: boolean;
  }>({
    passwordActive: false,
    confirmPasswordActive: false,
  });

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<schemaRegister>({
    resolver: zodResolver(schema),
  });

  const { mutate } = useMutation({
    mutationKey: ["mutateRegister"],
    mutationFn: (data: IRegister) => ServiceAuthRegister(data),
  });

  const handleFormRegister = handleSubmit((data: IRegister) => {
    dispatch(handleIsLoading({ type: SET_LOADING }));
    mutate(data, {
      onSuccess: (data) => {
        console.log({ dataOnSuccess: data });
        dispatch(
          handleSetAlert({
            type: "success",
            active: true,
            message: "Register berhasil",
            transition: true,
          })
        );
        dispatch(handleIsLoading({ type: CLEAR_LOADING }));
        reset();
      },
      onError: (err) => {
        dispatch(
          handleSetAlert({
            type: "error",
            active: true,
            message: errorMessage(err),
            transition: true,
          })
        );
        dispatch(handleIsLoading({ type: CLEAR_LOADING }));
      },
    });
  });

  const handleChangeAgreement = () => {
    if (!selectorPrivacy.agreement) {
      dispatch(handlePrivacy({ type: SET_PRIVACY }));
    }
  };

  const handleIsPassword = (id: number) => {
    if (id === 1) {
      setIsPassword({
        ...isPassword,
        passwordActive: !isPassword.passwordActive,
      });
    } else if (id === 2) {
      setIsPassword({
        ...isPassword,
        confirmPasswordActive: !isPassword.confirmPasswordActive,
      });
    } else {
      setIsPassword({ confirmPasswordActive: false, passwordActive: false });
    }
  };

  return (
    <SForm
      title="Registrasi"
      subtitle="Buat akun untuk dapat memesanan makanan"
    >
      <form onSubmit={handleFormRegister} className="w-full">
        <div className=" max-w-[75%] flex flex-col gap-4">
          <label htmlFor="" className="relative">
            <input
              {...register("username")}
              type="text"
              placeholder="Username"
              className="w-full px-4 py-3 text-sm rounded outline-none transition-global bg-primary/10 hover:bg-primary/30 focus:bg-primary/10"
            />
          </label>
          {errors.username && (
            <ErrorFieldMessage>{errors.username.message}</ErrorFieldMessage>
          )}
          <label htmlFor="" className="relative">
            <input
              {...register("password")}
              type={isPassword.passwordActive ? "text" : "password"}
              placeholder="Password"
              className="w-full px-4 py-3 text-sm rounded outline-none transition-global bg-primary/10 hover:bg-primary/30 focus:bg-primary/10"
            />

            <button
              type="button"
              onClick={() => handleIsPassword(1)}
              className="absolute z-10 -translate-y-1/2 right-4 top-1/2"
            >
              {" "}
              {isPassword.passwordActive ? <VscEye /> : <VscEyeClosed />}{" "}
            </button>
          </label>
          {errors.password && (
            <ErrorFieldMessage>{errors.password.message}</ErrorFieldMessage>
          )}
          <label htmlFor="" className="relative">
            <input
              {...register("confirmPassword")}
              type={isPassword.confirmPasswordActive ? "text" : "password"}
              placeholder="Password Confirmation"
              className="w-full px-4 py-3 text-sm rounded outline-none transition-global bg-primary/10 hover:bg-primary/30 focus:bg-primary/10"
            />
            <button
              type="button"
              onClick={() => handleIsPassword(2)}
              className="absolute z-10 -translate-y-1/2 right-4 top-1/2"
            >
              {" "}
              {isPassword.confirmPasswordActive ? (
                <VscEye />
              ) : (
                <VscEyeClosed />
              )}{" "}
            </button>
          </label>
          {errors.confirmPassword && (
            <ErrorFieldMessage>
              {errors.confirmPassword.message}
            </ErrorFieldMessage>
          )}
          <label htmlFor="" className="flex items-center justify-between">
            <input
              type="checkbox"
              checked={selectorPrivacy.agreement}
              onChange={handleChangeAgreement}
              disabled={selectorPrivacy.agreement}
            />
            <p
              className={`${
                selectorPrivacy.agreement
                  ? "text-primary/40"
                  : "text-primary/80"
              } text-[13px] `}
            >
              Saya sudah memahami penjelasan terakit{" "}
              <button
                type="button"
                onClick={handleChangeAgreement}
                className={`${
                  selectorPrivacy.agreement
                    ? "text-primary/40"
                    : "text-primary/80"
                } underline text-primary decoration-2`}
                disabled={selectorPrivacy.agreement}
              >
                kebijakan privasi
              </button>
            </p>
          </label>

          <button
            type="submit"
            className={`${
              selectorPrivacy.agreement
                ? "bg-primary"
                : "bg-primary/40 cursor-not-allowed"
            }  p-3 rounded-lg text-white flex items-center justify-center`}
            disabled={!selectorPrivacy.agreement}
          >
            {selectorLoading.loading ? <IoReload className="text-2xl animate-spin" /> : "Buat Akun"}
          </button>
          <p className="text-sm text-center text-primary/80">
            Kamu sudah memiliki akun ?{" "}
            <Link
              to={"/auth/login"}
              className="text-primary font-open-sans-semibold"
            >
              Masuk
            </Link>
          </p>
        </div>
      </form>
    </SForm>
  );
};

export default PageAuthRegister;
