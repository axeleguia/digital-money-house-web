"use client";

import { useAppStore } from "@/providers/app-store-provider";
import { usePathname } from "next/navigation";
import { Navbar } from "../navbar/navbar";
import styles from "./header.module.css";

export const Header = () => {
  const pathname = usePathname();
  const isLoggedIn = useAppStore((state) => state.isLoggedIn);

  const navStyle = () => {
    if (pathname === "/home") return "background";
    if (pathname === "/login") return "primary";
    if (pathname === "/register") return "primary";
    return isLoggedIn ? "primary" : "background";
  };

  return (
    <header id={styles.header}>
      <Navbar color={navStyle()} pathname={pathname} />
    </header>
  );
};
