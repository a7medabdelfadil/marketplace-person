/* eslint-disable @next/next/no-img-element */
import React from "react";
import { IoIosInformationCircle } from "react-icons/io";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { Text } from "~/_components/Text";
import { useLanguageStore } from "~/APIs/store";
import translations from "./translations5";

const Step5 = ({ previousStep }: { previousStep: () => void }) => {
  const language = useLanguageStore((state) => state.language);
  const t = translations[language];

  return (
    <div>
      <div className="mb-4 flex cursor-pointer gap-2" onClick={previousStep}>
        <IoArrowBackCircleOutline
          size={25}
          className={`text-textSecondary ${
            language === "ar" ? "rotate-180" : ""
          }`}
        />
        <Text font={"bold"} size={"xl"} color={"gray"}>
          {t.back}
        </Text>
      </div>
      <div>
        <Text className="text-xl md:text-2xl md:text-primary2" font={"bold"}>
          {t.bulkDiscounts}
        </Text>
        <form className="mt-4 flex flex-col gap-4">
          <div className="flex items-center gap-2 p-4 md:bg-bgSecondary">
            <div>
              <Text color={"gray"} font={"bold"} className="mb-8 md:text-xl">
                {t.specifyDiscount}
              </Text>
              <div className="my-8">
                <label className="font-semibold" htmlFor="currency">
                  {t.productQuantity}
                </label>
                <select
                  name="currency"
                  id="currency"
                  className="mt-1 block w-full rounded-lg border-2 border-borderPrimary bg-bgPrimary p-4 text-sm text-textPrimary focus:outline-none md:w-1/2"
                >
                  <option value="unselected">{t.unselected}</option>
                  <option value="1">{t.test}</option>
                  <option value="2">{t.test}</option>
                </select>
                <div className="flex items-center gap-1">
                  <IoIosInformationCircle size={20} className="text-primary2" />
                  <Text
                    color={"primary2"}
                    className="text-sm md:text-lg lg:text-xl"
                  >
                    {t.quantityInfo}
                  </Text>
                </div>
              </div>
              <div>
                <label className="font-semibold" htmlFor="currency">
                  {t.discount}
                </label>
                <select
                  name="currency"
                  id="currency"
                  className="mt-1 block w-full rounded-lg border-2 border-borderPrimary bg-bgPrimary p-4 text-sm text-textPrimary focus:outline-none md:w-1/6"
                >
                  <option value="unselected">{t.unselected}</option>
                  <option value="1">{t.test}</option>
                  <option value="2">{t.test}</option>
                </select>
                <div className="flex items-center gap-1">
                  <IoIosInformationCircle size={20} className="text-primary2" />
                  <Text
                    color={"primary2"}
                    className="text-sm md:text-lg lg:text-xl"
                  >
                    {t.discountInfo}
                  </Text>
                </div>
              </div>
            </div>
            <div className="hidden lg:block">
              <img src="/images/Discount.png" alt="Discount" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step5;
