import Link from "next/link";
import { drinks } from "./drinks-data";


export default function Drinks() {
  return (
    <div className="flex bg-[#333] text-white grid-cols-2">
      <Link className="m-6 text-2xl" href="/new-order">
        Back to Menu
      </Link>

      <div className="mx-auto max-w-7xl h-[100vh] overflow-hidden p-10 ">

      <p className="font-bold text-2xl pl-3 mt-20">Drinks</p>
        <div className="grid grid-cols-3">
        {drinks.map((item) => (
          <div key={item.title} className="pb-6 border-2 border-white rounded-xl p-5 m-3 h-32 items-center flex-col">
            <p>{item.title}</p>
            <p> {item.price} </p>
      
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}