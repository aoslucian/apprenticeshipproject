/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */



/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */


// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/router";
// import { userNames } from "./existingCustomers-data";
// import { SlBasket } from "react-icons/sl";
// import {useContext} from "react";
// import { MyAppContext } from "../../pages/MyAppContext";

// interface UserNamesItem {
//   name: string;
//   tel: string; 
//   address: string;
//   postCode: string;
//   distance: string;
//   price: number;
// }

// interface BasketItem extends UserNamesItem {
//   deliveryPrice: number;
// }

// const useRandomUser = (users: UserNamesItem[]): [UserNamesItem | undefined, () => void] => {
//   const [randomUser, setRandomUser] = useState<UserNamesItem | undefined>(undefined);

//   useEffect(() => {
//     getRandomUser();
//   }, []);

//   const getRandomUser = () => {
//     if (users.length > 0) {
//       const randomIndex = Math.floor(Math.random() * users.length);
//       const selectedUser = users[randomIndex];
//       setRandomUser(selectedUser);
//     }
//   };

//   return [randomUser, getRandomUser];
// };

// const ExistingCustomer = () => {
//   const [users, setUsers] = useState<UserNamesItem[]>(userNames);
//   const [basket, setBasket] = useState<BasketItem[]>([]);
//   // const { basket, setBasket} = useContext(MyAppContext)
//   const [randomUser, getRandomUser] = useRandomUser(users);

//   const router = useRouter();

//   useEffect(() => {
//     const storedBasket = JSON.parse(localStorage.getItem("basket") || "[]");
//     setBasket(storedBasket);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("basket", JSON.stringify(basket));
//   }, [basket]);


//   const handleBasketClick = () => {
//     void router.push({
//       pathname: "../basket",
//       query: { items: JSON.stringify(basket) },
//     });
//   };


//   const handleStartOrder = () => {
//     void router.push({
//       pathname: "/customer-order",
//       query: { basket: JSON.stringify(basket) },
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
//     return total.toFixed(2);
//   };

//   useEffect(() => {
//     if (randomUser) {
//       const updatedBasket = [...basket, { ...randomUser, deliveryPrice: randomUser.price}];
//       setBasket(updatedBasket);
//     }
//   }, [randomUser]);


//   return (
//     <>
//       <div className="flex flex-col bg-[#1f2026] text-white">
//         <div className="m-6 flex justify-end">
//           <p
//             className="flex mr-5 cursor-pointer rounded-xl border-2 border-transparent p-2 px-4 text-2xl hover:border-orange-500  hover:text-orange-500"
//             onClick={handleBasketClick}
//           >
//         <SlBasket className="mr-2 h-7"/> Items: {basket.length} , Value:£{getTotalPrice()}
//           </p>
//         </div>
//       </div>

//       <div className="mx-auto flex min-h-[100vh] flex-col justify-center bg-[#1f2026] align-middle">
//         <div className="mx-auto w-[600px] justify-self-center border-2 border-orange-500 bg-[#303133] px-8 py-8 align-middle rounded-xl">
//           <h1 className="pl-2 text-left text-2xl font-normal text-white">Existing customer:</h1>
//           {randomUser && (
//             <div className="pl-2">
//               <p className="py-2 text-2xl text-orange-500">{randomUser.name}</p>
//               <p className="text-white">{randomUser.tel}</p>
//               <p className="text-white">{randomUser.address}</p>
//               <p className="text-white">{randomUser.postCode}</p>
//               <p className="text-white">{randomUser.distance}</p>
//               <p className="text-white">Delivery price: £ {randomUser.price}</p>
//             </div>
//           )}
//           <div className="mx-[5%] md:mx-3 lg:mx-6"></div>
//         </div>
//         <div className="mt-16 flex justify-center">
//           <Link
//             className="m-10 space-y-4 rounded-lg px-8 py-6 text-xl font-bold border-2 border-red-500 bg-red-500 text-white hover:bg-white hover:text-black"
//             onClick={handleStartOrder}
//             href="/customer-order"
//           >
//             Start Order
//           </Link>
//           <Link
//              className="m-10 space-y-4 rounded-lg px-8 py-6 text-xl font-bold border-2 border-red-500 bg-red-500 text-white hover:bg-white hover:text-black"
//              href="/">
//             Quit Order
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// };

