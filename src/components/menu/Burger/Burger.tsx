import Link from "next/link";
import { burgers } from "./burger-data";


export default function Burger() {
  return (
    <div className="flex grid-cols-2 flex-col bg-[#333] text-white">
      <Link className="m-6 text-2xl" href="/new-order">
        Back to Menu
      </Link>
      <div className="mx-auto h-[100vh] max-w-7xl overflow-hidden p-10 ">
        <p className="mt-20 pl-3 text-2xl font-bold">Burger</p>

        <div className="mx-auto grid h-32 grid-cols-3 items-center">
          {burgers.map((item) => (
            <div
              key={item.title}
              className="m-3 flex h-32 cursor-pointer flex-col items-center justify-center rounded-xl border-2 border-white p-5 "
            >
                <p className="font-bold pb-2"> {item.title}</p>
              <p className="font-bold pt-4">{item.price} </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
