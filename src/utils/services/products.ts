import { api, baseURL } from "../axiosInstance";
import { errorService } from "../errors/errorService";

export const ServiceProductsGetAll = async () => {
  try {
    const response = await api.get(`${baseURL}/cms/products`);

    return response.data;
  } catch (err) {
    errorService(err);
  }
};

export const ServiceProductGetOne = async (id: string | undefined) => {
  try {
    const response = await api.get(`${baseURL}/cms/products/${id}`);

    return response.data;
  } catch (err) {
    errorService(err);
  }
};
