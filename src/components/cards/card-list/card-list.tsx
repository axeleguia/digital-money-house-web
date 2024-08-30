import { List } from "@/components/shared/list/list";
import { CardItem } from "../card-item/card-item";

type CardListProps = {
  data: GetAccountCardsResponseType[];
};

export const CardList = ({ data }: CardListProps) => {
  return (
    <List title="Tus tarjetas">
      <ul>{data?.map((item) => <CardItem key={item.id} {...item} />)}</ul>
    </List>
  );
};
