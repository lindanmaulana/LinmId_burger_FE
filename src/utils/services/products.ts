import { api, baseURL } from "../axiosInstance";
import { errorService } from "../errors/errorService";

interface ServiceProductGetAllParams {
  keyword?: string
}
export const ServiceProductsGetAll = async (params: ServiceProductGetAllParams) => {
  try {
    let apiUrl;

    if(params.keyword) {
      apiUrl = `${baseURL}/cms/products?keyword=${params.keyword}`
    } else {
      apiUrl = `${baseURL}/cms/products`
    }

    const response = await api.get(apiUrl);

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
