import React from "react";
import styles from "./page-layout.module.css";

type PageLayoutProps = {
  children: React.ReactNode;
};

export const PageLayout = ({ children }: PageLayoutProps) => {
  return <div id={styles.page}>{children}</div>;
};
