import {
  useMutation,
  UseMutationOptions,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import Cookies from "js-cookie";
import { AuthResponse, login } from "../features/auth";

export const useAuth = () => {
  return useQuery({
    queryKey: ["auth"],
    queryFn: async () => {
      const token = Cookies.get("accessToken"); // ✅ استرجاع التوكن من الكوكيز
      if (!token) return null;

      const response = await fetch(
        "http://apiopream.uralcen.com/api/v1/users/me",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );

      if (!response.ok) {
        throw new Error("Failed to fetch user data");
      }

      return response.json();
    },
    staleTime: 1000 * 60 * 10, // البيانات تظل حديثة لمدة 10 دقائق
  });
};

export const useLogin = (
  options?: UseMutationOptions<AuthResponse, Error, { email: string; password: string }>
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: login,
    onSuccess: (response) => {
      console.log("✅ Login response:", response);

      const tokens = response.data.tokens; // ✅ استخراج `tokens` من `data`

      if (tokens?.accessToken) {
        console.log("✅ Storing tokens in cookies...");
        Cookies.set("accessToken", tokens.accessToken, { sameSite: "Strict", secure: true });
        Cookies.set("refreshToken", tokens.refreshToken, { sameSite: "Strict", secure: true });

        // ✅ تحديث كاش `React Query` بمعلومات المستخدم
        queryClient.setQueryData(["auth"], response.data);
      } else {
        console.error("❌ No access token received from server!");
      }

      queryClient.invalidateQueries({ queryKey: ["auth"] });
    },
    onError: (error) => {
      console.error("❌ Login failed", error);
    },
    ...options,
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();

  return () => {
    Cookies.remove("accessToken"); // ✅ حذف التوكن من الكوكيز
    Cookies.remove("refreshToken");
    queryClient.setQueryData(["auth"], null); // ✅ مسح بيانات المستخدم من الكاش
  };
};
