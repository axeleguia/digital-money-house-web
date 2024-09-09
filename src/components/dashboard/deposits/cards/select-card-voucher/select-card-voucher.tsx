import { SelectCardInfo } from "@/components/dashboard/deposits/cards/select-card-info/select-card-info";
import { Icon } from "@/components/shared/icons/icons";
import { SelectCardOptions } from "../select-card-options/select-card-options";
import styles from "./select-card-voucher.module.css";

export const SelectCardVoucher = () => {
  return (
    <>
      <div className={styles.message}>
        <Icon icon="success" color="black" />
        <h3>Ya cargamos el dinero a tu cuenta</h3>
      </div>
      <div>
        <SelectCardInfo isInfo={true} />
        <SelectCardOptions />
      </div>
    </>
  );
};
