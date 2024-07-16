import Image from "next/image";
import { Button } from "../button/button";
import styles from "./header.module.css";

type HeaderProps = {
  isLoggedIn: boolean;
};

export const Header = ({ isLoggedIn }: HeaderProps) => {
  return (
    <header className={styles.header}>
      <nav
        className={`${styles.nav} ${isLoggedIn ? styles.navAuthenticated : styles.navUnauthenticated}`}
      >
        <Image
          src={isLoggedIn ? "/logo-dark.svg" : "/logo-light.svg"}
          alt="Digital Money House Logo"
          width={86.31}
          height={33}
        />
        <div className={styles.navActions}>
          {isLoggedIn ? (
            <>
              <Button label="Ingresar" color="background" />
              <Button label="Crear cuenta" color="primary" />
            </>
          ) : (
            <Button label="Iniciar sesión" color="secondary" />
          )}
        </div>
      </nav>
    </header>
  );
};
