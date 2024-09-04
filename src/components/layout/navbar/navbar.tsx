"use client";

import { ProfileHeader } from "@/components/layout/profile-header/profile-header";
import { Button } from "@/components/shared/button/button";
import { Icon } from "@/components/shared/icons/icons";
import { useGetAccount, useGetAccountUser } from "@/hooks/api-query-hook";
import Link from "next/link";
import styles from "./navbar.module.css";

type NavbarProps = {
  color: "primary" | "background";
  pathname: string;
};

export const Navbar = ({ color = "primary", pathname }: NavbarProps) => {
  const { data: accountData } = useGetAccount();
  const { data: userData } = useGetAccountUser(accountData?.user_id!);
  const { firstname, lastname } = userData || {};

  const cssColor = {
    primary: styles.bgPrimary,
    background: styles.bgBackground,
  };

  return (
    <nav id={styles.nav} className={cssColor[color]}>
      <Link href={"/"}>
        <Icon
          icon="logo"
          color={color === "primary" ? "background" : "primary"}
        />
      </Link>
      <div>
        {pathname === "/" && (
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
