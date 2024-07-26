"use client";

import { NotFoundError, UnauthorizedError } from "@/interfaces/http-error";
import apiService from "@/services/api.service";
import { Button } from "@/ui/button/button";
import { Input } from "@/ui/input/input";
import { Small } from "@/ui/small/small";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { SubmitButton } from "../../submit-button/submit-button";
import styles from "./login-form.module.css";

export const LoginForm = () => {
  const [hasEmail, setHasEmail] = useState(false);
  const [error, setError] = useState("");

  const schema = z.object({
    email: z.string().email(),
    password: z.string().min(1),
  });
  type FormData = z.infer<typeof schema>;
  const controls = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const {
    handleSubmit,
    formState: { isValid },
  } = controls;

  const onSubmit = async (data: FormData) => {
    setError("");
    const { email, password } = data;
    if (!hasEmail && email !== "") {
      setHasEmail(true);
      return;
    }
    if (isValid) {
      try {
        await apiService.loginInternal({ email, password });
      } catch (e) {
        if (e instanceof NotFoundError) {
          setError("Usuario inexistente. Vuelve a intentarlo");
        } else if (e instanceof UnauthorizedError) {
          setError("Credenciales invalidas. Vuelve a intentarlo");
        }
      }
    }
  };

  return (
    <FormProvider {...controls}>
      <form id={styles.loginForm} onSubmit={handleSubmit(onSubmit)}>
        <h2>¡Hola! Ingresá tu e-mail</h2>
        <Input
          fieldName="email"
          type="text"
          placeholder="Correo electronico"
          width="full"
          display={!hasEmail}
        />
        <Input
          fieldName="password"
          type="password"
          placeholder="Contraseña"
          width="full"
          display={hasEmail}
        />
        <SubmitButton
          label="Continuar"
          color="primary"
          size="large"
          width="full"
          onSubmit={onSubmit}
        />
        {!hasEmail && (
          <Link href="/register">
            <Button
              label="Crear cuenta"
              color="tertiary"
              size="large"
              width="full"
            />
          </Link>
        )}
        {error && <Small text={error} invalid={true} />}
      </form>
    </FormProvider>
  );
};
