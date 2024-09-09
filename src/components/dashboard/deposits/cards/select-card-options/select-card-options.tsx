import { Button } from "@/components/shared/button/button";
import { toast } from "sonner";
import styles from "./select-card-options.module.css";

const onDownload = () => {
  toast.message("Descargando comprobante ...", {
    description: "Es mentira aún no se implementa esta funcionalidad :)",
  });
};

export const SelectCardOptions = () => {
  return (
    <div className={styles.selectCardOptions}>
      <div>
        <Button
          type="link"
          color="gray"
          size="large"
          width="full"
          href={"/dashboard"}
        >
          Ir al inicio
        </Button>
        <Button
          type="button"
          color="primary"
          size="large"
          width="full"
          onClick={onDownload}
        >
          Descargar comprobante
        </Button>
      </div>
    </div>
  );
};
