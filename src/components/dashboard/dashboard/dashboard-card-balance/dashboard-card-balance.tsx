"use client";

import { useGetAccount } from "@/hooks/api-query-hook";
import Link from "next/link";
import styles from "./dashboard-card-balance.module.css";

export const DashboardCardBalance = () => {
  const { data } = useGetAccount();
  const { available_amount } = data || {};

  return (
    <div className={styles.dashboardCardBalance}>
      <div className={styles.options}>
        <Link href={"/dashboard/cards"}>Ver tarjetas</Link>
        <Link href={"/dashboard/activity"}>Ver CVU</Link>
      </div>
      <p>Dinero disponible</p>
      <span className={styles.amount}>$ {available_amount}</span>
    </div>
  );
};
