"use client";

import { Icon } from "@/components/shared/icons/icons";
import { useGetAccount } from "@/hooks/api-query-hook";
import { toast } from "sonner";
import styles from "./account-info.module.css";

export const AccountInfo = () => {
  const { data: accountData } = useGetAccount();
  const { cvu, alias } = accountData || {};

  const data = [
    { title: "CVU", value: accountData ? cvu : "-" },
    { title: "Alias", value: accountData ? alias : "-" },
  ];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.message("Copiado al clipboard: ", { description: text });
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
              onClick={() => copyToClipboard(item.value!)}
            >
              <Icon icon="copy" color="primary" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
