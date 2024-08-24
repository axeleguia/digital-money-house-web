import styles from "./list.module.css";

type ListProps = {
  title?: string;
  children: React.ReactNode;
};

export const List = ({ title, children }: ListProps) => {
  return (
    <div className={styles.list}>
      {title && <h4>{title}</h4>}
      {children}
    </div>
  );
};
