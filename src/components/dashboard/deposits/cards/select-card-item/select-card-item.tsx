import { useCardStore } from "@/providers/card-store.provider";
import styles from "./select-card-item.module.css";

type SelectCardItemProps = {
  data: GetAccountCardsResponseType;
};

export const SelectCardItem = ({ data }: SelectCardItemProps) => {
  const setCard = useCardStore((state) => state.setCard);
  const { number_id, id } = data;
  return (
    <li className={styles.selectCardItem}>
      <div className={styles.icon}></div>
      <div className={styles.description}>
        Termina en {getLastDigits(number_id)}
      </div>
      <div className={styles.select}>
        <input
          type="radio"
          name="card"
          value={id}
          onChange={() => setCard(data)}
        />
      </div>
    </li>
  );
};

const getLastDigits = (cardNumber: number) => {
  return String(cardNumber).slice(-4);
};
