"use client";

import { useAppStore } from "@/providers/app-store-provider";
import { usePathname } from "next/navigation";
import { Navbar } from "../navbar/navbar";

export const Header = () => {
  const pathname = usePathname();
  const isLoggedIn = useAppStore((state) => state.isLoggedIn);

  const navStyle = () => {
    if (pathname === "/login") return "primary";
    if (pathname === "/register") return "primary";
    return "background";
  };

  return (
    <header>
      <Navbar color={navStyle()} pathname={pathname} isLoggedIn={isLoggedIn} />
    </header>
  );
};
