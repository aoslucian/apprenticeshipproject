import Link from "next/link";
export default function Till() {
  return (
    <div className="flex min-h-[100vh] flex-col justify-center align-middle bg-[#1f2026] ">
      <div className="justify-center align-middle grid">

        <Link
          className="text-center my-3 rounded-md border-2 border-red-500 bg-red-500 py-3 px-4 text-lg text-white font-medium shadow-sm
             hover:border-2 hover:font-black hover:text-red-500 hover:bg-white"
          href="/old-customer"
        >
         Existing customer identifiable by phone
        </Link>

        <Link
          className="text-center my-3 rounded-md border-2 border-red-500 bg-red-500 py-3 px-4 text-lg text-white font-medium shadow-sm
             hover:border-2 hover:font-black hover:text-red-500 hover:bg-white"
          href="/new-customer"
        >
          New Customer
        </Link>

      </div>
    </div>
  );
}


