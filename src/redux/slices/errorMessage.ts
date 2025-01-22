import { AxiosError } from "axios";

export const errorMessage = (err: unknown): string => {
  if (err instanceof AxiosError) {
    return err.response?.data.msg || "An unexpected error occurred";
  } else if (err instanceof Error) {
    return err.message;
  }
  return "An unexpected error occurred";
};
