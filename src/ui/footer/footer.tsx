"use client";

import { usePathname } from "next/navigation";
import styles from "./footer.module.css";

export const Footer = () => {
  const pathname = usePathname();
  const cssColor = {
    secondary: styles.bgSecondary,
    background: styles.bgBackground,
  };
  const footerStyle = () => {
    if (pathname === "/register") return "background";
    return "secondary";
  };
  return (
    <footer id={styles.footer}>
      <div className={cssColor[footerStyle()]}>© 2022 Digital Money House</div>
    </footer>
  );
};
