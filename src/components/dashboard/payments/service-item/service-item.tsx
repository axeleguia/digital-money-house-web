import React from "react";
import styles from "./service-item.module.css";

type ServiceItemProps = {
  data: GetServiceResponseType;
};

export const ServiceItem = ({ data }: ServiceItemProps) => {
  const { id, name, date } = data;
  return (
    <li className={styles.serviceItem}>
      <div className={styles.icon}></div>
      <div className={styles.description}>{name}</div>
      <div className={styles.select}>Seleccionar</div>
    </li>
  );
};
