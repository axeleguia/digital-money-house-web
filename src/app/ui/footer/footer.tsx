import styles from "./footer.module.css";
type FooterProps = {
  isLoggedIn: boolean;
};
export const Footer = ({ isLoggedIn }: FooterProps) => {
  return (
    <footer className={styles.footer}>
      <div
        className={`${styles.copyright} ${isLoggedIn ? styles.copyrightAuthenticated : styles.copyrightNoAuthenticated}`}
      >
        © 2022 Digital Money House
      </div>
    </footer>
  );
};
