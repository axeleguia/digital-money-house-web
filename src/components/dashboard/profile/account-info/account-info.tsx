"use client";

import { Icon } from "@/components/shared/icons/icons";
import { QueryKeys, useGetQuery } from "@/hooks/api-query-hook";
import { GetAccountResponseType } from "@/types/account.types";
import { toast } from "sonner";
import styles from "./account-info.module.css";

export const AccountInfo = () => {
  const accountData = useGetQuery<GetAccountResponseType>(QueryKeys.ACCOUNT);
  const { cvu, alias } = accountData || {};

  const data = [
    { title: "CVU", value: accountData ? cvu : "-" },
    { title: "Alias", value: accountData ? alias : "-" },
  ];

  const copyToClipboard = (title: string, value: string) => {
    navigator.clipboard.writeText(value);
    toast.message(`${title} copiado al clipboard: `, { description: value });
  };

  return (
    <div className={styles.accountInfo}>
      <p>
        Copia tu cvu o alias para ingresar o transferir dinero desde otra cuenta
      </p>
      <ul>
        {data.map((item) => (
          <li key={item.title}>
            <div className={styles.data}>
              <p className={styles.title}>{item.title}</p>
              <p>{item.value}</p>
            </div>
            <div
              className={styles.icon}
              onClick={() => copyToClipboard(item.title, item.value!)}
            >
              <Icon icon="copy" color="primary" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
