
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { burgers } from "./burger-data";

interface BurgerItem {
  title: string;
  price: number;
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

  console.log(basket);

  return (
    <div className="flex flex-col bg-[#333] text-white mx-auto">
      <div className="m-6 flex justify-between">
        <Link
          className="ml-3 cursor-pointer rounded-xl border-2 border-transparent p-2 px-4 text-2xl hover:border-orange-500 hover:text-orange-500"
          href="/new-order"
        >
          Back to Menu
        </Link>
        <p
          className="mr-5 cursor-pointer rounded-xl border-2 border-transparent p-2 px-4 text-2xl hover:border-orange-500 hover:text-orange-500"
          onClick={handleBasketClick}
        >
         Basket: {basket.length} items, Total value:£{getTotalPrice()}
        </p>
      </div>

      <div className="grid grid-cols-4">
        <div className="col-span-3 ml-auto h-[100vh] max-w-7xl overflow-hidden p-10">
          <p className="mt-20 pl-3 pb-3 text-2xl font-bold">Burger</p>

          <div className="mx-auto grid h-32 grid-cols-3 items-center">
            {burgers.map((item) => (
              <div
                key={item.title}
                className="m-3 flex h-32 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-white p-5 ease-in-out hover:border-gray-400 hover:bg-[#222] hover:text-orange-500"
                onClick={() => addToBasket(item)}
              >
                <p className="pt-1 font-bold text-orange-500">{item.title}</p>
                <p className="pb-1 font-bold"> £ {item.price}</p>
              </div>
            ))}
          </div>
        </div>

        <div className=" col-span-1 h-[100vh] overflow-hidden scroll-smooth px-3 py-10">
          <p className="mt-20 pb-3 pt-2 text-2xl font-bold">Burger Order</p>
          {basket.length === 0 ? (
            <p>Your basket is empty.</p>
          ) : (
            <div>
            <ul>
              {basket.map((item, index) => (
                <li className="flex py-1" key={index}>
                  {item.title} :
                  <span className="pl-1 text-orange-500">£{item.price}</span>
                </li>
              ))}
            </ul>
         <p className="pt-4 font-bold">Total Price: £{getTotalPrice()}</p></div>
          )}
        </div>
      </div>
    </div>
  );
}
