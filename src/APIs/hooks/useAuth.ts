// import { useMutation, UseMutationOptions, useQueryClient } from "@tanstack/react-query";
// import { login } from "../features/auth";

// export const useLogin = (
//   options?: UseMutationOptions<
//     { token: string; user: object }, // Response type
//     Error,                          // Error type
//     { email: string; password: string } // Input type (mutation function argument)
//   >
// ) => {
//   const queryClient = useQueryClient();

//   return useMutation<{ token: string; user: object }, Error, { email: string; password: string }>({
//     mutationFn: login, // Pass the login function
//     onSuccess: (data) => {
//       if (data?.token) {
//         localStorage.setItem("token", data.token);
//       }
//       queryClient.invalidateQueries({ queryKey: ["auth"] });
//     },
//     ...options,
//   });
// };
