import Link from "next/link";
import { mealDeal } from "./mealDeal-data";

export default function MealDeal() {
  return (
    <div className="flex flex-col bg-[#333] text-white">
      <Link className="m-6 text-2xl" href="/new-order">
        Back to Menu
      </Link>

      <div className="mx-auto max-w-7xl h-[100vh] overflow-hidden py-10 px-6 sm:py-10 lg:px-8">
        {mealDeal.map((item) => (
           <div key={item.title} className="pb-6 border-2 border-white rounded-xl p-5 m-3 h-32 items-center flex-col">
            <p className="text-lg font-bold">{item.title}</p>
            <p>{item.ingredients}</p>
            <p className="text-lg font-bold"> {item.price} </p>
      
          </div>
        ))}
      </div>
    </div>
  );
}