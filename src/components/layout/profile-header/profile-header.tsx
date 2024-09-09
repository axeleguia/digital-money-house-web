"use client";

import { Icon } from "@/components/shared/icons/icons";
import { SidebarMobile } from "@/components/shared/sidebar/sidebar-mobile/sidebar-mobile";
import useMediaQuery from "@/hooks/media-query";
import { useAppStore } from "@/providers/app-store-provider";
import styles from "./profile-header.module.css";

type ProfileHeaderProps = {
  firstname: string;
  lastname: string;
};

export const ProfileHeader = ({ firstname, lastname }: ProfileHeaderProps) => {
  const isMobile = useMediaQuery("(max-width: 834px)");
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
      {isMobile && (
        <>
          <div className={styles.menu}>
            <Icon
              icon="menu"
              color="primary"
              onClick={() => toggle(!sidebarIsOpen)}
            />
          </div>
          <SidebarMobile firstname={firstname} lastname={lastname} />
        </>
      )}
    </div>
  );
};
