
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import { kidsMeal } from "./kidsMeal-data";
import { SlBasket } from "react-icons/sl";

interface kidsMealItem {
  title: string;
  price: number;
}

export default function KidsMeal() {
  const [basket, setBasket] = useState<kidsMealItem[]>([]);
  const router = useRouter();

  const addToBasket = (item: kidsMealItem) => {
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
    <div className="flex flex-col bg-[#333] text-white">
      <div className="m-6 flex justify-between ">
        <Link
          className="ml-3 cursor-pointer rounded-xl border-2 border-transparent p-2 px-4 text-2xl hover:border-orange-500  hover:text-orange-500"
          href="/customer-order"
        >
          Back to Menu
        </Link>
        <p
          className="flex mr-5 cursor-pointer rounded-xl border-2 border-transparent p-2 px-4 text-2xl hover:border-orange-500  hover:text-orange-500"
          onClick={handleBasketClick}
        >
<SlBasket className="mr-2 h-7"/> Items: {basket.length} , Value:£{getTotalPrice()}
        </p>
      </div>

      <div className="mx-auto grid h-[100vh] grid-cols-4">
        <div className="col-span-3 py-10">
          <p className="pl-3 pb-3 text-2xl font-bold ">Kids Meal</p>

          <div className="col-span-3 grid">
            {kidsMeal.map((item) => (
              <div
                key={item.title}
                className="m-3 mx-4 flex cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-white p-5 ease-in-out hover:border-gray-400 hover:bg-[#222] hover:text-orange-500"
                onClick={() => addToBasket(item)}
              >
                <p className="pt-1 font-bold text-orange-500">{item.title}</p>
                <p className="py-2 font-bold">{item.ingredients}</p>
                <p className="pb-1 font-bold text-orange-500">£ {item.price}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-1 h-[100v] px-5 py-10">
          <p className="pb-4 pt-2 text-2xl font-bold">Kids Meal Order</p>
          {basket.length === 0 ? (
            <p>Your basket is empty.</p>
          ) : (
           <div>
            <ul>
              {basket.map((item, index) => (
                <li className="flex py-1" key={index}>
                  {item.title} :
                  <span className="pl-1 text-orange-500"> £ {item.price}</span>
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
