/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

interface BasketItem {
  title: string;
  price: number;

}

export default function Basket({ deliveryPrice }: { deliveryPrice: number }) {
  const router = useRouter();
  const { items } = router.query;

  const [basketItems, setBasketItems] = useState<BasketItem[]>([]);

  useEffect(() => {
    if (items) {
      const parsedItems: BasketItem[] = JSON.parse(items as string);
      setBasketItems(parsedItems);
    } else {
      const storedItems = localStorage.getItem("basketItems");
      if (storedItems) {
        const parsedItems: BasketItem[] = JSON.parse(storedItems);
        setBasketItems(parsedItems);
      }
    }
  }, [items]);

  useEffect(() => {
    localStorage.setItem("basketItems", JSON.stringify(basketItems));
  }, [basketItems]);

  const getUniqueItems = (arr: BasketItem[]): BasketItem[] => {
    const uniqueItems: BasketItem[] = [];
    arr.forEach((item) => {
      if (
        !uniqueItems.some(
          (uniqueItem) =>
            uniqueItem.title === item.title && uniqueItem.price === item.price
        )
      ) {
        uniqueItems.push(item);
      }
    });
    return uniqueItems;
  };

  const countItems = (arr: BasketItem[], val: BasketItem): number => {
    let count = 0;
    arr.forEach((item) => {
      if (item.title === val.title && item.price === val.price) {
        count++;
      }
    });
    return count;
  };

  const getTotalPrice = (arr: BasketItem[], val: BasketItem): number => {
    let totalPrice = 0;
    arr.forEach((item) => {
      if (item.title === val.title && item.price === val.price) {
        totalPrice += item.price;
      }
    });
    return totalPrice;
  };

  const uniqueBasketItems = getUniqueItems(basketItems);

  const calculateTotalPrice = (): number => {
    let total = 0;
    basketItems.forEach((item) => {
      total += item.price;
    });
    return total;
  };

  const handleGenerateBill = () => {
    localStorage.removeItem("basketItems");
    setBasketItems([]);

    const totalPrice = calculateTotalPrice() + deliveryPrice;
    console.log("Total Price (including delivery):", totalPrice);
  };

  return (
    <div className="h-[100vh] bg-[#333] text-white">
      <div className="flex py-10">
        <Link
          className="ml-16 cursor-pointer rounded-xl border-2 border-transparent py-4 px-8 text-2xl hover:border-orange-500  hover:text-orange-500"
          href="/customer-order"
        >
          Back to Menu
        </Link>
      </div>

      <p className="ml-24 py-8 text-2xl">Basket :</p>
      <div className="flex flex-col items-center justify-center rounded-xl py-4 border border-white text-xl mx-24">
        {basketItems.length === 0 ? (
          <p>Your basket is empty.</p>
        ) : (
          <ul className="my-4 scroll-my-2 overflow-hidden">
            {uniqueBasketItems.map((item, index) => (
              <li className="py-1" key={index}>
                <ul className="flex">
                  <li className="flex">
                    Qty : {countItems(basketItems, item)} X
                  </li>
                  <ul>
                    <li className="pl-2 text-orange-500">
                      {item.title}
                    </li>
                  </ul>
                  <ul className="flex pl-2 text-white">
                    <li> - </li>
                    <li className="text-orange-500 pl-2">
                      <span className="mx-1">£</span>{getTotalPrice(basketItems, item)}
                    </li>
                  </ul>
                </ul>
              </li>
            ))}
          </ul>
        )}


        {basketItems.length > 0 && (
          <p className="text-orange-500 font-bold">
            Total Price: <span className="mx-1">£</span>{calculateTotalPrice()} 
          </p>
        )}

        {basketItems.length > 0 && (
          <button
            className="mt-4 px-8 py-2 bg-orange-500 text-white rounded-2xl"
            onClick={handleGenerateBill}
          >
            Generate Bill
          </button>
        )}
      </div>
    </div>
  );
}
