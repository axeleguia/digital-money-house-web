import { Button } from "@/app/ui/button/button";
import { Input } from "@/app/ui/input/input";
import styles from "./register.module.css";

const RegisterPage = () => {
  return (
    <form id={styles.registerForm}>
      <h1 className={styles.title}>Crear cuenta</h1>
      <div className={styles.group}>
        <Input type="text" placeholder="Nombre*" width="full" />
        <Input type="text" placeholder="Apellido*" width="full" />
        <Input type="text" placeholder="DNI*" width="full" />
        <Input type="text" placeholder="Correo electrónico*" width="full" />
      </div>
      <small className={styles.password}>
        Usa entre 6 y 20 carácteres (debe contener al menos al menos 1 carácter
        especial, una mayúscula y un número)
      </small>
      <div className={styles.group}>
        <Input type="password" placeholder="Contraseña*" width="full" />
        <Input type="password" placeholder="Guardar contraseña*" width="full" />
        <Input type="text" placeholder="Teléfono*" width="full" />
        <Button
          label="Crear cuenta"
          color="primary"
          size="large"
          width="full"
        />
        <small></small>
        <small className={styles.message}>Completa los campos requeridos</small>
      </div>
    </form>
  );
};

export default RegisterPage;
