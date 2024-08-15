"use client";

import { GetAccountResponseType } from "@/types/account.types";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import styles from "./card-balance.module.css";

export const CardBalance = () => {
  const { data: account } = useQuery<GetAccountResponseType>({
    queryKey: ["account"],
  });
  const { available_amount } = account || {};

  return (
    <div className={styles.cardBalance}>
      <div className={styles.actions}>
        <Link href={"#"}>Ver tarjetas</Link>
        <Link href={"#"}>Ver CVU</Link>
      </div>
      <p>Dinero disponible</p>
      <span className={styles.amount}>$ {available_amount}</span>
    </div>
  );
};
