import { Button } from "@/components/shared/button/button";
import Link from "next/link";
import styles from "./dashboard-options.module.css";

export const DashboardOptions = () => {
  return (
    <div className={styles.options}>
      <Link href={"/dashboard/deposits"}>
        <Button
          label="Cargar dinero"
          color="primary"
          size="extralarge"
          width="full"
        />
      </Link>
      <Link href={"/dashboard/payments"}>
        <Button
          label="Pagar servicios"
          color="primary"
          size="extralarge"
          width="full"
        />
      </Link>
    </div>
  );
};
