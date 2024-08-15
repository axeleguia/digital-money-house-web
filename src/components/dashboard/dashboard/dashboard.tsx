import { Button } from "@/components/shared/button/button";
import { CardBalance } from "@/components/dashboard/card-balance/card-balance";
import Link from "next/link";
import styles from "./dashboard.module.css";
import { Activities } from "@/components/dashboard/activities/activities";

export const Dashboard = () => {
  return (
    <div id={styles.page}>
      <CardBalance />
      <div className={styles.actions}>
        <Link href={"/dashboard/cargar-dinero"}>
          <Button
            label="Cargar dinero"
            color="primary"
            size="extralarge"
            width="full"
          />
        </Link>
        <Link href={"/dashboard/servicios"}>
          <Button
            label="Pagar servicios"
            color="primary"
            size="extralarge"
            width="full"
          />
        </Link>
      </div>
      <Activities />
    </div>
  );
};
