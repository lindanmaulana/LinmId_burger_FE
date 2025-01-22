import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import SForm from "../../../Components/Form";
import ErrorFieldMessage from "../../../Components/Form/ErrorFieldMessage";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../redux/store";
import { useState } from "react";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import { ILogin, ServiceAuthLogin } from "../../../utils/auth";
import {
  CLEAR_LOADING,
  handleIsLoading,
  SET_LOADING,
} from "../../../redux/slices/isLoading";
import { IoReload } from "react-icons/io5";
import { handleSetAlert } from "../../../redux/slices/alertMessage";
import { errorMessage } from "../../../redux/slices/errorMessage";
import { initialStateAuth } from "../../../redux/slices/auth";

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
});

type schemaLogin = z.infer<typeof schema>;

const PageAuthLogin = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const selectorLoading = useSelector((state: RootState) => state.isLoading);
  const [isPassword, setIsPassword] = useState<boolean>(true);
  const roleRoutes: Record<string, string> = {
    admin: "/dashboard",
    user: "/",
  };

  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm<schemaLogin>({
    resolver: zodResolver(schema),
  });

  const { mutate } = useMutation({
    mutationKey: ["mutateLogin"],
    mutationFn: (data: ILogin) => ServiceAuthLogin(data),
  });

  const handleFormLogin = handleSubmit((data: ILogin) => {
    dispatch(handleIsLoading({ type: SET_LOADING }));
    mutate(data, {
      onSuccess: (data: { data: initialStateAuth }) => {
        const { role } = data.data;

        if (!role || typeof role !== "string") {
          dispatch(
            handleSetAlert({
              type: "error",
              active: true,
              message: "Invalid Role",
              transition: true,
            })
          );
        }

        if (!roleRoutes[role]) {
          dispatch(
            handleSetAlert({
              type: "error",
              active: true,
              message: `Unrecognized role: ${role}`,
              transition: true,
            })
          );

          return navigate("/auth/login")
        }

        dispatch(
          handleSetAlert({
            type: "success",
            active: true,
            message: "Login berhasil",
            transition: true,
          })
        );
        reset();
        dispatch(handleIsLoading({ type: CLEAR_LOADING }));

        const targetRoute = roleRoutes[role] || "/auth/login";
        navigate(targetRoute);
      },
      onError: (err) => {
        dispatch(
          handleSetAlert({
            type: "success",
            active: true,
            message: errorMessage(err),
            transition: true,
          })
        );
        dispatch(handleIsLoading({ type: CLEAR_LOADING }));
      },
    });
  });

  const handleIsPassword = () => {
    setIsPassword(!isPassword);
  };
  return (
    <SForm title="Masuk" subtitle="Selamat datang di platform LinmId Burger">
      <form onSubmit={handleFormLogin}>
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
              type={isPassword ? "password" : "text"}
              placeholder="Password"
              className="w-full px-4 py-3 text-sm rounded outline-none transition-global bg-primary/10 hover:bg-primary/30 focus:bg-primary/10"
            />

            <button
              type="button"
              onClick={handleIsPassword}
              className="absolute z-10 -translate-y-1/2 right-4 top-1/2"
            >
              {" "}
              {isPassword ? <VscEyeClosed /> : <VscEye />}{" "}
            </button>
          </label>
          {errors.password && (
            <ErrorFieldMessage>{errors.password.message}</ErrorFieldMessage>
          )}
          <button
            type="submit"
            className={`bg-primary p-3 rounded-lg text-white flex items-center justify-center`}
          >
            {selectorLoading.loading ? (
              <IoReload className="text-2xl animate-spin" />
            ) : (
              "Masuk"
            )}
          </button>
          <p className="text-sm text-center text-primary/80">
            Kamu belum memiliki akun ?{" "}
            <Link
              to={"/auth/register"}
              className="text-primary font-open-sans-semibold"
            >
              Registrasi
            </Link>
          </p>
        </div>
      </form>
    </SForm>
  );
};

export default PageAuthLogin;
