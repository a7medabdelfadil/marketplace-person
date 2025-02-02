import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { Text } from "~/_components/Text";
import { useLanguageStore } from "~/APIs/store";
import translations from "./translations2";

const Step2 = ({ previousStep }: { previousStep: () => void }) => {
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
          {t.productDetailInfo}
        </Text>
        <form className="mt-4 flex flex-col gap-4">
          <div>
            <label className="font-semibold" htmlFor="currency">
              {t.productCategory}
            </label>
            <select
              name="currency"
              id="currency"
              className="mt-1 block w-full rounded-lg border-2 border-borderPrimary bg-bgPrimary p-4 text-sm text-textPrimary focus:outline-none"
            >
              <option value="unselected">{t.categoryName}</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>
          <div>
            <label className="font-semibold" htmlFor="currency">
              {t.subCategory}
            </label>
            <select
              name="SubCategory"
              id="SubCategory"
              className="mt-1 block w-full rounded-lg border-2 border-borderPrimary bg-bgPrimary p-4 text-sm text-textPrimary focus:outline-none"
            >
              <option value="unselected">{t.categoryName}</option>
              <option value="1">1</option>
              <option value="2">2</option>
            </select>
          </div>

          <Text size={"2xl"} font={"bold"}>
            {t.productSpecification}
          </Text>
          <div className="grid w-full grid-cols-1 gap-4 md:w-3/4 md:grid-cols-2">
            <div>
              <label htmlFor="SubCategory1">{t.material}</label>
              <select
                name="SubCategory1"
                id="SubCategory1"
                className="mt-1 block w-full rounded-lg border-2 border-borderPrimary bg-bgPrimary p-4 text-sm text-textPrimary focus:outline-none"
              >
                <option value="unselected">{t.test}</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
            <div>
              <label htmlFor="SubCategory2">{t.weight}</label>
              <select
                name="SubCategory2"
                id="SubCategory2"
                className="mt-1 block w-full rounded-lg border-2 border-borderPrimary bg-bgPrimary p-4 text-sm text-textPrimary focus:outline-none"
              >
                <option value="unselected">{t.test}</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
            <div>
              <label htmlFor="SubCategory3">{t.productionTechnique}</label>
              <select
                name="SubCategory3"
                id="SubCategory3"
                className="mt-1 block w-full rounded-lg border-2 border-borderPrimary bg-bgPrimary p-4 text-sm text-textPrimary focus:outline-none"
              >
                <option value="unselected">{t.test}</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
            <div>
              <label htmlFor="SubCategory4">{t.absorbency}</label>
              <select
                name="SubCategory4"
                id="SubCategory4"
                className="mt-1 block w-full rounded-lg border-2 border-borderPrimary bg-bgPrimary p-4 text-sm text-textPrimary focus:outline-none"
              >
                <option value="unselected">{t.test}</option>
                <option value="1">1</option>
                <option value="2">2</option>
              </select>
            </div>
          </div>
          <Text size={"2xl"} font={"bold"}>
            {t.productTags}
          </Text>
          <Text color={"limeGreen"} font={"bold"}>
            {t.recommendedTags}
          </Text>
          <div>
            <div className="flex flex-wrap gap-4">
              {Array.from({ length: 10 }).map((_, index) => (
                <div
                  key={index}
                  className="flex h-10 w-24 items-center justify-evenly rounded-full border border-primary text-primary md:h-12 md:w-28 md:border-primary2 md:text-primary2"
                >
                  <Text
                    className="text-primary md:text-primary2"
                    font={"semiBold"}
                  >
                    {t.tag} {index + 1}
                  </Text>
                  {index % 2 === 0 ? (
                    <FaRegCircleCheck size={25} />
                  ) : (
                    <MdOutlineAddCircleOutline size={25} />
                  )}
                </div>
              ))}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Step2;
