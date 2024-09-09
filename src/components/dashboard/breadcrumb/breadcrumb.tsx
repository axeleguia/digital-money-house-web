"use client";

import { Icon } from "@/components/shared/icons/icons";
import useMediaQuery from "@/hooks/media-query";
import { routes } from "@/utils/routes";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./breadcrumb.module.css";

export const Breadcrumb = () => {
  const pathname = usePathname();
  const currentRoute = routes.find(
    (route) =>
      route.path === pathname ||
      route.children?.some((item) => item.path === pathname)
  );
  const isMobile = useMediaQuery("(max-width: 834px)");
  return (
    currentRoute &&
    isMobile && (
      <Link href={currentRoute.path} className={styles.breadcrumb}>
        <Icon icon="arrow-right" color="opaque" />
        <span>{currentRoute?.name}</span>
      </Link>
    )
  );
};
