import { AddCardButton } from "@/components/cards/add-card-button/add-card-button";
import { SelectCardItem } from "@/components/dashboard/deposits/cards/select-card-item/select-card-item";
import { Card } from "@/components/shared/card/card";
import { List } from "@/components/shared/list/list";
import { useGetAccount, useGetAccountCards } from "@/hooks/api-query-hook";
import styles from "./select-card-list.module.css";

export const SelectCardList = () => {
  const { data: accountData } = useGetAccount();
  const { data } = useGetAccountCards(accountData?.id!);

  return (
    <Card className={styles.selectCardList} color="background">
      <h4>Seleccionar tarjeta</h4>
      <List title="Tus tarjetas">
        <ul>
          {data?.map((item) => <SelectCardItem key={item.id} data={item} />)}
        </ul>
      </List>
      <AddCardButton size={data?.length!} type="form" />
    </Card>
  );
};
