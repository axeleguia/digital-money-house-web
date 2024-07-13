import styles from "./Header.module.css";
import Image from "next/image";
import { Button } from "../Button/Button";

type HeaderProps = {
  theme: "light" | "dark";
};

export const Header = ({ theme }: HeaderProps) => {
  return (
    <header>
      <nav
        className={`${styles.nav} ${theme === "light" ? styles.navLight : styles.navDark}`}
      >
        <Image
          src={theme == "light" ? "/logo-light.svg" : "/logo-dark.svg"}
          alt="Digital Money House Logo"
          width={86.31}
          height={33}
        />
        <div className={styles.navActions}>
          <Button label="Ingresar" btnType="secondary" />
          <Button label="Crear Cuenta" btnType="primary" />
        </div>
      </nav>
    </header>
  );
};
