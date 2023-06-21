

import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import Burger from "./Burger";

export default function MenuContainer({ children }) {
  const [basket, setBasket] = useState([]);

  const router = useRouter();

  const addToBasket = (item: any) => {
    setBasket([...basket, item]);
  };

  const handleBasketClick = () => {
    void router.push({
      pathname: "/basket",
      query: { items: JSON.stringify(basket) },
    });
  };

  return (
    <div>
      <div className="m-6 flex justify-between">
        <Link
          className="ml-3 cursor-pointer rounded-xl border-2 border-transparent p-2 px-4 text-2xl hover:border-orange-500  hover:text-orange-500"
          href="/new-order"
        >
          Back to Menu
        </Link>
        <p
          className="mr-5 cursor-pointer rounded-xl border-2 border-transparent p-2 px-4 text-2xl hover:border-orange-500  hover:text-orange-500"
          onClick={handleBasketClick}
        >
          Basket: {basket.length}
        </p>
      </div>

      {children({ addToBasket })}
    </div>
  );
}
