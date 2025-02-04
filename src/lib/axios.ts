import axios from "axios";
import Cookies from "js-cookie"; // استيراد مكتبة js-cookie

const axiosInstance = axios.create({
  baseURL: "http://apiopream.uralcen.com/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

// ✅ إضافة `Interceptor` لتحديث `Authorization` من الكوكيز
axiosInstance.interceptors.request.use((config) => {
  const token = Cookies.get("accessToken"); // ✅ استرجاع التوكن من الكوكيز
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;
