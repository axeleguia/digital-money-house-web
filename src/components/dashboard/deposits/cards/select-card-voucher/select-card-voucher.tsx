import { Button } from "@/components/shared/button/button";
import { Icon } from "@/components/shared/icons/icons";
import { useCardStore } from "@/providers/card-store.provider";
import { toast } from "sonner";
import { CardSteps } from "../enum";
import { SelectCardInfo } from "../select-card-info/select-card-info";
import styles from "./select-card-voucher.module.css";

export const SelectCardVoucher = () => {
  const setStep = useCardStore((state) => state.setStep);
  const onDownload = () => {
    toast.message("Descargando comprobante ...", {
      description: "Es mentira aún no se implementa esta funcionalidad :)",
    });
  };
  return (
    <>
      <div className={styles.message}>
        <Icon icon="success" color="black" />
        <h3>Ya cargamos el dinero a tu cuenta</h3>
      </div>
      <div>
        <SelectCardInfo isInfo={true} />
        <div className={styles.options}>
          <div>
            <Button
              label="Ir al inicio"
              color="gray"
              size="large"
              width="full"
              onClick={() => setStep(CardSteps.SELECT_CARD_LIST)}
            />
            <Button
              label="Descargar comprobante"
              color="primary"
              size="large"
              width="full"
              onClick={onDownload}
            />
          </div>
        </div>
      </div>
    </>
  );
};
