import { Suspense } from "react";
import Spinner from "~/_components/Spinner";
import VerifyAccount from "./VerifyAccount";

export default function VerifyAccountPage() {
  return (
    <Suspense fallback={<div className="flex h-screen items-center justify-center"><Spinner /></div>}>
      <VerifyAccount />
    </Suspense>
  );
}
