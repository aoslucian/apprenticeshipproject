import Link from "next/link";
import { starters } from "./starters-data";

export default function Starters() {
  return (
    <div className="flex flex-col bg-[#333] text-white">
      <Link className="m-6 text-2xl" href="/new-order">
        Back to Menu
      </Link>
      <div className="mx-auto mt-20 flex h-[100vh] max-w-7xl flex-col overflow-hidden">
        <p className=" -mb-4 text-2xl font-bold">Starters</p>
        <div className="mx-auto h-[100vh] max-w-7xl overflow-hidden">
          {starters.map((item) => (
            <div
              key={item.title}
              className="my-8 h-32 cursor-pointer flex-col items-center rounded-xl border-2 border-white p-5"
            >
              <p className="pb-2 font-bold"> {item.title}</p>
              <p>{item.ingredients}</p>
              <p className="pt-2 font-bold"> {item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
