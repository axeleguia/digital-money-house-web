import { List } from "@/components/shared/list/list";
import { CardItem } from "../card-item/card-item";

export const CardList = () => {
  const items = [
    {
      id: 1,
      cardNumber: "0000",
    },
    {
      cardNumber: "4067",
      id: 2,
    },
    {
      id: 3,
      cardNumber: "8040",
    },
    {
      id: 4,
      cardNumber: "9006",
    },
  ];
  return (
    <List title="Tus tarjetas">
      <ul>
        {items.map((item) => (
          <CardItem key={item.id} {...item} />
        ))}
      </ul>
    </List>
  );
};
