import Link from "next/link";
import { regularPizza, largePizza } from "./pizza-data";

export default function Pizza() {
  return (
    <div className="flex flex-col bg-[#333] text-white">
      <Link className="m-6 text-2xl" href="/new-order">
        Back to Menu
      </Link>

      <div className="mx-auto max-w-7xl overflow-hidden p-10 grid grid-cols-2">
       <div>
        <p className="font-bold text-2xl pl-3">Regular</p>
         {regularPizza.map((item) => (
           <div key={item.title} className="pb-6 border-2 border-white rounded-xl cursor-pointer p-5 m-3 h-32 items-center flex-col">
             <p className="font-bold">{item.title}</p>
            <p>{item.ingredients}</p>
            <p> {item.regular}</p>
            <p className="font-bold">{item.price} </p>
          </div>
        ))}
        </div>

        <div>
          <p className="font-bold text-2xl pl-3">Large</p>
        {largePizza.map((item) => (
            <div key={item.title} className="pb-6 border-2 border-white cursor-pointer rounded-xl p-5 m-3 h-32 items-center flex-col">
            <p className="font-bold">{item.title}</p>
            <p>{item.ingredients}</p>
            <p> {item.large}</p>
            <p className="font-bold"> {item.price} </p>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}
