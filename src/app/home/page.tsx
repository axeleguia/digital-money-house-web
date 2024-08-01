import styles from "./home.module.css";
import { CardInfoContainer } from "./components/card-info-container/card-info-container";

const HomePage = () => {
  return (
    <>
      <section className={styles.landing}>
        <div className={styles.banner}>
          <h1>De ahora en adelante, hacés más con tu dinero</h1>
          <hr />
          <h2>
            Tu nueva <b>billetera virtual</b>
          </h2>
        </div>
        <CardInfoContainer />
      </section>
    </>
  );
};

export default HomePage;
