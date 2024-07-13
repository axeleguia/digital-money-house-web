import { CardInfo, CardInfoData } from "../CardInfo/CardInfo";
import styles from "./CardInfoContainer.module.css";

export const CardInfoContainer = () => {
  const cardInfoData: CardInfoData[] = [
    {
      title: "Transferí dinero ",
      description:
        "Desde Digital Money House vas a poder transferir dinero a otras cuentas, asi como también recibir transferencias y nuclear tu capital en nuestra billetera virtual",
    },
    {
      title: "Pago de servicios",
      description:
        "Pagá mensualmente los servicios en 3 simples clicks. Facil, rápido y conveniente. Olvidate de las facturas en papel",
    },
  ];

  return (
    <div className={styles.cardInfoContainer}>
      <div className={styles.cardInfoList}>
        {cardInfoData.map((item) => (
          <CardInfo key={item.title} data={item} />
        ))}
      </div>
      <div className={styles.ribbon}></div>
    </div>
  );
};
