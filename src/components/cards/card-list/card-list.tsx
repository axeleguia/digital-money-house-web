import { CardItem } from "@/components/cards/card-item/card-item";
import { List } from "@/components/shared/list/list";

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
