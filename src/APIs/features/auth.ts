import axiosInstance from "~/lib/axios";

export interface SignupPayload {
  userName: string;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  password: string;
  gender: "Male" | "Female" | "Other";
  nationality: string;
  role: "Personal" | "Organization" | "admin";
  rolePerson: "Student" | "Freelancer" | "Entertainment";
  // roleOrganization: "Company" | "School" | "University" | "Training Course";
  identityImage: File | null;
}

export interface SigninPayload {
  userName: string;
  password: string;
}

export interface VerifyOtpPayload {
  userName: string; 
  otp: string;
}


export interface ResendOtpPayload {
  userName: string;
}

export const signup = async (formData: SignupPayload) => {
  const data = new FormData();
  Object.entries(formData).forEach(([key, value]) => {
    data.append(key, value as string | Blob);
  });

  const response = await axiosInstance.post("/auth/sign-up", data, {
    headers: { "Content-Type": "multipart/form-data" },
  });

  return response.data;
};


export const signin = async (payload: SigninPayload) => {
  const response = await axiosInstance.post(
    "/auth/login",
    payload,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
};

export const verifyOtp = async (payload: VerifyOtpPayload) => {
  const response = await axiosInstance.post(
    "/auth/email/verifyOtp",
    payload,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
};

export const resendOtp = async (payload: ResendOtpPayload) => {
  const response = await axiosInstance.post(
    "/auth/email/resend-otp",
    payload,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return response.data;
};