"use client";

import { Icon } from "@/components/shared/icons/icons";
import { routes } from "@/utils/routes";
import { usePathname } from "next/navigation";
import MediaQuery from "react-responsive";
import styles from "./breadcrumb.module.css";

export const Breadcrumb = () => {
  const pathname = usePathname();
  const currentRoute = routes.find((route) => route.path === pathname);
  return (
    currentRoute && (
      <MediaQuery maxWidth={834}>
        <div className={styles.breadcrumb}>
          <Icon icon="arrow" color="opaque" />
          <span>{currentRoute?.name}</span>
        </div>
      </MediaQuery>
    )
  );
};
