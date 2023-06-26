/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */


import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";



interface Item {

  price: number; 
}

export default function CustomerOrder() {
  const [basket, setBasket] = useState<Item[]>([]);

  const router = useRouter();



  const handleProduceBill = () => {
    void router.push({
      pathname: "/basket",
      query: { items: JSON.stringify(basket) },
    });
  };
  
  const handleBasketClick = () => {
    void router.push({
      pathname: "/basket",
      query: { items: JSON.stringify(basket) },
    });
  };

  const getTotalPrice = () => {
    let total = 0;
    basket.forEach((item) => {
      const itemPrice = item.price;
      if (!isNaN(itemPrice)) {
        total += itemPrice;
      }
    });
    return total.toFixed(2);
  };

  return (
    <div className="bg-[#1f2026]">
      <div className="flex flex-col bg-[#1f2026] text-white">
        <div className="m-6 flex justify-end">
          <Link
            href="/basket"
            className="mr-5 cursor-pointer rounded-xl border-2 border-transparent p-2 px-4 text-2xl hover:border-orange-500  hover:text-orange-500"
          >
            Basket: {basket.length} items, Total value: £{getTotalPrice()}
          </Link>
        </div>
      </div>
      <div className="align-start mx-auto flex h-[100vh] max-w-3xl flex-col justify-center text-2xl font-bold">
        <div className="flex flex-row justify-between align-top">
          <Link className="rounded-xl bg-red-600 py-10 px-12" href="/">
            Quit Order
          </Link>
          <button
            className="rounded-xl bg-red-600 py-10 px-12"
            onClick={handleProduceBill}
          >
            Produce Bill
          </button>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 text-center">
          <div className="flex flex-col gap-8">
            <Link
              className="rounded-xl bg-red-600 py-6 px-8"
              href={{
                pathname: "/pizza",
                query: { items: JSON.stringify(basket) },
              }}
            >
              Pizza
            </Link>
            <Link
              className="rounded-xl bg-orange-600 py-6 px-8"
              href={{
                pathname: "/burger",
                query: { items: JSON.stringify(basket) },
              }}
            >
              Burger
            </Link>
            <Link
              className="rounded-xl bg-yellow-600 py-6 px-8"
              href={{
                pathname: "/starters",
                query: { items: JSON.stringify(basket) },
              }}
            >
              Starters
            </Link>
          </div>

          <div className="flex flex-col gap-8">
            <Link
              className="rounded-xl bg-blue-500 py-6 px-8"
              href={{
                pathname: "/drinks",
                query: { items: JSON.stringify(basket) },
              }}
            >
              Drinks
            </Link>
            <Link
              className="rounded-xl bg-yellow-600 py-6 px-8"
              href={{
                pathname: "/kebab",
                query: { items: JSON.stringify(basket) },
              }}
            >
              Kebab
            </Link>
            <Link
              className="rounded-xl bg-green-300 py-6 px-8"
              href={{
                pathname: "/extras",
                query: { items: JSON.stringify(basket) },
              }}
            >
              Extras
            </Link>
          </div>

          <div className="flex flex-col gap-8">
            <Link
              className="rounded-xl bg-orange-600 py-6 px-8"
              href={{
                pathname: "/mealDeal",
                query: { items: JSON.stringify(basket) },
              }}
            >
              Meal deals
            </Link>
            <Link
              className="rounded-xl bg-green-600 py-6 px-8"
              href={{
                pathname: "/kidsMeal",
                query: { items: JSON.stringify(basket) },
              }}
            >
              Kids Meal
            </Link>
            <Link
              className="rounded-xl bg-red-600 py-6 px-8"
              href={{
                pathname: "/hot",
                query: { items: JSON.stringify(basket) },
              }}
            >
              Hot
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
