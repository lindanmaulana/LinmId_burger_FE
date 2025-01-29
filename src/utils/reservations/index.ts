import { getDataSignin } from "..";
import { api, baseURL, setToken } from "../axiosInstance";
import { errorService } from "../errors/errorService";

export interface reservationsCreate {
  id_table: string;
  reservation_date: Date;
  reservation_time: string;
  guest_count: number | string;
}

const { token } = getDataSignin();

export const ServiceReservationsCreate = async (data: reservationsCreate) => {
  setToken(token);
  try {
    const response = await api.post(`${baseURL}/reservations`, data);

    return response.data;
  } catch (err) {
    errorService(err);
  }
};

export const ServiceReservationsGetAll = async () => {
  setToken(token);
  try {
    const response = await api.get(`${baseURL}/reservations`);

    return response.data;
  } catch (err) {
    errorService(err);
  }
};
