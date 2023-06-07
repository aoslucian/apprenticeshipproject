import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { regularPizza, largePizza } from "./pizza-data";

interface PizzaItem {
  title: string;
  price: string;
}

export default function Pizza() {
  const [basket, setBasket] = useState<PizzaItem[]>([]);
  const router = useRouter();

  const addToBasket = (item: PizzaItem) => {
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
    <div className="flex flex-col bg-[#333] text-white">
      <div className="m-6 flex justify-between ">
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

      <div className="grid h-[100vh] grid-cols-8">
        <div className="col-span-6">
          <div className="mx-auto grid h-[100vh] max-w-7xl grid-cols-2 gap-10 overflow-hidden p-10">
            <div>
              <p className=" pl-3 pb-3 text-2xl font-bold ">Pizza - regular</p>

              <div className="mx-auto grid h-32 grid-cols-2 items-center">
                {regularPizza.map((item) => (
                  <div
                    key={item.title}
                    className="m-3 flex h-40 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-white p-5 ease-in-out hover:border-gray-400 hover:bg-[#222] hover:text-orange-500"
                    onClick={() => addToBasket(item)}
                  >
                    <p className="pt-1 font-bold text-orange-500">{item.title}</p>
                    <p className="py-2 font-bold">{item.ingredients}</p>
                    <p className="pb-1 font-bold text-orange-500">{item.price}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="pl-3 pb-3 text-2xl font-bold">Pizza - Large</p>
              <div className="mx-auto grid h-32 grid-cols-2 items-center">
                {largePizza.map((item) => (
                  <div
                    key={item.title}
                    className="m-3 flex h-40 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-white p-5 ease-in-out hover:border-gray-400 hover:bg-[#222] hover:text-orange-500"
                    onClick={() => addToBasket(item)}
                  >
                  <p className="pt-1 font-bold text-orange-500">{item.title}</p>
                    <p className="py-2 font-bold">{item.ingredients}</p>
                    <p className="pb-1 font-bold text-orange-500">{item.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-2 h-[100vh] overflow-hidden scroll-smooth px-3 py-10">
          <p className="pb-4 pt-2 text-2xl font-bold">Pizza Order</p>
          {basket.length === 0 ? (
            <p>Your basket is empty.</p>
          ) : (
            <ul>
              {basket.map((item, index) => (
                <li className="flex py-1" key={index}>
                  {item.title} :{" "}
                  <li className="pl-1 text-orange-500">{item.price}</li>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
