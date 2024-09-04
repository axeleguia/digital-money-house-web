"use client";

import { Icon } from "@/components/shared/icons/icons";
import { Small } from "@/components/shared/small/small";
import {
  QueryKeys,
  useGetAccountUser,
  useGetQuery,
  useUpdateAccountUser,
} from "@/hooks/api-query-hook";
import { GetAccountResponseType } from "@/types/account.types";
import { hasPasswordConstraint } from "@/utils/validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import styles from "./profile-editor-form.module.css";

export const ProfileEditorForm = () => {
  const accountData = useGetQuery<GetAccountResponseType>(QueryKeys.ACCOUNT);
  const {
    data: userData,
    isSuccess,
    refetch,
  } = useGetAccountUser(accountData?.user_id!);

  const { id, firstname, lastname, dni, email, phone } = userData || {};

  const { mutate } = useUpdateAccountUser(accountData?.user_id!);

  const [selectedInput, setSelectedInput] = useState("");
  const [previousValue, setPreviousValue] = useState("");

  const schema = z.object({
    email: z.string().email(),
    fullname: z.string().min(1),
    cuit: z.string().min(8).max(12).pipe(z.coerce.number()),
    phone: z.string().min(1),
    password: z.string().min(6).max(20).refine(hasPasswordConstraint),
  });
  type FormData = z.infer<typeof schema>;
  const controls = useForm<FormData>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });
  const {
    register,
    formState: { errors },
    setValue,
    clearErrors,
  } = controls;

  const onEdit = (control: string) => {
    Object.keys(controls.getValues()).forEach((key: string) => {
      const el = document.getElementById(key) as HTMLInputElement;
      if (key === control) {
        el.disabled = false;
        el.select();
        setPreviousValue(el.value);
        setSelectedInput(control);
      } else {
        el.disabled = true;
      }
    });
  };

  const cancelEdit = () => {
    Object.keys(controls.getValues()).forEach((key: string) => {
      const el = document.getElementById(key) as HTMLInputElement;
      if (el.disabled === false) {
        if (
          el.value.trim() !== "" &&
          previousValue !== el.value &&
          errors[key] === undefined
        ) {
          mutate({ key: key, value: el.value });
        } else {
          el.value = previousValue;
          setValue(key, previousValue);
          clearErrors(key);
        }
      }
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
    <div className={styles.profileEditorForm} onMouseLeave={cancelEdit}>
      <h3>Tus datos</h3>
      <FormProvider {...controls}>
        <form>
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
                onKeyDown={onPressEnter}
                aria-invalid={errors.fullname ? true : false}
                {...register("fullname", { disabled: true })}
              />
              {isSuccess && (
                <Icon
                  icon="pencil"
                  color="silver"
                  onClick={() => onEdit("fullname")}
                />
              )}
            </div>
          </div>
          <div className={styles.group}>
            <label htmlFor="cuit">CUIT</label>
            <div className={styles.wrapper}>
              <input
                type="number"
                id="cuit"
                defaultValue={userData ? dni : "..."}
                onKeyDown={onPressEnter}
                aria-invalid={errors.cuit ? true : false}
                {...register("cuit", { disabled: true })}
              />
              {isSuccess && (
                <Icon
                  icon="pencil"
                  color="silver"
                  onClick={() => onEdit("cuit")}
                />
              )}
            </div>
          </div>
          <div className={styles.group}>
            <label htmlFor="phone">Teléfono</label>
            <div className={styles.wrapper}>
              <input
                type="text"
                id="phone"
                defaultValue={userData ? phone : "..."}
                onKeyDown={onPressEnter}
                aria-invalid={errors.phone ? true : false}
                {...register("phone", { disabled: true })}
              />
              {isSuccess && (
                <Icon
                  icon="pencil"
                  color="silver"
                  onClick={() => onEdit("phone")}
                />
              )}
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
                onKeyDown={onPressEnter}
                aria-invalid={errors.password ? true : false}
                {...register("password", { disabled: true })}
              />
              {isSuccess && (
                <Icon
                  icon="pencil"
                  color="silver"
                  onClick={() => onEdit("password")}
                />
              )}
            </div>
          </div>
        </form>
        {errors && (
          <Small
            text={errors[selectedInput]?.message}
            textAlign="center"
            invalid={true}
          />
        )}
      </FormProvider>
    </div>
  );
};
