import Link from "next/link";
import { starters } from "./starters-data";

export default function Starters() {
  return (
    <div className="flex flex-col bg-[#333] text-white">
      <Link className="m-6" href="/new-order">
        Back to Menu
      </Link>

      <div className="mx-auto h-[100vh] max-w-7xl overflow-hidden py-10 px-6 sm:py-10 lg:px-8">
        {starters.map((item) => (
          <div key={item.title} className="pb-6">
            <p>{item.title}</p>
            <p>{item.ingredients}</p>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
