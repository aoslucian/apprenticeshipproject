import Link from "next/link";
import { largeKebab, regularKebab } from "./kebab-data";

export default function Kebab() {
  return (
    <div className="flex flex-col bg-[#333] text-white">
      <Link className="m-6 text-2xl" href="/new-order">
        Back to Menu
      </Link>

      <div className="mx-auto grid max-w-7xl grid-cols-2 h-[100vh] gap-10 overflow-hidden p-10 mt-20">
        <div className="mx-1">
          <p className=" text-2xl font-bold">Reg. Kebab</p>
          {regularKebab.map((item) => (
            <div
              key={item.title}
              className="my-8 h-32 cursor-pointer flex-col items-center rounded-xl border-2 border-white p-5"
            >
              <p className="font-bold">{item.title}</p>
              <p>{item.ingredients}</p>
              <p className="font-bold">{item.price} </p>
            </div>
          ))}
          
          </div>



          <div className="mx-1">
            <p className="text-2xl font-bold">Large Kebab</p>
            {largeKebab.map((item) => (
              <div
                key={item.title}
                className="my-8 h-32 cursor-pointer flex-col items-center rounded-xl border-2 border-white p-5"
              >
                <p className="font-bold">{item.title}</p>
                <p>{item.ingredients}</p>
                <p className="font-bold"> {item.price} </p>
              </div>
            ))}
          </div>
        </div>
      </div>

  );
}
