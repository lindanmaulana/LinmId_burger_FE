import { api, baseURL, setToken } from "../axiosInstance";
import { errorService } from "../errors/errorService";

export interface reservationsCreate {
  id_table: string;
  reservation_date: Date;
  reservation_time: string;
  guest_count: number | string;
}

export const ServiceReservationsCreate = async (data: reservationsCreate) => {
  const storage = localStorage.getItem("auth");

  const { token }: { token: string | null; role: string | null } = storage
    ? JSON.parse(storage)
    : { token: null, role: null };
  setToken(token);

  try {
    const response = await api.post(`${baseURL}/reservations`, data);

    return response.data;
  } catch (err) {
    errorService(err);
  }
};

export const ServiceReservationsGetAll = async () => {
  const storage = localStorage.getItem("auth");

  const { token }: { token: string | null; role: string | null } = storage
    ? JSON.parse(storage)
    : { token: null, role: null };
  setToken(token);
  
  try {
    const response = await api.get(`${baseURL}/reservations`);

    return response.data;
  } catch (err) {
    errorService(err);
  }
};
