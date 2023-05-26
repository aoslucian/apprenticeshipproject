import Link from "next/link";
import { kidsMeal } from "./kidsMeal-data";

export default function KidsMeal() {
  return (
    <div className="flex flex-col bg-[#333] text-white">
      <Link className="m-6 text-2xl" href="/new-order">
        Back to Menu
      </Link>
      <div className="mx-auto mt-20 flex h-[100vh] max-w-7xl flex-col overflow-hidden">

          <p className="text-2xl font-bold -mb-4">Kids Meal</p>
          <div className="mx-auto h-[100vh] max-w-7xl overflow-hidden">
            {kidsMeal.map((item) => (
              <div
                key={item.title}
                className="my-8 h-32 cursor-pointer flex-col items-center rounded-xl border-2 border-white p-5"
              >
                <p className="pb-2 font-bold"> {item.title}</p>
                <p>{item.ingredients}</p>
                <p className="pt-4 font-bold"> {item.price} </p>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
}
