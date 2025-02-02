import { authSession } from "../../types/type-auth";
import { statusOrder } from "../../types/type-orders";
import { api, baseURL, setToken } from "../axiosInstance";
import { errorService } from "../errors/errorService";

export const ServiceOrdersGetAll = async () => {
  const storage = localStorage.getItem("auth");

  const { token }: authSession = storage
    ? JSON.parse(storage)
    : { token: null, role: null };
  setToken(token);

  try {
    const response = await api.get(`${baseURL}/orders`);

    return response.data;
  } catch (err) {
    errorService(err);
  }
};

export interface ServiceOrderEditData {
  id: string
  status: statusOrder
}
export const ServiceOrderEdit = async (data: ServiceOrderEditData) => {
  const storage = localStorage.getItem("auth");

  const { token }: authSession = storage
    ? JSON.parse(storage)
    : { token: null, role: null };
  setToken(token);

  try {
    const response = await api.patch(`${baseURL}/orders/${data.id}`, {
      data: data.status
    })

    return response.data
  } catch (err) {
    errorService(err)
  }
}