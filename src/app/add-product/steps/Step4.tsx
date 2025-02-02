import React from "react";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import Input from "~/_components/Input";
import { Text } from "~/_components/Text";
import { useLanguageStore } from "~/APIs/store";
import translations from "./translations4";

const Step4 = ({ previousStep }: { previousStep: () => void }) => {
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
          {t.logisticsInfo}
        </Text>
        <form className="mt-4 flex flex-col gap-4">
          <div>
            <label className="font-semibold" htmlFor="currency">
              {t.containerType}
            </label>
            <select
              name="currency"
              id="currency"
              className="mt-1 block w-full rounded-lg border-2 border-borderPrimary bg-bgPrimary p-4 text-sm text-textPrimary focus:outline-none md:w-3/4"
            >
              <option value="unselected">{t.test}</option>{" "}
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
          <div className="w-full md:w-80">
            <Input
                label={t.quantityInContainer}
              type="number"
              theme="transparent"
              className="w-full"
              border="gray"
            />
          </div>
          <div>
            <label className="font-semibold" htmlFor="currency">
            {t.productDimensions}
            </label>
            <select
              name="currency"
              id="currency"
              className="mt-1 block w-full rounded-lg border-2 border-borderPrimary bg-bgPrimary p-4 text-sm text-textPrimary focus:outline-none md:w-1/2"
            >
              <option value="unselected">{t.categoryName}</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
          <div className="w-full md:w-80">
            <Input
              label={t.productWeight}
              type="number"
              theme="transparent"
              className="w-full"
              border="gray"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Step4;
