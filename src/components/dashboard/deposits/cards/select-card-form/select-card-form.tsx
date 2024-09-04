import { CardSteps } from "@/components/dashboard/deposits/cards/enum";
import { Input } from "@/components/shared/input/input";
import { SubmitButton } from "@/components/shared/submit-button/submit-button";
import { useCardStore } from "@/providers/card-store.provider";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import MediaQuery from "react-responsive";
import { z } from "zod";
import styles from "./select-card-form.module.css";

export const SelectCardForm = () => {
  const setStep = useCardStore((state) => state.setStep);
  const setAmount = useCardStore((state) => state.setAmount);
  const schema = z.object({
    amount: z.string().pipe(z.coerce.number().positive()),
  });
  type FormData = z.infer<typeof schema>;
  const controls = useForm<FormData>({
    mode: "onChange",
    resolver: zodResolver(schema),
  });
  const {
    handleSubmit,
    formState: { isValid },
  } = controls;

  const onSubmit = (data: FormData) => {
    setAmount(data.amount);
    setStep(CardSteps.SELECT_CARD_INFO);
  };

  return (
    <FormProvider {...controls}>
      <form id={styles.selectCardForm} onSubmit={handleSubmit(onSubmit)}>
        <p>¿Cuanto querés ingresar a la cuenta?</p>
        <div className={styles.input}>
          <Input
            fieldName="amount"
            type="text"
            placeholder="$0"
            size="normal"
            width="full"
          />
        </div>
        <MediaQuery minWidth={834}>
          <div className={styles.button}>
            <SubmitButton
              label="Continuar"
              color="primary"
              size="large"
              width="full"
              onSubmit={onSubmit}
              disabled={!isValid}
            />
          </div>
        </MediaQuery>
      </form>
      <MediaQuery maxWidth={834}>
        <div className={styles.buttonMobile}>
          <SubmitButton
            label="Continuar"
            color="primary"
            size="large"
            width="full"
            onSubmit={onSubmit}
            disabled={!isValid}
          />
        </div>
      </MediaQuery>
    </FormProvider>
  );
};
