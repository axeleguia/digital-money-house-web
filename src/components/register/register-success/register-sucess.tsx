import { Button } from "@/components/shared/button/button";
import { Icon } from "@/components/shared/icons/icons";
import Link from "next/link";
import styles from "./register-success.module.css";

export const RegisterSuccess = () => {
  return (
    <div id={styles.registerSuccess}>
      <h2>Registro Exitoso</h2>
      <Icon icon="success" color="primary" />
      <span>
        Hemos enviado un correo de confirmación para validar tu email, por favor
        revisalo para iniciar sesión
      </span>
      <Link href={"/login"}>
        <Button label="Continuar" color="primary" size="medium" />
      </Link>
    </div>
  );
};
