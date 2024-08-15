"use client";

import apiService from "@/services/api.service";
import { GetAccountResponseType } from "@/types/account.types";
import { GetUserResponseType } from "@/types/user.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { QueryClient, useMutation, useQuery } from "@tanstack/react-query";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import styles from "./profile-editor.module.css";

export const ProfileEditor = () => {
  const queryClient = new QueryClient();

  const { data: accountData } = useQuery<GetAccountResponseType>({
    queryKey: ["account"],
  });

  const { data: userData, refetch } = useQuery<GetUserResponseType>({
    queryKey: ["user"],
    queryFn: async () => apiService.getUser({ id: accountData?.user_id! }),
    enabled: !!accountData?.user_id,
  });

  const { id, firstname, lastname, dni, email, phone } = userData || {};

  const { mutate } = useMutation({
    mutationFn: async (variables: { key: string; value: any }) => {
      if (variables.key === "fullname") {
        const fullname = variables.value.split(" ");
        return await apiService.patchUser({
          id: accountData?.user_id!,
          firstname: fullname[0],
          lastname: fullname.slice(1).join(" "),
        });
      } else {
        return await apiService.patchUser({
          id: accountData?.user_id!,
          [variables.key]: variables.value,
        });
      }
    },
    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data);
      refetch();
    },
  });

  const schema = z.object({
    email: z.string().email(),
    fullname: z.string(),
    cuit: z.string(),
    phone: z.string(),
    password: z.string(),
  });
  type FormData = z.infer<typeof schema>;
  const controls = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = controls;

  const onSubmit = async (data: FormData) => {
    console.log(data);
    // mutate("fullname", data.fullname);
  };

  const onEdit = (control: string) => {
    Object.keys(controls.getValues()).forEach((key: string) => {
      const el = document.getElementById(key) as HTMLInputElement;
      if (key === control) {
        el.disabled = false;
        el.select();
      } else {
        el.disabled = true;
      }
    });
  };

  const cancelEdit = () => {
    Object.keys(controls.getValues()).forEach((key: string) => {
      const el = document.getElementById(key) as HTMLInputElement;
      if (el.disabled === false) mutate({ key: key, value: el.value });
      el.disabled = true;
    });
  };

  const onPressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      cancelEdit();
    }
  };

  return (
    <div className={styles.profileEditor} onMouseLeave={cancelEdit}>
      <h3>Tus datos</h3>
      <FormProvider {...controls}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className={styles.group}>
            <label htmlFor="email">Email</label>
            <div className={styles.wrapper}>
              <input
                type="text"
                id="email"
                defaultValue={userData ? email : "..."}
                {...register("email", { disabled: true })}
              />
            </div>
          </div>
          <div className={styles.group}>
            <label htmlFor="fullname">Nombre y apellido</label>
            <div className={styles.wrapper}>
              <input
                type="text"
                id="fullname"
                defaultValue={userData ? firstname + " " + lastname : "..."}
                {...register("fullname", { disabled: true })}
                onKeyDown={onPressEnter}
              />
              <img
                src="/edit-pencil.svg"
                alt="Editar"
                className={styles.icon}
                onClick={() => onEdit("fullname")}
              />
            </div>
          </div>
          <div className={styles.group}>
            <label htmlFor="cuit">CUIT</label>
            <div className={styles.wrapper}>
              <input
                type="text"
                id="cuit"
                defaultValue={userData ? dni : "..."}
                {...register("cuit", { disabled: true })}
                onKeyDown={onPressEnter}
              />
              <img
                src="/edit-pencil.svg"
                alt="Editar"
                className={styles.icon}
                onClick={() => onEdit("cuit")}
              />
            </div>
          </div>
          <div className={styles.group}>
            <label htmlFor="phone">Teléfono</label>
            <div className={styles.wrapper}>
              <input
                type="text"
                id="phone"
                defaultValue={userData ? phone : "..."}
                {...register("phone", { disabled: true })}
                onKeyDown={onPressEnter}
              />
              <img
                src="/edit-pencil.svg"
                alt="Editar"
                className={styles.icon}
                onClick={() => onEdit("phone")}
              />
            </div>
          </div>
          <div className={styles.group}>
            <label htmlFor="password">Contraseña</label>
            <div className={styles.wrapper}>
              <input
                type="password"
                id="password"
                placeholder="******"
                defaultValue={""}
                {...register("password", { disabled: true })}
                onKeyDown={onPressEnter}
              />
              <img
                src="/edit-pencil.svg"
                alt="Editar"
                className={styles.icon}
                onClick={() => onEdit("password")}
              />
            </div>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};
