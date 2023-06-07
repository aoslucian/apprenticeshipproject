// import Link from "next/link";

// export default function Delivery() {

//   return (
//     <div className="bg-[#1f2026]">
//     <div className="flex flex-col max-w-md mx-auto min-h-[100vh] align-start justify-center ">
//       <div className="flex flex-col md:flex-row  justify-center items-center">

//       <form>

//       <label htmlFor="name" className="text-white flex">Post Code</label>
//       <input
//         className="my-2 bg-[#f6f6f6] p-3 text-[#444] outline-none focus:border-b-2 focus:border-[#cf2e2e] focus:bg-white"
//         id="phone"
//         type="tel"
//         placeholder="Postcode"
//         name="phone"
//         // value={FormData.tel}
//         // onChange={handleChange}
//           />
//         {/* </div> */}

//       {/* <div className="flex flex-col md:flex-row  justify-center items-center"> */}

//       <label htmlFor="price" className="text-white flex">Price for delivery</label>
//       <input
//         className="my-2 bg-[#f6f6f6] p-3 text-[#444] outline-none focus:border-b-2 focus:border-[#cf2e2e] focus:bg-white"
//         id="price"
//         type="text"
//         placeholder="Price for delivery"
//         name="price"
//         // value={FormData.tel}
//         // onChange={handleChange}

//         />

//         </form>
//         </div>
//         <div className="flex flex-row align-bottom justify-center text-white my-6">
//                     <div className="mr-12 space-y-2 flex flex-col">
//                         <p>If delivery is not possible</p>
//                         <p> Recomand pick up:</p>
//                     </div>

//                     <div className="ml-12 space-y-10 flex flex-col">
//                     <Link className="py-4 px-6 bg-green-800 rounded-xl " href="/new-order">Procede</Link>
//                     <Link className="py-4 px-6 bg-red-600 rounded-xl " href="/">Quit Order</Link>
//                   </div>
//         </div>
//     </div>
//     </div>
//   );
// }

import Link from "next/link";
import { useState } from "react";

interface DrinksItem {
  title: string;
  price: string;
}

export default function Delivery() {
  const [basket, setBasket] = useState<DrinksItem[]>([]);
  const router = useRouter();

  const addToBasket = (item: DrinksItem) => {
    setBasket([...basket, item]);
  };

  const handleBasketClick = () => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    router.push({
      pathname: "/basket",
      query: { items: JSON.stringify(basket) },
    });
  };

  // console.log(basket);

  return (
    <div className="flex flex-col bg-[#333] text-white">
      {/* <div className="m-6 flex justify-between ">
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
      </div> */}

      <div className="grid h-[100vh] grid-cols-3">
        <div className="col-span-2 ml-96">
          <div className="mx-auto  grid h-[100vh] max-w-7xl overflow-hidden p-10">
            <div>
              <p className=" pb-3 pl-3 text-2xl font-bold ">Drinks</p>

              <div className="mx-auto grid grid-cols-2 items-center">
                {address.map((item) => (
                  <div
                    key={item.title}
                    className="m-3 flex h-40 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-white p-5 ease-in-out hover:border-gray-400 hover:bg-[#222] hover:text-orange-500"
                    onClick={() => addToBasket(item)}
                  >
                    <p className="pt-1 font-bold text-orange-500">
                      {item.title}
                    </p>

                    <p className="pb-1 font-bold">{item.price}</p>
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
