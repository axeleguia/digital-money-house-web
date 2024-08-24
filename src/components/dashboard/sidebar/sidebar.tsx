"use client";

import { routes } from "@/utils/routes";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import MediaQuery from "react-responsive";
import styles from "./sidebar.module.css";
import apiService from "@/services/api.service";

export const Sidebar = () => {
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
    <MediaQuery minWidth={834}>
      <aside className={styles.sidebar}>
        <ul>
          {routes.map((route) => (
            <li
              key={route.path}
              className={route.path === pathname ? styles.active : ""}
              onClick={() => navigateTo(route.path)}
            >
              {route.name}
              {/* <Link href={route.path}>{route.name}</Link> */}
            </li>
          ))}
        </ul>
      </aside>
    </MediaQuery>
  );
};
