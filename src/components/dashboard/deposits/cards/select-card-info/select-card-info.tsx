import { CardSteps } from "@/components/dashboard/deposits/cards/enum";
import { Button } from "@/components/shared/button/button";
import { Icon } from "@/components/shared/icons/icons";
import {
  useCreateAccountDeposits,
  useGetAccount,
} from "@/hooks/api-query-hook";
import { useCardStore } from "@/providers/card-store.provider";
import { format } from "@formkit/tempo";
import styles from "./select-card-info.module.css";

type SelectCardInfoProps = {
  isInfo: boolean;
};
export const SelectCardInfo = ({ isInfo }: SelectCardInfoProps) => {
  const { data: account } = useGetAccount();
  const { mutate, isPending } = useCreateAccountDeposits();

  const dated = useCardStore((state) => state.form.dated);
  const form = useCardStore((state) => state.form);
  const setStep = useCardStore((state) => state.setStep);
  const setDated = useCardStore((state) => state.setDated);

  const onConfirm = () => {
    setDated(new Date().toISOString());
    mutate(
      {
        account_id: form.card?.account_id!,
        depositRequest: {
          amount: form.amount,
          dated: dated!,
          destination: account?.cvu!,
          origin: account?.cvu!,
        },
      },
      {
        onSuccess: () => setStep(CardSteps.SELECT_CARD_VOUCHER),
      }
    );
  };

  return (
    <div className={styles.selectCardInfo}>
      <h3>Revisa que está todo bien</h3>
      <div>
        <div className={styles.transferTo}>
          <p className={styles.description}>
            {!isInfo
              ? "Vas a transferir"
              : format(dated!, { date: "full", time: "short" })}
          </p>
          {!isInfo && (
            <Icon
              icon="edit"
              color="primary"
              onClick={() => setStep(CardSteps.SELECT_CARD_FORM)}
            />
          )}
        </div>
        <p className={`${styles.value} ${isInfo ? styles.highlight : ""}`}>
          ${form.amount}
        </p>
      </div>
      <div>
        <p className={styles.description}>Para</p>
        <p className={`${styles.value} ${isInfo ? styles.highlight : ""}`}>
          Cuenta propia
        </p>
      </div>
      <div>
        <p className={styles.description}>Bank</p>
        <p className={`${styles.value} ${isInfo ? styles.highlight : ""}`}>
          CVU {account?.cvu}
        </p>
      </div>
      {!isInfo && (
        <div className={styles.action}>
          <div className={styles.button}>
            <Button
              type="button"
              color="primary"
              size="large"
              width="full"
              onClick={onConfirm}
              disabled={isPending}
            >
              Continuar
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
