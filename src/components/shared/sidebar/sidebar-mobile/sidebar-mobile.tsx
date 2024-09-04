"use client";

import { Icon } from "@/components/shared/icons/icons";
import { Menu } from "@/components/shared/sidebar/menu/menu";
import { useAppStore } from "@/providers/app-store-provider";
import MediaQuery from "react-responsive";
import styles from "./sidebar-mobile.module.css";

type SidebarMobileProps = {
  firstname: string;
  lastname: string;
};

export const SidebarMobile = ({ firstname, lastname }: SidebarMobileProps) => {
  const sidebarIsOpen = useAppStore((state) => state.sidebarIsOpen);
  const toggle = useAppStore((state) => state.toggle);
  const handleMediaQueryChange = (matches: boolean) => matches && toggle(false);

  return (
    sidebarIsOpen && (
      <MediaQuery maxWidth={834} onChange={handleMediaQueryChange}>
        <aside className={styles.sidebarMobile}>
          <div>
            <div className={styles.greeting}>
              Hola, <br />
              {firstname} {lastname}
            </div>
            <Icon
              icon="close"
              color="primary"
              onClick={() => toggle(!sidebarIsOpen)}
            />
          </div>
          <Menu />
        </aside>
      </MediaQuery>
    )
  );
};
