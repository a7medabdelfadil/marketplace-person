/* eslint-disable @next/next/no-img-element */
"use client";

import Box from "~/_components/Box";
import Container from "~/_components/Container";
import { Text } from "~/_components/Text";
import { FaStar, FaStarHalf, FaCircle } from "react-icons/fa";
import Link from "next/link";
import { useState } from "react";
import Button from "~/_components/Button";
import Products from "~/_components/Porducts";
import { IoArrowBack } from "react-icons/io5";
import { useLanguageStore } from "~/APIs/store";
import translations from "./translations";
import { LuSearch } from "react-icons/lu";

const ProductDetails = () => {
  const language = useLanguageStore((state) => state.language);
  const t = translations[language] || translations.en;

  const [selected, setSelected] = useState("");
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [search, setSearch] = useState("");

  const handleButtonClick = (button: any) => {
    setSelected(button);
  };

  const handleRatingClick = (index: any) => {
    setRating(index);
  };

  const handleReviewChange = (e: any) => {
    setReview(e.target.value);
  };

  const products = [
    {
      id: 1,
      name: "Laptop",
      price: 1.2,
      description:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit tortor eu.",
      quantity: 3,
      productPhoto: "/images/iphone.png",
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
      productPhoto: "/images/iphone.png",
      productOwner: "Jane Smith",
      productOwnerPhoto: "/images/productOwnder.png",
      reviews: "4.8",
    },
  ];

  return (
    <>
      <Container>
        <div className="flex gap-5">
          <div className="z-10 -m-5 hidden h-screen bg-bgSecondary pl-5 pt-5 shadow-[4px_0_4px_rgba(0,0,0,0.05)] md:block md:w-1/3 lg:w-1/4 xl:w-1/5">
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
          <div className="w-full md:w-2/3 lg:w-3/4 xl:w-4/5">
            <div className="flex items-center">
              <div className="mb-4 flex w-full justify-end">
                <div className="flex w-[220px] items-center gap-4 md:w-fit">
                  <Button className="hidden md:block">{t.addProduct}</Button>
                </div>
              </div>
            </div>
            <Box
              rounded="none"
              className="my-8 -mt-10 pb-[120px] md:mt-2 md:pb-[20px]"
            >
              <IoArrowBack
                size={25}
                className="block cursor-pointer md:hidden"
              />
              <div className="mt-4 flex flex-col gap-4">
                <div className="flex flex-col gap-4 p-4 xl:flex-row">
                  <div className="flex w-full flex-col-reverse items-center justify-center gap-4 xl:w-1/2 xl:flex-row xl:items-start">
                    <div className="flex flex-row gap-4 xl:flex-col">
                      {[...Array(4)].map((_, index) => (
                        <div
                          key={index}
                          className="flex max-h-[80px] min-h-[60px] min-w-[60px] max-w-[80px] items-center justify-center rounded-xl bg-[#19213D14] p-2 dark:bg-[#434750]"
                        >
                          <img
                            src="/images/iphone.png"
                            className="h-full w-full object-cover"
                            alt="Product Thumbnail"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="flex h-[300px] w-full max-w-[500px] items-center justify-center rounded-xl bg-[#19213D14] p-8 dark:bg-[#434750]">
                      <img
                        src="/images/iphone.png"
                        alt="Main Product Photo"
                        className="h-full w-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="w-full xl:w-1/2">
                    <Text
                      font={"bold"}
                      size={"4xl"}
                      className="text-start md:text-center xl:text-start"
                    >
                      {t.mobile}
                    </Text>
                    <Text
                      font={"semiBold"}
                      size={"2xl"}
                      color={"gray"}
                      className="mt-2 text-start md:text-center xl:text-start"
                    >
                      $49.00
                    </Text>
                    <div className="flex items-center justify-start gap-2 text-xl md:justify-center xl:justify-start">
                      <div className="flex gap-1 border-r-2 border-borderPrimary py-2 pr-1 text-yellow-500">
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStarHalf />
                      </div>
                      <Text font={"semiBold"} size={"xl"} color={"gray"}>
                        5 {t.customerReviews}
                      </Text>
                    </div>
                    <Text
                      size={"xl"}
                      className="text-md mt-4 w-full text-start md:text-center xl:max-w-[400px] xl:text-start"
                    >
                      {t.description}
                    </Text>
                    <Text
                      size={"xl"}
                      color={"gray"}
                      className="my-4 text-start md:text-center xl:text-start"
                    >
                      {t.color}
                    </Text>
                    <div className="mb-8 flex items-center justify-start gap-4 md:justify-center xl:justify-start">
                      <FaCircle className="text-2xl text-red-500" />
                      <FaCircle className="text-2xl text-green-500" />
                      <FaCircle className="text-2xl text-blue-500" />
                    </div>
                    <div className="flex justify-start md:justify-center xl:justify-start">
                      <Link
                        href="#"
                        className="rounded-xl border border-borderSecondary p-4 text-xl font-semibold"
                      >
                        {t.connectWithSeller}
                      </Link>
                    </div>
                    <div className="mt-14 border-b border-borderPrimary"></div>
                    <table className="mt-10 w-full table-auto">
                      <tbody>
                        <tr>
                          <td className="px-4 py-2 text-textSecondary">
                            {t.sku}
                          </td>
                          <td className="px-4 py-2 text-textSecondary">:</td>
                          <td className="px-4 py-2 text-textSecondary">
                            SS001
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 text-textSecondary">
                            {t.category}
                          </td>
                          <td className="px-4 py-2 text-textSecondary">:</td>
                          <td className="px-4 py-2 text-textSecondary">
                            {t.mobile}
                          </td>
                        </tr>
                        <tr>
                          <td className="px-4 py-2 text-textSecondary">
                            {t.tags}
                          </td>
                          <td className="px-4 py-2 text-textSecondary">:</td>
                          <td className="px-4 py-2 text-textSecondary">
                            {t.electronics}, {t.mobile}, {t.gadgets}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="p-4">
                  <div className="hidden md:block">
                    <Text
                      color={"primary2"}
                      font={"bold"}
                      className="text-[25px] md:text-[35px] xl:text-[48px]"
                    >
                      {t.details}
                    </Text>
                  </div>
                  <div className="block md:hidden">
                    <Text
                      font={"bold"}
                      className="text-[25px] md:text-[35px] xl:text-[48px]"
                    >
                      {t.details}
                    </Text>
                  </div>

                  <Text font={"semiBold"} className="mt-4 text-sm lg:text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Text>
                  <Text font={"semiBold"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Text>
                  <ul className="mt-4 list-disc pl-5 text-sm lg:text-xl">
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                    <li>Lorem ipsum dolor sit amet</li>
                  </ul>
                </div>
                <div className="flex flex-col justify-center lg:flex-row">
                  <div className="w-full p-4">
                    <Text font={"bold"} size={"xl"} className="mb-4">
                      {t.reviewsHeader}
                    </Text>

                    <div className="flex items-center justify-between border-b border-borderPrimary pb-2">
                      <div className="flex items-center">
                        <Text font={"bold"} size={"4xl"} className="px-2">
                          4.2
                        </Text>
                        <Text color={"gray"} className="text-sm lg:text-xl">
                          - 54 {t.reviewsHeader}
                        </Text>
                      </div>
                      <div className="relative inline-block w-48">
                        <label
                          htmlFor="sortBy"
                          className="mb-2 block text-textPrimary"
                        >
                          {t.sortBy}
                        </label>
                        <select
                          id="sortBy"
                          className="block w-full rounded border border-borderPrimary bg-bgPrimary px-3 py-2 text-gray-700 text-textPrimary shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                        >
                          <option value="price">{t.price}</option>
                          <option value="popularity">{t.popularity}</option>
                          <option value="rating">{t.rating}</option>
                          <option value="newest">{t.newest}</option>
                        </select>
                      </div>
                    </div>
                    <div className="my-4 flex gap-4 rounded-xl border border-borderPrimary p-4 md:border-none">
                      <div className="my-4 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-bgThird text-primary2">
                        ED
                      </div>
                      <div className="w-full">
                        <div className="flex w-full items-start justify-between">
                          <Text font={"semiBold"}>Emily Davis</Text>
                          <div className="flex gap-1 py-2 pr-1 text-yellow-500">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalf />
                          </div>
                        </div>
                        <div>
                          <Text color={"gray"}>1 Week ago</Text>
                          <Text color={"gray"}>
                            This company always goes above and beyond to satisfy
                            their customers.
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="my-4 flex gap-4 rounded-xl border border-borderPrimary p-4 md:border-none">
                      <div className="my-4 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-bgThird text-primary2">
                        ED
                      </div>
                      <div className="w-full">
                        <div className="flex w-full items-start justify-between">
                          <Text font={"semiBold"}>Emily Davis</Text>
                          <div className="flex gap-1 py-2 pr-1 text-yellow-500">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalf />
                          </div>
                        </div>
                        <div>
                          <Text color={"gray"}>1 Week ago</Text>
                          <Text color={"gray"}>
                            This company always goes above and beyond to satisfy
                            their customers.
                          </Text>
                        </div>
                      </div>
                    </div>
                    <div className="my-4 flex gap-4 rounded-xl border border-borderPrimary p-4 md:border-none">
                      <div className="my-4 flex h-[50px] w-[50px] items-center justify-center rounded-full bg-bgThird text-primary2">
                        ED
                      </div>
                      <div className="w-full">
                        <div className="flex w-full items-start justify-between">
                          <Text font={"semiBold"}>Emily Davis</Text>
                          <div className="flex gap-1 py-2 pr-1 text-yellow-500">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalf />
                          </div>
                        </div>
                        <div>
                          <Text color={"gray"}>1 Week ago</Text>
                          <Text color={"gray"}>
                            This company always goes above and beyond to satisfy
                            their customers.
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full">
                    <Text font={"bold"} size={"xl"}>
                      {t.addReview}
                    </Text>
                    <div className="w-full space-y-4">
                      <div className="flex gap-4 py-2 text-yellow-500">
                        {Array(5)
                          .fill(0)
                          .map((_, index) => (
                            <FaStar
                              key={index}
                              className={`cursor-pointer text-4xl ${
                                index < rating
                                  ? "text-yellow-500"
                                  : "text-gray-300"
                              }`}
                              onClick={() => handleRatingClick(index + 1)}
                            />
                          ))}
                      </div>

                      <textarea
                        value={review}
                        onChange={handleReviewChange}
                        placeholder={t.reviewPlaceholder}
                        rows={10}
                        className="w-full rounded border border-borderPrimary px-3 py-2 shadow focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                      />
                      <Button>{t.submit}</Button>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <div className="xl:1/2 flex w-full flex-col items-center p-4 md:w-2/3">
                    <Text
                      font={"bold"}
                      className="text-[25px] md:text-[35px] xl:text-[48px]"
                    >
                      {t.topProducts}
                    </Text>
                  </div>
                </div>
              </div>
              <Products products={products} />
            </Box>
          </div>
        </div>
      </Container>
    </>
  );
};

export default ProductDetails;
