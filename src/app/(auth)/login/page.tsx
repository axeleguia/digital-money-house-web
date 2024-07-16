import { Button } from "@/app/ui/button/button";
import { Input } from "@/app/ui/input/input";
import styles from "./login.module.css";

const LoginPage = () => {
  return (
    <form id={styles.loginForm}>
      <h2 className={styles.title}>¡Hola! Ingresá tu e-mail</h2>
      <Input type="text" placeholder="Correo electronico" width="full" />
      <Input type="password" placeholder="Contraseña" width="full" />
      <Button label="Continuar" color="primary" size="large" width="full" />
      <Button label="Crear cuenta" color="tertiary" size="large" width="full" />
      <small className={styles.errorMsg}>
        Usuario inexistente. Vuelve a intentarlo.
      </small>
    </form>
  );
};

export default LoginPage;
