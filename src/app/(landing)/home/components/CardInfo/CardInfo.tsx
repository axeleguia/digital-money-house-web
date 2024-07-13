import React from "react";
import styles from "./CardInfo.module.css";

export type CardInfoData = {
  title: string;
  description: string;
};
type CardInfoProps = {
  data: CardInfoData;
};
export const CardInfo = ({ data }: CardInfoProps) => {
  const { title, description } = data;
  return (
    <div className={styles.cardInfo}>
      <h1 className={styles.cardInfoTitle}>{title}</h1>
      <p className={styles.cardInfoDescription}>{description}</p>
    </div>
  );
};
