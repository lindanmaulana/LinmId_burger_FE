import { api, baseURL } from "../axiosInstance";
import { errorService } from "../errors/errorService";

export interface ILogin {
  username: string;
  password: string;
}
export interface IRegister extends ILogin {
  confirmPassword: string;
}

export const ServiceAuthRegister = async (data: IRegister) => {
  try {
    const response = await api.post(`${baseURL}/auth/signup`, data);

    return response.data.data
  } catch (err) {
    errorService(err)
  }
};

export const ServiceAuthLogin = async (data: ILogin) => {
  try {
    const response = await api.post(`${baseURL}/auth/signin`, data)

    return response.data.data
  } catch (err) {
    errorService(err)
  }
}