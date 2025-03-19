import { useMutation, UseMutationOptions } from "@tanstack/react-query";
import { resendOtp, ResendOtpPayload, signin, SigninPayload, signup, SignupPayload, verifyOtp, VerifyOtpPayload } from "../features/auth";

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