// export default ExistingCustomer;





///////////////////////////////////////////////////////////////////////////////////////////////////////////


























import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { userNames } from "./existingCustomers-data";
import { SlBasket } from "react-icons/sl";
import {useContext} from "react";
import { MyAppContext } from "../../pages/MyAppContext";

interface UserNamesItem {
  name: string;
  tel: string; 
  address: string;
  postCode: string;
  distance: string;
  price: number;
}

interface BasketItem extends UserNamesItem {
  deliveryPrice: number;
}

const useRandomUser = (users: UserNamesItem[]): [UserNamesItem | undefined, () => void] => {
  const [randomUser, setRandomUser] = useState<UserNamesItem | undefined>(undefined);

  useEffect(() => {
    getRandomUser();
  }, []);

  const getRandomUser = () => {
    if (users.length > 0) {
      const randomIndex = Math.floor(Math.random() * users.length);
      const selectedUser = users[randomIndex];
      setRandomUser(selectedUser);
    }
  };

  return [randomUser, getRandomUser];
};

const ExistingCustomer = () => {
  const [users, setUsers] = useState<UserNamesItem[]>(userNames);
  const [basket, setBasket] = useState<BasketItem[]>([]);
  // const { basket, setBasket} = useContext(MyAppContext)
  const [randomUser, getRandomUser] = useRandomUser(users);

  const router = useRouter();

  useEffect(() => {
    const storedBasket = JSON.parse(localStorage.getItem("basket") || "[]");
    setBasket(storedBasket);
  }, []);

  useEffect(() => {
    localStorage.setItem("basket", JSON.stringify(basket));
  }, [basket]);


  const handleBasketClick = () => {
    void router.push({
      pathname: "../basket",
      query: { items: JSON.stringify(basket) },
    });
  };


  const handleStartOrder = () => {
    void router.push({
      pathname: "/customer-order",
      query: { basket: JSON.stringify(basket) },
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

  useEffect(() => {
    if (randomUser) {
      const updatedBasket = [...basket, { ...randomUser, deliveryPrice: randomUser.price}];
      setBasket(updatedBasket);
    }
  }, [randomUser]);


  return (
    <>
      <div className="flex flex-col bg-[#1f2026] text-white">
        <div className="m-6 flex justify-end">
          <p
            className="flex mr-5 cursor-pointer rounded-xl border-2 border-transparent p-2 px-4 text-2xl hover:border-orange-500  hover:text-orange-500"
            onClick={handleBasketClick}
          >
        <SlBasket className="mr-2 h-7"/> Items: {basket.length} , Value:£{getTotalPrice()}
          </p>
        </div>
      </div>

      <div className="mx-auto flex min-h-[100vh] flex-col justify-center bg-[#1f2026] align-middle">
        <div className="mx-auto w-[600px] justify-self-center border-2 border-orange-500 bg-[#303133] px-8 py-8 align-middle rounded-xl">
          <h1 className="pl-2 text-left text-2xl font-normal text-white">Existing customer:</h1>
          {randomUser && (
            <div className="pl-2">
              <p className="py-2 text-2xl text-orange-500">{randomUser.name}</p>
              <p className="text-white">{randomUser.tel}</p>
              <p className="text-white">{randomUser.address}</p>
              <p className="text-white">{randomUser.postCode}</p>
              <p className="text-white">{randomUser.distance}</p>
              <p className="text-white">Delivery price: £ {randomUser.price}</p>
            </div>
          )}
          <div className="mx-[5%] md:mx-3 lg:mx-6"></div>
        </div>
        <div className="mt-16 flex justify-center">
          <Link
            className="m-10 space-y-4 rounded-lg px-8 py-6 text-xl font-bold border-2 border-red-500 bg-red-500 text-white hover:bg-white hover:text-black"
            onClick={handleStartOrder}
            href="/customer-order"
          >
            Start Order
          </Link>
          <Link
             className="m-10 space-y-4 rounded-lg px-8 py-6 text-xl font-bold border-2 border-red-500 bg-red-500 text-white hover:bg-white hover:text-black"
             href="/">
            Quit Order
          </Link>
        </div>
      </div>
    </>
  );
};

export default ExistingCustomer;
