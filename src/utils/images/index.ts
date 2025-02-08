import { api, baseURL } from "../axiosInstance";
import { errorService } from "../errors/errorService";

export const ServiceImageCreate = async (file: File) => {
  const formData = new FormData();
  formData.append("image", file);
  try {
    const response = await api.post(`${baseURL}/cms/images`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    return response.data;
  } catch (err) {
    errorService(err);
  }
};
