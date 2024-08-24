import { ActivityForm } from "@/components/dashboard/activity-form/activity-form";
import { CardBalance } from "@/components/dashboard/card-balance/card-balance";
import { Button } from "@/components/shared/button/button";
import Link from "next/link";
import styles from "./dashboard-page.module.css";

export const DashboardPage = () => {
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
      <ActivityForm />
    </div>
  );
};
