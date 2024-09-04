import { AddCardButton } from "../add-card-button/add-card-button";
import styles from "./add-card-container.module.css";

type AddCardProps = {
  size: number;
};

export const AddCard = ({ size }: AddCardProps) => {
  return (
    <div className={styles.addCard}>
      <p>Agregá tu tarjeta de débito o crédito</p>
      <AddCardButton size={size} type="simple" />
    </div>
  );
};
