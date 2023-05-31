
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { burgers } from "./burger-data";

interface BurgerItem {
  title: string;
  price: string;
}

export default function Burger() {
  const [basket, setBasket] = useState<BurgerItem[]>([]);
  const router = useRouter();

  const addToBasket = (item: BurgerItem) => {
    setBasket([...basket, item]);
  };

  const handleBasketClick = () => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    router.push({
      pathname: "/basket",
      query: { items: JSON.stringify(basket) },
    });
  };

  console.log(basket);

  return (
    <div className="flex grid-cols-2 flex-col bg-[#333] text-white">
      <div className="m-6 flex justify-between ">
        <Link className="text-2xl p-2 mr-4 cursor-pointer border-2 border-transparent rounded-xl hover:border-orange-500  hover:text-orange-500" href="/new-order">
          Back to Menu
        </Link>
        <p className="text-2xl p-2 mr-4 cursor-pointer border-2 border-transparent rounded-xl hover:border-orange-500  hover:text-orange-500" onClick={handleBasketClick}>
          Basket: {basket.length}
        </p>
      </div>
      <div className="mx-auto h-[100vh] max-w-7xl overflow-hidden p-10">
        <p className="mt-20 pl-3 text-2xl font-bold">Burger</p>

        <div className="mx-auto grid h-32 grid-cols-3 items-center">
          {burgers.map((item) => (
            <div
              key={item.title}
              className="m-3 flex h-32 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-white p-5"
              onClick={() => addToBasket(item)}
            >
              <p className="pb-2 font-bold">{item.title}</p>
              <p className="pt-4 font-bold">{item.price}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-7xl p-10">
        <p className="text-2xl font-bold">Basket</p>
        {basket.length === 0 ? (
          <p>Your basket is empty.</p>
        ) : (
          <ul>
            {basket.map((item, index) => (
              <li key={index}>{item.title}{item.price}</li>
              
            )
            )}
          </ul>
        )}
      </div>
    </div>
  );
}
