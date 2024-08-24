import { AddCard } from "@/components/cards/add-card/add-card";
import { CardList } from "../card-list/card-list";
import styles from "./cards-page.module.css";

export const CardsPage = () => {
  return (
    <div id={styles.page}>
      <AddCard />
      <CardList />
    </div>
  );
};
