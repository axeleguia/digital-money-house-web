import styles from "./button.module.css";

type ButtonProps = {
  label: string;
  color?: "primary" | "secondary" | "tertiary" | "background";
  size?: "small" | "medium" | "large";
  width?: "full";
  icon?: boolean;
  onClick?: () => void;
};

export const Button = ({
  label,
  color = undefined,
  size = undefined,
  icon = false,
  width,
  onClick,
}: ButtonProps) => {
  const cssSize: any = {
    small: styles.small,
    medium: styles.medium,
    large: styles.large,
    undefined: "",
  };
  const cssColor: any = {
    primary: styles.primary,
    secondary: styles.secondary,
    tertiary: styles.tertiary,
    background: styles.background,
    undefined: "",
  };
  const cssWidth: any = {
    full: styles.full,
    undefined: "",
  };
  return (
    <button
      className={`
        ${styles.button}
        ${cssSize[size!]}
        ${cssColor[color!]}
        ${cssWidth[width!]}
      `}
      onClick={onClick}
    >
      {label}
      {icon && <img src="/arrow.svg" alt="Arrow Icon" />}
    </button>
  );
};
