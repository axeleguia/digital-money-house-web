import { Icon } from "@/components/shared/icons/icons";
import styles from "./add-card.module.css";

export const AddCard = () => {
  return (
    <div className={styles.addCard}>
      <p>Agregá tu tarjeta de débito o crédito</p>
      <div className={styles.action}>
        <Icon icon="add" color="primary" />
        <div className={styles.title}>Nueva tarjeta</div>
        <Icon icon="arrow-right" color="primary" />
      </div>
    </div>
  );
};
