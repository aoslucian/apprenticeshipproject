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
//   price: string;
// }


// export default function ExistingCustomer() {
//   const [users, setUsers] = useState<UserNamesItem[]>(userNames);
//   const [randomUser, setRandomUser] = useState<UserNamesItem | undefined>(undefined);
//   const [basket, setBasket] = useState<number>(0);

//   const router = useRouter();

//   useEffect(() => {
//     getRandomUser();
//   }, []);

//   const getRandomUser = () => {
//     const randomIndex = Math.floor(Math.random() * users.length);
//     const selectedUser = users[randomIndex];
//     setRandomUser(selectedUser);
//     setUsers((prevUsers) => prevUsers.filter((user) => user !== selectedUser));
//   };


//   const handleViewBasket = () => {
//     if (basket > 0) {
//       void router.push({
//         pathname: "/basket",
//         query: { deliveryPrice: basket.toString() },
//       });
//     }
//   };


  
//   return (
//     <div className="mx-auto flex min-h-[100vh] flex-col justify-center bg-[#1f2026] align-middle">
//       <div className="mx-auto w-[600px] justify-self-center border-2 border-orange-500 bg-[#303133] px-8 py-8 align-middle">
//         <h1 className="pl-2 text-left text-2xl font-normal text-white">
//           Existing customer:
//         </h1>
//         {randomUser && (
//           <div className="pl-2">
//             <p className="py-2 text-2xl text-orange-500">{randomUser.name}</p>
//             <p className="text-white">{randomUser.tel}</p>
//             <p className="text-white">{randomUser.address}</p>
//             <p className="text-white">{randomUser.postCode}</p>
//             <p className="text-white">{randomUser.distance}</p>
//             <p className="text-white">{randomUser.price}</p>
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
//   price: string;
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
//       setBasket((prevBasket) => [...prevBasket, parseFloat(randomUser.price)]);
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
//       void router.push({
//         pathname: "/basket",
//         query: { deliveryPrice: basket.reduce((a, b) => a + b, 0).toString() },
//       });
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
//             <p className="text-white">{randomUser.price}</p>
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
  price: string;
}

export default function ExistingCustomer() {
  const [users, setUsers] = useState<UserNamesItem[]>(userNames);
  const [randomUser, setRandomUser] = useState<UserNamesItem | undefined>(undefined);
  const [basket, setBasket] = useState<number[]>([]);

  const router = useRouter();

  useEffect(() => {
    getRandomUser();
  }, []);

  useEffect(() => {
    if (randomUser) {
      setBasket((prevBasket) => [...prevBasket, parseFloat(randomUser.price)]);
    }
  }, [randomUser]);

  const getRandomUser = () => {
    const randomIndex = Math.floor(Math.random() * users.length);
    const selectedUser = users[randomIndex];
    setRandomUser(selectedUser);
    setUsers((prevUsers) => prevUsers.filter((user) => user !== selectedUser));
  };

  const handleViewBasket = () => {
    if (basket.length > 0) {
      // Add your logic here for what should happen when the basket is not empty
    } else {
      void router.push("/new-order");
    }
  };

  return (
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
            <p className="text-white">{randomUser.price}</p>
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
  );
}