/* eslint-disable @next/next/no-img-element */
"use client";

import { useState } from "react";
import Box from "~/_components/Box";
import Container from "~/_components/Container";
import { Text } from "~/_components/Text";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Button from "~/_components/Button";
import { RiDeleteBinLine } from "react-icons/ri";
import { BsFileEarmarkText } from "react-icons/bs";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa6";
import { useLanguageStore } from "~/APIs/store";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import Step5 from "./steps/Step5";
import translations from "./translations";


const AddProduct = () => {
  const language = useLanguageStore((state) => state.language);
  const t = translations[language];

  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    if (currentStep < 5) setCurrentStep(currentStep + 1);
  };

  const previousStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true); // Show modal
  };

  const closeModal = () => {
    setModalOpen(false); // Hide modal
  };

  const cancel = () => {
    toast.success("Product added Canceled successfully");
    router.push("/");
  };

  return (
    <>
      <Container>
        <Box
          rounded="none"
          className="-mt-5 flex justify-center pb-[120px] md:my-8 md:pb-[20px]"
        >
          <div className="flex w-full max-w-5xl flex-col items-center md:p-8">
            <div className="my-4 flex w-full justify-center gap-4 sm:gap-8">
              {t.steps.map((label, stepIndex) => {
                const step = stepIndex + 1;
                return (
                  <div key={step} className="flex flex-col items-center">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-full border-2 ${
                        currentStep > step
                          ? "border-primary bg-primary font-semibold text-white md:border-primary2 md:bg-primary2"
                          : currentStep === step
                            ? "border-primaryHover bg-primaryHover font-semibold text-white md:border-primary2Hover md:bg-primary2Hover"
                            : "border-primary font-semibold text-primary md:border-primary2 md:text-primary2"
                      }`}
                    >
                      {currentStep > step ? <FaCheck size={20} /> : step}
                    </div>
                    <Text
                      font="bold"
                      className="mt-1 text-center text-xs md:text-sm"
                      color={"gray"}
                    >
                      {label}
                    </Text>
                  </div>
                );
              })}
            </div>

            <Box
              padding="0"
              border="none"
              shadow="none"
              className="mt-4 w-full md:p-4"
            >
              {currentStep === 1 && <Step1 />}
              {currentStep === 2 && <Step2 previousStep={previousStep} />}
              {currentStep === 3 && <Step3 previousStep={previousStep} />}
              {currentStep === 4 && <Step4 previousStep={previousStep} />}
              {currentStep === 5 && <Step5 previousStep={previousStep} />}
            </Box>

            <div className="mt-4 flex w-full flex-col-reverse justify-between gap-4 md:flex-row md:p-4">
              <div className="hidden w-full md:block md:w-40">
                <Button
                  color="primary2"
                  theme="outline"
                  onClick={cancel}
                  className="cursor-pointer rounded-lg border bg-primary2 px-4 py-2 font-bold text-primary2 hover:bg-bgSecondary"
                >
                  <RiDeleteBinLine size={20} />
                  {t.cancel}
                </Button>
              </div>
              <div className="block w-full md:hidden md:w-40">
                <Button
                  color="primary"
                  theme="outline"
                  onClick={cancel}
                  className="cursor-pointer rounded-lg border bg-primary2 px-4 py-2 font-bold text-primary hover:bg-bgSecondary"
                >
                  {t.cancel}
                </Button>
              </div>
              <div className="flex w-full gap-4 md:w-[336px]">
                <Button
                  color="primary2"
                  theme="outline"
                  className="hidden cursor-pointer rounded-lg border bg-primary2 px-4 py-2 font-bold text-primary2 hover:bg-bgSecondary md:flex"
                >
                  <BsFileEarmarkText size={20} />
                  {t.saveDraft}
                </Button>
                {currentStep === 5 ? (
                  <div className="w-full">
                    <div className="hidden md:block">
                      <Button onClick={openModal} color="primary2">
                        {t.publish}
                        <FaRegCircleCheck size={25} />
                      </Button>
                    </div>
                    <div className="block md:hidden">
                      <Button onClick={openModal}>
                        {t.publish}
                        <FaRegCircleCheck size={25} />
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="w-full">
                    <div className="hidden md:block">
                      <Button
                        onClick={nextStep}
                        color="primary2"
                        disabled={currentStep === 5}
                      >
                        {t.continue}
                      </Button>
                    </div>
                    <div className="block md:hidden">
                      <Button onClick={nextStep} disabled={currentStep === 5}>
                        {t.continue}
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Box>
      </Container>
      {isModalOpen && (
        <div
          className="fixed top-0 z-[1001] flex h-screen w-screen items-center justify-center bg-black bg-opacity-50"
          onClick={closeModal} // Close modal when clicking on the overlay
        >
          <div
            className="flex flex-col items-center justify-center rounded-lg bg-bgPrimary p-6 text-center shadow-lg"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <div className="w-fit">
              <img src="/images/box-tick.png" alt={t.productPublished} />
            </div>
            <Text
              color={"primary2"}
              font={"semiBold"}
              size={"2xl"}
              className="mt-4"
            >
              {t.productPublished}
            </Text>
          </div>
        </div>
      )}
    </>
  );
};

export default AddProduct;
