import Link from "next/link";
import React, { useState } from "react";
import { IoMdArrowForward } from "react-icons/io";
import CartItems from "~/_components/CartItems";
import Products from "~/_components/Porducts";
import { Text } from "~/_components/Text";
import { useLanguageStore } from "~/APIs/store";
import translations from "../translations";
import { BsFillFilterSquareFill } from "react-icons/bs";

function Service() {
  const language = useLanguageStore((state) => state.language);
  const t = translations[language] || translations.en;

  const [search, setSearch] = useState("");

  const cartItemsService = [
    {
      id: 1,
      name: "Laptop",
      price: 1.2,
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu.",
      quantity: 3,
      productPhoto: "/images/service.png",
      productOwner: "John Doe",
      productOwnerPhoto: "/images/productOwnder.png",
      reviews: "4.4",
    },
    {
      id: 2,
      name: "Smartphone",
      price: 0.8,
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu.",
      quantity: 5,
      productPhoto: "/images/service.png",
      productOwner: "Jane Smith",
      productOwnerPhoto: "/images/productOwnder.png",
      reviews: "4.8",
    },
    {
      id: 3,
      name: "Wireless Earbuds",
      price: 2.5,
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu.",
      quantity: 2,
      productPhoto: "/images/service.png",
      productOwner: "Sarah Lee",
      productOwnerPhoto: "/images/productOwnder.png",
      reviews: "4.7",
    },
    {
      id: 4,
      name: "Wireless Earbuds",
      price: 2.5,
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu.",
      quantity: 2,
      productPhoto: "/images/service.png",
      productOwner: "Sarah Lee",
      productOwnerPhoto: "/images/productOwnder.png",
      reviews: "4.7",
    },
    {
      id: 5,
      name: "Smartphone",
      price: 0.8,
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu.",
      quantity: 5,
      productPhoto: "/images/service.png",
      productOwner: "Jane Smith",
      productOwnerPhoto: "/images/productOwnder.png",
      reviews: "4.8",
    },
    {
      id: 6,
      name: "Laptop",
      price: 1.2,
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu.",
      quantity: 3,
      productPhoto: "/images/service.png",
      productOwner: "John Doe",
      productOwnerPhoto: "/images/productOwnder.png",
      reviews: "4.4",
    },
  ];

  const productsService = [
    {
      id: 1,
      name: "Laptop",
      price: 1.2,
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu.",
      quantity: 3,
      productPhoto: "/images/service.png",
      productOwner: "John Doe",
      productOwnerPhoto: "/images/productOwnder.png",
      reviews: "4.4",
    },
    {
      id: 2,
      name: "Smartphone",
      price: 0.8,
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu.",
      quantity: 5,
      productPhoto: "/images/service.png",
      productOwner: "Jane Smith",
      productOwnerPhoto: "/images/productOwnder.png",
      reviews: "4.8",
    },
  ];

  return (
    <>
      <div>
        <div className="mt-4 flex flex-col items-center justify-center gap-4 md:mt-24">
          <div className="flex flex-col items-center justify-center bg-bgThird pb-4 md:bg-bgPrimary">
            <div className="xl:1/2 flex w-full flex-col items-center p-4 md:w-2/3">
              <Text
                font={"bold"}
                className="text-center text-[25px] md:text-[35px] xl:text-[48px]"
              >
                {t.boostLearning}
              </Text>
              <Text
                font={"bold"}
                className="text-center text-[25px] md:text-[35px] xl:text-[48px]"
              >
                {t.interactiveLessons}
              </Text>
            </div>
            <div className="mb-3 block min-w-[350px] md:hidden">
              <label htmlFor="icon" className="sr-only">
                {t.searchPlaceholder}
              </label>
              <div className="relative flex w-full">
                <input
                  onChange={(e) => setSearch(e.target.value)}
                  type="text"
                  id="icon"
                  name="icon"
                  className="block w-full rounded-lg border border-borderPrimary px-4 py-2 text-sm shadow outline-none focus:border-blue-500 focus:ring-blue-500 disabled:pointer-events-none disabled:opacity-50"
                  placeholder={t.searchPlaceholder}
                />
                <BsFillFilterSquareFill
                  className="absolute right-2 top-[6px] cursor-pointer text-primary"
                  size={25}
                />
              </div>
            </div>
          </div>
          <div className="xl:1/2 mt-8 flex w-full flex-col items-center p-4 md:w-2/3">
            <Text
              font={"bold"}
              className="text-center text-[25px] md:text-[35px] xl:text-[48px]"
            >
              {t.viewAllServices}
            </Text>
            <Text font={"medium"} size={"xl"} className="mt-4 text-center">
              {t.findServices}
            </Text>
          </div>
          <CartItems cartItems={cartItemsService} />
          <Link
            rel="stylesheet"
            href="/opream"
            className="flex items-center gap-2 rounded border-2 border-borderSecondary px-6 py-4 font-semibold hover:border-primary2 hover:bg-bgThird hover:text-primary2"
          >
            {t.viewAllServices}{" "}
            <IoMdArrowForward
              className={`text-xl ${language === "ar" ? "rotate-180" : ""}`}
            />{" "}
          </Link>
          <div className="xl:1/2 flex w-full flex-col items-center p-4 md:w-2/3">
            <Text
              font={"bold"}
              className="text-[25px] md:text-[35px] xl:text-[48px]"
            >
              {t.topProduct}
            </Text>
          </div>
        </div>
        <Products products={productsService} />
      </div>
    </>
  );
}

export default Service;
