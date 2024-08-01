import Link from "next/link";
import { Button } from "../button/button";
import { Logo } from "../logo/logo";
import styles from "./navbar.module.css";
import { ProfileHeader } from "../profile-header/profile-header";

type NavbarProps = {
  color: "primary" | "background";
  pathname: string;
  isLoggedIn: boolean;
};
export const Navbar = ({
  color = "primary",
  pathname,
  isLoggedIn,
}: NavbarProps) => {
  const cssColor = {
    primary: styles.bgPrimary,
    background: styles.bgBackground,
  };
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
        {isLoggedIn && <ProfileHeader firstname="Mauricio" lastname="Brito" />}
      </div>
    </nav>
  );
};
