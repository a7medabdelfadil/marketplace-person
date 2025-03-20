"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import Spinner from "./Spinner";

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const token = Cookies.get("token");
    if (!token) {
      router.replace("/sign-in");
    } else {
      setIsChecking(false);
    }
  }, [router]);

  if (isChecking) {
    return <Spinner />; 
  }

  return <>{children}</>;
};

export default ProtectedRoute;
