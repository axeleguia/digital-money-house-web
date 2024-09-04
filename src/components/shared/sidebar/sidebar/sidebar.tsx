"use client";

import { Menu } from "@/components/shared/sidebar/menu/menu";
import MediaQuery from "react-responsive";
import styles from "./sidebar.module.css";

export const Sidebar = () => {
  return (
    <MediaQuery minWidth={834}>
      <aside className={styles.sidebar}>
        <Menu />
      </aside>
    </MediaQuery>
  );
};
