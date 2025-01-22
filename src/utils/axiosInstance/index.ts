import axios from "axios";
export const baseURL = import.meta.env.VITE_BASEURL

export const api = axios.create({
  baseURL: import.meta.env.VITE_BASEURL,
});

export const setToken = (token: string | null) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};
