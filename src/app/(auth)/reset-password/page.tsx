import { Suspense } from "react";
import Spinner from "~/_components/Spinner";
import ResetPassword from "./ResetPassword";

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div className="flex h-screen items-center justify-center"><Spinner /></div>}>
      <ResetPassword />
    </Suspense>
  );
}
