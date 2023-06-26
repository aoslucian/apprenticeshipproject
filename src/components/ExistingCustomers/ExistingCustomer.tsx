

// import Link from "next/link";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/router";
// import { userNames } from "./existingCustomers-data";

// interface UserNamesItem {
//   name: string;
//   tel: string;
//   address: string;
//   postCode: string;
//   distance: string;
//   price: number;
// }

// export default function ExistingCustomer() {
//   const [users, setUsers] = useState<UserNamesItem[]>(userNames);
//   const [randomUser, setRandomUser] = useState<UserNamesItem | undefined>(undefined);
//   const [basket, setBasket] = useState<number[]>([]);

//   const router = useRouter();

//   useEffect(() => {
//     getRandomUser();
//   }, []);

//   useEffect(() => {
//     if (randomUser) {
//       setBasket((prevBasket) => [...prevBasket, parseFloat(randomUser.price.toString())]);
//     }
//   }, [randomUser]);

//   const getRandomUser = () => {
//     const randomIndex = Math.floor(Math.random() * users.length);
//     const selectedUser = users[randomIndex];
//     setRandomUser(selectedUser);
//     setUsers((prevUsers) => prevUsers.filter((user) => user !== selectedUser));
//   };

//   const handleViewBasket = () => {
//     if (basket.length > 0) {
//       // Add your logic here for what should happen when the basket is not empty
//     } else {
//       void router.push("/new-order");
//     }
//   };

//   return (
//     <div className="mx-auto flex min-h-[100vh] flex-col justify-center bg-[#1f2026] align-middle">
//       <div className="mx-auto w-[600px] justify-self-center border-2 border-orange-500 bg-[#303133] px-8 py-8 align-middle">
//         <h1 className="pl-2 text-left text-2xl font-normal text-white">Existing customer:</h1>
//         {randomUser && (
//           <div className="pl-2">
//             <p className="py-2 text-2xl text-orange-500">{randomUser.name}</p>
//             <p className="text-white">{randomUser.tel}</p>
//             <p className="text-white">{randomUser.address}</p>
//             <p className="text-white">{randomUser.postCode}</p>
//             <p className="text-white">{randomUser.distance}</p>
//             <p className="text-white">delivery price: £ {randomUser.price.toString()}</p>
//           </div>
//         )}
//         <div className="mx-[5%] md:mx-3 lg:mx-6"></div>
//       </div>
//       <div className="mt-16 flex justify-center">
//         <Link
//           className="m-10 space-y-4 rounded-lg bg-white px-10 py-6 text-xl font-bold"
//           href="/new-order"
//           onClick={handleViewBasket}
//         >
//           Start Order
//         </Link>
//         <Link
//           className="m-10 space-y-4 rounded-lg bg-white px-10 py-6 text-xl font-bold"
//           href="/"
//         >
//           Quit Order
//         </Link>
//       </div>
//     </div>
//   );
// }








import Link from "next/link";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { userNames } from "./existingCustomers-data";

interface UserNamesItem {
  name: string;
  tel: string;
  address: string;
  postCode: string;
  distance: string;
  price: number;
}

export default function ExistingCustomer() {
  const [users, setUsers] = useState<UserNamesItem[]>(userNames);
  const [randomUser, setRandomUser] = useState<UserNamesItem | undefined>(undefined);
  const [basket, setBasket] = useState<UserNamesItem[]>([]); 

  const router = useRouter();

  // useEffect(() => {
  //   getRandomUser();
  // }, []);

  // useEffect(() => {
  //   if (randomUser) {
  //     setBasket((prevBasket) => [...prevBasket, randomUser.price]);
  //   }
  // }, [randomUser]);
  useEffect(() => {
    getRandomUser();
    if (randomUser) {
      setBasket((prevBasket) => [...prevBasket, randomUser]);
    }
  }, []);


  const getRandomUser = () => {
    const randomIndex = Math.floor(Math.random() * users.length);
    const selectedUser = users[randomIndex];
    setRandomUser(selectedUser);
    setUsers((prevUsers) => prevUsers.filter((user) => user !== selectedUser));
  };

  // const handleViewBasket = () => {
  //   if (basket.length > 0) {
  //     const totalPrice = basket.reduce((total, price) => total + price, 0);
  //     console.log("Total Price:", totalPrice);
  //   } else {
  //     void router.push("/new-order");
  //   }
  // };

  const handleViewBasket = () => {
    if (basket.length > 0) {
      const totalPrice = basket.reduce((total, item) => total + item.price, 0); // Access item.price instead of just price
      console.log("Total Price:", totalPrice);
    } else {
      void router.push("/new-order");
    }
  };
  
  const handleBasketClick = () => {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    router.push({
      pathname: "../basket",
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

  return (
    <>
        <div className="flex flex-col bg-[#1f2026] text-white">

    <div className="m-6 flex justify-end ">
    
      <p
        className="mr-5 cursor-pointer rounded-xl border-2 border-transparent p-2 px-4 text-2xl hover:border-orange-500  hover:text-orange-500"
        onClick={handleBasketClick}
        >
        Basket: {basket.length} items, Total value:£{getTotalPrice()}
      </p>
        </div>
    </div>

    <div className="mx-auto flex min-h-[100vh] flex-col justify-center bg-[#1f2026] align-middle">
        <div className="mx-auto w-[600px] justify-self-center border-2 border-orange-500 bg-[#303133] px-8 py-8 align-middle">
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
            className="m-10 space-y-4 rounded-lg bg-white px-10 py-6 text-xl font-bold"
            href="/new-order"
            onClick={handleViewBasket}
          >
            Start Order
          </Link>
          <Link
            className="m-10 space-y-4 rounded-lg bg-white px-10 py-6 text-xl font-bold"
            href="/"
          >
            Quit Order
          </Link>
        </div>
      
      </div>
      </>
  );
}
