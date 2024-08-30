"use client";

import { Icon } from "@/components/shared/icons/icons";
import { routes } from "@/utils/routes";
import { usePathname } from "next/navigation";
import MediaQuery from "react-responsive";
import styles from "./breadcrumb.module.css";
import dynamic from "next/dynamic";
import { Skeleton } from "@/components/shared/skeleton/skeleton";

const Breadcrumb = () => {
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

const BreadcrumbSkeleton = () => {
  return (
    <MediaQuery maxWidth={834}>
      <div className={styles.breadcrumb}>
        <Icon icon="arrow" color="opaque" />
        <Skeleton width={100} height={24} />
      </div>
    </MediaQuery>
  );
};

export default dynamic(() => Promise.resolve(Breadcrumb), {
  ssr: false,
  loading: () => <BreadcrumbSkeleton />,
});
