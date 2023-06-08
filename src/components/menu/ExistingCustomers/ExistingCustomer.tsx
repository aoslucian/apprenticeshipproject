



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
  const [randomUser, setRandomUser] = useState<UserNamesItem | null>(null);
  const [basket, setBasket] = useState<number>(0);

  const router = useRouter();

  useEffect(() => {
    getRandomUser();
  }, []);

  const getRandomUser = () => {
    const randomIndex = Math.floor(Math.random() * users.length);
    const selectedUser = users[randomIndex];
    setRandomUser(selectedUser);
    setUsers((prevUsers) => prevUsers.filter((user) => user !== selectedUser));
  };

  const handleGetRandomUser = () => {
    getRandomUser();
  };

  const handleStartOrder = () => {
    if (randomUser) {
      const deliveryPrice = parseFloat(randomUser.price);
      setBasket((prevBasket) => prevBasket + deliveryPrice);
    }
  };

  const handleViewBasket = () => {
    if (basket > 0) {
      void router.push({
        pathname: "/basket",
        query: { deliveryPrice: basket.toString() },
      });
    }
  };

  return (
    <div className="mx-auto flex min-h-[100vh] flex-col justify-center bg-[#1f2026] align-middle">
      <div className="mx-auto py-8 w-[600px] justify-self-center bg-[#303133] px-8 align-middle border-2 border-orange-500">
        <h1 className="pl-2 text-left text-2xl font-normal text-white">Existing customer:</h1>
        {randomUser && (
          <div className="pl-2">
            <p className="text-orange-500 text-2xl py-2">{randomUser.name}</p>
            <p className="text-white">{randomUser.tel}</p>
            <p className="text-white">{randomUser.address}</p>
            <p className="text-white">{randomUser.postCode}</p>
            <p className="text-white">{randomUser.distance}</p>
            <p className="text-white">{randomUser.price}</p>
          </div>
        )}
        <div className="mx-[5%] md:mx-3 lg:mx-6"></div>
      </div>
      <div className="flex justify-center mt-16">
        {/* <button
          className="m-10 space-y-4 rounded-lg bg-white text-xl font-bold py-6 px-10"
          onClick={handleGetRandomUser}
        >
          Get Random Customer
        </button> */}
        {/* <button
          className="m-10 space-y-4 rounded-lg bg-white text-xl font-bold py-6 px-10"
          onClick={handleStartOrder}
          >
        View Basket
        </button> */}
        <Link
          className="m-10 space-y-4 rounded-lg bg-white text-xl font-bold py-6 px-10"
          href="/new-order"
          onClick={handleViewBasket}
          >
            Start Order
        </Link>
        {/* <Link className="py-4 px-6 bg-green-800 rounded-xl " href="/new-order">Procede</Link> */}
                     <Link  className="m-10 space-y-4 rounded-lg bg-white text-xl font-bold py-6 px-10" href="/">Quit Order</Link>
      </div>
    </div>
  );
}
