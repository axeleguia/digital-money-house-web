import styles from "./card-item.module.css";

type CardItemProps = {
  cardNumber: string;
};

export const CardItem = ({ cardNumber }: CardItemProps) => {
  return (
    <li className={styles.cardItem}>
      <div className={styles.icon}></div>
      <div className={styles.description}>Termina en {cardNumber}</div>
      <div className={styles.delete}>Eliminar</div>
    </li>
  );
};
