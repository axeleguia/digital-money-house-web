import Link from "next/link";
import styles from "./register-success.module.css";
import { Button } from "@/components/shared/button/button";

export const RegisterSuccess = () => {
  return (
    <div id={styles.registerSuccess}>
      <h2>Registro Exitoso</h2>
      <img src="/success.svg" alt="Success" width={100} height={100} />
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
