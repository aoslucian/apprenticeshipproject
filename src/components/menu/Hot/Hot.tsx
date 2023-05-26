import Link from "next/link";
import { hot } from "./hot-data";

export default function Hot() {
  return (
    <div className="flex flex-col bg-[#333] text-white">
      <Link className="m-6 text-2xl" href="/new-order">
        Back to Menu
      </Link>
      <div className="mx-auto mt-20 flex h-[100vh] max-w-7xl flex-col overflow-hidden">
        <div className="mx-auto h-[100vh] max-w-7xl overflow-hidden py-10 px-6 sm:py-10 lg:px-8">
          <p className=" ml-6 text-2xl font-bold">Hot</p>
          {hot.map((item) => (
            <div
              key={item.title}
              className="m-6 flex h-20 cursor-pointer flex-col justify-center rounded-xl border-2 border-white py-16 px-5"
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
