import useAuthenticationStore from "@/stores/authentication";
import { Decode } from "@/plugins/cryptography";
import { STORAGEKEY } from "@/configs";
import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:5000/",
  headers: {
    common: {
      Accept: "application/json",
      "X-Requested-With": "XMLHttpRequest",
      "Content-Type": "application/json",
    },
  },
  withCredentials: true,
});
http.interceptors.request.use(
  (req) => {
    const myToken = localStorage.getItem(STORAGEKEY.TOKEN);
    if (myToken) {
      const token = Decode(myToken);
      req.headers.Authorization = `Bearer ${token}`;
    }
    return req;
  },
  (error) => {
    console.error(error);
  }
);
http.interceptors.response.use(
  (res) => res,
  (error) => {
    const authStore = useAuthenticationStore();
    if (error.response.statusCode === 401) {
      authStore.setUserLoggedIn();
    }
  }
);

const apiGet = async (path, queries = {}) => {
  try {
    const response = await http.get(`/${path}`, { ...queries });
    return response?.data;
  } catch (error) {
    console.error("Error on service get function", error);
    throw error;
  }
};

const apiGetOne = async (path, id, queries = {}) => {
  try {
    const response = await http.get(`/${path}/${id}`, { ...queries });

    return response?.data;
  } catch (error) {
    console.error("Error on service get one function", error);
    throw error;
  }
};

const apiPost = async (path, body, queries = {}) => {
  try {
    const response = await http.post(`/${path}`, body, { ...queries });

    return response?.data;
  } catch (error) {
    console.error("Error on service post function", error);
    throw error;
  }
};

const apiPatch = async (path, id, body, queries = {}) => {
  try {
    const response = await http.patch(`/${path}/${id}`, body, { ...queries });

    return response?.data;
  } catch (error) {
    console.error("Error on service patch function", error);
    throw error;
  }
};

const apiDelete = async (path, id, queries = {}) => {
  try {
    const response = await http.delete(`/${path}/${id}`, { ...queries });

    return response?.data;
  } catch (error) {
    console.error("Error on service delete function", error);
    throw error;
  }
};

export { apiGet, apiGetOne, apiPost, apiPatch, apiDelete };
