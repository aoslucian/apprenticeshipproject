/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
// /* eslint-disable @typescript-eslint/no-unsafe-argument */

// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/router";
// import { SlBasket } from "react-icons/sl";

// interface Item {
//   price: number;
// }

// interface CustomerOrderProps {
//   basket: Item[];
// }

// const CustomerOrder: React.FC<CustomerOrderProps> = ({ basket }) => {
//   const [basketItems, setBasketItems] = useState<Item[]>([]);
//   const router = useRouter();

//   const handleProduceBill = () => {
//     void router.push({
//       pathname: "/basket",
//       query: { items: JSON.stringify(basket) },
//     });
//   };

//   const getTotalPrice = () => {
//     let total = 0;
//     basket.forEach((item) => {
//       const itemPrice = item.price;
//       if (!isNaN(itemPrice)) {
//         total += itemPrice;
//       }
//     });
//     return total;
//   };

//   useEffect(() => {
//     if (basket) {
//       setBasketItems(basket);
//     } else {
//       const storedItems = localStorage.getItem("basketItems");
//       if (storedItems) {
//         setBasketItems(JSON.parse(storedItems));
//       }
//     }
//   }, [basket]);

//   return (
//     <div className="bg-[#1f2026]">
//       <div className="flex flex-col bg-[#1f2026] text-white">
//         <div className="m-6 flex justify-end">
//           <Link
//             href="/basket"
//             className="mr-5 cursor-pointer rounded-xl border-2 border-transparent p-2 px-4 text-2xl hover:border-orange-500 hover:text-orange-500 flex"
//           >
//              <SlBasket className="mr-2 h-7"/> Items: {basket.length} , Value:£{getTotalPrice()}
//           </Link>
//         </div>
//       </div>
//       <div className="align-start mx-auto flex h-[100vh] max-w-3xl flex-col justify-center text-2xl font-bold">
//         <div className="flex flex-row justify-between align-top">
//           <Link className="rounded-xl bg-red-600 px-12 py-10" href="/">
//             Quit Order
//           </Link>
//           <button
//             className="rounded-xl bg-red-600 px-12 py-10"
//             onClick={handleProduceBill}
//           >
//             Produce Bill
//           </button>
//         </div>

//         <div className="mt-16 grid grid-cols-3 gap-8 text-center">
//           <div className="flex flex-col gap-8">
//             <Link
//               className="rounded-xl bg-red-600 px-8 py-6"
//               href={{
//                 pathname: "/pizza",
//                 query: { items: JSON.stringify(basketItems) },
//               }}
//             >
//               Pizza
//             </Link>
//             <Link
//               className="rounded-xl bg-orange-600 px-8 py-6"
//               href={{
//                 pathname: "/burger",
//                 query: { items: JSON.stringify(basketItems) },
//               }}
//             >
//               Burger
//             </Link>
//             <Link
//               className="rounded-xl bg-yellow-600 px-8 py-6"
//               href={{
//                 pathname: "/starters",
//                 query: { items: JSON.stringify(basketItems) },
//               }}
//             >
//               Starters
//             </Link>
//           </div>

//           <div className="flex flex-col gap-8">
//             <Link
//               className="rounded-xl bg-blue-500 px-8 py-6"
//               href={{
//                 pathname: "/drinks",
//                 query: { items: JSON.stringify(basketItems) },
//               }}
//             >
//               Drinks
//             </Link>
//             <Link
//               className="rounded-xl bg-yellow-600 px-8 py-6"
//               href={{
//                 pathname: "/kebab",
//                 query: { items: JSON.stringify(basketItems) },
//               }}
//             >
//               Kebab
//             </Link>
//             <Link
//               className="rounded-xl bg-green-300 px-8 py-6"
//               href={{
//                 pathname: "/extras",
//                 query: { items: JSON.stringify(basketItems) },
//               }}
//             >
//               Extras
//             </Link>
//           </div>

