import { useLanguageStore } from "~/APIs/store";
import Button from "./Button";
import { Text } from "./Text";
import { FaStar, FaPlus } from "react-icons/fa6";

const translations = {
  en: {
    noItems: "No items in the cart.",
    reviews: "Reviews",
    price: "Price",
  },
  ar: {
    noItems: "لا توجد عناصر في السلة.",
    reviews: "التقييمات",
    price: "السعر",
  },
  fr: {
    noItems: "Aucun article dans le panier.",
    reviews: "Avis",
    price: "Prix",
  },
  ru: {
    noItems: "Нет товаров в корзине.",
    reviews: "Отзывы",
    price: "Цена",
  },
};

/* eslint-disable @next/next/no-img-element */
const CartItems = ({ cartItems }: { cartItems?: any }) => {
  const language = useLanguageStore((state) => state.language);
  const t = translations[language] || translations.en;

  return (
    <>
      <div className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:p-0 lg:grid-cols-3">
        {cartItems?.length > 0 ? (
          cartItems.map((item: any) => (
            <div
              key={item.id}
              className="w-full rounded border border-borderPrimary bg-bgPrimary shadow"
            >
              <div className="w-full">
                <img
                  src={item.productPhoto}
                  alt="product Photo"
                  className="w-full"
                />
              </div>
              <div className="p-4">
                <Text font={"semiBold"} size={"lg"}>
                  {item.name}
                </Text>
                <Text font={"medium"} size={"md"} color={"gray"}>
                  {item.description}
                </Text>
                <div className="my-4 flex justify-between">
                  <div className="flex items-center gap-2">
                    <img src={item.productOwnerPhoto} alt="productOwnerPhoto" />
                    <Text font={"medium"} size={"md"} color={"gray"}>
                      {item.productOwner}
                    </Text>
                  </div>
                  <div className="flex items-center gap-2">
                    <FaStar color="yellow" className="text-xl" />
                    <Text font={"medium"} size={"md"} color={"gray"}>
                      ({item.reviews} {t.reviews})
                    </Text>
                  </div>
                </div>
                <div className="my-4 flex justify-between">
                  <div className="flex items-center gap-2">
                    <Text font={"bold"} size={"lg"} color={"gray"}>
                      {t.price}: ${item.price}
                    </Text>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button>
                      <FaPlus className="text-white" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-3 text-center">{t.noItems}</div>
        )}
      </div>
    </>
  );
};

export default CartItems;
