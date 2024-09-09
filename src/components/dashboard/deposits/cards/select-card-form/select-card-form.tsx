import { CardSteps } from "@/components/dashboard/deposits/cards/enum";
import { Button } from "@/components/shared/button/button";
import { Input } from "@/components/shared/input/input";
import useMediaQuery from "@/hooks/media-query";
import { useCardStore } from "@/providers/card-store.provider";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import styles from "./select-card-form.module.css";
import { Card } from "@/components/shared/card/card";

export const SelectCardForm = () => {
  const isMobile = useMediaQuery("(max-width: 834px)");
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
      <Card color="background">
        <form
          className={styles.selectCardForm}
          onSubmit={handleSubmit(onSubmit)}
        >
          <p>¿Cuanto querés ingresar a la cuenta?</p>
          <div className={styles.input}>
            <Input
              fieldName="amount"
              type="number"
              placeholder="0"
              size="normal"
              width="full"
              icon="money"
              iconColor="gray"
            />
          </div>
          {!isMobile && (
            <div className={styles.button}>
              <Button
                type="submit"
                color="primary"
                size="large"
                width="full"
                onSubmit={onSubmit}
                disabled={!isValid}
              >
                Continuar
              </Button>
            </div>
          )}
        </form>
        {isMobile && (
          <div className={styles.buttonMobile}>
            <Button
              type="submit"
              color="primary"
              size="large"
              width="full"
              onSubmit={onSubmit}
              disabled={!isValid}
            >
              Continuar
            </Button>
          </div>
        )}
      </Card>
    </FormProvider>
  );
};
