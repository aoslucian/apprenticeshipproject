import Link from "next/link";
import { extras } from "./extras-data";

export default function Extras() {
  return (
    <div className="flex flex-col bg-[#333] text-white">
      <Link className="m-6" href="/new-order">
        Back to Menu
      </Link>

      <div className="mx-auto max-w-7xl h-[100vh] overflow-hidden py-10 px-6 sm:py-10 lg:px-8">
        {extras.map((item) => (
          <div key={item.title} className="pb-6">
            <p>{item.title}</p>
 
          </div>
        ))}
      </div>
    </div>
  );
}