import { authSession } from "../../types/type-auth";
import { paymentStatus } from "../../types/type-payments";
import { api, baseURL, setToken } from "../axiosInstance";
import { errorService } from "../errors/errorService";

export const ServicePaymentsGetAll = async () => {
  const storage = localStorage.getItem("auth");

  const { token }: authSession = storage
    ? JSON.parse(storage)
    : { token: null, role: null };
  setToken(token);

  try {
    const response = await api.get(`${baseURL}/payments`);

    return response.data;
  } catch (err) {
    errorService(err);
  }
};

export interface ServicePaymentsUpdateData {
  id: string;
  status: paymentStatus;
}
export const ServicePaymentsUpdate = async (data: ServicePaymentsUpdateData) => {
  const storage = localStorage.getItem("auth");

  const { token }: authSession = storage
    ? JSON.parse(storage)
    : { token: null, role: null };
  setToken(token);

  try {
    const response = await api.patch(`${baseURL}/payments/${data.id}`, {
      status: data.status,
    });

    return response.data;
  } catch (err) {
    errorService(err);
  }
};
