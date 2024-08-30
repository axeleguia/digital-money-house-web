import { CardStoreProvider } from "@/providers/card-store.provider";
import { CardContainer } from "../card-container/card-container";
import styles from "./cards-page.module.css";

export const CardsPage = () => {
  return (
    <CardStoreProvider>
      <div id={styles.page}>
        <CardContainer />
      </div>
    </CardStoreProvider>
  );
};
