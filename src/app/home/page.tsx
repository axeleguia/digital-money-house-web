import styles from "./home.module.css";
import { CardInfoContainer } from "./components/card-info-container/card-info-container";

const HomePage = () => {
  return (
    <>
      <div className={styles.banner}>
        <div className={styles.bannerContainer}>
          <div className={styles.bannerTitle}>
            De ahora en adelante, hacés más con tu dinero
          </div>
          <div className={styles.bannerSubtitle}>
            Tu nueva <b>billetera virtual</b>
          </div>
        </div>
        <CardInfoContainer />
      </div>
    </>
  );
};

export default HomePage;
