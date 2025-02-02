"use client";

import React, { useState } from "react";
import { TbPhotoPlus } from "react-icons/tb";
import Input from "~/_components/Input";
import { Text } from "~/_components/Text";
import { useLanguageStore } from "~/APIs/store";
import translations from "./translations1";

const Step1 = () => {
  const [fileName, setFileName] = useState<string | null>(null);
  const language = useLanguageStore((state) => state.language);
  const t = translations[language];

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
    }
  };

  return (
    <div>
      <Text className="text-xl md:text-2xl md:text-primary2" font={"bold"}>
        {t.productInformation}
      </Text>
      <form className="mt-4 flex flex-col gap-4">
        <Input
          label={t.productName}
          border="gray"
          type="text"
          placeholder={t.productNamePlaceholder}
          theme="transparent"
        />
        <Input
          label={t.productShortDescription}
          border="gray"
          type="text"
          placeholder={t.productShortDescriptionPlaceholder}
          theme="transparent"
        />

        <Input
          label={t.productImages}
          id="product-image"
          name="product-image"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
        <div
          onClick={() => document.getElementById("product-image")?.click()}
          className="flex h-32 w-full cursor-pointer items-center justify-center rounded-lg border-2 border-dashed border-borderPrimary text-textSecondary"
        >
          <div className="flex flex-col items-center">
            <TbPhotoPlus size={50} />
            {fileName ? (
              <p className="mt-2 text-textPrimary">{fileName}</p>
            ) : (
              <p className="mt-2 text-textSecondary">{t.browseDesktop}</p>
            )}
          </div>
        </div>

        <Input
          label={t.productDescription}
          border="gray"
          type="text"
          placeholder={t.productDescriptionPlaceholder}
          theme="transparent"
          className="pb-14"
        />
        <div className="flex items-center justify-start gap-4">
          <div className="flex flex-col">
            <label className="font-semibold" htmlFor="currency">
              {t.productPriceCurrency}
            </label>
            <select
              name="currency"
              id="currency"
              className="mt-1 block w-48 rounded-lg border-2 border-borderPrimary bg-bgPrimary p-4 text-sm text-textPrimary focus:outline-none"
            >
              <option value="unselected">{t.unselected}</option>
              <option value="$">$</option>
              <option value="PE">PE</option>
            </select>
          </div>

          <div className="w-80">
            <Input
              label={t.productPrice}
              type="number"
              theme="transparent"
              className="w-full"
              border="gray"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Step1;
