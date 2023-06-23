/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { hot } from "./hot-data";

interface hotItem {
  title: string;
  price: number;
  alt: string;
}

export default function Hot() {
  const [basket, setBasket] = useState<hotItem[]>([]);
  const router = useRouter();

  const addToBasket = (item: hotItem) => {
    setBasket([...basket, item]);
  };

  const handleBasketClick = () => {
    //  eslint-disable-next-line @typescript-eslint/no-floating-promises
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

      <div className="mx-auto grid h-full max-w-7xl grid-cols-3 gap-10 overflow-hidden p-10">
        <div className="col-span-2 ">
          <p className=" pb-3 pl-12 text-2xl font-bold ">Hot</p>

          <div className=" ml-6 text-xl">
            {hot.map((item) => (
              <div
                key={item.title}
                className="m-6 flex h-40 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-white p-5 text-center ease-in-out hover:border-gray-400 hover:bg-[#222] hover:text-orange-500"
                onClick={() => addToBasket(item)}
              >
                <p className="pt-1 font-bold text-orange-500">{item.title}</p>
                <p className="py-2">{item.ingredients}</p>
                <p className="pt-1 font-bold text-orange-500">
                  {" "}
                  £ {item.price}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-1 h-[100vh] overflow-hidden scroll-smooth px-3">
          <p className="pb-4  text-2xl font-bold">Extras Order</p>
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
              <p className="pt-4 font-bold">Total Price: £{getTotalPrice()}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
