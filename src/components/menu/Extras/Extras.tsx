import Link from "next/link";
import { extras } from "./extras-data";

export default function Extras() {
  return (
    <div className="flex flex-col bg-[#333] text-white">
      <Link className="m-6 text-2xl" href="/new-order">
        Back to Menu
      </Link>
      <div className="mx-auto mt-20 flex h-[100vh] max-w-7xl flex-col overflow-hidden">
        <p className=" ml-6  text-2xl font-bold">Extras</p>
        <div className="mx-auto grid cursor-pointer grid-cols-4 items-center ">
          {extras.map((item) => (
            <div
              key={item.title}
              className="m-6 flex h-20 cursor-pointer items-center justify-center rounded-xl border-2 border-white py-16 px-5"
            >
              <p className="font-bold text-xl "> {item.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
