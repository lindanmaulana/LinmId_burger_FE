import { authSession } from "../../types/type-auth";
import { statusOrder } from "../../types/type-orders";
import { api, baseURL, setToken } from "../axiosInstance";
import { errorService } from "../errors/errorService";
import { getDataSignin } from "../helpers";

export interface ServiceOrderCreateData {
  order_items: {
    id_product: string;
    quantity: number;
  }[];
}

export const ServiceOrderCreate = async (data: ServiceOrderCreateData) => {
  const { token } = getDataSignin();
  setToken(token);
  try {
    const response = await api.post(`${baseURL}/orders`, data);

    return response.data;
  } catch (err) {
    errorService(err);
  }
};

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

export interface ServiceOrderUpdateData {
  id: string;
  status: statusOrder;
}
export const ServiceOrderUpdate = async (data: ServiceOrderUpdateData) => {
  const storage = localStorage.getItem("auth");

  const { token }: authSession = storage
    ? JSON.parse(storage)
    : { token: null, role: null };
  setToken(token);

  try {
    const response = await api.patch(`${baseURL}/orders/${data.id}`, {
      status: data.status,
    });

    return response.data;
  } catch (err) {
    errorService(err);
  }
};
