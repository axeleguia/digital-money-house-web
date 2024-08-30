"use client";

import { SidebarMobile } from "@/components/dashboard/sidebar-mobile/sidebar-mobile";
import { Icon } from "@/components/shared/icons/icons";
import { useAppStore } from "@/providers/app-store-provider";
import MediaQuery from "react-responsive";
import styles from "./profile-header.module.css";

type ProfileHeaderProps = {
  firstname: string;
  lastname: string;
};

export const ProfileHeader = ({ firstname, lastname }: ProfileHeaderProps) => {
  const sidebarIsOpen = useAppStore((state) => state.sidebarIsOpen);
  const toggle = useAppStore((state) => state.toggle);

  return (
    <div id={styles.profileHeader}>
      <div className={styles.name}>
        {firstname[0]}
        {lastname[0]}
      </div>
      <div className={styles.greeting}>
        Hola, {firstname} {lastname}
      </div>
      <MediaQuery maxWidth={834}>
        <div className={styles.menu}>
          <Icon
            icon="menu"
            color="primary"
            onClick={() => toggle(!sidebarIsOpen)}
          />
        </div>
        <SidebarMobile firstname={firstname} lastname={lastname} />
      </MediaQuery>
    </div>
  );
};
