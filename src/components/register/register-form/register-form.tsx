"use client";

import apiService from "@/services/api.service";
import { Input } from "@/components/shared/input/input";
import { Small } from "@/components/shared/small/small";
import { hasPasswordConstraint } from "@/utils/validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { SubmitButton } from "../../shared/submit-button/submit-button";
import styles from "./register-form.module.css";

export const RegisterForm = () => {
  const router = useRouter();
  const [error, setError] = useState("");
  const schema = z.object({
    email: z.string().email(),
    firstname: z.string().min(1),
    lastname: z.string().min(1),
    dni: z.string().min(8).max(12).pipe(z.coerce.number()),
    password: z.string().min(6).max(20).refine(hasPasswordConstraint),
    password2: z.string().min(6).max(20).refine(hasPasswordConstraint),
    phone: z.string().min(1),
  });
  schema.refine((data) => data.password === data.password2, {
    params: ["password", "password2"],
    message: "Las contraseñas no coinciden",
  });
  type FormData = z.infer<typeof schema>;
  const controls = useForm<FormData>({
    mode: "onChange",
    resolver: zodResolver(schema),
  });
  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = controls;

  const onSubmit = async (data: FormData) => {
    setError("");
    try {
      const { dni, email, firstname, lastname, password, phone } = data;
      await apiService.registerInternal({
        dni,
        email,
        firstname,
        lastname,
        password,
        phone,
      });
      router.push("/register/success");
    } catch (e) {
      setError("Error al enviar el formulario. Vuelve a intentarlo");
    }
  };

  return (
    <FormProvider {...controls}>
      <form id={styles.registerForm} onSubmit={handleSubmit(onSubmit)}>
        <h2>Crear cuenta</h2>
        <div>
          <Input
            fieldName="firstname"
            type="text"
            placeholder="Nombre*"
            width="full"
          />
          <Input
            fieldName="lastname"
            type="text"
            placeholder="Apellido*"
            width="full"
          />
          <Input fieldName="dni" type="text" placeholder="DNI*" width="full" />
          <Input
            fieldName="email"
            type="email"
            placeholder="Correo electrónico*"
            width="full"
          />
        </div>
        <Small
          text="Usa entre 6 y 20 carácteres (debe contener al menos al menos 1
          carácter especial, una mayúscula y un número)"
          textAlign="center"
        />
        <div>
          <Input
            fieldName="password"
            type="password"
            placeholder="Contraseña*"
            width="full"
          />
          <Input
            fieldName="password2"
            type="password"
            placeholder="Guardar contraseña*"
            width="full"
          />
          <Input
            fieldName="phone"
            type="text"
            placeholder="Teléfono*"
            width="full"
          />
          <SubmitButton
            label="Crear cuenta"
            color="primary"
            size="large"
            width="full"
            onSubmit={onSubmit}
          />
          <div></div>
          <div className={styles.message}>
            {error && <Small text={error} invalid={true} textAlign="center" />}
            {errors && !isValid && (
              <Small
                text="Completa los campos requeridos"
                invalid={true}
                textAlign="center"
              />
            )}
            {errors.password?.type === "custom" ||
              (errors.password2?.type === "custom" && (
                <Small
                  text="Las contraseñas no coinciden"
                  invalid={true}
                  textAlign="center"
                />
              ))}
          </div>
        </div>
      </form>
    </FormProvider>
  );
};
