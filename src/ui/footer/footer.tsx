import styles from "./footer.module.css";

type FooterProps = {
  isLoggedIn: boolean;
};

export const Footer = ({ isLoggedIn }: FooterProps) => {
  return (
    <footer id={styles.footer}>
      <div
        className={
          isLoggedIn
            ? styles.copyrightAuthenticated
            : styles.copyrightNoAuthenticated
        }
      >
        © 2022 Digital Money House
      </div>
    </footer>
  );
};
