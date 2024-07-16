import { Button } from "@/app/ui/button/button";
import styles from "./success.module.css";
import Image from "next/image";

const SuccessPage = () => {
  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>Registro Exitoso</h2>
      <Image src="/success.svg" alt="Success" className={styles.cardIcon} />
      <span className={styles.cardMessage}>
        Hemos enviado un correo de confirmación para validar tu email, por favor
        revisalo para iniciar sesión
      </span>
      <Button label="Continuar" color="primary" size="medium" />
    </div>
  );
};

export default SuccessPage;
