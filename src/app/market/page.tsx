/* eslint-disable @next/next/no-img-element */
"use client";

import Box from "~/_components/Box";
import Container from "~/_components/Container";
import { Text } from "~/_components/Text";
import Button from "~/_components/Button";
import { useState } from "react";
import { GrFavorite } from "react-icons/gr";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useRouter } from "next/navigation";
import { useLanguageStore } from "~/APIs/store";
import translations from "./translations";
import Product from "./1-product/Product";
import Service from "./2-service/Service";
import { LuSearch } from "react-icons/lu";

const Market = () => {
  const language = useLanguageStore((state) => state.language);
  const t = translations[language] || translations.en;

  const router = useRouter();
  const [selected, setSelected] = useState("product");
  const [search, setSearch] = useState("");

  const handleButtonClick = (button: any) => {
    setSelected(button);
  };

  const handleClickButton = () => {
    router.push("/add-product");
  };
  return (
    <>
      <Container>
        <div className="flex gap-5">
          <div className="w-3/7 z-10 -m-5 hidden h-screen bg-bgSecondary px-5 pt-5 shadow-[4px_0_4px_rgba(0,0,0,0.05)] md:block xl:w-1/5">
            <div className="flex flex-col items-center gap-8 md:flex-row">
              <div className="mb-2 hidden min-w-[250px] md:block">
                <Text font={"bold"} className="text-2xl md:text-3xl">
                  {t.marketPlace}
                </Text>
              </div>
            </div>
            <div className="gap-2 pr-2 pt-2">
              <div className="hidden justify-between text-center max-[502px]:grid max-[502px]:justify-center md:flex">
                <div className="mb-3 hidden md:block">
                  <label htmlFor="icon" className="sr-only">
                    {t.searchPlaceholder}
                  </label>
                  <div className="relative min-w-[150px]">
                    <div className="pointer-events-none absolute inset-y-0 start-0 z-20 flex items-center ps-4">
                      <LuSearch size={20} className="text-textSecondary" />
                    </div>
                    <input
                      onChange={(e) => setSearch(e.target.value)}
                      type="text"
                      id="icon"
                      name="icon"
                      className="block w-full rounded-lg border-2 border-borderPrimary px-4 py-2 ps-11 text-sm outline-none focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50"
                      placeholder={t.searchPlaceholder}
                    />
                  </div>
                </div>
              </div>
              <div
                className={`${
                  selected === "product" ? "bg-bgPrimary" : "bg-transparent"
                } flex min-w-[150px] cursor-pointer gap-2 rounded-xl py-2 pl-2`}
                onClick={() => handleButtonClick("product")}
              >
                <img
                  src="/images/product.png"
                  alt="Product"
                  className="w-[25px]"
                />
                <Text font={"bold"}>{t.product}</Text>
              </div>
              <div
                className={`${
                  selected === "service" ? "bg-bgPrimary" : "bg-transparent"
                } mt-4 flex min-w-[150px] cursor-pointer gap-2 rounded-xl py-2 pl-2`}
                onClick={() => handleButtonClick("service")}
              >
                <img
                  src="/images/services.png"
                  alt="Service"
                  className="w-[25px]"
                />
                <Text font={"bold"}>{t.service}</Text>
              </div>
            </div>
          </div>
          <div className="w-full md:w-4/5">
            <div className="flex items-center">
              <div className="mb-4 flex w-full justify-end">
                <div className="flex w-[220px] items-center gap-4 md:w-fit">
                  <GrFavorite
                    className="hidden md:block"
                    size={40}
                    color="red"
                  />
                  <HiOutlineShoppingCart
                    className="disabled -z-10 text-white md:block md:text-primary"
                    size={40}
                  />
                  {selected === "product" ? (
                    <Button
                      onClick={handleClickButton}
                      className="hidden md:block"
                    >
                      {t.addProduct}
                    </Button>
                  ) : (
                    <Button className="hidden md:block">{t.addService}</Button>
                  )}
                </div>
              </div>
            </div>
            <Box
              rounded="none"
              padding="0"
              className="-mt-[90px] px-0 pb-[120px] md:mb-8 md:px-4 md:pb-[20px]"
            >
              <div className="block pt-4 md:hidden">
                <div className="flex w-1/5 gap-2 p-4">
                  <div
                    className={`${
                      selected === "product"
                        ? "bg-bgSecondary"
                        : "bg-transparent"
                    } flex min-w-[150px] cursor-pointer gap-2 rounded-xl px-6 py-4`}
                    onClick={() => handleButtonClick("product")}
                  >
                    <img
                      src="/images/product.png"
                      alt="Product"
                      className="w-[25px]"
                    />
                    <Text font={"bold"}>{t.product}</Text>
                  </div>
                  <div
                    className={`${
                      selected === "service"
                        ? "bg-bgSecondary"
                        : "bg-transparent"
                    } flex min-w-[150px] cursor-pointer gap-2 rounded-xl px-6 py-4`}
                    onClick={() => handleButtonClick("service")}
                  >
                    <img
                      src="/images/services.png"
                      alt="Service"
                      className="w-[25px]"
                    />
                    <Text font={"bold"}>{t.service}</Text>
                  </div>
                </div>
              </div>
              {selected === "product" ? <Product /> : <Service />}
            </Box>
          </div>
        </div>
      </Container>
    </>
  );
};
export default Market;
