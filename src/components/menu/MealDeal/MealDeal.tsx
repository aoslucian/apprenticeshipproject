// import Link from "next/link";
// import { mealDeal } from "./mealDeal-data";

// export default function MealDeal() {
//   return (
//     <div className="flex flex-col bg-[#333] text-white">
//       <Link className="m-6 text-2xl" href="/new-order">
//         Back to Menu
//       </Link>


//       <div className="mx-auto max-w-7xl h-[100vh] overflow-hidden py-10 px-6 sm:py-10 lg:px-8">
//       <p className="font-bold text-2xl ">Meal Deal</p>
//         {mealDeal.map((item) => (
//            <div key={item.title} className="pb-6 border-2 border-white cursor-pointer rounded-xl px-5 py-3 my-5 h-32 items-center flex-col">
//             <p className="text-lg font-bold">{item.title}</p>
//             <p>{item.ingredients}</p>
//             <p className="text-lg font-bold"> {item.price} </p>
      
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



/////////////////////////



import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";
import{ mealDeal } from "./mealDeal-data";

interface mealDealItem {
  title: string;
  price: string;
}

export default function MealDeal() {
  const [basket, setBasket] = useState<mealDealItem[]>([]);
  const router = useRouter();

  const addToBasket = (item: mealDealItem) => {
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

      <div className="grid h-[100vh] grid-cols-5">
        <div className="col-span-4 mx-auto">
          <div className="mx-auto  grid h-[100vh] max-w-7xl overflow-hidden p-10">
            <div>
              <p className=" pl-3 pb-3 text-2xl font-bold ">Drinks</p>

              <div className="mx-auto grid items-center">
                {mealDeal.map((item) => (
                  <div
                    key={item.title}
                    className="m-2 flex h-32 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-white px-5 ease-in-out hover:border-gray-400 hover:bg-[#222] hover:text-orange-500"
                    onClick={() => addToBasket(item)}
                  >
                    <p className="pt-1 font-bold text-orange-500">
                      {item.title}
                    </p>
                    <p className="py-1 font-bold">{item.ingredients}</p>
                    <p className="pb-1 font-bold text-orange-500">{item.price}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-1  h-[80vh] overflow-hidden scroll-smooth px-3 py-10">
          <p className="pb-4 pt-2 text-2xl font-bold">Drinks Order</p>
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
