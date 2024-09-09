"use client";

import { Icon } from "@/components/shared/icons/icons";
import {
  useGetAccount,
  useGetAccountActivityById,
} from "@/hooks/api-query-hook";
import { format } from "@formkit/tempo";
import { SelectCardOptions } from "../../deposits/cards/select-card-options/select-card-options";
import styles from "./activity-detail.module.css";

type ActivityDetailProps = {
  id: string;
};

export const ActivityDetail = ({ id }: ActivityDetailProps) => {
  const { data: accountData } = useGetAccount();
  const { data } = useGetAccountActivityById(accountData?.id!, Number(id));
  const { id: account_id, amount, dated, destination } = data || {};

  return (
    <>
      <div className={styles.activityDetail}>
        <h3>
          <Icon icon="success" color="primary" width="32" height="32" />
          <span className={styles.status}>Aprobada</span>
          <span className={styles.date}>
            Creada el {format(dated!, { date: "full", time: "short" })}
          </span>
        </h3>
        <div>
          <p className={styles.description}>Transferencia de dinero</p>
          <p className={styles.value}>${amount?.toFixed(2)}</p>
        </div>
        <div>
          <p className={styles.description}>De</p>
          <p className={styles.value}>{destination}</p>
        </div>
        <div>
          <p className={styles.description}>A</p>
          <p className={styles.value}>{account_id}</p>
        </div>
      </div>
      <SelectCardOptions />
    </>
  );
};