//           <div className="flex flex-col gap-8">
//             <Link
//               className="rounded-xl bg-orange-600 px-8 py-6"
//               href={{
//                 pathname: "/mealDeal",
//                 query: { items: JSON.stringify(basketItems) },
//               }}
//             >
//               Meal deals
//             </Link>
//             <Link
//               className="rounded-xl bg-green-600 px-8 py-6"
//               href={{
//                 pathname: "/kidsMeal",
//                 query: { items: JSON.stringify(basketItems) },
//               }}
//             >
//               Kids Meal
//             </Link>
//             <Link
//               className="rounded-xl bg-red-600 px-8 py-6"
//               href={{
//                 pathname: "/hot",
//                 query: { items: JSON.stringify(basketItems) },
//               }}
//             >
//               Hot
//             </Link>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CustomerOrder;


/* eslint-disable @typescript-eslint/no-unsafe-argument */

import React, { useContext, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { SlBasket } from "react-icons/sl";
import { MyAppContext } from "../../pages/MyAppContext";

interface Item {
  price: number;
}

interface CustomerOrderProps {
  basket: Item[];
}

const CustomerOrder: React.FC<CustomerOrderProps> = ({ basket }) => {
  const { basket: contextBasket } = useContext(MyAppContext);
  const router = useRouter();


  const handleProduceBill = () => {
    void router.push({
      pathname: "/basket",
      query: { items: JSON.stringify(basket) },
    });
  };

  const getTotalPrice = () => {
    let total = 0;
    basket.forEach((item: { price: any; }) => {
      const itemPrice = item.price;
      if (!isNaN(itemPrice)) {
        total += itemPrice;
      }
    });
    return total;
  };

  useEffect(() => {
    if (!basket) {
      const storedItems = localStorage.getItem("basketItems");
      if (storedItems) {
        // Update the context state with the stored items
        contextBasket(JSON.parse(storedItems));
      }
    }
  }, [basket, contextBasket]);

  return (
    <div className="bg-[#1f2026]">
      <div className="flex flex-col bg-[#1f2026] text-white">
        <div className="m-6 flex justify-end">
          <Link
            href="/basket"
            className="mr-5 cursor-pointer rounded-xl border-2 border-transparent p-2 px-4 text-2xl hover:border-orange-500 hover:text-orange-500 flex"
          >
            <SlBasket className="mr-2 h-7" /> Items: {basket.length} , Value:£{getTotalPrice()}
          </Link>
        </div>
      </div>
      <div className="align-start mx-auto flex h-[100vh] max-w-3xl flex-col justify-center text-2xl font-bold">
        <div className="flex flex-row justify-between align-top">
          <Link className="rounded-xl bg-red-600 px-12 py-10" href="/">
            Quit Order
          </Link>
          <button
            className="rounded-xl bg-red-600 px-12 py-10"
            onClick={handleProduceBill}
          >
            Produce Bill
          </button>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 text-center">
          <div className="flex flex-col gap-8">
            <Link
              className="rounded-xl bg-red-600 px-8 py-6"
              href={{
                pathname: "/pizza",
                query: { items: JSON.stringify(basket) },
              }}
            >
              Pizza
            </Link>
            <Link
              className="rounded-xl bg-orange-600 px-8 py-6"
              href={{
                pathname: "/burger",
                query: { items: JSON.stringify(basket) },
              }}
            >
              Burger
            </Link>
            <Link
              className="rounded-xl bg-yellow-600 px-8 py-6"
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
              className="rounded-xl bg-blue-500 px-8 py-6"
              href={{
                pathname: "/drinks",
                query: { items: JSON.stringify(basket) },
              }}
            >
              Drinks
            </Link>
            <Link
              className="rounded-xl bg-yellow-600 px-8 py-6"
              href={{
                pathname: "/kebab",
                query: { items: JSON.stringify(basket) },
              }}
            >
              Kebab
            </Link>
            <Link
              className="rounded-xl bg-green-300 px-8 py-6"
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
              className="rounded-xl bg-orange-600 px-8 py-6"
              href={{
                pathname: "/mealDeal",
                query: { items: JSON.stringify(basket) },
              }}
            >
              Meal deals
            </Link>
            <Link
              className="rounded-xl bg-green-600 px-8 py-6"
              href={{
                pathname: "/kidsMeal",
                query: { items: JSON.stringify(basket) },
              }}
            >
              Kids Meal
            </Link>
            <Link
              className="rounded-xl bg-red-600 px-8 py-6"
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
};

export default CustomerOrder;
