import Link from "next/link";

export default function CustomerOrder() {
  return (
    <div className="bg-[#1f2026]">
      <div className="align-start mx-auto flex h-[100vh] max-w-3xl flex-col justify-center text-2xl font-bold">
        <div className="flex flex-row justify-between align-top">
          <Link className="rounded-xl bg-red-600 py-10 px-12" href="/">
            Quit Order
          </Link>
          <Link className="rounded-xl bg-red-600 py-10 px-12" href="/">
            Produce Bill
          </Link>
        </div>

        <div className="mt-16 grid grid-cols-3 gap-8 text-center">
          <div className="flex flex-col gap-8">
            <Link className="rounded-xl bg-red-600 py-6 px-8" href="/pizza">
              Pizza
            </Link>
            <Link className="rounded-xl bg-orange-600 py-6 px-8" href="/burger">
              Burger
            </Link>
            <Link
              className="rounded-xl bg-yellow-600 py-6 px-8"
              href="/starters"
            >
              Starters
            </Link>
          </div>

          <div className="flex flex-col gap-8">
            <Link className="rounded-xl bg-blue-500 py-6 px-8" href="/drinks">
              Drinks
            </Link>
            <Link className="rounded-xl bg-yellow-600 py-6 px-8" href="/kebab">
              Kebab
            </Link>
            <Link className="rounded-xl bg-green-300 py-6 px-8" href="/extras">
              Extras
            </Link>
          </div>

          <div className="flex flex-col gap-8">
            <Link
              className="rounded-xl bg-orange-600 py-6 px-8"
              href="/mealDeal"
            >
              Meal deals
            </Link>
            <Link
              className="rounded-xl bg-green-600 py-6 px-8"
              href="/kidsMeal"
            >
              Kids Meal
            </Link>
            <Link className="rounded-xl bg-red-600 py-6 px-8" href="/hot">
              Hot
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
