import Image from "next/image";
import { Button } from "../button/button";
import styles from "./header.module.css";
import Link from "next/link";

type HeaderProps = {
  isLoggedIn: boolean;
};

export const Header = ({ isLoggedIn }: HeaderProps) => {
  return (
    <header id={styles.header}>
      <nav
        className={
          isLoggedIn ? styles.navAuthenticated : styles.navUnauthenticated
        }
      >
        <Link href={"/"}>
          <Image
            src={isLoggedIn ? "/logo-dark.svg" : "/logo-light.svg"}
            alt="Digital Money House Logo"
            width={86.31}
            height={33}
          />
        </Link>
        <div>
          {isLoggedIn ? (
            <>
              <Link href={"/login"}>
                <Button label="Ingresar" color="background" />
              </Link>
              <Link href={"/register"}>
                <Button label="Crear cuenta" color="primary" />
              </Link>
            </>
          ) : (
            <Button label="Iniciar sesión" color="secondary" />
          )}
        </div>
      </nav>
    </header>
  );
};
