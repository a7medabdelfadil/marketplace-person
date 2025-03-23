import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { forgetPassword, ForgetPasswordPayload, logout, resendOtp, ResendOtpPayload, resetPassword, ResetPasswordPayload, signin, SigninPayload, signup, SignupPayload, verifyOtp, VerifyOtpPayload } from "../features/auth";

export const useSignup = (options?: {
  onSuccess?: (res: any) => void;
  onError?: (err: any) => void;
}) => {
  return useMutation({
    mutationFn: (data: SignupPayload) => signup(data),
    ...options,
  });
};


export const useSignin = (options?: UseMutationOptions<any, any, SigninPayload>) => {
  return useMutation({
    mutationFn: (data: SigninPayload) => signin(data),
    ...options,
  });
};

export const useVerifyOtp = (options?: {
  onSuccess?: (res: any) => void;
  onError?: (err: any) => void;
}) => {
  return useMutation({
    mutationFn: (data: VerifyOtpPayload) => verifyOtp(data),
    ...options,
  });
};

export const useResendOtp = (options?: {
  onSuccess?: (res: any) => void;
  onError?: (err: any) => void;
}) => {
  return useMutation({
    mutationFn: (data: ResendOtpPayload) => resendOtp(data),
    ...options,
  });
};

export const useForgetPassword = (options?: {
  onSuccess?: (res: any) => void;
  onError?: (err: any) => void;
}) => {
  return useMutation({
    mutationFn: (data: ForgetPasswordPayload) => forgetPassword(data),
    ...options,
  });
};

export const useLogout = () => {
  return () => {
    logout();
  };
};

export const useResetPassword = (options?: {
  onSuccess?: (res: any) => void;
  onError?: (err: any) => void;
}) => {
  return useMutation({
    mutationFn: (data: ResetPasswordPayload) => resetPassword(data),
    ...options,
  });
};
