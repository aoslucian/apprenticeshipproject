
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
      if (!uniqueItems.some((uniqueItem) => uniqueItem.title === item.title && uniqueItem.price === item.price)) {
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
    <div>
      <p>Basket</p>
      {basketItems.length === 0 ? (
        <p>Your basket is empty.</p>
      ) : (
        <ul>
          {uniqueBasketItems.map((item, index) => (
            <li key={index}>
              Quantity {countItems(basketItems, item)} - {item.title} - {item.price}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
