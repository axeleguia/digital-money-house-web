import styles from "./activity-item.module.css";

type ActivityItemProps = {
  title: string;
  date: string;
  amount: string;
};

export const ActivityItem = ({ title, date, amount }: ActivityItemProps) => {
  return (
    <div className={styles.activityItem}>
      <div className={styles.icon}></div>
      <div className={styles.description}>{title}</div>
      <div className={styles.group}>
        <p className={styles.amount}>{amount}</p>
        <p className={styles.date}>{date}</p>
      </div>
    </div>
  );
};
