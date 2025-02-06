import { getDataSignin } from "..";
import { api, baseURL, setToken } from "../axiosInstance";
import { errorService } from "../errors/errorService";

export const ServiceUsersGetAll = async () => {
  const { token } = getDataSignin();
  setToken(token);

  try {
    const response = await api.get(`${baseURL}/users`);

    return response.data;
  } catch (err) {
    errorService(err);
  }
};

export const ServiceUserDetailGetAll = async () => {
  const { token } = getDataSignin();
  setToken(token);

  try {
    const response = await api.get(`${baseURL}/user-detail`);

    return response.data;
  } catch (err) {
    errorService(err);
  }
};

export const ServiceUserDetailGetOne = async (id: string) => {
    const {token} = getDataSignin()
    setToken(token)

    try {
        const response = await api.get(`${baseURL}/user-detail/${id}`)

        return response.data
    } catch (err) {
        errorService(err)
    }
}
