import { AddCardButton } from "@/components/cards/add-card-button/add-card-button";
import { SelectCardItem } from "@/components/dashboard/deposits/cards/select-card-item/select-card-item";
import { List } from "@/components/shared/list/list";
import {
  QueryKeys,
  useGetAccountCards,
  useGetQuery,
} from "@/hooks/api-query-hook";
import { GetAccountResponseType } from "@/types/account.types";
import styles from "./select-card-list.module.css";

export const SelectCardList = () => {
  const accountData = useGetQuery<GetAccountResponseType>(QueryKeys.ACCOUNT);
  const { data } = useGetAccountCards(accountData?.id!);
  return (
    <div className={styles.selectCardList}>
      <h4>Seleccionar tarjeta</h4>
      <List title="Tus tarjetas">
        <ul>
          {data?.map((item) => <SelectCardItem key={item.id} data={item} />)}
        </ul>
      </List>
      <AddCardButton size={data?.length!} type="form" />
    </div>
  );
};
