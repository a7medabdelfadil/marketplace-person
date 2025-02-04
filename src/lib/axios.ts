import axios, { InternalAxiosRequestConfig } from "axios";
import https from "https";

const axiosInstance = axios.create({
  baseURL: "https://apiopream.uralcen.com/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
  httpsAgent: typeof window === "undefined" ? new https.Agent({ rejectUnauthorized: false }) : undefined,
});

export default axiosInstance;
