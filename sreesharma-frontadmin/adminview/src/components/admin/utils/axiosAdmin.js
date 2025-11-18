import axios from "axios";
import { API_URL } from "../../../config/api";

const adminAxios = axios.create({
  baseURL: API_URL,
});

// Attach token
adminAxios.interceptors.request.use((config) => {
  const token = localStorage.getItem("adminToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default adminAxios;
