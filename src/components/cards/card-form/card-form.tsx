"use client";

import { CardSteps } from "@/components/dashboard/deposits/cards/enum";
import { Icon } from "@/components/shared/icons/icons";
import { Input } from "@/components/shared/input/input";
import { SubmitButton } from "@/components/shared/submit-button/submit-button";
import {
  QueryKeys,
  useCreateAccountCards,
  useGetQuery,
} from "@/hooks/api-query-hook";
import { useCardStore } from "@/providers/card-store.provider";
import { GetAccountResponseType } from "@/types/account.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import Cards, { Focused } from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import styles from "./card-form.module.css";
import "./card.scss";

type CardFormProps = {
  nextStep: CardSteps;
};

export const CardForm = ({ nextStep }: CardFormProps) => {
  const setStep = useCardStore((state) => state.setStep);

  const accountData = useGetQuery<GetAccountResponseType>(QueryKeys.ACCOUNT);
  const { id: account_id } = accountData || {};

  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  const schema = z.object({
    number: z.string().pipe(z.coerce.number()),
    expiry: z.string(),
    name: z.string(),
    cvc: z.string().pipe(z.coerce.number()),
  });
  type FormData = z.infer<typeof schema>;
  const controls = useForm<FormData>({
    mode: "onChange",
    resolver: zodResolver(schema),
  });
  const {
    handleSubmit,
    formState: { errors },
    watch,
  } = controls;

  useEffect(() => {
    const { unsubscribe } = watch((value, { name }) => {
      setState({
        ...state,
        number: value.number?.toString()!,
        expiry: value.expiry!,
        name: value.name!,
        cvc: value.cvc?.toString()!,
        focus: name!,
      });
    });
    return () => unsubscribe();
  }, [watch]);

  const cardRequest: PostAccountCardsRequestType = {
    number_id: Number(state.number),
    expiration_date: state.expiry,
    first_last_name: state.name,
    cod: Number(state.cvc),
  };

  const { mutate } = useCreateAccountCards(account_id!, cardRequest);

  const onSubmit = (data: FormData) => {
    mutate(
      {},
      {
        onSuccess: () => {
          setStep(nextStep);
        },
      }
    );
  };

  return (
    <FormProvider {...controls}>
      <form id={styles.cardForm} onSubmit={handleSubmit(onSubmit)}>
        <Icon icon="close" color="opaque" onClick={() => setStep(nextStep)} />
        <Cards
          number={state.number}
          expiry={state.expiry}
          cvc={state.cvc}
          name={state.name}
          focused={state.focus as Focused}
        />
        <div className={styles.group}>
          <div className={styles.col}>
            <Input
              fieldName="number"
              type="text"
              placeholder="Número de la tarjeta*"
              width="full"
            />
            <Input
              fieldName="name"
              type="text"
              placeholder="Nombre y apellido*"
              width="full"
            />
          </div>
          <div className={styles.col}>
            <div className={styles.col2}>
              <Input
                fieldName="expiry"
                type="text"
                placeholder="Fecha de vencimiento*"
                width="full"
              />
              <Input
                fieldName="cvc"
                type="text"
                placeholder="Código de seguridad*"
                width="full"
              />
            </div>
            <SubmitButton
              label="Continuar"
              color="primary"
              size="large"
              width="full"
              onSubmit={onSubmit}
            />
          </div>
        </div>
      </form>
    </FormProvider>
  );
};
