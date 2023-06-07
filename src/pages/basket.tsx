import Link from "next/link";
import { useRouter } from "next/router";

interface BasketItem {
  title: string;
  price: string;
}

export default function Basket() {
  const router = useRouter();
  const { items } = router.query;
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const basketItems: BasketItem[] = items ? JSON.parse(items as string) : [];

  const getUniqueItems = (arr: BasketItem[]): BasketItem[] => {
    const uniqueItems: BasketItem[] = [];
    arr.forEach((item) => {
      if (
        !uniqueItems.some(
          (uniqueItem) =>
            uniqueItem.title === item.title && uniqueItem.price === item.price
        )
      ) {
        uniqueItems.push(item);
      }
    });
    return uniqueItems;
  };

  const countItems = (arr: BasketItem[], val: BasketItem): number => {
    let count = 0;
    arr.forEach((item) => {
      if (item.title === val.title && item.price === val.price) {
        count++;
      }
    });
    return count;
  };

  const uniqueBasketItems = getUniqueItems(basketItems);

  return (
    <div className="h-[100vh] bg-[#333] text-white ">
      <div className="flex py-10">
        <Link
          className="ml-16 cursor-pointer rounded-xl border-2 border-transparent py-4 px-8 text-2xl hover:border-orange-500  hover:text-orange-500"
          href="/new-order"
        >
          Back to Menu
        </Link>
      </div>

      <p className="ml-24 py-8 text-2xl">Basket :</p>
      <div className="flex flex-col items-center justify-center rounded-xl py-4 border border-white text-xl mx-24">
        {basketItems.length === 0 ? (
          <p>Your basket is empty.</p>
        ) : (
          <ul className="my-4 scroll-my-2 overflow-hidden">
            {uniqueBasketItems.map((item, index) => (
              <li className="py-1" key={index}>
                <ul className="flex">
                  <li className="flex">
                    Qty :{" "}
                  </li>
                    <ul>
                      <li className="pl-2 text-orange-500">
                        {countItems(basketItems, item)} X
                      </li>
                    </ul>
                  <ul className="flex pl-2 text-white">
                    <li>{item.title}</li>
                    <li className="px-2">-</li>
                    <li className=" text-orange-500">{item.price}</li>
                  </ul>
                </ul>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
