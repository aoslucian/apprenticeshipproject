

// /* eslint-disable @typescript-eslint/no-unsafe-assignment */
// /* eslint-disable @typescript-eslint/no-unsafe-call */
// /* eslint-disable @typescript-eslint/no-unsafe-member-access */

// import Link from "next/link";
// import { useRouter } from "next/router";
// import { extras } from "./extras-data";
// import { SlBasket } from "react-icons/sl";
// import  { useContext } from "react";
// import { MyAppContext } from "../../../pages/MyAppContext";

// interface ExtrasItem {
//   title: string;
//   price: number;
//   alt:string;
// }

// export default function Extras() {
//   const {basket, setBasket} = useContext(MyAppContext);
//   const router = useRouter();

//   const addToBasket = (item: ExtrasItem) => {
//     setBasket([...basket, item]);
//   };

//   const handleBasketClick = () => {
//     //  eslint-disable-next-line @typescript-eslint/no-floating-promises
//     router.push({
//       pathname: "/basket",
//       query: { items: JSON.stringify(basket) },
//     });
//   };

//   const getTotalPrice = () => {
//     let total = 0;
//     basket.forEach((item:{ price : number}) => {
//       const itemPrice = item.price; 
//       if (!isNaN(itemPrice)) {
//         total += itemPrice;
//       }
//     });
//     return total.toFixed(2);
//   };



//   return (
//     <div className="flex flex-col bg-[#333] text-white">
//       <div className="m-6 flex justify-between ">
//         <Link
//           className="ml-3 cursor-pointer rounded-xl border-2 border-transparent p-2 px-4 text-2xl hover:border-orange-500  hover:text-orange-500"
//           href="/customer-order"
//         >
//           Back to Menu
//         </Link>
//         <p
//           className="flex mr-5 cursor-pointer rounded-xl border-2 border-transparent p-2 px-4 text-2xl hover:border-orange-500  hover:text-orange-500"
//           onClick={handleBasketClick}
//         >
//         <SlBasket className="mr-2 h-7"/> Items: {basket.length} , Value:£{getTotalPrice()}
//         </p>
//       </div>

//       <div className="mx-auto grid h-full max-w-7xl grid-cols-3 gap-10 overflow-hidden p-10">
//         <div className="col-span-2">
//           <p className=" pl-3 pb-3 text-2xl font-bold ">Extras</p>

//           <div className="col-span-2 mx-auto grid h-32 grid-cols-4 items-center">
//             {extras.map((item) => (
//               <div
//                 key={item.title}
//                 className="m-3 flex h-40 cursor-pointer flex-col items-center text-center justify-center rounded-xl border-2 border-white p-5 ease-in-out hover:border-gray-400 hover:bg-[#222] hover:text-orange-500"
//                 onClick={() => addToBasket(item)}
//               >
//                 <p className="pt-1 font-bold text-orange-500">{item.title}</p>
//                 <p className="pb-1 font-bold"> £ {item.price}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="col-span-1 h-[100vh] overflow-hidden scroll-smooth px-3">
//           <p className="pb-4  text-2xl font-bold">Extras Order</p>
//           {basket.length === 0 ? (
//             <p>Your basket is empty.</p>
//           ) : (
//             <div>
//             <ul>
//               {basket.map((item: ExtrasItem, index: React.Key | null | undefined) => (
//                 <li className="flex py-1" key={index}>
//                   {item.title} :
//                   <span className="pl-1 text-orange-500">£{item.price}</span>
//                 </li>
//               ))}
//             </ul>
//                 <p className="pt-4 font-bold">Total Price: £{getTotalPrice()}</p></div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }



////////////////////////////////////////////////////////////////////////////////////////



























/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */

import Link from "next/link";
import { useRouter } from "next/router";
import { extras } from "./extras-data";
import { SlBasket } from "react-icons/sl";
import  { useContext } from "react";
import { MyAppContext } from "../../../pages/MyAppContext";

interface ExtrasItem {
  title: string;
  price: number;
  alt:string;
}

export default function Extras() {
  const {basket, setBasket} = useContext(MyAppContext);
  const router = useRouter();

  const addToBasket = (item: ExtrasItem) => {
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
    basket.forEach((item:{ price : number}) => {
      const itemPrice = item.price; 
      if (!isNaN(itemPrice)) {
        total += itemPrice;
      }
    });
    return total.toFixed(2);
  };


  
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

      <div className="mx-auto grid h-full max-w-7xl grid-cols-3 gap-10 overflow-hidden p-10">
        <div className="col-span-2">
          <p className=" pl-3 pb-3 text-2xl font-bold ">Extras</p>

          <div className="col-span-2 mx-auto grid h-32 grid-cols-4 items-center">
            {extras.map((item) => (
              <div
                key={item.title}
                className="m-3 flex h-40 cursor-pointer flex-col items-center text-center justify-center rounded-xl border-2 border-white p-5 ease-in-out hover:border-gray-400 hover:bg-[#222] hover:text-orange-500"
                onClick={() => addToBasket(item)}
              >
                <p className="pt-1 font-bold text-orange-500">{item.title}</p>
                <p className="pb-1 font-bold"> £ {item.price}</p>
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
              {basket.map((item: ExtrasItem, index: React.Key | null | undefined) => (
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
