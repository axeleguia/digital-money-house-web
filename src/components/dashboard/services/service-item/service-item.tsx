"use client";

import { useRouter } from "next/navigation";
import styles from "./service-item.module.css";

type ServiceItemProps = {
  data: GetServiceResponseType;
};

export const ServiceItem = ({ data }: ServiceItemProps) => {
  const router = useRouter();
  const { id, name, date } = data;

  const onClick = () => {
    router.push(`/dashboard/services/${id}`);
  };

  return (
    <li className={styles.serviceItem} onClick={onClick}>
      <div className={styles.icon}></div>
      <div className={styles.description}>{name}</div>
      <div className={styles.select}>Seleccionar</div>
    </li>
  );
};
