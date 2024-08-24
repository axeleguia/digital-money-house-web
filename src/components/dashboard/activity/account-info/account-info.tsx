"use client";

import { Icon } from "@/components/shared/icons/icons";
import { GetAccountResponseType } from "@/types/account.types";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import styles from "./account-info.module.css";

export const AccountInfo = () => {
  const { data: accountData } = useQuery<GetAccountResponseType>({
    queryKey: ["account"],
  });

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
