"use client";

import apiService from "@/services/api.service";
import { routes } from "@/utils/routes";
import { usePathname, useRouter } from "next/navigation";
import styles from "./menu.module.css";

export const Menu = () => {
  const pathname = usePathname();
  const router = useRouter();

  const navigateTo = async (pathname: string) => {
    if (pathname == "/logout") {
      console.log("logout");
      await apiService.logoutInternal();
      router.push("/");
    } else {
      router.push(pathname);
    }
  };

  return (
    <ul className={styles.menu}>
      {routes.map((route) => (
        <li
          key={route.path}
          className={
            route.path === pathname ||
            route.children?.some((item) => item.path === pathname)
              ? styles.active
              : ""
          }
          onClick={() => navigateTo(route.path)}
        >
          {route.name}
        </li>
      ))}
    </ul>
  );
};
