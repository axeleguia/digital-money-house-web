"use client";

import { ProfileHeader } from "@/components/home/profile-header/profile-header";
import apiService from "@/services/api.service";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { Button } from "@/components/shared/button/button";
import { Logo } from "../logo/logo";
import styles from "./navbar.module.css";

type NavbarProps = {
  color: "primary" | "background";
  pathname: string;
};

export const Navbar = ({ color = "primary", pathname }: NavbarProps) => {
  const cssColor = {
    primary: styles.bgPrimary,
    background: styles.bgBackground,
  };

  const { data: accountData } = useQuery({
    queryKey: ["account"],
    queryFn: async () => apiService.getAccount(),
  });

  const { data: userData } = useQuery({
    queryKey: ["user"],
    queryFn: async () => apiService.getUser({ id: accountData?.user_id! }),
    enabled: !!accountData?.user_id,
  });
  const { firstname, lastname } = userData || {};

  return (
    <nav id={styles.nav} className={cssColor[color]}>
      <Link href={"/"}>
        <Logo color={color === "primary" ? "background" : "primary"} />
      </Link>
      <div>
        {pathname === "/home" && (
          <>
            <Link href={"/login"}>
              <Button label="Ingresar" color="background" />
            </Link>
            <Link href={"/register"}>
              <Button label="Crear cuenta" color="primary" />
            </Link>
          </>
        )}
        {pathname === "/register" && (
          <Link href={"/login"}>
            <Button label="Iniciar sesión" color="secondary" />
          </Link>
        )}
        {userData && pathname.includes("/dashboard") && (
          <ProfileHeader firstname={firstname!} lastname={lastname!} />
        )}
      </div>
    </nav>
  );
};
