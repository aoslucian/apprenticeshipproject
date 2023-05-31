// import Link from "next/link";
// import { regularPizza, largePizza } from "./pizza-data";



// export default function Pizza() {
//   return (
//     <div className="flex flex-col bg-[#333] text-white">
//       <Link className="m-6 text-2xl" href="/new-order">
//         Back to Menu
//       </Link>

//       <div className="mx-auto max-w-7xl overflow-hidden p-10 grid grid-cols-2">
//        <div>
//         <p className="font-bold text-2xl pl-3">Regular</p>
//          {regularPizza.map((item) => (
//            <div key={item.title} className="pb-6 border-2 border-white rounded-xl cursor-pointer p-5 m-3 h-32 items-center flex-col">
//              <p className="font-bold">{item.title}</p>
//             <p>{item.ingredients}</p>
//             <p> {item.regular}</p>
//             <p className="font-bold">{item.price} </p>
//           </div>
//         ))}
//         </div>

//         <div>
//           <p className="font-bold text-2xl pl-3">Large</p>
//         {largePizza.map((item) => (
//             <div key={item.title} className="pb-6 border-2 border-white cursor-pointer rounded-xl p-5 m-3 h-32 items-center flex-col">
//             <p className="font-bold">{item.title}</p>
//             <p>{item.ingredients}</p>
//             <p> {item.large}</p>
//             <p className="font-bold"> {item.price} </p>
//           </div>
//         ))}
//         </div>
//       </div>
//     </div>
//   );
// }


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
    <div className="flex grid-cols-2 flex-col bg-[#333] text-white">
      <div className="m-6 flex justify-between ">
        <Link className="text-2xl p-2 mr-4 cursor-pointer border-2 border-transparent rounded-xl hover:border-orange-500  hover:text-orange-500" href="/new-order">
          Back to Menu
        </Link>
        <p className="text-2xl p-2 mr-4 cursor-pointer border-2 border-transparent rounded-xl hover:border-orange-500  hover:text-orange-500" onClick={handleBasketClick}>
          Basket: {basket.length}
        </p>
      </div>


      <div className="mx-auto h-[100vh] max-w-7xl overflow-hidden p-10 grid-cols-2">
        <p className="mt-20 pl-3 text-2xl font-bold">Pizza - regular</p>

          <div className="mx-auto grid h-32 grid-cols-3 items-center border-2 border-green-600">
            {regularPizza.map((item) => (
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

      {/* <div className="mx-auto grid h-32 grid-cols-3 items-center border-2 border-red-600"> */}
      <div>
      <p className="mt-20 pl-3 text-2xl font-bold">Pizza - Large</p>
          {largePizza.map((item) => (
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