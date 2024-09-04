import { ActivityItem } from "@/components/dashboard/activity/activity-item/activity-item";
import { Icon } from "@/components/shared/icons/icons";
import { List } from "@/components/shared/list/list";
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
    <List title="Tu actividad">
      <ul>
        {items.map((item) => (
          <ActivityItem key={item.id} {...item} />
        ))}
      </ul>
      <Link href="/dashboard/activity" className={styles.viewAll}>
        <div>Ver toda tu actividad</div>
        <Icon icon="arrow-right" color="gray" />
      </Link>
    </List>
  );
};
