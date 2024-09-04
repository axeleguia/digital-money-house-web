import styles from "./button.module.css";

type ButtonProps = {
  label: string;
  color?: "primary" | "secondary" | "tertiary" | "background" | "gray";
  size?: "small" | "medium" | "large" | "extralarge";
  width?: "full" | "default";
  onClick?: () => void;
  loading?: boolean;
  disabled?: boolean;
};

export const Button = ({
  label,
  color = undefined,
  size = undefined,
  width = "default",
  onClick,
  loading = false,
  disabled,
}: ButtonProps) => {
  const cssSize: any = {
    small: styles.small,
    medium: styles.medium,
    large: styles.large,
    extralarge: styles.extralarge,
    undefined: "",
  };
  const cssColor: any = {
    primary: styles.primary,
    secondary: styles.secondary,
    tertiary: styles.tertiary,
    background: styles.background,
    gray: styles.gray,
    undefined: "",
  };
  const cssWidth: any = {
    full: styles.full,
    default: "",
  };
  return (
    <button
      type="button"
      className={`
        ${styles.button}
        ${cssSize[size!]}
        ${cssColor[color!]}
        ${cssWidth[width!]}
        ${disabled ? styles.disabled : ""}
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
      {loading && <img src="/spinner.svg" alt="Loading" />}
    </button>
  );
};
