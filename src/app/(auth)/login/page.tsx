import { Button } from "@/components/Button/Button";
import styles from "./Login.module.css";

const LoginPage = () => {
  return (
    <div>
      <h1>¡Hola! Ingresá tu e-mail</h1>
      <input type="text" placeholder="Correo electronico" />
      {/* <button className={styles.buttonPrimary}>Continuar</button> */}
      <Button label="Continuar" />
      {/* <button className={styles.buttonSecondary}>Crear Cuenta</button> */}
    </div>
  );
};

export default LoginPage;
