import axios from "axios";
import { API_ENDPOINT } from "../settings";

const api = axios.create({
  baseURL: API_ENDPOINT,
});

api.interceptors.request.use(
  async (config) => {
    const url = await config?.url?.endsWith("login");
    const tokenUser = localStorage.getItem("@App:access_token");

    if (!url && tokenUser) {
      config.headers = {
        Authorization: `Bearer ${tokenUser}`,
        Accept: "application/json",
        "Content-Type": "application/x-www-form-urlencoded",
      };
    }

    return config;
  },
  (error) => {
    // I cand handle a request with errors here
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    // Do something with response data
    return response;
  },
  (error) => {
    // You can even test for a response code
    // and try a new request before rejecting the promise
    if (error.response.status === 401) {
      const requestConfig = error.config;
      return axios(requestConfig);
    }
    return Promise.reject(error);
  }
);

export default api;
