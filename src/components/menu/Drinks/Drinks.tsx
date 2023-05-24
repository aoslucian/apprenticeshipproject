import Link from "next/link";
import { drinks } from "./drinks-data";


export default function Drinks() {
  return (
    <div className="flex flex-col bg-[#333] text-white grid-cols-2">
      <Link className="m-6 text-2xl" href="/new-order">
        Back to Menu
      </Link>

      <div className="mx-auto max-w-7xl h-[100vh] overflow-hidden p-10 ">

      <p className="font-bold text-2xl pl-3 mt-20">Drinks</p>

        <div className="grid grid-cols-3 mx-auto items-center h-32">
        {drinks.map((item) => (
          <div key={item.title} className=" border-2 border-white rounded-xl p-8 m-3  flex flex-col items-center">
            <p className="font-bold pb-2"> {item.title}</p>
            <p className="font-bold">  {item.price} </p>
      
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}