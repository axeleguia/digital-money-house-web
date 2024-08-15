import { ActivityItem } from "@/components/dashboard/activity-item/activity-item";
import Link from "next/link";
import styles from "./activity-list.module.css";

export const ActivityList = () => {
  const items = [
    {
      id: 1,
      title: "Transferiste a Rodrigo",
      date: "Sábado",
      amount: "-$ 1265,57",
    },
    {
      title: "Transferiste a Rodrigo",
      id: 2,
      date: "Sábado",
      amount: "-$ 1265,57",
    },
    {
      id: 3,
      title: "Transferiste a Consorcio",
      date: "Sábado",
      amount: "-$ 1265,57",
    },
    {
      id: 4,
      title: "Ingresaste dinero",
      date: "Sábado",
      amount: "-$ 1265,57",
    },
    {
      id: 5,
      title: "Te transfirieron dinero",
      date: "Sábado",
      amount: "-$ 1265,57",
    },
  ];
  return (
    <div className={styles.activityList}>
      <p>Tu actividad</p>
      {items.map((item) => (
        <ActivityItem key={item.title} {...item} />
      ))}
      <Link href="/dashboard/actividad">
        <div className={styles.viewAll}>
          <div>Ver toda tu actividad</div>
          <img src="/arrow-right.svg" alt="Ver" />
        </div>
      </Link>
    </div>
  );
};
