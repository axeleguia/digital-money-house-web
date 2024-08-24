"use client";

import { Button } from "@/components/shared/button/button";
import { Input } from "@/components/shared/input/input";
import { Small } from "@/components/shared/small/small";
import { NotFoundError, UnauthorizedError } from "@/interfaces/http-error";
import apiService from "@/services/api.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { SubmitButton } from "../../shared/submit-button/submit-button";
import styles from "./login-form.module.css";

export const LoginForm = () => {
  const { mutate, isPending } = useMutation({
    mutationFn: async (variables: { email: string; password: string }) => {
      await apiService.loginInternal({
        email: variables.email,
        password: variables.password,
      });
    },
    onSuccess: () => {
      router.push("/dashboard");
    },
    onError: (e) => {
      if (e instanceof NotFoundError) {
        setError("Usuario inexistente. Vuelve a intentarlo");
      } else if (e instanceof UnauthorizedError) {
        setError("Credenciales invalidas. Vuelve a intentarlo");
      }
    },
  });

  const router = useRouter();
  const [hasEmail, setHasEmail] = useState(false);
  const [error, setError] = useState("");

  const schema = z.object({
    email: z.string().email(),
    password: z.string(),
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
      mutate({ email, password });
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
          isLoading={isPending}
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
        {error && <Small text={error} invalid={true} textAlign="center" />}
      </form>
    </FormProvider>
  );
};
